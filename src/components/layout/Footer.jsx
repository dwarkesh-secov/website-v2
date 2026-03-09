"use client";

import { SITE_CONFIG } from "@/lib/site-config";
import { ArrowRight, Github, Linkedin, Shield, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const NAV_LINKS = [
  { href: "#integrations", label: "Integrations" },
  { href: "/about", label: "About Us" },
];

const SOCIAL_LINKS = [
  { href: "#", icon: Twitter, label: "Twitter" },
  { href: "#", icon: Linkedin, label: "LinkedIn" },
  { href: "#", icon: Github, label: "GitHub" },
];

const LEGAL_LINKS = [
  { href: "#", label: "Privacy Policy" },
  { href: "#", label: "Terms of Service" },
];

export function Footer() {
  return (
    <footer className="bg-primary">
      {/* Top CTA strip */}
      <div className="border-b border-white/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-white font-bold text-lg mb-1">
              Ready to get SOC 2 certified?
            </p>
            <p className="text-white/50 text-sm">
              Start free — your gap assessment is ready in 48 hours.
            </p>
          </div>
          <Link
            href={SITE_CONFIG.demoUrl}
            className="group flex items-center gap-2 px-6 py-3 rounded-lg bg-white text-primary font-bold text-sm hover:bg-slate-100 transition-colors whitespace-nowrap shrink-0"
          >
            Get Started Free
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </div>

      {/* Main footer body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-10">
          {/* Brand block */}
          <div className="max-w-sm">
            <Link
              href="/"
              aria-label="Secov Home"
              className="inline-block mb-5"
            >
              <Image
                src={SITE_CONFIG.logoPath}
                alt="Secov Logo"
                width={130}
                height={36}
                className="h-9 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              The modern compliance platform for ambitious companies. Get SOC 2
              certified faster, build customer trust, and close bigger deals.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-2">
              {SOCIAL_LINKS.map(({ href, icon: Icon, label }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-white/6 border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/12 hover:border-white/20 transition-all"
                >
                  <Icon className="w-4 h-4" />
                </Link>
              ))}
            </div>
          </div>

          {/* Nav links + SOC 2 badge */}
          <div className="flex flex-col gap-8 md:items-end">
            {/* Nav */}
            <nav className="flex flex-wrap gap-x-8 gap-y-3">
              {NAV_LINKS.map(({ href, label }) => (
                <Link
                  key={label}
                  href={href}
                  className="text-white/50 text-sm font-medium hover:text-white transition-colors"
                >
                  {label}
                </Link>
              ))}
            </nav>

            {/* SOC 2 badge */}
            <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5 border border-white/10">
              <div className="w-9 h-9 rounded-lg bg-white/8 border border-white/12 flex items-center justify-center shrink-0">
                <Shield className="w-4 h-4 text-white/50" />
              </div>
              <div>
                <div className="text-xs font-bold text-white leading-tight">
                  Secov is SOC 2 Type II certified
                </div>
                <div className="text-[11px] text-white/40 font-medium mt-0.5">
                  We practice what we preach
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/35 text-xs font-medium">
            © {new Date().getFullYear()} Secov Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            {LEGAL_LINKS.map(({ href, label }) => (
              <Link
                key={label}
                href={href}
                className="text-white/35 text-xs font-medium hover:text-white/70 transition-colors"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
