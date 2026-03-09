"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import {
  HeroSoc2,
  IntegrationsMarquee,
  WhoIsItForSoc2,
  FeaturesSoc2,
  ProcessSoc2,
  StatsSoc2,
  TestimonialsSoc2,
  CtaSoc2,
} from "./_sections";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main className="grow">
        <HeroSoc2 />
        <IntegrationsMarquee />
        <WhoIsItForSoc2 />
        <FeaturesSoc2 />
        <ProcessSoc2 />
        <StatsSoc2 />
        <TestimonialsSoc2 />
        <CtaSoc2 />
      </main>
      <Footer />
    </div>
  );
}
