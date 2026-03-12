"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/site-config";
import { ArrowRight, CheckCircle2, Clock3 } from "lucide-react";
import { GlowingDotGrid } from "@/components/ui/GlowingDotGrid";

const TRUST_BADGES = [
  "SOC 2 Type II Ready",
  "Expert-Guided Compliance",
  "Audit-Ready in 21 Days",
  "500+ Companies Certified",
];

const DASHBOARD_CONTROLS = [
  { name: "Access Control Policy", category: "CC6.1", status: "Passed" },
  { name: "Encryption at Rest", category: "CC6.7", status: "Passed" },
  { name: "Incident Response Plan", category: "CC7.3", status: "Passed" },
];

const DASHBOARD_STATS = [
  { label: "Controls", value: "147/147", sub: "All Passing" },
  { label: "Audit Progress", value: "94%", sub: "+12% this week" },
  { label: "Evidence Items", value: "312", sub: "Auto-collected" },
  { label: "Days to Cert.", value: "21", sub: "70% faster avg." },
];

export function HeroSoc2() {
  return (
    <section className="relative overflow-hidden bg-primary w-full pt-28 pb-0">
      {/* Animated glowing dot grid */}
      <GlowingDotGrid />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/35 mb-7"
        >
          SOC 2 Compliance Platform
        </motion.p>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="text-5xl md:text-8xl font-extrabold text-white tracking-tight mb-6 max-w-5xl mx-auto leading-[1.08]"
        >
          Get SOC 2 Certified
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.16 }}
          className="text-lg text-white/55 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          Secov automates your entire SOC 2 journey — from gap assessment to
          audit-ready certification — with expert guidance every step of the
          way.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.24 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-12"
        >
          <Link
            href="/talk-to-us"
            className="group flex items-center gap-2 px-7 py-3.5 rounded-lg bg-white text-primary font-bold text-sm hover:bg-slate-100 transition-colors whitespace-nowrap"
          >
            Start Free Trial
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
          <Link
            href="/talk-to-us"
            className="flex items-center gap-2 px-7 py-3.5 rounded-lg border border-white/20 text-white/70 font-semibold text-sm hover:border-white/40 hover:text-white transition-colors whitespace-nowrap"
          >
            Book a Demo
          </Link>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 mb-20"
        >
          {TRUST_BADGES.map((text) => (
            <div
              key={text}
              className="flex items-center gap-2 text-white/40 text-sm"
            >
              <div className="w-1 h-1 rounded-full bg-white/30" />
              {text}
            </div>
          ))}
        </motion.div>

        {/* Dashboard mockup */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto max-w-5xl"
        >
          {/* Floating card — left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.9 }}
            className="absolute -left-6 top-10 hidden lg:block z-20 animate-float"
          >
            <div className="bg-white rounded-2xl shadow-xl p-4 w-52 border border-slate-100">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center">
                  <CheckCircle2 className="w-4 h-4 text-slate-600" />
                </div>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                  Controls
                </span>
              </div>
              <div className="text-2xl font-bold text-slate-900 mb-0.5">
                147 / 147
              </div>
              <div className="text-xs text-slate-500 font-medium">
                All controls passing
              </div>
            </div>
          </motion.div>

          {/* Floating card — right */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 1.0 }}
            className="absolute -right-6 top-10 hidden lg:block z-20 animate-float"
            style={{ animationDelay: "1s" }}
          >
            <div className="bg-white rounded-2xl shadow-xl p-4 w-52 border border-slate-100">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center">
                  <Clock3 className="w-4 h-4 text-slate-600" />
                </div>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                  Time Saved
                </span>
              </div>
              <div className="text-2xl font-bold text-slate-900 mb-0.5">
                70% faster
              </div>
              <div className="text-xs text-slate-500 font-medium">
                vs. traditional approach
              </div>
            </div>
          </motion.div>

          {/* Main dashboard window */}
          <div className="rounded-t-2xl border border-white/10 bg-slate-950/90 overflow-hidden">
            {/* Browser chrome */}
            <div className="flex items-center gap-2 px-5 py-3 border-b border-white/5 bg-slate-900/60">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-white/10" />
                <div className="w-3 h-3 rounded-full bg-white/10" />
                <div className="w-3 h-3 rounded-full bg-white/10" />
              </div>
              <div className="flex-1 mx-4">
                <div className="bg-slate-800/70 rounded-md h-7 flex items-center px-3 max-w-xs mx-auto">
                  <div className="w-2 h-2 rounded-full bg-slate-500 mr-2" />
                  <span className="text-slate-400 text-xs font-mono">
                    app.secov.com/dashboard
                  </span>
                </div>
              </div>
            </div>

            {/* Dashboard body */}
            <div className="flex h-[360px]">
              {/* Sidebar */}
              <div className="w-44 shrink-0 border-r border-white/5 p-4 hidden md:flex flex-col gap-1 bg-slate-900/40">
                <div className="text-[10px] font-semibold text-slate-500 uppercase tracking-widest px-2 mb-2">
                  Navigation
                </div>
                {[
                  { label: "Dashboard", active: true },
                  { label: "Controls", active: false },
                  { label: "Evidence", active: false },
                  { label: "Policies", active: false },
                  { label: "Vendors", active: false },
                  { label: "Audit Prep", active: false },
                  { label: "Reports", active: false },
                ].map((item) => (
                  <div
                    key={item.label}
                    className={`px-3 py-2 rounded-lg text-xs font-medium flex items-center gap-2.5 ${
                      item.active
                        ? "bg-white/10 text-white border border-white/10"
                        : "text-slate-500"
                    }`}
                  >
                    <div
                      className={`w-1.5 h-1.5 rounded-full ${item.active ? "bg-white/60" : "bg-slate-600"}`}
                    />
                    {item.label}
                  </div>
                ))}
              </div>

              {/* Main panel */}
              <div className="flex-1 p-5 flex flex-col gap-4 overflow-hidden">
                {/* Top stats */}
                <div className="grid grid-cols-4 gap-3">
                  {DASHBOARD_STATS.map((stat) => (
                    <div
                      key={stat.label}
                      className="bg-slate-800/60 rounded-xl p-3 border border-white/5"
                    >
                      <div className="text-xl font-bold text-white mb-0.5">
                        {stat.value}
                      </div>
                      <div className="text-[10px] text-slate-400 leading-tight mb-1">
                        {stat.label}
                      </div>
                      <div className="text-[9px] text-slate-500 font-medium">
                        {stat.sub}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Progress bar */}
                <div className="bg-slate-800/60 rounded-xl border border-white/5 p-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold text-white">
                      SOC 2 Type II Readiness
                    </span>
                    <span className="text-xs font-bold text-slate-300">
                      94% Complete
                    </span>
                  </div>
                  <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "94%" }}
                      transition={{
                        duration: 1.5,
                        delay: 1.2,
                        ease: "easeOut",
                      }}
                      className="h-full bg-white/50 rounded-full"
                    />
                  </div>
                </div>

                {/* Controls list */}
                <div className="flex-1 bg-slate-800/60 rounded-xl border border-white/5 overflow-hidden">
                  <div className="px-4 py-2.5 border-b border-white/5 flex items-center justify-between">
                    <span className="text-xs font-semibold text-white">
                      Security Controls
                    </span>
                    <span className="text-[10px] text-slate-300 font-bold bg-white/8 px-2 py-0.5 rounded-md">
                      All Passing
                    </span>
                  </div>
                  <div className="divide-y divide-white/5">
                    {DASHBOARD_CONTROLS.map((ctrl) => (
                      <div
                        key={ctrl.name}
                        className="flex items-center justify-between px-4 py-2.5"
                      >
                        <div className="flex items-center gap-3">
                          <CheckCircle2 className="w-4 h-4 text-slate-400 shrink-0" />
                          <div className="flex items-center gap-2">
                            <div className="text-[10px] text-slate-500">
                              {ctrl.category}
                            </div>
                            <div className="text-xs text-white font-medium">
                              {ctrl.name}
                            </div>
                          </div>
                        </div>
                        <span className="text-[10px] font-bold px-2.5 py-1 rounded bg-white/8 text-slate-300">
                          {ctrl.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
