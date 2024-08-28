"use client";
import AudioPlayer from "@/components/audio-player";
import EventSection from "@/components/layout/event-section";
import HeroSection from "@/components/layout/hero-section";
import IntroSection from "@/components/layout/intro-section";
import ProfileSection from "@/components/layout/profile-section";
import SurahSection from "@/components/layout/surah-section";
import WishesSection from "@/components/layout/wishes-section";
import ScrollToTop from "@/components/scroll-to-top";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

interface Props {
  searchParams: {
    to: string;
  };
}

export default function Home({ searchParams }: Props) {
  const [showMain, setShowMain] = useState(false);
  const { to } = searchParams;

  const handleButtonClick = () => {
    setShowMain(true);
  };

  return (
    <>
      {!showMain && (
        <AnimatePresence>
          <motion.main
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ type: "spring" }}
            className="absolute inset-0 z-20"
          >
            <IntroSection
              onButtonClick={handleButtonClick}
              to={to}
            />
          </motion.main>
        </AnimatePresence>
      )}
      {showMain && (
        <main>
          <HeroSection to={to} />
          <SurahSection />
          <ProfileSection />
          <EventSection />
          <WishesSection to={to} />
          <ScrollToTop />
          <AudioPlayer
            src="/audio.mp3"
            isOpened={showMain}
          />
        </main>
      )}
    </>
  );
}
