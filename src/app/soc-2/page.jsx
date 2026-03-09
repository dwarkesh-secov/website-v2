"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import {
  Hero,
  TypeComparison,
  Benefits,
  Process,
  WhySecov,
  SuccessStories,
  Faq,
  Cta,
} from "./_sections";

export default function Soc2Page() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main className="grow">
        <Hero />
        <TypeComparison />
        <Benefits />
        <Process />
        <WhySecov />
        <SuccessStories />
        <Faq />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}
