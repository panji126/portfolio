"use client";

import { useState } from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import PortfolioTabs from "../components/PortfolioTabs";
import ContactSection from "../components/ContactSection";
import IntroLoader from "../components/Introloader";

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <>
      <IntroLoader onLoadingComplete={() => setShowIntro(false)} />
      {!showIntro && (
        <div className="flex flex-col gap-24 md:gap-32 px-4 md:px-8 max-w-7xl mx-auto">
          <Hero />
          <About />
          <PortfolioTabs />
          <ContactSection />
        </div>
      )}
    </>
  );
}