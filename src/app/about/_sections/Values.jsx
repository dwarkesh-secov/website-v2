"use client";

import { motion } from "framer-motion";
import { Heart, Shield, RefreshCw, Lightbulb } from "lucide-react";
import { Pill } from "./_shared";

const VALUES = [
  {
    icon: Heart,
    title: "Customer First",
    description:
      "Every product decision starts with one question: does this make compliance easier for the team using it?",
  },
  {
    icon: Shield,
    title: "Security by Default",
    description:
      "We eat our own cooking. Secov is SOC 2 Type II certified — schema isolation, encrypted tokens, and immutable audit logs.",
  },
  {
    icon: RefreshCw,
    title: "Continuous, Not Periodic",
    description:
      "Compliance is not once-a-year. Our nightly test runner and daily integration sync keep your posture always current.",
  },
  {
    icon: Lightbulb,
    title: "Automation Over Checklists",
    description:
      "Every manual checklist is a future automation we have not shipped yet. We replace toil with runners, syncs, and auto-collected evidence.",
  },
];

export function Values() {
  return (
    <section className="py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-14">
          <Pill>Our Principles</Pill>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-primary tracking-tight"
          >
            How we build Secov
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-slate-200 rounded-2xl overflow-hidden border border-slate-200">
          {VALUES.map((v, i) => {
            const Icon = v.icon;
            return (
              <motion.div
                key={v.title}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="flex gap-5 bg-white p-8 hover:bg-slate-50 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center shrink-0 mt-0.5">
                  <Icon className="w-5 h-5 text-slate-600" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-primary mb-2">{v.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{v.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
