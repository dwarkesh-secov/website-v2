"use client";

import Script from "next/script";
import { motion } from "framer-motion";
import { SITE_CONFIG } from "@/lib/site-config";
import { GlowingDotGrid } from "@/components/ui/GlowingDotGrid";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] bg-primary pt-32 pb-24 overflow-hidden flex items-center">
      <GlowingDotGrid />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/35 mb-6"
          >
            Talk to our team
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.08] mb-6"
          >
            Talk to our security experts
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="text-lg text-white/55 leading-relaxed max-w-2xl mx-auto"
          >
            Share your compliance goals and current approach, and we&apos;ll
            walk you through how Secov can simplify audits, evidence collection,
            and ongoing security operations.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.24 }}
          className="grid gap-10 lg:grid-cols-[1.2fr,0.9fr] items-start"
        >
          <div>
            <div
              className="calendly-inline-widget rounded-2xl overflow-hidden border border-white/10 shadow-lg bg-white relative z-20"
              data-url={`${SITE_CONFIG.demoUrl}?hide_gdpr_banner=1&background_color=ffffff&text_color=020617&primary_color=0f172a`}
              style={{ height: "820px" }}
            />
            <Script
              src="https://assets.calendly.com/assets/external/widget.js"
              strategy="lazyOnload"
            />
          </div>

          <aside className="space-y-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 sm:p-8">
            <div>
              <h2 className="text-lg font-semibold text-white mb-1">
                What we&apos;ll cover
              </h2>
              <p className="text-sm text-white/60">
                A 30–45 minute conversation focused on your environment and
                compliance roadmap.
              </p>
            </div>
            <ul className="space-y-4 text-sm text-white/70">
              <li className="flex gap-3 items-start">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                <span>
                  Your current frameworks (SOC 2, etc.) and audit timelines
                </span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                <span>
                  How you collect evidence today across tools and teams
                </span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                <span>
                  A tailored walkthrough of Secov&apos;s platform for your use
                  case
                </span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                <span>
                  Next steps: proofs of concept, integrations, and rollout
                </span>
              </li>
            </ul>
            <div className="pt-6 border-t border-white/10 mt-6">
              <p className="text-xs text-white/40">
                Prefer email instead? Reach us at{" "}
                <a
                  href="mailto:hello@secov.com"
                  className="font-medium text-white/70 hover:text-white transition-colors"
                >
                  hello@secov.com
                </a>
                .
              </p>
            </div>
          </aside>
        </motion.div>
      </div>
    </section>
  );
}
