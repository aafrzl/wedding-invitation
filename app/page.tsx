"use client";
import EventSection from "@/components/event-section";
import HeroSection from "@/components/hero-section";
import IntroSection from "@/components/intro-section";
import ProfileSection from "@/components/profile-section";
import SurahSection from "@/components/surah-section";
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
        </main>
      )}
    </>
  );
}
