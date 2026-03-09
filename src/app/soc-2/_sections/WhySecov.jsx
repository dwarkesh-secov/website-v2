"use client";

import { motion } from "framer-motion";
import { Cpu, Users2, LifeBuoy, Layers, HeartHandshake } from "lucide-react";
import { Pill } from "./_shared";

const REASONS = [
  {
    icon: Cpu,
    title: "Automation-first platform",
    desc: "147+ automated compliance tests run 24/7, eliminating manual evidence collection and continuous auditor hand-holding.",
  },
  {
    icon: Users2,
    title: "Proven expertise",
    desc: "Backed by deep experience across security audits, we understand every nuance of SOC 2 requirements across industries.",
  },
  {
    icon: LifeBuoy,
    title: "End-to-end support",
    desc: "From readiness assessment to final audit — our team is beside you at every step, not just at audit time.",
  },
  {
    icon: Layers,
    title: "40+ integrations",
    desc: "Connect your existing stack — AWS, GCP, Azure, GitHub, Jira, and 36+ more — so evidence collection is fully automatic.",
  },
  {
    icon: HeartHandshake,
    title: "Long-term partnership",
    desc: "We do not just get you compliant — we help you build lasting security culture and customer trust that compounds.",
  },
];

export function WhySecov() {
  return (
    <section className="py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

          {/* Left */}
          <div className="lg:sticky lg:top-28">
            <Pill>Why Secov</Pill>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-extrabold text-primary tracking-tight mb-4 leading-tight"
            >
              The smarter path to SOC 2 certification
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-slate-500 leading-relaxed mb-10"
            >
              Choosing the right partner makes all the difference. Secov combines
              deep expertise with automation to make compliance faster, cheaper,
              and stress-free.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="grid grid-cols-3 gap-px bg-slate-200 rounded-xl overflow-hidden border border-slate-200"
            >
              {[
                { value: "500+", label: "Certified" },
                { value: "21d",  label: "Avg. Type I" },
                { value: "40+",  label: "Integrations" },
              ].map((s) => (
                <div key={s.label} className="bg-white px-4 py-5 text-center">
                  <div className="text-xl font-extrabold text-primary">{s.value}</div>
                  <div className="text-xs text-slate-400 mt-1">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right */}
          <div className="divide-y divide-slate-100">
            {REASONS.map((r, i) => {
              const Icon = r.icon;
              return (
                <motion.div
                  key={r.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-start gap-5 py-7 first:pt-0 last:pb-0"
                >
                  <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center shrink-0 mt-0.5">
                    <Icon className="w-5 h-5 text-slate-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary text-base mb-1.5">{r.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{r.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
