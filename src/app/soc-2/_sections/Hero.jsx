"use client";

import { motion, animate } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, CheckCircle2, ChevronRight } from "lucide-react";
import { SITE_CONFIG } from "@/lib/site-config";

function Counter({ to, suffix = "", duration = 1.6 }) {
  const [val, setVal] = useState(0);
  const ref = useRef(null);
  const fired = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && !fired.current) {
          fired.current = true;
          const ctrl = animate(0, to, {
            duration,
            ease: "easeOut",
            onUpdate: (v) => setVal(Math.round(v)),
          });
          return () => ctrl.stop();
        }
      },
      { threshold: 0.6 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [to, duration]);

  return <span ref={ref}>{val}{suffix}</span>;
}

const CRITERIA = [
  {
    code: "CC",
    name: "Security",
    required: true,
    desc: "Protect against unauthorized access, disclosure, modification, or destruction of information.",
  },
  {
    code: "A",
    name: "Availability",
    required: false,
    desc: "System is available for operation and use as committed or agreed.",
  },
  {
    code: "PI",
    name: "Processing Integrity",
    required: false,
    desc: "System processing is complete, valid, accurate, timely, and authorized.",
  },
  {
    code: "C",
    name: "Confidentiality",
    required: false,
    desc: "Information designated as confidential is protected as committed or agreed.",
  },
  {
    code: "P",
    name: "Privacy",
    required: false,
    desc: "Personal information is collected, used, retained, and disclosed per commitments.",
  },
];

const TYPE_INFO = {
  I: {
    period: "Point in time",
    timeline: "6–8 weeks",
    desc: "Evaluates whether controls are properly designed at a specific moment. The fastest path to a SOC 2 report.",
    points: ["Control design evaluated", "Fastest to obtain", "Accepted by most enterprise buyers"],
  },
  II: {
    period: "3–12 months",
    timeline: "3–12 months",
    desc: "Tests operating effectiveness over a sustained period — the gold standard for enterprise and regulated markets.",
    points: ["Operating effectiveness tested", "Highest level of assurance", "Required by Fortune 500 buyers"],
  },
};

export function Hero() {
  const [activeCriteria, setActiveCriteria] = useState(null);
  const [activeType, setActiveType] = useState("I");

  return (
    <section className="relative min-h-screen bg-primary flex items-center overflow-hidden">
      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* LEFT */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-xs font-bold uppercase tracking-[0.2em] text-white/40 mb-6"
            >
              SOC 2 Compliance Services
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="text-5xl md:text-[4.5rem] font-extrabold text-white tracking-tight leading-[1.06] mb-6"
            >
              Get SOC 2 certified. <span className="text-white/50">Faster.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.16 }}
              className="text-lg text-white/55 leading-relaxed mb-10 max-w-lg"
            >
              Audit-ready in weeks, not months. Expert-driven SOC 2 compliance
              services from gap assessment to final certification — with 147+
              automated tests running continuously.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.24 }}
              className="flex flex-col sm:flex-row gap-3 mb-14"
            >
              <Link
                href={SITE_CONFIG.demoUrl}
                className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-white text-primary font-bold text-sm hover:bg-slate-100 transition-colors"
              >
                Request a Consultation
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link
                href="#process"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg border border-white/20 text-white/70 font-semibold text-sm hover:border-white/40 hover:text-white transition-colors"
              >
                See how it works
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-3 gap-px bg-white/10 rounded-xl overflow-hidden border border-white/10"
            >
              {[
                { to: 21, suffix: "d", label: "Avg. Type I" },
                { to: 147, suffix: "+", label: "Automated tests" },
                { to: 500, suffix: "+", label: "Certified" },
              ].map((s) => (
                <div key={s.label} className="bg-primary px-4 py-5 text-center">
                  <div className="text-2xl font-extrabold text-white tabular-nums">
                    <Counter to={s.to} suffix={s.suffix} />
                  </div>
                  <div className="text-xs text-white/35 mt-1">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT — interactive panel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="hidden lg:flex flex-col gap-3"
          >
            {/* Type toggle */}
            <div className="border border-white/12 rounded-2xl p-5 bg-white/3">
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/35 mb-4">
                Choose your path
              </p>
              <div className="flex gap-2 mb-5 bg-white/5 rounded-lg p-1">
                {["I", "II"].map((t) => (
                  <button
                    key={t}
                    onClick={() => setActiveType(t)}
                    className={`flex-1 py-2 rounded-md text-sm font-bold transition-all duration-200 ${
                      activeType === t
                        ? "bg-white text-primary shadow-sm"
                        : "text-white/40 hover:text-white/70"
                    }`}
                  >
                    Type {t}
                  </button>
                ))}
              </div>

              <motion.div
                key={activeType}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-white/70 text-sm font-medium">{TYPE_INFO[activeType].period}</span>
                  <span className="text-[11px] font-semibold text-white/35 border border-white/12 px-2 py-0.5 rounded">
                    ~{TYPE_INFO[activeType].timeline}
                  </span>
                </div>
                <p className="text-white/45 text-sm leading-relaxed mb-4">{TYPE_INFO[activeType].desc}</p>
                <ul className="space-y-2">
                  {TYPE_INFO[activeType].points.map((p) => (
                    <li key={p} className="flex items-center gap-2.5 text-sm text-white/60">
                      <ChevronRight className="w-3.5 h-3.5 text-white/30 shrink-0" />
                      {p}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Criteria accordion */}
            <div className="border border-white/12 rounded-2xl p-5 bg-white/3">
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/35 mb-4">
                Trust Service Criteria
              </p>
              <div className="space-y-1">
                {CRITERIA.map((c, i) => (
                  <motion.button
                    key={c.code}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 + i * 0.06 }}
                    onClick={() => setActiveCriteria(activeCriteria === c.code ? null : c.code)}
                    className={`w-full text-left rounded-xl transition-colors duration-150 overflow-hidden ${
                      activeCriteria === c.code ? "bg-white/10" : "hover:bg-white/5"
                    }`}
                  >
                    <div className="flex items-center gap-3 px-3 py-2.5">
                      <span className="w-8 h-8 rounded-lg bg-white/8 border border-white/12 flex items-center justify-center text-[10px] font-black text-white/60 shrink-0">
                        {c.code}
                      </span>
                      <span className="flex-1 text-white/70 font-medium text-sm text-left">{c.name}</span>
                      <div className="flex items-center gap-2 shrink-0">
                        {c.required && (
                          <span className="text-[10px] font-bold text-white/40 border border-white/15 px-1.5 py-0.5 rounded">
                            Required
                          </span>
                        )}
                        <CheckCircle2 className="w-3.5 h-3.5 text-white/25" />
                      </div>
                    </div>
                    <motion.div
                      initial={false}
                      animate={{
                        height: activeCriteria === c.code ? "auto" : 0,
                        opacity: activeCriteria === c.code ? 1 : 0,
                      }}
                      transition={{ duration: 0.2, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="px-3 pb-3 text-xs text-white/35 leading-relaxed">
                        {c.desc}
                      </p>
                    </motion.div>
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
