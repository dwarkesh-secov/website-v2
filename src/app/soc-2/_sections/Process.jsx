"use client";

import { motion } from "framer-motion";
import { Search, Map, Settings2, MonitorCheck, FileCheck2, Trophy } from "lucide-react";
import { Pill } from "./_shared";

const STEPS = [
  {
    num: "01",
    icon: Search,
    title: "Gap Assessment",
    desc: "Identify gaps in your current security posture, processes, and documentation through comprehensive analysis.",
    duration: "48 hours",
  },
  {
    num: "02",
    icon: Map,
    title: "Remediation Planning",
    desc: "Create a tailored roadmap to fix issues and align with SOC 2 requirements, prioritizing critical security controls.",
    duration: "1–2 weeks",
  },
  {
    num: "03",
    icon: Settings2,
    title: "Policy & Control Implementation",
    desc: "Develop and implement the required security policies, controls, and procedures tailored to your organization.",
    duration: "2–4 weeks",
  },
  {
    num: "04",
    icon: MonitorCheck,
    title: "Continuous Monitoring",
    desc: "147+ automated tests track and report compliance in real-time, keeping controls passing around the clock.",
    duration: "Ongoing",
  },
  {
    num: "05",
    icon: FileCheck2,
    title: "Audit Preparation & Support",
    desc: "Get audit-ready with mock audits, evidence collection, and direct collaboration with auditors throughout.",
    duration: "2–3 weeks",
  },
  {
    num: "06",
    icon: Trophy,
    title: "Certification & Beyond",
    desc: "Receive your SOC 2 report and keep your certificate current with automated continuous compliance monitoring.",
    duration: "Certified",
  },
];

export function Process() {
  return (
    <section id="process" className="py-24 bg-primary border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-14">
          <Pill dark>Our Process</Pill>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4"
          >
            From zero to certified — step by step
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-white/50 leading-relaxed"
          >
            We make SOC 2 compliance simple and transparent. Our experts guide
            you at every step.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/8 rounded-2xl overflow-hidden border border-white/10">
          {STEPS.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-primary p-8 hover:bg-white/4 transition-colors group"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-10 h-10 rounded-xl bg-white/8 border border-white/12 flex items-center justify-center group-hover:bg-white/12 transition-colors">
                    <Icon className="w-5 h-5 text-white/60" />
                  </div>
                  <span className="text-3xl font-black text-white/6 group-hover:text-white/10 transition-colors tabular-nums">
                    {step.num}
                  </span>
                </div>
                <h3 className="text-white font-bold text-base mb-2">{step.title}</h3>
                <p className="text-white/45 text-sm leading-relaxed mb-4">{step.desc}</p>
                <span className="text-[11px] font-bold text-white/35 border border-white/12 px-2.5 py-1 rounded">
                  {step.duration}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
