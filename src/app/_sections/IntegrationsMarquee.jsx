"use client";

import { motion } from "framer-motion";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

/**
 * All 30 active integrations — logos sourced directly from
 * https://cdn.secov.com/vendor-logos/ (backend seed.ts logoUrl values)
 */
const ALL_INTEGRATIONS = [
  // ── Cloud & Infrastructure ──────────────────────────────────────────────
  {
    name: "AWS",
    logoUrl: "https://cdn.secov.com/vendor-logos/aws.svg",
    bg: "bg-amber-50",
    border: "border-amber-200",
    category: "Cloud & Infrastructure",
  },
  {
    name: "Microsoft Azure",
    logoUrl: "https://cdn.secov.com/vendor-logos/azure.svg",
    bg: "bg-blue-50",
    border: "border-blue-200",
    category: "Cloud & Infrastructure",
  },
  {
    name: "Google Cloud",
    logoUrl: "https://cdn.secov.com/vendor-logos/google-cloud.svg",
    bg: "bg-indigo-50",
    border: "border-indigo-200",
    category: "Cloud & Infrastructure",
  },
  {
    name: "DigitalOcean",
    logoUrl: "https://cdn.secov.com/vendor-logos/digital-ocean1.svg",
    bg: "bg-sky-50",
    border: "border-sky-200",
    category: "Cloud & Infrastructure",
  },
  {
    name: "Heroku",
    logoUrl: "https://cdn.secov.com/vendor-logos/heroku1.svg",
    bg: "bg-purple-50",
    border: "border-purple-200",
    category: "Cloud & Infrastructure",
  },
  {
    name: "Vercel",
    logoUrl: "https://cdn.secov.com/vendor-logos/vercel1.svg",
    bg: "bg-slate-100",
    border: "border-slate-300",
    category: "Cloud & Infrastructure",
  },
  {
    name: "Render",
    logoUrl: "https://cdn.secov.com/vendor-logos/render1.svg",
    bg: "bg-teal-50",
    border: "border-teal-200",
    category: "Cloud & Infrastructure",
  },

  // ── Identity & Access ───────────────────────────────────────────────────
  {
    name: "Okta",
    logoUrl: "https://cdn.secov.com/vendor-logos/okta1.svg",
    bg: "bg-sky-50",
    border: "border-sky-200",
    category: "Identity & Access",
  },
  {
    name: "Google Workspace",
    logoUrl: "https://cdn.secov.com/vendor-logos/google-workspace1.svg",
    bg: "bg-blue-50",
    border: "border-blue-200",
    category: "Identity & Access",
  },
  {
    name: "Microsoft 365",
    logoUrl: "https://cdn.secov.com/vendor-logos/office-3651.svg",
    bg: "bg-orange-50",
    border: "border-orange-200",
    category: "Identity & Access",
  },
  {
    name: "JumpCloud",
    logoUrl: "https://cdn.secov.com/vendor-logos/jumpcloud1.svg",
    bg: "bg-blue-50",
    border: "border-blue-200",
    category: "Identity & Access",
  },

  // ── Code & DevOps ───────────────────────────────────────────────────────
  {
    name: "GitHub",
    logoUrl: "https://cdn.secov.com/vendor-logos/github.svg",
    bg: "bg-slate-100",
    border: "border-slate-300",
    category: "Code & DevOps",
  },
  {
    name: "GitLab",
    logoUrl: "https://cdn.secov.com/vendor-logos/gitlab1.svg",
    bg: "bg-orange-50",
    border: "border-orange-200",
    category: "Code & DevOps",
  },
  {
    name: "Bitbucket",
    logoUrl: "https://cdn.secov.com/vendor-logos/bitbucket1.svg",
    bg: "bg-blue-50",
    border: "border-blue-200",
    category: "Code & DevOps",
  },
  {
    name: "Jira",
    logoUrl: "https://cdn.secov.com/vendor-logos/jira1.svg",
    bg: "bg-blue-50",
    border: "border-blue-200",
    category: "Code & DevOps",
  },
  {
    name: "Linear",
    logoUrl: "https://cdn.secov.com/vendor-logos/linear1.svg",
    bg: "bg-indigo-50",
    border: "border-indigo-200",
    category: "Code & DevOps",
  },
  {
    name: "ClickUp",
    logoUrl: "https://cdn.secov.com/vendor-logos/clickup.svg",
    bg: "bg-violet-50",
    border: "border-violet-200",
    category: "Code & DevOps",
  },
  {
    name: "Asana",
    logoUrl: "https://cdn.secov.com/vendor-logos/asana.svg",
    bg: "bg-rose-50",
    border: "border-rose-200",
    category: "Code & DevOps",
  },
  {
    name: "Trello",
    logoUrl: "https://cdn.secov.com/vendor-logos/trello1.svg",
    bg: "bg-blue-50",
    border: "border-blue-200",
    category: "Code & DevOps",
  },

  // ── Monitoring & Security ───────────────────────────────────────────────
  {
    name: "Datadog",
    logoUrl: "https://cdn.secov.com/vendor-logos/datadog1.svg",
    bg: "bg-violet-50",
    border: "border-violet-200",
    category: "Monitoring & Security",
  },
  {
    name: "Cloudflare",
    logoUrl: "https://cdn.secov.com/vendor-logos/cloudflare1.svg",
    bg: "bg-amber-50",
    border: "border-amber-200",
    category: "Monitoring & Security",
  },
  {
    name: "LaunchDarkly",
    logoUrl: "https://cdn.secov.com/vendor-logos/launchdarkly1.svg",
    bg: "bg-indigo-50",
    border: "border-indigo-200",
    category: "Monitoring & Security",
  },
  {
    name: "KnowBe4",
    logoUrl: "https://cdn.secov.com/vendor-logos/know-be-four.svg",
    bg: "bg-orange-50",
    border: "border-orange-200",
    category: "Monitoring & Security",
  },
  {
    name: "WatchGuard",
    logoUrl: "https://cdn.secov.com/vendor-logos/watchgaurd1.svg",
    bg: "bg-red-50",
    border: "border-red-200",
    category: "Monitoring & Security",
  },

  // ── Data & Collaboration ────────────────────────────────────────────────
  {
    name: "MongoDB Atlas",
    logoUrl: "https://cdn.secov.com/vendor-logos/mongodb1.svg",
    bg: "bg-emerald-50",
    border: "border-emerald-200",
    category: "Data & Collaboration",
  },
  {
    name: "Snowflake",
    logoUrl: "https://cdn.secov.com/vendor-logos/snowflake1.svg",
    bg: "bg-cyan-50",
    border: "border-cyan-200",
    category: "Data & Collaboration",
  },
  {
    name: "Supabase",
    logoUrl: "https://cdn.secov.com/vendor-logos/supabase1.svg",
    bg: "bg-emerald-50",
    border: "border-emerald-200",
    category: "Data & Collaboration",
  },
  {
    name: "Slack",
    logoUrl: "https://cdn.secov.com/vendor-logos/slack1.svg",
    bg: "bg-purple-50",
    border: "border-purple-200",
    category: "Data & Collaboration",
  },
  {
    name: "Zoom",
    logoUrl: "https://cdn.secov.com/vendor-logos/zoom1.svg",
    bg: "bg-blue-50",
    border: "border-blue-200",
    category: "Data & Collaboration",
  },
  {
    name: "HubSpot",
    logoUrl: "https://cdn.secov.com/vendor-logos/hubspot1.svg",
    bg: "bg-orange-50",
    border: "border-orange-200",
    category: "Data & Collaboration",
  },
];

