"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ArrowRight, Zap, TrendingUp, Building2 } from "lucide-react";
import { SITE_CONFIG } from "@/lib/site-config";

const PLANS = [
  {
    id: "starter",
    icon: Zap,
    name: "Starter",
    tagline: "For startups pursuing their first SOC 2 Type I audit.",
    basePrice: 6500,
    note: "Up to 50 employees",
    cta: "Book a Demo",
    href: "/talk-to-us",
    features: [
      "SOC 2 Type I framework",
      "5 pre-built integrations",
      "20+ auditor-approved policy templates",
      "Automated evidence collection",
      "Compliance score dashboard",
      "Dataroom & evidence storage",
      "Employee onboarding workflows",
      "Jira / Linear remediation tickets",
      "Auditor-friendly dashboard",
      "Email support",
    ],
  },
  {
    id: "growth",
    icon: TrendingUp,
    name: "Growth",
    tagline: "For scaling teams that need continuous SOC 2 Type II compliance.",
    basePrice: 10500,
    note: "Up to 200 employees",
    cta: "Book a Demo",
    href: "/talk-to-us",
    popular: true,
    features: [
      "SOC 2 Type II",
      "20+ integrations (AWS, GitHub, Okta…)",
      "50+ policy templates",
      "Continuous 24/7 monitoring",
      "Compliance score dashboard",
      "Automated access reviews",
      "Risk management & register",
      "Vendor management & questionnaires",
      "Security questionnaire responses",
      "Pen test evidence tracking",
      "Background check tracking",
      "Jira / Linear remediation tickets",
      "Change management tracking",
      "Security training (KnowBe4)",
      "User groups & RBAC",
      "Onboarding assistance",
      "Priority support",
    ],
  },
  {
    id: "enterprise",
    icon: Building2,
    name: "Enterprise",
    tagline:
      "For organizations that need SOC 2 at scale with every integration and control.",
    basePrice: null,
    note: "Unlimited employees",
    cta: "Talk to Sales",
    href: "/talk-to-us",
    features: [
      "SOC 2 Type I & Type II",
      "40+ integrations + custom API",
      "AI-assisted risk identification",
      "Security questionnaire automation",
      "Sub-processor management",
      "Trust Center for stakeholders",
      "Downloadable evidence packages",
      "Custom audit reports & white-label",
      "Custom roles & permissions",
      "Dedicated Customer Success Manager",
      "SLA guarantee (99.9% uptime)",
      "SSO / SAML login",
      "Multiple workspaces",
      "Custom security review workflows",
    ],
  },
];

const DISCOUNT = 0.2; // 20% off for 2-year

function formatPrice(base, twoYear) {
  if (base === null) return "Custom";
  const price = twoYear ? Math.round(base * (1 - DISCOUNT)) : base;
  return `$${price.toLocaleString()}`;
}

