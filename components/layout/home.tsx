"use client";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import IntroSection from "./intro-section";
import HeroSection from "./hero-section";
import SurahSection from "./surah-section";
import ProfileSection from "./profile-section";
import EventSection from "./event-section";
import WishesSection from "./wishes-section";
import ScrollToTop from "../scroll-to-top";
import AudioPlayer from "../audio-player";

export default function Home({ to }: { to: string }) {
  const [showMain, setShowMain] = useState(false);
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
