import type { NextConfig } from "next";
import withSerwistInit from "@serwist/next";
import { getAllTopics } from "./src/lib/content";

const nextConfig: NextConfig = {
  assetPrefix: "/responder",
  trailingSlash: true,
};

// Precache the app shell plus every topic route so the core content
// works fully offline, even on a first launch with no signal. Routes are
// derived from content/topics/*.md so adding a topic automatically extends
// the offline set. The revision timestamp busts the cache on every deploy
// so a rebuilt page (corrected content, fixed data) isn't stuck serving a
// stale offline copy.
const buildRevision = String(Date.now());
const OFFLINE_ROUTES = ["/", ...getAllTopics().map((topic) => `/${topic.slug}/`)];

const withSerwist = withSerwistInit({
  swSrc: "src/app/sw.ts",
  swDest: "public/sw.js",
  additionalPrecacheEntries: OFFLINE_ROUTES.map((url) => ({ url, revision: buildRevision })),
});

export default withSerwist(nextConfig);
