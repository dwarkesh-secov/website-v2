"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SITE_CONFIG } from "@/lib/site-config";

export function Cta() {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-primary rounded-2xl border border-white/8 p-14 md:p-20 text-center"
        >
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/35 mb-6"
          >
            Free consultation · No commitment
          </motion.p>

          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-5 leading-tight">
            Ready to get audit-ready?
          </h2>

          <p className="text-lg text-white/50 mb-10 max-w-xl mx-auto leading-relaxed">
            Book a free 30-minute consultation with a compliance expert — we will
            connect your tools, map your frameworks, and show you the fastest
            path to certification.
          </p>

          <Link
            href="/talk-to-us"
            className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-white text-primary font-bold text-sm hover:bg-slate-100 transition-colors"
          >
            Book a Free Consultation
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>

          <p className="mt-5 text-white/30 text-xs">
            No credit card required · Free gap assessment included
          </p>
        </motion.div>
      </div>
    </section>
  );
}
