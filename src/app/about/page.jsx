"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import {
  Hero,
  WhatWeDo,
  Integrations,
  WhoIsItFor,
  Values,
  TrustStrip,
  Cta,
} from "./_sections";

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <WhatWeDo />
        <Integrations />
        <WhoIsItFor />
        <Values />
        <TrustStrip />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
