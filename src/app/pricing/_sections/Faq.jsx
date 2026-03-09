"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const FAQS = [
  {
    q: "Is there a free trial available?",
    a: "We offer a guided demo so you can see the platform in action before committing. Book a 30-minute session with our team and we'll walk you through the features most relevant to your compliance goals.",
  },
  {
    q: "What counts as an 'employee' for plan limits?",
    a: "An employee is any person who appears in your connected HR or identity system (e.g. Google Workspace, Okta, JumpCloud). Contractors and service accounts that are manually added to Secov do not count against your employee limit.",
  },
  {
    q: "Can I switch plans as my team grows?",
    a: "Yes. You can upgrade at any time — your billing is prorated so you only pay for the difference. Downgrading takes effect at the next annual renewal.",
  },
  {
    q: "Do you offer monthly billing?",
    a: "All published plans are billed annually. If you need monthly billing, talk to our sales team — we can accommodate this on Enterprise plans.",
  },
  {
    q: "What frameworks are included in Enterprise?",
    a: "Enterprise includes all 12+ frameworks: SOC 2 (Type I & II), ISO 27001, HIPAA, GDPR, PCI-DSS, SOC 3, NIST CSF, NIST 800-53, CMMC, FedRAMP Advisory, ISO/IEC 27701, and Cyber Essentials. Additional custom frameworks can be mapped on request.",
  },
  {
    q: "How quickly can we get audit-ready?",
    a: "With Secov's automation, most teams complete a gap assessment in under 48 hours and become audit-ready in as little as 21 days. Timeline depends on your starting posture and chosen framework.",
  },
  {
    q: "What integrations are available on the Starter plan?",
    a: "Starter includes 5 core integrations to cover your most critical evidence sources. Most teams choose GitHub (or GitLab), Google Workspace (or Microsoft 365), AWS, Slack, and one identity provider. You can upgrade to Growth at any time to unlock 20+ integrations.",
  },
  {
    q: "Is my data secure with Secov?",
    a: "Yes. Secov is itself SOC 2 Type II certified. All data is encrypted in transit (TLS 1.3) and at rest (AES-256). Evidence files are stored in S3 with presigned URLs that expire after each access. We hold 99.9% uptime SLAs on Enterprise plans.",
  },
];

function FaqItem({ q, a, isOpen, onToggle }) {
  return (
    <div className="border-b border-slate-100">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 py-5 text-left"
        type="button"
      >
        <span className="text-base font-semibold text-primary">{q}</span>
        <span className="shrink-0 w-7 h-7 rounded-lg bg-slate-100 flex items-center justify-center">
          {isOpen ? (
            <Minus className="w-3.5 h-3.5 text-slate-600" />
          ) : (
            <Plus className="w-3.5 h-3.5 text-slate-600" />
          )}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-sm text-slate-500 leading-relaxed pr-10">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-4">
            FAQ
          </p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-extrabold text-primary tracking-tight"
          >
            Common questions
          </motion.h2>
        </div>

        <div>
          {FAQS.map((item, i) => (
            <FaqItem
              key={item.q}
              q={item.q}
              a={item.a}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
