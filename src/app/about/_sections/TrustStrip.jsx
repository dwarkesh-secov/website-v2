"use client";

import { motion } from "framer-motion";
import { Shield, Lock, FileText } from "lucide-react";

const BADGES = [
  {
    icon: Shield,
    text: "SOC 2 Type II Certified",
    sub: "We practice what we preach",
  },
  {
    icon: Lock,
    text: "Schema-per-Tenant Isolation",
    sub: "Your data never touches another tenant",
  },
  {
    icon: FileText,
    text: "Immutable Audit Trail",
    sub: "Every action logged automatically",
  },
];

export function TrustStrip() {
  return (
    <section className="py-12 bg-white border-b border-slate-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-14"
        >
          {BADGES.map(({ icon: Icon, text, sub }) => (
            <div key={text} className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center shrink-0">
                <Icon className="w-5 h-5 text-slate-600" />
              </div>
              <div>
                <div className="text-sm font-bold text-primary">{text}</div>
                <div className="text-xs text-slate-400 mt-0.5">{sub}</div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
