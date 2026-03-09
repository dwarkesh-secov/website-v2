"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { SITE_CONFIG } from "@/lib/site-config";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { href: "#benefits", label: "Benefits" },
  { href: "#features", label: "Platform" },
  { href: "#process", label: "How It Works" },
  { href: "#integrations", label: "Integrations" },
  { href: "/soc-2", label: "SOC 2" },
  { href: "/about", label: "About" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled
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
              className={`h-8 w-auto transition-all duration-300 ${!scrolled ? "brightness-0 invert" : ""}`}
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
              href={SITE_CONFIG.demoUrl}
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

          {/* Mobile menu button */}
          <button
            className={`md:hidden p-2 rounded-lg transition-colors ${
              scrolled
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

      {/* Mobile nav drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 inset-x-0 z-40 bg-white border-b border-slate-200 shadow-xl md:hidden"
          >
            <div className="px-4 py-6 space-y-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-3 rounded-xl text-base font-semibold text-slate-700 hover:bg-slate-50 hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-slate-100 space-y-2 mt-2">
                <Link
                  href={`${SITE_CONFIG.appUrl}/login`}
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-3 rounded-xl text-base font-semibold text-slate-600 hover:bg-slate-50 transition-colors"
                >
                  Log in
                </Link>
                <Link
                  href={SITE_CONFIG.demoUrl}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center gap-2 w-full px-4 py-3.5 rounded-xl bg-primary text-white font-bold text-base hover:bg-primary-light transition-colors"
                >
                  Get Started Free <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