export function Plans() {
  const [twoYear, setTwoYear] = useState(true);

  return (
    <section className="py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Billing toggle */}
        <div className="flex items-center justify-center mb-10">
          <div className="inline-flex items-center gap-1 p-1 rounded-xl bg-white border border-slate-200">
            <button
              type="button"
              onClick={() => setTwoYear(false)}
              className={`relative px-5 py-2 rounded-lg text-sm font-semibold transition-colors ${
                !twoYear
                  ? "bg-primary text-white"
                  : "text-slate-500 hover:text-primary"
              }`}
            >
              1 Year
            </button>
            <button
              type="button"
              onClick={() => setTwoYear(true)}
              className={`relative flex items-center gap-2 px-5 py-2 rounded-lg text-sm font-semibold transition-colors ${
                twoYear
                  ? "bg-primary text-white"
                  : "text-slate-500 hover:text-primary"
              }`}
            >
              2 Years
              <span
                className={`text-[10px] font-bold px-1.5 py-0.5 rounded-md transition-colors ${
                  twoYear
                    ? "bg-white/20 text-white"
                    : "bg-green-50 text-green-600 border border-green-200"
                }`}
              >
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* Plan cards — pt-6 gives room for the floating badge */}
        <div className="grid md:grid-cols-3 gap-6 items-stretch pt-6">
          {PLANS.map((plan, i) => {
            const Icon = plan.icon;
            const isPopular = plan.popular;
            const displayPrice = formatPrice(plan.basePrice, twoYear);
            const originalPrice =
              twoYear && plan.basePrice
                ? `$${plan.basePrice.toLocaleString()}`
                : null;

            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className={`relative flex flex-col rounded-2xl ${
                  isPopular
                    ? "bg-primary text-white shadow-2xl shadow-primary/40 ring-1 ring-primary md:-mt-6 md:mb-0"
                    : "bg-white border border-slate-200"
                }`}
              >
                {/* Popular — floating badge + accent top bar */}
                {isPopular && (
                  <>
                    <div className="absolute -top-px inset-x-0 h-[3px] bg-white/25 rounded-t-2xl" />
                    <div className="absolute -top-[18px] left-1/2 -translate-x-1/2 whitespace-nowrap">
                      <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white text-primary text-[10px] font-black uppercase tracking-[0.15em] shadow-md shadow-primary/20">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                        Most Popular
                      </span>
                    </div>
                  </>
                )}

                {/* Inner content — extra top padding on popular to clear the badge */}
                <div className={`flex flex-col flex-1 p-8 ${isPopular ? "pt-9" : ""}`}>

                {/* Icon */}
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center mb-5 ${
                    isPopular ? "bg-white/10" : "bg-slate-100"
                  }`}
                >
                  <Icon
                    className={`w-5 h-5 ${isPopular ? "text-white/70" : "text-slate-600"}`}
                  />
                </div>

                <p
                  className={`text-[10px] font-bold uppercase tracking-[0.2em] mb-1 ${
                    isPopular ? "text-white/40" : "text-slate-400"
                  }`}
                >
                  {plan.name}
                </p>

                <p
                  className={`text-sm leading-relaxed mb-6 ${
                    isPopular ? "text-white/55" : "text-slate-500"
                  }`}
                >
                  {plan.tagline}
                </p>

                {/* Price */}
                <div className="mb-1 flex items-end gap-2">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={displayPrice}
                      initial={{ opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 6 }}
                      transition={{ duration: 0.18 }}
                      className={`text-5xl font-black tracking-tight ${
                        isPopular ? "text-white" : "text-primary"
                      }`}
                    >
                      {displayPrice}
                    </motion.span>
                  </AnimatePresence>

                  {/* Strikethrough original price */}
                  {originalPrice && plan.basePrice && (
                    <AnimatePresence>
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className={`text-sm line-through mb-1.5 ${
                          isPopular ? "text-white/30" : "text-slate-300"
                        }`}
                      >
                        {originalPrice}
                      </motion.span>
                    </AnimatePresence>
                  )}

                  {plan.basePrice && (
                    <span
                      className={`text-sm mb-1.5 ${isPopular ? "text-white/40" : "text-slate-400"}`}
                    >
                      /year
                    </span>
                  )}
                </div>

                <p
                  className={`text-xs mb-8 ${isPopular ? "text-white/30" : "text-slate-400"}`}
                >
                  {plan.note}
                  {twoYear && plan.basePrice ? " · billed every 2 years" : ""}
                </p>

                {/* CTA */}
                <Link
                  href={plan.href}
                  className={`group flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-bold text-sm transition-colors mb-8 ${
                    isPopular
                      ? "bg-white text-primary hover:bg-slate-100"
                      : "border border-slate-200 text-primary hover:bg-slate-50"
                  }`}
                >
                  {plan.cta}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>

                {/* Divider */}
                <div
                  className={`border-t mb-6 ${isPopular ? "border-white/10" : "border-slate-100"}`}
                />

                {/* Feature list */}
                <ul className="space-y-3 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <Check
                        className={`w-4 h-4 mt-0.5 shrink-0 ${isPopular ? "text-white/50" : "text-slate-400"}`}
                      />
                      <span
                        className={`text-sm ${isPopular ? "text-white/70" : "text-slate-600"}`}
                      >
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>
                </div>{/* end inner padding div */}
              </motion.div>
            );
          })}
        </div>

        {/* Fine print */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-center text-xs text-slate-400 mt-8"
        >
          {twoYear
            ? "20% discount applied for 2-year commitment. Billed upfront in USD."
            : "All plans billed annually. Prices shown in USD."}{" "}
          Custom pricing available for larger organizations.{" "}
          <Link
            href="/talk-to-us"
            className="underline hover:text-slate-600 transition-colors"
          >
            Talk to us
          </Link>{" "}
          for a tailored quote.
        </motion.p>
      </div>
    </section>
  );
}
