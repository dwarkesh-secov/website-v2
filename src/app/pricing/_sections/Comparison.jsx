"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, Minus } from "lucide-react";

/* ─── Data ──────────────────────────────────────────────────────────────── */

const COLUMNS = ["Feature", "Starter", "Growth", "Enterprise"];

// true = included, false = not included, string = custom label
const CATEGORIES = [
  {
    label: "SOC 2 Framework",
    rows: [
      {
        feature: "SOC 2 Type I",
        starter: true,
        growth: true,
        enterprise: true,
      },
      {
        feature: "SOC 2 Type II",
        starter: false,
        growth: true,
        enterprise: true,
      },
      {
        feature: "Type I → Type II upgrade path",
        starter: true,
        growth: true,
        enterprise: true,
      },
      {
        feature: "All 5 Trust Service Criteria",
        starter: false,
        growth: true,
        enterprise: true,
      },
      {
        feature: "Custom control mapping",
        starter: false,
        growth: false,
        enterprise: true,
      },
    ],
  },
  {
    label: "Monitoring & Evidence",
    rows: [
      {
        feature: "Automated evidence collection",
        starter: true,
        growth: true,
        enterprise: true,
      },
      {
        feature: "100+ pre-built compliance tests",
        starter: true,
        growth: true,
        enterprise: true,
      },
      {
        feature: "Compliance score dashboard",
        starter: true,
        growth: true,
        enterprise: true,
      },
      {
        feature: "Continuous 24/7 monitoring",
        starter: false,
        growth: true,
        enterprise: true,
      },
      {
        feature: "Real-time Slack/email alerts",
        starter: false,
        growth: true,
        enterprise: true,
      },
      {
        feature: "Custom monitoring cadence",
        starter: false,
        growth: false,
        enterprise: true,
      },
      {
        feature: "Asset inventory (devices/repos/cloud)",
        starter: false,
        growth: true,
        enterprise: true,
      },
      {
        feature: "Vulnerability tracking",
        starter: false,
        growth: true,
        enterprise: true,
      },
      {
        feature: "Pen test evidence tracking",
        starter: false,
        growth: true,
        enterprise: true,
      },
      {
        feature: "Change management tracking",
        starter: false,
        growth: true,
        enterprise: true,
      },
    ],
  },
  {
    label: "Policy Management",
    rows: [
      {
        feature: "Pre-built policy templates",
        starter: "20+",
        growth: "50+",
        enterprise: "50+",
      },
      {
        feature: "Employee acknowledgment tracking",
        starter: true,
        growth: true,
        enterprise: true,
      },
      {
        feature: "Version control & audit trail",
        starter: true,
        growth: true,
        enterprise: true,
      },
      {
        feature: "Custom policy builder",
        starter: false,
        growth: false,
        enterprise: true,
      },
    ],
  },
  {
    label: "Access & Risk",
    rows: [
      {
        feature: "User access mapping",
        starter: false,
        growth: true,
        enterprise: true,
      },
      {
        feature: "Automated access reviews",
        starter: false,
        growth: true,
        enterprise: true,
      },
      {
        feature: "Auto-revoke stale access",
        starter: false,
        growth: true,
        enterprise: true,
      },
      {
        feature: "Risk register & assessments",
        starter: false,
        growth: true,
        enterprise: true,
      },
      {
        feature: "Vendor management & questionnaires",
        starter: false,
        growth: true,
        enterprise: true,
      },
      {
        feature: "AI-assisted risk identification",
        starter: false,
        growth: false,
        enterprise: true,
      },
      {
        feature: "Residual risk tracking",
        starter: false,
        growth: true,
        enterprise: true,
      },
      {
        feature: "Sub-processor management",
        starter: false,
        growth: false,
        enterprise: true,
      },
    ],
  },
  {
    label: "Integrations",
    rows: [
      {
        feature: "Pre-built integrations",
        starter: "5",
        growth: "20+",
        enterprise: "40+",
      },
      {
        feature: "Cloud (AWS, GCP, Azure)",
        starter: false,
        growth: true,
        enterprise: true,
      },
      {
        feature: "Identity (Okta, JumpCloud)",
        starter: false,
        growth: true,
        enterprise: true,
      },
      {
        feature: "Version control (GitHub, GitLab)",
        starter: true,
        growth: true,
        enterprise: true,
      },
      {
        feature: "Ticketing (Jira, Linear, ClickUp)",
        starter: true,
        growth: true,
        enterprise: true,
      },
      {
        feature: "MDM (Fleet / osquery)",
        starter: false,
        growth: true,
        enterprise: true,
      },
      {
        feature: "HR & training (KnowBe4, G Suite)",
        starter: false,
        growth: true,
        enterprise: true,
      },
      {
        feature: "Custom integrations / API",
        starter: false,
        growth: false,
        enterprise: true,
      },
    ],
  },
  {
    label: "People & Training",
    rows: [
      {
        feature: "Employee onboarding workflows",
        starter: true,
        growth: true,
        enterprise: true,
      },
      {
        feature: "Background check tracking",
        starter: false,
        growth: true,
        enterprise: true,
      },
      {
        feature: "Security training (KnowBe4)",
        starter: false,
        growth: true,
        enterprise: true,
      },
      {
        feature: "Training completion tracking",
        starter: false,
        growth: true,
        enterprise: true,
      },
      {
        feature: "User groups & RBAC",
        starter: false,
        growth: true,
        enterprise: true,
      },
      {
        feature: "Custom roles & permissions",
        starter: false,
        growth: false,
        enterprise: true,
      },
      {
        feature: "Audit log (immutable)",
        starter: true,
        growth: true,
        enterprise: true,
      },
    ],
  },
  {
    label: "Auditor & Questionnaire Tools",
    rows: [
      {
        feature: "Dataroom / evidence storage",
        starter: true,
        growth: true,
        enterprise: true,
      },
      {
        feature: "Auditor-friendly dashboard",
        starter: true,
        growth: true,
        enterprise: true,
      },
      {
        feature: "Downloadable evidence packages",
        starter: true,
        growth: true,
        enterprise: true,
      },
      {
        feature: "Compliance reports",
        starter: true,
        growth: true,
        enterprise: true,
      },
      {
        feature: "Security questionnaire responses",
        starter: false,
        growth: true,
        enterprise: true,
      },
      {
        feature: "Security questionnaire automation",
        starter: false,
        growth: false,
        enterprise: true,
      },
      {
        feature: "Custom audit reports",
        starter: false,
        growth: false,
        enterprise: true,
      },
      {
        feature: "White-label reports",
        starter: false,
        growth: false,
        enterprise: true,
      },
      {
        feature: "Trust Center",
        starter: false,
        growth: false,
        enterprise: true,
      },
    ],
  },
  {
    label: "Support & Scale",
    rows: [
      {
        feature: "Employees",
        starter: "50",
        growth: "200",
        enterprise: "Unlimited",
      },
      {
        feature: "Workspaces",
        starter: "1",
        growth: "1",
        enterprise: "Multiple",
      },
      {
        feature: "Email support",
        starter: true,
        growth: true,
        enterprise: true,
      },
      {
        feature: "Priority support",
        starter: false,
        growth: true,
        enterprise: true,
      },
      {
        feature: "Onboarding assistance",
        starter: false,
        growth: true,
        enterprise: true,
      },
      {
        feature: "Dedicated CSM",
        starter: false,
        growth: false,
        enterprise: true,
      },
      {
        feature: "SLA guarantee (99.9% uptime)",
        starter: false,
        growth: false,
        enterprise: true,
      },
      {
        feature: "SSO / SAML",
        starter: false,
        growth: false,
        enterprise: true,
      },
    ],
  },
];

