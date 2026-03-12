"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SITE_CONFIG } from "@/lib/site-config";

export function Cta() {
  return (
    <section className="py-28 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border border-white/12 rounded-2xl p-14 md:p-20 text-center max-w-3xl mx-auto">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/35 mb-6"
          >
            Free consultation · No commitment
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-5"
          >
            Ready to start your SOC 2 journey?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.16 }}
            className="text-lg text-white/50 leading-relaxed mb-10"
          >
            Book a free 30-minute call with our compliance experts. We will
            assess your current posture and map a clear path to certification.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.24 }}
            className="flex flex-col sm:flex-row gap-3 justify-center"
          >
            <Link
              href="/talk-to-us"
              className="group inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-white text-primary font-bold text-sm hover:bg-slate-100 transition-colors"
            >
              Book a Free Consultation
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <Link
              href={SITE_CONFIG.appUrl}
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg border border-white/20 text-white/70 font-semibold text-sm hover:border-white/40 hover:text-white transition-colors"
            >
              Start for free
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
