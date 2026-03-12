"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { SITE_CONFIG } from "@/lib/site-config";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/soc-2", label: "SOC 2" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/talk-to-us", label: "Talk to us" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* lock body scroll when menu is open */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const close = () => setMobileOpen(false);

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          mobileOpen
            ? "bg-primary border-b border-white/8"
            : scrolled
              ? "bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm"
              : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 shrink-0"
            aria-label="Secov Home"
          >
            <Image
              src={SITE_CONFIG.logoPath}
              alt="Secov Logo"
              width={120}
              height={32}
              className={`h-8 w-auto transition-all duration-300 ${(!scrolled || mobileOpen) ? "brightness-0 invert" : ""}`}
            />
          </Link>

          {/* Desktop nav */}
          <nav
            className="hidden md:flex items-center gap-7"
            aria-label="Main navigation"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  scrolled
                    ? "text-slate-600 hover:text-primary"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/talk-to-us"
              className={`group flex items-center gap-1.5 text-sm font-bold px-5 py-2.5 rounded-full transition-all ${
                scrolled
                  ? "bg-primary text-white hover:bg-primary-light shadow-md shadow-primary/20"
                  : "bg-white text-primary hover:bg-slate-100 shadow-lg shadow-black/10"
              }`}
            >
              Get Started
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className={`md:hidden p-2 rounded-lg transition-colors z-60 relative ${
              mobileOpen
                ? "text-white hover:bg-white/10"
                : scrolled
                  ? "text-primary hover:bg-slate-100"
                  : "text-white hover:bg-white/10"
            }`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile full-screen menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-primary md:hidden flex flex-col"
          >
            {/* Subtle dot grid */}
            <div
              className="absolute inset-0 opacity-[0.05]"
              style={{
                backgroundImage:
                  "radial-gradient(circle, white 1px, transparent 1px)",
                backgroundSize: "28px 28px",
              }}
            />

            {/* Nav links */}
            <nav className="relative z-10 flex-1 flex flex-col justify-center px-6 pt-16">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -16 }}
                  transition={{ duration: 0.2, delay: 0.05 + i * 0.06 }}
                >
                  <Link
                    href={link.href}
                    onClick={close}
                    className="group flex items-center justify-between py-5 border-b border-white/8 last:border-0"
                  >
                    <span className="text-3xl font-extrabold text-white tracking-tight group-hover:text-white/70 transition-colors">
                      {link.label}
                    </span>
                    <ArrowRight className="w-5 h-5 text-white/20 group-hover:text-white/50 group-hover:translate-x-0.5 transition-all" />
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Bottom CTA area */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 12 }}
              transition={{ duration: 0.22, delay: 0.2 }}
              className="relative z-10 px-6 pb-10 space-y-3 border-t border-white/8 pt-6"
            >
              <Link
              href="/talk-to-us"
                onClick={close}
                className="flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-white text-primary font-bold text-base hover:bg-slate-100 transition-colors"
              >
                Get Started Free
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
