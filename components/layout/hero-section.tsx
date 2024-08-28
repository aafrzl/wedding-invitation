"use client";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { FADE_UP_ANIMATION_VARIANTS } from "@/lib/animations";

export default function HeroSection({ to }: { to: string }) {
  return (
    <section
      id="home"
      className="flex flex-col items-center justify-center px-4 bg-background h-screen bg-hero-pattern"
    >
      <motion.div
        initial="hidden"
        animate="show"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.15 } },
        }}
        className="flex flex-col gap-4 w-full sm:w-1/2"
      >
        <motion.h1
          variants={FADE_UP_ANIMATION_VARIANTS}
          className="font-niconne font-bold text-5xl sm:text-7xl text-foreground"
        >
          Assalamualaikum, <br />
          <span className="font-extrabold font-poppins text-4xl sm:text-6xl">
            {to}
          </span>
        </motion.h1>
        <motion.hr
          variants={FADE_UP_ANIMATION_VARIANTS}
          className="w-full h-1 bg-accent my-4"
          style={{ width: "4rem" }}
        />
        <motion.p
          variants={FADE_UP_ANIMATION_VARIANTS}
          className="font-poppins font-medium text-accent text-base sm:text-xl"
        >
          Dengan penuh rasa syukur, kami mengundang Bapak/Ibu/Saudara/i untuk
          hadir dalam acara pernikahan kami dan menyaksikan kami saat
          mengucapkan janji suci di hadapan untuk memulai perjalanan baru kami.
        </motion.p>
      </motion.div>
    </section>
  );
}
