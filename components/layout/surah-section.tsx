"use client"
import { FADE_DOWN_ANIMATION_VARIANTS } from "@/lib/animations";
import { motion, useScroll, useTransform } from "framer-motion";
import { Heart } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

export default function SurahSection() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  //RotateX animation
  const rotateX = useTransform(scrollYProgress, [0, 1], [15, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  return (
    <section
      id="surah"
      className="flex flex-col items-center justify-center px-4 sm:px-10 relative h-screen border-y-4 border-secondary"
    >
      <Image
        src={"/bg-surah-section.png"}
        alt="Bismillah"
        fill
        className="absolute inset-0 object-cover -z-10"
      />
      <div className="absolute inset-0 bg-background opacity-50 -z-10" />
      <motion.div
        ref={containerRef}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true }}
        variants={{
          show: {
            transition: { staggerChildren: 0.15 },
          },
        }}
        className="w-full sm:max-w-2xl space-y-2 flex flex-col gap-4 items-center bg-background/10 backdrop-blur-lg p-4 shadow-lg rounded-xl text-foreground text-center z-10"
        style={{
          opacity: opacity,
          rotateX: rotateX,
          transformPerspective: "1000px",
        }}
      >
        <motion.img
          variants={FADE_DOWN_ANIMATION_VARIANTS}
          src={"/bismillah.png"}
          alt="Bismillah"
          width={250}
          height={150}
        />
        <motion.p
          variants={FADE_DOWN_ANIMATION_VARIANTS}
          className="font-niconne text-3xl sm:text-5xl"
        >
          وَمِنْ اٰيٰتِهٖٓ اَنْ خَلَقَ لَكُمْ مِّنْ اَنْفُسِكُمْ اَزْوَاجًا
          لِّتَسْكُنُوْٓا اِلَيْهَا وَجَعَلَ بَيْنَكُمْ مَّوَدَّةً وَّرَحْمَةًۗ
          اِنَّ فِيْ ذٰلِكَ لَاٰيٰتٍ لِّقَوْمٍ يَّتَفَكَّرُوْنَ
        </motion.p>
        <motion.q
          variants={FADE_DOWN_ANIMATION_VARIANTS}
          className="font-niconne text-lg sm:text-2xl mt-4"
        >
          Di antara tanda-tanda (kebesaran)-Nya ialah bahwa Dia menciptakan
          pasangan-pasangan untukmu dari (jenis) dirimu sendiri agar kamu merasa
          tenteram kepadanya. Dia menjadikan di antaramu rasa cinta dan kasih
          sayang. Sesungguhnya pada yang demikian itu benar-benar terdapat
          tanda-tanda (kebesaran Allah) bagi kaum yang berpikir.
        </motion.q>
        <Heart className="size-5 stroke-accent" />
      </motion.div>
    </section>
  );
}
