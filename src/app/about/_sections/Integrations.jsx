"use client";

import { motion } from "framer-motion";

const GROUPS = [
  {
    category: "Cloud",
    items: [
      "AWS",
      "Azure",
      "Google Cloud",
      "DigitalOcean",
      "Vercel",
      "Render",
      "Cloudflare",
      "Heroku",
    ],
  },
  {
    category: "Identity / SSO",
    items: ["Okta", "JumpCloud", "1Password", "LastPass", "Dashlane"],
  },
  { category: "Version Control", items: ["GitHub", "GitLab", "Bitbucket"] },
  {
    category: "Project Mgmt",
    items: ["Jira", "Linear", "ClickUp", "Asana", "Trello", "HubSpot"],
  },
  { category: "Data / DB", items: ["Snowflake", "MongoDB Atlas", "Supabase"] },
  { category: "Monitoring", items: ["Datadog", "WatchGuard", "LaunchDarkly"] },
  {
    category: "Productivity",
    items: ["Slack", "Zoom", "Google Workspace", "Microsoft 365"],
  },
  { category: "Training / MDM", items: ["KnowBe4", "Fleet MDM"] },
];

export function Integrations() {
  return (
    <section className="py-28 bg-primary relative overflow-hidden bg-grid-white/[0.04]">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white/70 text-xs font-bold uppercase tracking-widest mb-5"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-white/70" />
            30+ Integrations
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-5"
          >
            Connects to your entire stack
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/55 leading-relaxed"
          >
            Every connected tool feeds real data into your compliance checks —
            automatically, every day.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {GROUPS.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/8 hover:border-white/20 transition-all"
            >
              <div className="text-xs font-bold text-accent uppercase tracking-widest mb-4">
                {group.category}
              </div>
              <div className="flex flex-wrap gap-1.5">
                {group.items.map((tool) => (
                  <span
                    key={tool}
                    className="px-2 py-0.5 rounded-md bg-white/8 border border-white/10 text-xs text-white/65 font-medium"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
