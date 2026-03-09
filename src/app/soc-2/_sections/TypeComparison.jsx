"use client";

import { motion } from "framer-motion";
import { Clock, CheckCircle2 } from "lucide-react";
import { Pill } from "./_shared";

const TYPES = [
  {
    type: "SOC 2 Type I",
    period: "Point in time",
    description:
      "Evaluates whether your security controls are properly designed and implemented at a specific moment in time.",
    bestFor: "Closing your first enterprise deal quickly",
    points: [
      "Control design evaluated",
      "Fastest path to a SOC 2 report",
      "Accepted by most enterprise buyers",
      "Stepping stone to Type II",
    ],
  },
  {
    type: "SOC 2 Type II",
    period: "3–12 months",
    description:
      "Tests how effectively those controls operate over an observation period — the gold standard trusted by large enterprises.",
    bestFor: "Scaling into regulated markets & enterprise accounts",
    points: [
      "Operating effectiveness tested over time",
      "Highest level of assurance",
      "Required by many Fortune 500 buyers",
      "Renewable annually",
    ],
    recommended: true,
  },
];

const TSC = [
  { code: "Security",             required: true },
  { code: "Availability",         required: false },
  { code: "Processing Integrity", required: false },
  { code: "Confidentiality",      required: false },
  { code: "Privacy",              required: false },
];

export function TypeComparison() {
  return (
    <section className="py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-14">
          <Pill>The Standard for Customer Data</Pill>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-primary tracking-tight mb-4"
          >
            Type I vs. Type II — which do you need?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-500 leading-relaxed"
          >
            SOC 2 is the industry benchmark for safeguarding sensitive information.
            Secov supports both paths and helps you choose the right one.
          </motion.p>
        </div>

        {/* Type cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-12">
          {TYPES.map((t, i) => (
            <motion.div
              key={t.type}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative bg-white rounded-2xl border p-8 transition-shadow hover:shadow-md ${
                t.recommended ? "border-primary" : "border-slate-200"
              }`}
            >
              {t.recommended && (
                <div className="absolute -top-px left-8 right-8 h-0.5 bg-primary rounded-full" />
              )}
              <div className="flex items-start justify-between mb-5">
                <div>
                  <h3 className="text-xl font-extrabold text-primary">{t.type}</h3>
                  <div className="flex items-center gap-1.5 mt-1.5 text-slate-400 text-sm">
                    <Clock className="w-3.5 h-3.5" />
                    {t.period}
                  </div>
                </div>
                {t.recommended && (
                  <span className="text-[11px] font-bold text-primary border border-primary/30 bg-primary/5 px-2.5 py-1 rounded-md">
                    Most Popular
                  </span>
                )}
              </div>

              <p className="text-slate-600 text-sm leading-relaxed mb-5">{t.description}</p>

              <div className="border-t border-slate-100 pt-5 mb-5">
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1.5">Best for</p>
                <p className="text-sm font-semibold text-primary">{t.bestFor}</p>
              </div>

              <ul className="space-y-2">
                {t.points.map((p) => (
                  <li key={p} className="flex items-center gap-3 text-sm text-slate-600">
                    <CheckCircle2 className="w-4 h-4 text-slate-400 shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* TSC table */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden"
        >
          <div className="px-7 py-4 border-b border-slate-200 flex items-center justify-between">
            <h3 className="font-bold text-primary text-sm">Trust Service Criteria</h3>
            <span className="text-xs text-slate-500">Security is always required</span>
          </div>
          <div className="divide-y divide-slate-100">
            {TSC.map((row, i) => (
              <motion.div
                key={row.code}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-center justify-between px-7 py-3.5"
              >
                <span className="text-sm font-medium text-primary">{row.code}</span>
                <span className={`text-xs font-semibold px-2.5 py-1 rounded ${
                  row.required
                    ? "bg-primary/8 text-primary border border-primary/20"
                    : "bg-slate-100 text-slate-400"
                }`}>
                  {row.required ? "Required" : "Optional"}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
