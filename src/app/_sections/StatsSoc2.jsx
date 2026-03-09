"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const STATS = [
  {
    value: 500, suffix: "+",
    label: "Companies certified",
    description: "Startups to enterprises across every industry",
  },
  {
    value: 21, suffix: " days",
    label: "Average time to audit-ready",
    description: "From kickoff to your first SOC 2 report",
  },
  {
    value: 98, suffix: "%",
    label: "Audit pass rate",
    description: "First-time pass on all SOC 2 Type I & II audits",
  },
  {
    value: 2, prefix: "$", suffix: "M+",
    label: "Average deals unlocked",
    description: "New enterprise revenue opened post-certification",
  },
];

function AnimatedCounter({ value, prefix = "", suffix = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [displayed, setDisplayed] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1800;
    const startTime = performance.now();
    const step = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayed(Math.round(eased * value));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, value]);

  return <span ref={ref}>{prefix}{displayed}{suffix}</span>;
}

export function StatsSoc2() {
  return (
    <section className="py-20 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-4">Proven Results</p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-primary tracking-tight"
          >
            The impact our customers see
          </motion.h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-slate-200 rounded-2xl overflow-hidden border border-slate-200">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-white p-8 hover:bg-slate-50 transition-colors"
            >
              <div className="text-5xl md:text-6xl font-black text-primary mb-2 tabular-nums">
                <AnimatedCounter value={stat.value} prefix={stat.prefix || ""} suffix={stat.suffix} />
              </div>
              <div className="text-sm font-bold text-primary mb-1.5">{stat.label}</div>
              <div className="text-xs text-slate-400 leading-relaxed">{stat.description}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
