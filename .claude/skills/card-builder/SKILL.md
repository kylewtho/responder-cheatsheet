---
name: card-builder
description: Convert one ResQCard topic's plain-markdown content into a fully polished, individually art-directed skill-card page, using the site's four-stage design pipeline (finesse-ui design, taste-skill minimalist-ui refine, impeccable audit, emilkowalski/skills fix). Use when adding a new topic to content/topics/*.md or when an existing topic should get bespoke visual treatment beyond the generic SkillCard template. Do not use to redesign the shell (home page, search, nav, AppShell/DetailHeader/Panel, design tokens) — those stay locked across all topics.
---

# CARD_BUILDER

ResQCard's home page and the generic `SkillCard` template (`src/components/SkillCard.tsx`, styled via `.prose-skill` in `src/app/globals.css`) render every topic in `content/topics/*.md` identically. That's deliberate for the initial build — one consistent shell everyone gets. This skill is how a **single topic** later earns its own bespoke treatment (a distinct micro-layout, a topic-specific visual motif, richer content structure) without forking the shell or breaking consistency for every other card.

## Scope

**In scope:** the content area of one topic's page — how its markdown body renders, its icon, its accent touches within the shared token system, any topic-specific layout (e.g. Vitals' table vs. a mnemonic's list) built as a small dedicated component if the generic `SkillCard` genuinely can't express it well.

**Out of scope — never touch these for a single-topic pass:**
- `src/components/AppShell.tsx`, `DetailHeader.tsx`, `Panel.tsx`, `TopicCard.tsx`, `SearchBox.tsx`, `TopicBrowser.tsx` — the shared shell every topic runs through.
- Design tokens in `src/app/globals.css` (`--color-primary`, `--accent`, `--radius-*`, the Geist/Instrument Serif/IBM Plex Mono font stack, the type scale). These are the site's identity, locked across all topics.
- `src/lib/content.ts` (the markdown pipeline) and the PWA/offline wiring in `next.config.ts` / `src/app/sw.ts`.

If a change would improve the shell itself (not just one topic), that's a separate, deliberate decision for the person driving the session — raise it, don't fold it into a single-card pass.

## Inputs

- The topic's slug and its `content/topics/<slug>.md` file (frontmatter: `title`, `slug`, `summary`, `aliases`; body: markdown).
- `src/lib/icons.ts` — add or change the topic's Lucide icon here if needed (content stays presentation-free; icons are keyed by slug in code, not in markdown).

## The four-stage pipeline, scoped to one card

1. **Design (finesse-ui)** — `.claude/skills/finesse-ui/SKILL.md`. This is a single-element/component-scoped job, not a new page: read `references/component-scope.md` first — it routes a single-card request away from the full page-apparatus flow (no new skeleton, no hero engine, no rotation memory) and toward shipping the component well: all its states, not a half-built one-off. Register stays **product** (the site's whole register); don't reach for brand-page moves (grain, vignette, hero type) on one card.
2. **Refine (taste-skill, minimalist-ui)** — `.claude/skills/minimalist-ui/SKILL.md`. Apply its restraint rules (warm monochrome + the site's own accent, no heavy shadows, tight radius) to whatever new structure the design step introduced, so the bespoke card still reads as part of the same family, not a different product.
3. **Audit (impeccable)** — the `/impeccable` skill itself isn't installed (its bundle installer hits a known upstream signing bug, github.com/pbakaus/impeccable#479), but the detector CLI works standalone:
   ```bash
   npm run build && npm run start -- -p 3100 &
   CI=true IMPECCABLE_BROWSER=<path-to-a-chromium-binary> \
     npx impeccable detect --viewport 390x844 http://localhost:3100/<slug>/
   ```
   `CI=true` is required — it's what makes the CLI pass `--no-sandbox` to the browser it launches (see `docs/CLI-CONTRACT.md` in the impeccable repo). Treat every primary finding as something to fix or consciously accept with a stated reason (see the reasoning in this repo's own history: the `cream-palette` finding was accepted because the site's warm background is `color-mix()`-derived from `--accent`, not a copy-pasted default; a `layout-transition: height` finding traced to Sonner's internal toast-stacking code, not app code, and was left alone).
4. **Fix (emilkowalski/skills)** — `.claude/skills/emil-design-eng/SKILL.md` and `apple-design/SKILL.md`, already installed. Resolve whatever the audit flagged using their concrete rules: custom easing curves (`--ease-out`/`--ease-in-out`, already defined), `:active { transform: scale(0.97–0.98) }` press feedback, transform/opacity-only animation, popovers/menus anchored to their trigger, `prefers-reduced-motion` handled (the site already has a global reduced-motion override — extend it, don't duplicate it).

## Verification

- `npm run lint && npm run build` clean.
- The topic still renders through `generateStaticParams` in `src/app/[slug]/page.tsx` — no route changes needed, content-driven routing already covers any slug in `content/topics/`.
- Serwist precaching is automatic: `next.config.ts` derives `additionalPrecacheEntries` from `getAllTopics()`, so a new or changed topic is covered without touching the service worker config.
- Screenshot the topic at phone width, light and dark, before calling it done.
