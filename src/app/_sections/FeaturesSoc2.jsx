"use client";

import { motion } from "framer-motion";
import {
  RefreshCw, FileCheck, Lock, Shield, CheckCircle2, Users,
} from "lucide-react";

const FEATURES = [
  {
    icon: RefreshCw,
    tag: "Core Feature",
    title: "Continuous Automated Monitoring",
    description:
      "Automated checks run 24/7 across your cloud infrastructure, code repos, HR systems, and identity providers. Know the moment a control drifts out of compliance.",
    points: [
      "AWS, GCP, Azure, GitHub, Okta & 30+ integrations",
      "Real-time alerts via Slack or email",
      "Zero-touch evidence collection",
    ],
    visual: (
      <div className="bg-slate-50 rounded-xl border border-slate-200 p-4 space-y-2">
        {[
          "AWS IAM · Least privilege",
          "GitHub · Branch protection",
          "Okta · MFA enabled",
          "Datadog · Log retention",
        ].map((c) => (
          <div key={c} className="flex items-center justify-between bg-white rounded-lg border border-slate-100 px-3 py-2.5">
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-slate-400 shrink-0" />
              <span className="text-xs font-medium text-slate-700">{c}</span>
            </div>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-600">Pass</span>
          </div>
        ))}
      </div>
    ),
    span: "lg:col-span-2",
  },
  {
    icon: FileCheck,
    tag: "Policy Hub",
    title: "Policy Management",
    description:
      "Pre-built, auditor-approved templates for every SOC 2 required policy. Distribute, track, and collect employee signatures — all in one place.",
    points: [
      "50+ policy templates included",
      "Auto-track employee acknowledgements",
      "Version control & audit trail",
    ],
    visual: (
      <div className="bg-slate-50 rounded-xl border border-slate-200 p-4">
        {["Acceptable Use Policy", "Incident Response Plan", "Access Control Policy"].map((p, i) => (
          <div key={p} className="flex items-center justify-between py-2.5 border-b border-slate-100 last:border-0">
            <div className="flex items-center gap-2.5">
              <FileCheck className="w-4 h-4 text-slate-400" />
              <span className="text-xs font-medium text-slate-700">{p}</span>
            </div>
            <span className={`text-[10px] font-bold px-2 py-0.5 rounded bg-slate-100 ${i === 2 ? "text-slate-400" : "text-slate-700"}`}>
              {i === 2 ? "Pending" : "Signed"}
            </span>
          </div>
        ))}
      </div>
    ),
    span: "lg:col-span-1",
  },
  {
    icon: Lock,
    tag: "Access Control",
    title: "Access Reviews",
    description:
      "Automatically map all user access across every connected system. Run SOC 2-compliant access reviews with one click and maintain a full audit trail.",
    points: [
      "Quarterly review workflows built-in",
      "Auto-revoke stale access",
      "Full evidence export for auditors",
    ],
    visual: (
      <div className="bg-slate-50 rounded-xl border border-slate-200 p-4">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-semibold text-slate-700">Q1 Access Review</span>
          <span className="text-[10px] text-slate-500 font-bold bg-slate-100 px-2 py-0.5 rounded">In Progress</span>
        </div>
        <div className="flex items-center gap-1.5 mb-3 flex-wrap">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className={`w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-bold ${
                i < 6 ? "bg-slate-800 text-white" : "bg-slate-200 text-slate-400"
              }`}
            >
              {i < 6 ? "✓" : "?"}
            </div>
          ))}
        </div>
        <div className="text-[10px] text-slate-400 font-medium">6/8 users reviewed · 2 pending</div>
      </div>
    ),
    span: "lg:col-span-1",
  },
  {
    icon: Shield,
    tag: "Risk Management",
    title: "Risk & Vendor Management",
    description:
      "Identify, assess, and track risks across your organization. Evaluate third-party vendors and collect the evidence auditors need for a clean Type II report.",
    points: [
      "AI-assisted risk identification",
      "Vendor security questionnaires",
      "Built-in risk register with remediation tracking",
    ],
    visual: (
      <div className="bg-slate-50 rounded-xl border border-slate-200 p-4">
        {[
          { vendor: "Stripe",    risk: "Low",    dim: false },
          { vendor: "Snowflake", risk: "Low",    dim: false },
          { vendor: "Twilio",    risk: "Medium", dim: true  },
        ].map((v) => (
          <div key={v.vendor} className="flex items-center justify-between py-2 border-b border-slate-100 last:border-0">
            <div className="flex items-center gap-2">
              <Users className="w-3.5 h-3.5 text-slate-400" />
              <span className="text-xs font-medium text-slate-700">{v.vendor}</span>
            </div>
            <span className={`text-[10px] font-bold px-2 py-0.5 rounded bg-slate-100 ${v.dim ? "text-slate-400" : "text-slate-700"}`}>
              {v.risk} Risk
            </span>
          </div>
        ))}
      </div>
    ),
    span: "lg:col-span-2",
  },
];

export function FeaturesSoc2() {
  return (
    <section id="features" className="py-24 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-14">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-4">The Platform</p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-primary tracking-tight mb-4"
          >
            Everything you need to get SOC 2 certified — and stay certified
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-500 leading-relaxed"
          >
            Secov automates the most time-consuming parts of compliance so your
            team can focus on shipping product — not chasing evidence.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {FEATURES.map((feat, i) => {
            const Icon = feat.icon;
            return (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`bg-white rounded-2xl border border-slate-200 p-7 hover:shadow-md transition-shadow ${feat.span}`}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-slate-600" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">{feat.tag}</span>
                </div>

                <h3 className="text-lg font-bold text-primary mb-2 leading-snug">{feat.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-4">{feat.description}</p>

                <div className="mb-5">{feat.visual}</div>

                <ul className="space-y-1.5">
                  {feat.points.map((point) => (
                    <li key={point} className="flex items-start gap-2 text-xs text-slate-500">
                      <CheckCircle2 className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