const CATEGORIES = [
  "Cloud & Infrastructure",
  "Identity & Access",
  "Code & DevOps",
  "Monitoring & Security",
  "Data & Collaboration",
];

function IntegrationLogo({ item, size = "md" }) {
  const dim = size === "sm" ? "w-5 h-5" : "w-6 h-6";
  const abbr = item.name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 3)
    .toUpperCase();

  return (
    <img
      src={item.logoUrl}
      alt={`${item.name} logo`}
      width={size === "sm" ? 20 : 24}
      height={size === "sm" ? 20 : 24}
      className={`${dim} object-contain shrink-0`}
      loading="lazy"
      onError={(e) => {
        e.currentTarget.style.display = "none";
        const span = document.createElement("span");
        span.className = `${dim} rounded text-[8px] font-black text-white flex items-center justify-center shrink-0 bg-slate-400`;
        span.textContent = abbr;
        e.currentTarget.parentElement?.insertBefore(span, e.currentTarget);
      }}
    />
  );
}

const MARQUEE_ITEMS = ALL_INTEGRATIONS.map((item) => ({
  name: item.name,
  icon: (
    <div
      className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl border ${item.bg} ${item.border} whitespace-nowrap shadow-sm hover:shadow-md transition-shadow`}
    >
      <IntegrationLogo item={item} size="md" />
      <span className="text-sm font-semibold text-slate-700">{item.name}</span>
    </div>
  ),
}));

export function IntegrationsMarquee() {
  return (
    <section
      id="integrations"
      className="py-20 bg-white border-y border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/8 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-4"
          >
            30 Active Integrations
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-extrabold text-primary tracking-tight mb-4"
          >
            Works with the tools your team already uses
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed"
          >
            Secov connects to your cloud, identity, DevOps, and monitoring tools
            to automatically collect evidence and monitor controls — zero manual
            work.
          </motion.p>
        </div>

        {/* Dual-row infinite marquee */}
        <div className="space-y-3 mb-12">
          <InfiniteMovingCards
            items={MARQUEE_ITEMS}
            direction="right"
            speed="normal"
          />
          <InfiniteMovingCards
            items={[...MARQUEE_ITEMS].reverse()}
            direction="left"
            speed="slow"
          />
        </div>

        {/* Category grid — all 5 categories */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
        >
          {CATEGORIES.map((cat) => {
            const items = ALL_INTEGRATIONS.filter((i) => i.category === cat);
            return (
              <div
                key={cat}
                className="bg-slate-50 rounded-2xl border border-slate-200 p-4"
              >
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3 leading-tight">
                  {cat}
                </div>
                <div className="space-y-2">
                  {items.map((item) => (
                    <div
                      key={item.name}
                      className={`flex items-center gap-2 px-2.5 py-1.5 rounded-lg border ${item.bg} ${item.border} hover:shadow-sm transition-shadow`}
                    >
                      <IntegrationLogo item={item} size="sm" />
                      <span className="text-xs font-semibold text-slate-700 leading-tight">
                        {item.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </motion.div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-slate-500"
        >
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>
              <span className="font-bold text-primary">30 integrations</span>{" "}
              connected across 5 categories
            </span>
          </div>
          <span className="hidden sm:block text-slate-300">·</span>
          {/* <a
            href="#"
            className="font-semibold text-accent hover:underline underline-offset-2 transition-colors"
          >
            Don&apos;t see your tool? Request an integration →
          </a> */}
        </motion.div>
      </div>
    </section>
  );
}
