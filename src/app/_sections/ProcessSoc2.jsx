"use client";

import { motion } from "framer-motion";
import { Search, RefreshCw, Settings, Monitor, FileCheck, Shield } from "lucide-react";

const STEPS = [
  {
    number: "01", icon: Search,
    title: "Gap Assessment",
    description: "We analyze your current infrastructure, policies, and processes against all 64 SOC 2 Trust Service Criteria. You receive a detailed gap report within 48 hours.",
    duration: "1–2 days",
    deliverable: "Gap analysis report",
  },
  {
    number: "02", icon: RefreshCw,
    title: "Remediation Planning",
    description: "Your dedicated compliance expert builds a customized remediation roadmap — prioritized by audit risk so you fix the most critical gaps first.",
    duration: "2–3 days",
    deliverable: "Prioritized roadmap",
  },
  {
    number: "03", icon: Settings,
    title: "Policy & Control Setup",
    description: "We deploy pre-built, auditor-approved policy templates, configure your integrations, and implement all required security controls.",
    duration: "1–2 weeks",
    deliverable: "50+ policies deployed",
  },
  {
    number: "04", icon: Monitor,
    title: "Continuous Monitoring",
    description: "Secov connects to your cloud and tools to automatically test controls, collect evidence, and alert your team to any compliance drift — 24/7.",
    duration: "Ongoing",
    deliverable: "Automated evidence",
  },
  {
    number: "05", icon: FileCheck,
    title: "Audit Preparation",
    description: "We run a mock audit, gather all evidence packages, and coordinate directly with your auditor — so your actual audit is smooth and stress-free.",
    duration: "1 week",
    deliverable: "Audit-ready package",
  },
  {
    number: "06", icon: Shield,
    title: "Certification & Beyond",
    description: "Receive your SOC 2 report and share it with prospects, customers, and investors. Secov continues monitoring to keep you compliant year-round.",
    duration: "Ongoing",
    deliverable: "SOC 2 Type I or II report",
  },
];

export function ProcessSoc2() {
  return (
    <section id="process" className="py-24 bg-primary relative overflow-hidden">
      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-2xl mb-14">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/35 mb-4">How It Works</p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4"
          >
            From zero to SOC 2 certified in 6 straightforward steps
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-white/50 leading-relaxed"
          >
            We&apos;ve certified 500+ companies. Our process is battle-tested,
            transparent, and designed to get you to your certificate as fast as possible.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/8 rounded-2xl overflow-hidden border border-white/10">
          {STEPS.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="bg-primary p-7 hover:bg-white/4 transition-colors group"
              >
                <div className="flex items-start justify-between mb-5">
                  <div className="w-10 h-10 rounded-xl bg-white/8 border border-white/12 flex items-center justify-center group-hover:bg-white/12 transition-colors">
                    <Icon className="w-5 h-5 text-white/55" />
                  </div>
                  <span className="text-3xl font-black text-white/6 group-hover:text-white/10 transition-colors tabular-nums">
                    {step.number}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white mb-2">{step.title}</h3>
                <p className="text-white/45 text-sm leading-relaxed mb-5">{step.description}</p>

                <div className="flex items-center gap-4 pt-4 border-t border-white/8">
                  <div>
                    <div className="text-[9px] text-white/25 uppercase tracking-widest font-semibold mb-0.5">Timeline</div>
                    <div className="text-xs font-bold text-white/55">{step.duration}</div>
                  </div>
                  <div className="w-px h-7 bg-white/10" />
                  <div>
                    <div className="text-[9px] text-white/25 uppercase tracking-widest font-semibold mb-0.5">Deliverable</div>
                    <div className="text-xs font-bold text-white/55">{step.deliverable}</div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-10 text-center"
        >
          <p className="text-white/35 text-sm">
            Most companies achieve SOC 2 Type I in as few as{" "}
            <span className="text-white/70 font-bold">21 days</span> and Type II in{" "}
            <span className="text-white/70 font-bold">3–6 months</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
