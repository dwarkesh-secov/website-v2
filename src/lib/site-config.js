/**
 * Site-wide configuration for URLs and external links.
 * Centralize here for easy updates across the codebase.
 */
export const SITE_CONFIG = {
  appUrl: process.env.NEXT_PUBLIC_APP_URL || "https://app.secov.com",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://secov.com",
  demoUrl:
    process.env.NEXT_PUBLIC_DEMO_URL ||
    "https://calendly.com/sec-ov/secov-demo",
  logoPath: "/assets/svg/secov-logo-full-blue.svg",
};