/* ─── Cell ───────────────────────────────────────────────────────────────── */

function Cell({ value, isPopular }) {
  if (value === true) {
    return (
      <div className="flex justify-center">
        <Check
          className={`w-4 h-4 ${isPopular ? "text-primary" : "text-slate-400"}`}
        />
      </div>
    );
  }
  if (value === false) {
    return (
      <div className="flex justify-center">
        <Minus className="w-4 h-4 text-slate-200" />
      </div>
    );
  }
  return (
    <div
      className={`text-center text-sm font-semibold ${
        isPopular ? "text-primary" : "text-slate-600"
      }`}
    >
      {value}
    </div>
  );
}

/* ─── Component ──────────────────────────────────────────────────────────── */

export function Comparison() {
  return (
    <section className="py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-4">
            Full Comparison
          </p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-extrabold text-primary tracking-tight"
          >
            What's in each plan?
          </motion.h2>
        </div>

        {/* Table wrapper — horizontally scrollable on mobile */}
        <div className="overflow-x-auto rounded-2xl border border-slate-200">
          <table className="w-full min-w-[640px] border-collapse">
            {/* Column headers */}
            <thead>
              <tr className="border-b border-slate-200">
                <th className="text-left py-4 px-6 text-sm font-semibold text-slate-400 bg-white w-[40%]">
                  {COLUMNS[0]}
                </th>
                {["Starter", "Growth", "Enterprise"].map((col, i) => (
                  <th
                    key={col}
                    className={`py-4 px-4 text-center text-sm font-bold w-[20%] ${
                      i === 1
                        ? "bg-primary text-white"
                        : "bg-white text-primary"
                    }`}
                  >
                    {col}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {CATEGORIES.map((cat) => (
                <React.Fragment key={cat.label}>
                  {/* Category header row */}
                  <tr className="border-t border-b border-slate-200 bg-slate-50">
                    <td
                      colSpan={4}
                      className="py-3 px-6 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400"
                    >
                      {cat.label}
                    </td>
                  </tr>

                  {/* Feature rows */}
                  {cat.rows.map((row, ri) => (
                    <tr
                      key={`${cat.label}-${row.feature}`}
                      className={`border-b border-slate-100 ${ri % 2 === 0 ? "bg-white" : "bg-slate-50/50"}`}
                    >
                      <td className="py-3.5 px-6 text-sm text-slate-600">
                        {row.feature}
                      </td>
                      <td className="py-3.5 px-4">
                        <Cell value={row.starter} isPopular={false} />
                      </td>
                      <td className="py-3.5 px-4 bg-primary/5">
                        <Cell value={row.growth} isPopular={true} />
                      </td>
                      <td className="py-3.5 px-4">
                        <Cell value={row.enterprise} isPopular={false} />
                      </td>
                    </tr>
                  ))}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
