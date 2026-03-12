"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MessageSquare } from "lucide-react";
import { SITE_CONFIG } from "@/lib/site-config";

export function Cta() {
  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "radial-gradient(circle, white 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30 mb-6"
        >
          Get Started
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-5"
        >
          Get compliant &amp; close
          <br />
          more revenue.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-lg text-white/45 mb-10 max-w-xl mx-auto"
        >
          Book a 30-minute demo — we'll map your compliance gaps, recommend the
          right plan, and get you audit-ready in weeks, not months.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.16 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <Link
            href="/talk-to-us"
            className="group flex items-center gap-2 px-7 py-4 rounded-xl bg-white text-primary font-bold text-sm hover:bg-slate-100 transition-colors"
          >
            Book a Demo
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
          <Link
            href={`mailto:sales@secov.com`}
            className="flex items-center gap-2 px-7 py-4 rounded-xl border border-white/15 text-white/70 font-semibold text-sm hover:border-white/30 hover:text-white transition-colors"
          >
            <MessageSquare className="w-4 h-4" />
            Talk to Sales
          </Link>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-xs text-white/25 mt-8"
        >
          No credit card required · Setup in minutes · Cancel any time
        </motion.p>
      </div>
    </section>
  );
}
