import type { NextConfig } from "next";
import withSerwistInit from "@serwist/next";

const nextConfig: NextConfig = {
  assetPrefix: "/responder",
  trailingSlash: true,
};

// Precache the app shell plus every mnemonic route so the core content
// works fully offline, even on a first launch with no signal. The
// revision timestamp busts the cache on every deploy so a rebuilt page
// (corrected content, fixed data) isn't stuck serving a stale offline copy.
const buildRevision = String(Date.now());
const OFFLINE_ROUTES = ["/", "/drsabcde/", "/march/", "/gcs/", "/imist/", "/methane/", "/triage/", "/vitals/"];

const withSerwist = withSerwistInit({
  swSrc: "src/app/sw.ts",
  swDest: "public/sw.js",
  additionalPrecacheEntries: OFFLINE_ROUTES.map((url) => ({ url, revision: buildRevision })),
});

export default withSerwist(nextConfig);
