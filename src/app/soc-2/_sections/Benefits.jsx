"use client";

import { motion } from "framer-motion";
import { TrendingUp, Users, Award, ShieldCheck, Activity, Globe } from "lucide-react";
import { Pill } from "./_shared";

const BENEFITS = [
  {
    icon: Users,
    stat: "#1",
    statLabel: "Customer trust signal",
    title: "Build Customer Trust",
    description:
      "Independent third-party attestation is the most credible signal you can send. Customers stop asking security questions and start signing contracts.",
  },
  {
    icon: Activity,
    stat: "70%",
    statLabel: "Faster sales cycles",
    title: "Accelerate Sales Cycles",
    description:
      "Eliminate lengthy security questionnaires and reduce deal friction. Enterprise buyers already trust SOC 2 — let your report do the talking.",
  },
  {
    icon: Award,
    stat: "3×",
    statLabel: "More enterprise deals",
    title: "Gain Competitive Edge",
    description:
      "Companies with SOC 2 close significantly more enterprise deals than those without. Stand out with verified, independent attestation.",
  },
  {
    icon: ShieldCheck,
    stat: "147+",
    statLabel: "Automated controls",
    title: "Improve Security Posture",
    description:
      "Identify and fix gaps between your systems, policies, and processes. Secov's automated tests keep controls passing 365 days a year.",
  },
  {
    icon: TrendingUp,
    stat: "24/7",
    statLabel: "Continuous monitoring",
    title: "Reduce Business Risk",
    description:
      "Continuous monitoring catches compliance drift before it becomes a breach. Know your security posture at all times, not just at audit time.",
  },
  {
    icon: Globe,
    stat: "50+",
    statLabel: "Frameworks supported",
    title: "Unlock New Markets",
    description:
      "SOC 2 is the gateway to ISO 27001, HIPAA, and GDPR. Start here and expand to any market or regulation your business needs.",
  },
];

export function Benefits() {
  return (
    <section className="py-24 bg-slate-50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-14">
          <Pill>Key Benefits</Pill>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-primary tracking-tight mb-4"
          >
            Why SOC 2 compliance pays for itself
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-500 leading-relaxed"
          >
            SOC 2 is not just passing an audit. It is building trust, winning
            more deals, and protecting your business from real risks.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-200 rounded-2xl overflow-hidden border border-slate-200">
          {BENEFITS.map((b, i) => {
            const Icon = b.icon;
            return (
              <motion.div
                key={b.title}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="bg-white p-8 hover:bg-slate-50 transition-colors group"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center group-hover:bg-slate-200 transition-colors">
                    <Icon className="w-5 h-5 text-slate-600" />
                  </div>
                  <div className="text-right">
                    <div className="text-xl font-extrabold text-primary tabular-nums">{b.stat}</div>
                    <div className="text-[11px] text-slate-400 font-medium mt-0.5 leading-tight">{b.statLabel}</div>
                  </div>
                </div>
                <h3 className="text-base font-bold text-primary mb-2">{b.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{b.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
