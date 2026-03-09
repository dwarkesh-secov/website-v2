"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SITE_CONFIG } from "@/lib/site-config";

const STATS = [
  { value: "500+", label: "Companies Certified" },
  { value: "40+",  label: "Tool Integrations" },
  { value: "147+", label: "Automated Tests" },
  { value: "50+",  label: "Frameworks" },
];

export function Hero() {
  return (
    <section className="relative min-h-screen bg-primary flex items-center overflow-hidden">
      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-40">
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/35 mb-7"
          >
            About Secov
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="text-5xl md:text-[4.5rem] font-extrabold text-white tracking-tight leading-[1.06] mb-6"
          >
            Compliance that <span className="text-white/45">runs itself.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="text-lg text-white/55 leading-relaxed mb-10 max-w-xl"
          >
            Secov is a multi-tenant Security &amp; Compliance SaaS — a direct
            alternative to Vanta, Drata, and Secureframe. 40+ integrations,
            147+ automated checks, and 50+ frameworks in one platform.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.24 }}
            className="flex flex-col sm:flex-row gap-3 mb-16"
          >
            <Link
              href={SITE_CONFIG.demoUrl}
              className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-white text-primary font-bold text-sm hover:bg-slate-100 transition-colors"
            >
              Book a Free Consultation
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <Link
              href="#what-we-do"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg border border-white/20 text-white/70 font-semibold text-sm hover:border-white/40 hover:text-white transition-colors"
            >
              Explore the platform
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/10 rounded-xl overflow-hidden border border-white/10"
          >
            {STATS.map((s) => (
              <div key={s.label} className="bg-primary px-4 py-5 text-center">
                <div className="text-2xl font-extrabold text-white tabular-nums">{s.value}</div>
                <div className="text-xs text-white/35 mt-1 leading-tight">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
