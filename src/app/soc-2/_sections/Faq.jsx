"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { Pill } from "./_shared";

const FAQS = [
  {
    q: "What is SOC 2 compliance?",
    a: "SOC 2 is a security framework designed to ensure that service providers securely manage customer data. It focuses on five Trust Service Criteria: **Security, Availability, Processing Integrity, Confidentiality, and Privacy.** Security is always required; the others are chosen based on your business context.",
  },
  {
    q: "Why is SOC 2 important for my business?",
    a: "SOC 2 compliance demonstrates to customers and partners that your organization has implemented robust security controls to protect their data. It builds trust, accelerates sales cycles by eliminating security questionnaires, and gives you a measurable competitive advantage in the market.",
  },
  {
    q: "How long does it take to achieve SOC 2 compliance?",
    a: "With Secov, SOC 2 Type I can be achieved in as few as 3-8 weeks. Type II typically requires a 3-12 month observation period. The timeline depends on your current security posture — our gap assessment (delivered in 48 hours) gives you a precise roadmap.",
  },
  {
    q: "What is the difference between SOC 2 Type I and Type II?",
    a: "SOC 2 **Type I** evaluates whether controls are properly designed at a specific point in time. SOC 2 **Type II** tests the operating effectiveness of those controls over a period of time (usually 3-12 months). Type II is more comprehensive and is increasingly required by enterprise customers.",
  },
  {
    q: "Do startups and small businesses need SOC 2?",
    a: "Yes — many enterprise customers require SOC 2 before signing any contract, regardless of vendor size. Getting compliant early helps establish credibility, eliminates future friction, and prevents the mad scramble that comes when a big deal is blocked by missing compliance.",
  },
  {
    q: "How does Secov automate SOC 2 compliance?",
    a: "Secov integrates with 40+ tools in your stack (AWS, GCP, Azure, GitHub, Jira, and more) and runs 147+ automated compliance tests continuously. Evidence is collected automatically, controls are monitored 24/7, and you are always audit-ready.",
  },
  {
    q: "What frameworks does Secov support beyond SOC 2?",
    a: "Secov supports 50+ compliance frameworks including SOC 2, ISO 27001, HIPAA, GDPR, PCI-DSS, NIST CSF, SOC 1, and more. Many controls are shared across frameworks — so getting SOC 2 puts you significantly ahead for any subsequent framework.",
  },
];

export function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <section className="py-28 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Pill>FAQ</Pill>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-primary tracking-tight mb-5"
          >
            Frequently asked questions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-500"
          >
            Everything you need to know about SOC 2 compliance and how Secov can help.
          </motion.p>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="bg-white border border-slate-200 rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-7 py-5 text-left group"
              >
                <span className={`font-semibold text-base leading-snug pr-4 transition-colors ${open === i ? "text-accent" : "text-primary group-hover:text-accent"}`}>
                  {faq.q}
                </span>
                <Plus
                  className={`w-5 h-5 shrink-0 text-slate-400 transition-transform duration-300 ${open === i ? "rotate-45 text-accent" : ""}`}
                />
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.28, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div
                      className="px-7 pb-6 text-slate-500 text-sm leading-relaxed"
                      dangerouslySetInnerHTML={{
                        __html: faq.a.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>"),
                      }}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
