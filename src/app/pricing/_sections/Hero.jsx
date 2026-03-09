"use client";

import { motion } from "framer-motion";
import { Users, Building2, Rocket } from "lucide-react";
import { GlowingDotGrid } from "@/components/ui/GlowingDotGrid";

const TRUST_ITEMS = [
  { icon: Rocket, label: "500+ companies certified" },
  { icon: Users, label: "No hidden fees" },
  { icon: Building2, label: "Cancel any time" },
];

export function Hero() {
  return (
    <section className="relative bg-primary pt-32 pb-20 overflow-hidden">
      <GlowingDotGrid />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/35 mb-6"
        >
          Pricing
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.08] mb-6"
        >
          Compliance, end-to-end.
          <br />
          <span className="text-white/55">Without enterprise pricing.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-lg text-white/50 leading-relaxed max-w-2xl mx-auto mb-12"
        >
          From your first SOC 2 Type I audit to enterprise-wide multi-framework
          compliance — pick the plan that fits where you are today.
        </motion.p>

        {/* Trust strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.18 }}
          className="flex flex-wrap items-center justify-center gap-6 sm:gap-10"
        >
          {TRUST_ITEMS.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-2 text-sm text-white/40"
            >
              <Icon className="w-4 h-4 shrink-0" />
              <span>{label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
