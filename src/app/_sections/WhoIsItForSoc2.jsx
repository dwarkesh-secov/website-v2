"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/site-config";

const PERSONAS = [
  {
    tag: "For Startups",
    dark: true,
    headline: "Get your first SOC 2 report without the chaos",
    description:
      "Whether you need SOC 2 Type I to close your first enterprise deal or Type II for investors — Secov gives you a structured, guided path with expert support the whole way.",
    points: [
      "Gap assessment in under 48 hours",
      "Pre-built policy templates ready to deploy",
      "Dedicated compliance expert assigned to you",
      "Audit-ready in as few as 21 days",
    ],
    cta: "Start Free Trial",
    href: "/talk-to-us",
    visual: (
      <div className="bg-white/5 border border-white/10 rounded-xl p-5">
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm font-bold text-white/70">Compliance Roadmap</span>
          <span className="text-xs font-semibold text-white/40 border border-white/12 px-2 py-0.5 rounded">On Track</span>
        </div>
        {[
          { label: "Gap Assessment",        progress: 100 },
          { label: "Policy Setup",          progress: 100 },
          { label: "Control Implementation",progress: 80  },
          { label: "Evidence Collection",   progress: 55  },
          { label: "Audit Prep",            progress: 10  },
        ].map((step) => (
          <div key={step.label} className="mb-3">
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs font-medium text-white/50">{step.label}</span>
              <span className="text-[10px] text-white/30">{step.progress}%</span>
            </div>
            <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
              <div className="h-full bg-white/40 rounded-full" style={{ width: `${step.progress}%` }} />
            </div>
          </div>
        ))}
      </div>
    ),
  },
  {
    tag: "For Growing Companies",
    dark: false,
    headline: "Maintain continuous compliance as you scale",
    description:
      "Already SOC 2 certified? Secov keeps your controls passing 365 days a year with automated monitoring, evidence collection, and a streamlined annual re-certification process.",
    points: [
      "24/7 automated control monitoring across 30+ integrations",
      "Continuous evidence collection — no manual work",
      "Instant alerts when controls drift out of compliance",
      "Streamlined annual audit with pre-collected evidence",
    ],
    cta: "Book a Demo",
    href: "/talk-to-us",
    visual: (
      <div className="bg-slate-100 border border-slate-200 rounded-xl p-5">
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm font-bold text-slate-700">Live Monitoring</span>
          <span className="text-xs font-semibold text-slate-400">Active</span>
        </div>
        <div className="grid grid-cols-2 gap-2 mb-3">
          {[
            { label: "Controls Active", value: "147" },
            { label: "Alerts Today",    value: "0"   },
            { label: "Evidence Items",  value: "312" },
            { label: "Uptime",          value: "99.9%" },
          ].map((m) => (
            <div key={m.label} className="bg-white rounded-lg border border-slate-200 p-3">
              <div className="text-lg font-bold text-primary mb-0.5">{m.value}</div>
              <div className="text-[10px] text-slate-400 font-medium">{m.label}</div>
            </div>
          ))}
        </div>
        <div className="bg-white rounded-lg border border-slate-200 p-3">
          {["AWS · IAM policies", "GitHub · Branch protection", "Okta · MFA enforcement"].map((item) => (
            <div key={item} className="flex items-center gap-2 py-1">
              <div className="w-1.5 h-1.5 rounded-full bg-slate-400" />
              <span className="text-xs text-slate-500">{item}</span>
              <span className="ml-auto text-[10px] text-slate-600 font-semibold">Pass</span>
            </div>
          ))}
        </div>
      </div>
    ),
  },
];

export function WhoIsItForSoc2() {
  return (
    <section className="py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-14">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-4">Who Is Secov For?</p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-primary tracking-tight mb-4"
          >
            Built for every stage of your compliance journey
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-500 leading-relaxed"
          >
            Whether you&apos;re getting certified for the first time or maintaining
            ongoing compliance, Secov has a solution tailored to you.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {PERSONAS.map((persona, i) => (
            <motion.div
              key={persona.tag}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className={`rounded-2xl border p-10 ${
                persona.dark
                  ? "bg-primary border-white/8"
                  : "bg-slate-50 border-slate-200"
              }`}
            >
              <span className={`inline-block text-[10px] font-bold uppercase tracking-[0.18em] border px-2.5 py-1 rounded mb-7 ${
                persona.dark
                  ? "text-white/40 border-white/12"
                  : "text-slate-400 border-slate-200"
              }`}>
                {persona.tag}
              </span>

              <h3 className={`text-2xl font-bold mb-3 leading-tight ${persona.dark ? "text-white" : "text-primary"}`}>
                {persona.headline}
              </h3>
              <p className={`leading-relaxed mb-6 text-sm ${persona.dark ? "text-white/50" : "text-slate-500"}`}>
                {persona.description}
              </p>

              <div className="mb-8">{persona.visual}</div>

              <ul className="space-y-2.5 mb-8">
                {persona.points.map((point) => (
                  <li key={point} className={`flex items-start gap-3 text-sm ${persona.dark ? "text-white/55" : "text-slate-600"}`}>
                    <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${persona.dark ? "text-white/25" : "text-slate-400"}`} />
                    {point}
                  </li>
                ))}
              </ul>

              <Link
                href={persona.href}
                className={`group inline-flex items-center gap-2 font-bold text-sm transition-colors ${
                  persona.dark ? "text-white hover:text-white/70" : "text-primary hover:text-slate-500"
                }`}
              >
                {persona.cta}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
