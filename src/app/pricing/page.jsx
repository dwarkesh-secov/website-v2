"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero, Plans, Comparison, Faq, Cta } from "./_sections";

export default function PricingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main className="grow">
        <Hero />
        <Plans />
        <Comparison />
        <Faq />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}
