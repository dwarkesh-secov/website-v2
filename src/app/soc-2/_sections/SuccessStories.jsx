"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Zap, BarChart3, AlertTriangle } from "lucide-react";
import { Pill } from "./_shared";

const STORIES = [
  {
    category: "FinTech",
    categoryColor: "bg-amber-100 text-amber-700",
    title: "SOC 2 Type I in 8 weeks for a fast-growing FinTech SaaS",
    subtitle: "B2B Payments Platform · USA",
    challenge:
      "Needed SOC 2 compliance quickly to unlock Fortune 500 partnerships but lacked internal compliance expertise and dedicated security staff.",
    solution:
      "Secov delivered a gap assessment, implemented security policies, and automated evidence collection to streamline the entire audit process.",
    results: [
      "SOC 2 Type I in just 8 weeks",
      "70% faster security questionnaire responses",
      "Closed 3 Fortune 500 deals within 90 days",
    ],
  },
  {
    category: "Healthcare",
    categoryColor: "bg-emerald-100 text-emerald-700",
    title: "Zero audit findings for a Healthcare SaaS scaling securely",
    subtitle: "EHR Platform · North America",
    challenge:
      "Required SOC 2 compliance alongside HIPAA to meet regulatory and enterprise customer requirements with no room for audit failures.",
    solution:
      "Deployed continuous monitoring, compliance automation, and policy frameworks tailored for healthcare's unique regulatory environment.",
    results: [
      "Zero major audit findings",
      "50% faster incident response time",
      "Unlocked 2 new regulated markets",
    ],
  },
  {
    category: "Enterprise",
    categoryColor: "bg-violet-100 text-violet-700",
    title: "SOC 2 Type II in under 6 months for a global tech company",
    subtitle: "Global Technology Services · EU",
    challenge:
      "Preparing for SOC 2 Type II was resource-heavy, with evidence scattered across 12 teams and 200+ systems worldwide.",
    solution:
      "Secov centralized documentation, automated evidence collection across 40+ integrations, and guided internal teams through every audit stage.",
    results: [
      "Type II certified in under 6 months",
      "200+ engineering hours saved",
      "Enhanced security controls across all regions",
    ],
  },
];

export function SuccessStories() {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Pill>Success Stories</Pill>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-primary tracking-tight mb-5"
          >
            Customers who got SOC 2 certified with Secov
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-500 leading-relaxed"
          >
            Real results from real companies across FinTech, Healthcare, and Enterprise.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {STORIES.map((story, i) => (
            <motion.div
              key={story.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col bg-slate-50 rounded-3xl border border-slate-200 overflow-hidden hover:shadow-xl hover:border-slate-300 transition-all duration-300"
            >
              <div className="bg-primary p-7 pb-6">
                <span className={`inline-flex text-xs font-bold px-3 py-1 rounded-full mb-4 ${story.categoryColor}`}>
                  {story.category}
                </span>
                <h3 className="text-white font-bold text-lg leading-snug mb-2">{story.title}</h3>
                <p className="text-white/50 text-sm">{story.subtitle}</p>
              </div>
              <div className="flex-1 p-7 space-y-5">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold text-rose-600 uppercase tracking-widest mb-2">
                    <AlertTriangle className="w-3.5 h-3.5" />
                    Challenge
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed">{story.challenge}</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold text-amber-600 uppercase tracking-widest mb-2">
                    <Zap className="w-3.5 h-3.5" />
                    Solution
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed">{story.solution}</p>
                </div>
                <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-4">
                  <div className="flex items-center gap-2 text-xs font-bold text-emerald-700 uppercase tracking-widest mb-3">
                    <BarChart3 className="w-3.5 h-3.5" />
                    Results
                  </div>
                  <ul className="space-y-2">
                    {story.results.map((r) => (
                      <li key={r} className="flex items-center gap-2.5 text-sm text-emerald-800 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
