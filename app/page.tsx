"use client";
import EventSection from "@/components/layout/event-section";
import HeroSection from "@/components/layout/hero-section";
import IntroSection from "@/components/layout/intro-section";
import ProfileSection from "@/components/layout/profile-section";
import SurahSection from "@/components/layout/surah-section";
import WishesSection from "@/components/layout/wishes-section";
import ScrollToTop from "@/components/scroll-to-top";
import { useState } from "react";

export default function Home() {
  const [showMain, setShowMain] = useState(false);

  const handleButtonClick = () => {
    setShowMain(true);
  };

  return (
    <>
      {!showMain && (
        <main className="absolute inset-0 z-20">
          <IntroSection onButtonClick={handleButtonClick} />
        </main>
      )}
      {showMain && (
        <main>
          <HeroSection />
          <SurahSection />
          <ProfileSection />
          <EventSection />
          <WishesSection />
          <ScrollToTop />
        </main>
      )}
    </>
  );
}
