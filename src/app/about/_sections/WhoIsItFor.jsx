"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { SITE_CONFIG } from "@/lib/site-config";
import { Pill } from "./_shared";

const STARTUP_POINTS = [
  "Gap assessment surfaced in 48 hours",
  "Pre-built policy templates",
  "Dedicated compliance expert",
  "SOC 2 Type I or Type II",
];

const SCALEUP_POINTS = [
  "Nightly automated test runs",
  "Evidence auto-collected",
  "Instant drift alerts",
  "Streamlined annual re-certification",
];

export function WhoIsItFor() {
  return (
    <section className="py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-14">
          <Pill>Who Uses Secov</Pill>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-primary tracking-tight mb-4"
          >
            Built for security teams, CTOs, and engineers
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-500 leading-relaxed"
          >
            Secov serves startups and mid-sized companies who need compliance
            certification without a dedicated compliance team.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Startups — dark card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden bg-primary border border-white/8 p-10"
          >
            <span className="inline-block text-[10px] font-bold uppercase tracking-[0.18em] text-white/40 border border-white/12 px-2.5 py-1 rounded mb-7">
              For Startups
            </span>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
              Close your first enterprise deal
            </h3>
            <p className="text-white/50 leading-relaxed mb-8 text-sm">
              A Fortune 500 prospect just asked for your SOC 2 report. Secov
              gets you from zero to audit-ready in under 21 days — structured
              roadmap, pre-built policy templates, and a compliance expert in
              your corner.
            </p>
            <ul className="space-y-3 mb-10">
              {STARTUP_POINTS.map((pt) => (
                <li key={pt} className="flex items-center gap-3 text-sm text-white/60">
                  <CheckCircle2 className="w-4 h-4 text-white/30 shrink-0" />
                  {pt}
                </li>
              ))}
            </ul>
            <Link
              href={SITE_CONFIG.demoUrl}
              className="group inline-flex items-center gap-2 text-white font-bold text-sm hover:text-white/70 transition-colors"
            >
              Start free
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </motion.div>

          {/* Scale-ups — light card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="rounded-2xl bg-slate-50 border border-slate-200 p-10"
          >
            <span className="inline-block text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400 border border-slate-200 px-2.5 py-1 rounded mb-7">
              For Scale-ups
            </span>
            <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4 leading-tight">
              Maintain compliance as you grow
            </h3>
            <p className="text-slate-500 leading-relaxed mb-8 text-sm">
              Already certified? Secov monitors your 40+ integrations 24/7,
              collects evidence continuously, and sends instant alerts the moment
              a control drifts out of compliance.
            </p>
            <ul className="space-y-3 mb-10">
              {SCALEUP_POINTS.map((pt) => (
                <li key={pt} className="flex items-center gap-3 text-sm text-slate-600">
                  <CheckCircle2 className="w-4 h-4 text-slate-400 shrink-0" />
                  {pt}
                </li>
              ))}
            </ul>
            <Link
              href={SITE_CONFIG.demoUrl}
              className="group inline-flex items-center gap-2 text-primary font-bold text-sm hover:text-slate-500 transition-colors"
            >
              See how it works
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
