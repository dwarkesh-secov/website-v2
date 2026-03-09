"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SITE_CONFIG } from "@/lib/site-config";

const GUARANTEES = [
  "No upfront commitment",
  "Expert-guided every step",
  "Audit-ready in 21 days avg.",
];

export function CtaSoc2() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-primary rounded-2xl border border-white/8"
        >
          <div className="px-10 py-16 md:px-20 md:py-24 text-center">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/35 mb-7"
            >
              Join 500+ companies already certified
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 }}
              className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-6 max-w-3xl mx-auto leading-[1.1]"
            >
              Ready to achieve SOC 2 compliance?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.16 }}
              className="text-lg text-white/50 mb-10 max-w-2xl mx-auto leading-relaxed"
            >
              Start your free trial today and have your SOC 2 gap assessment
              completed within 48 hours. No credit card required.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.24 }}
              className="mb-10 flex justify-center"
            >
              <Link
                href={SITE_CONFIG.demoUrl}
                className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-white text-primary font-bold text-sm hover:bg-slate-100 transition-colors"
              >
                Book a 30-minute demo with a compliance expert
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap items-center justify-center gap-8"
            >
              {GUARANTEES.map((g) => (
                <div key={g} className="flex items-center gap-2 text-white/35 text-sm">
                  <div className="w-1 h-1 rounded-full bg-white/25" />
                  {g}
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
