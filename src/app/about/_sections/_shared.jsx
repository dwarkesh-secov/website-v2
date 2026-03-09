"use client";

import { motion } from "framer-motion";

export function Pill({ children }) {
  return (
    <motion.p
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-4"
    >
      {children}
    </motion.p>
  );
}
