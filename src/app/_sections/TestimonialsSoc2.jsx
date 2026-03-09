"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { TESTIMONIALS } from "@/data/testimonials";

export function TestimonialsSoc2() {
  return (
    <section className="py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-14">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-4">Customer Stories</p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-primary tracking-tight mb-4"
          >
            Trusted by hundreds of growing companies
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-500 leading-relaxed"
          >
            Don&apos;t just take our word for it — here&apos;s what our customers say after
            getting certified with Secov.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.author}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-slate-50 rounded-2xl border border-slate-200 p-8 hover:shadow-md hover:border-slate-300 transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex items-center gap-1 mb-5">
                {[...Array(t.rating)].map((_, si) => (
                  <Star key={si} className="w-4 h-4 fill-slate-400 text-slate-400" />
                ))}
              </div>

              <blockquote className="text-slate-700 leading-relaxed mb-6 font-medium">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              <div className="flex items-center gap-3 pt-5 border-t border-slate-200">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white text-sm font-bold shrink-0">
                  {t.initials}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-bold text-primary">{t.author}</div>
                  <div className="text-xs text-slate-400 font-medium">{t.role} · {t.company}</div>
                </div>
                <div className="px-2.5 py-1 rounded bg-white border border-slate-200 text-[10px] font-bold text-slate-500 uppercase tracking-wide shrink-0">
                  {t.company}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-slate-400 text-sm">
            Join <span className="font-bold text-primary">500+ companies</span> that trusted Secov for their SOC 2 certification
          </p>
        </motion.div>
      </div>
    </section>
  );
}
