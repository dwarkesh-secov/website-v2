"use client";

import { motion } from "framer-motion";

export function Pill({ children, dark = false }) {
  return (
    <motion.p
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className={`text-[10px] font-bold uppercase tracking-[0.2em] mb-4 ${
        dark ? "text-white/35" : "text-slate-400"
      }`}
    >
      {children}
    </motion.p>
  );
}
