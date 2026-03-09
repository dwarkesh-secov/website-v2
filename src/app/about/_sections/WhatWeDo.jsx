"use client";

import { motion } from "framer-motion";
import {
  GitBranch,
  CheckCircle2,
  Shield,
  Users,
  AlertCircle,
  Database,
} from "lucide-react";
import { Pill } from "./_shared";

const ITEMS = [
  {
    icon: GitBranch,
    title: "40+ Deep Integrations",
    description:
      "GitHub, AWS, Okta, Slack, Google Workspace, Microsoft 365, Jira, Datadog, KnowBe4 and more. Secov auto-syncs your entire stack nightly so compliance checks always run on real, live data.",
  },
  {
    icon: CheckCircle2,
    title: "147+ Automated Tests",
    description:
      "Pre-built runners evaluate MFA enforcement, PR approval policies, vendor review cadences, device encryption, security training completion, and more — every night at 1 AM.",
  },
  {
    icon: Shield,
    title: "Controls, Frameworks & Evidence",
    description:
      "SOC 2 frameworks tracked in one platform. Every test result auto-becomes auditor-ready evidence stored in your secure S3-backed dataroom.",
  },
  {
    icon: Users,
    title: "People & Governance",
    description:
      "Policy acceptances, security training, device registration, and group-based role management. Full employee onboarding portal built in — no third-party tools needed.",
  },
  {
    icon: AlertCircle,
    title: "Risk & Vendor Management",
    description:
      "Living risk register, vendor security assessments, custom questionnaires, and recurring review schedules — all tied back to your compliance controls automatically.",
  },
  {
    icon: Database,
    title: "Schema-per-Tenant Isolation",
    description:
      "Your data lives in a completely isolated PostgreSQL schema. No row-level tenant IDs, no shared tables. Every action is logged in an immutable audit trail.",
  },
];

export function WhatWeDo() {
  return (
    <section id="what-we-do" className="py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-14">
          <Pill>What Secov Does</Pill>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-primary tracking-tight mb-4"
          >
            One platform for your entire compliance program
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-500 leading-relaxed"
          >
            From connecting your tech stack to collecting evidence and briefing
            auditors — Secov covers every layer of the compliance lifecycle.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-200 rounded-2xl overflow-hidden border border-slate-200">
          {ITEMS.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="bg-white p-8 hover:bg-slate-50 transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center mb-5 group-hover:bg-slate-200 transition-colors">
                  <Icon className="w-5 h-5 text-slate-600" />
                </div>
                <h3 className="text-base font-bold text-primary mb-2.5">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
