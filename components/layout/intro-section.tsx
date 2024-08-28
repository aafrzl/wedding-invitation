"use client";
import { AnimatePresence, motion } from "framer-motion";
import { Mail } from "lucide-react";
import { useSearchParams } from "next/navigation";
import React from "react";
import Doves from "../icons/doves";

interface Props {
  onButtonClick: () => void;
}

export default function IntroSection({ onButtonClick }: Props) {
  const searchParams = useSearchParams();
  const to = searchParams.get("to");

  const text = "15 September 2024";
  const [displayedText, setDisplayedText] = React.useState("");
  const [i, setI] = React.useState(0);

  React.useEffect(() => {
    const typingEffect = setInterval(() => {
      if (i < text.length) {
        setDisplayedText((prevState) => prevState + text.charAt(i));
        setI(i + 1);
      } else {
        clearInterval(typingEffect);
      }
    }, 200);

    return () => {
      clearInterval(typingEffect);
    };
  }, [i]);

  if (to === undefined) return null;

  return (
    <AnimatePresence>
      <section className="flex flex-col gap-4 items-center justify-center h-screen bg-hero-pattern text-white">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring" }}
          exit={{ opacity: 0, y: 10 }}
          className="flex flex-col items-center"
        >
          <Doves className="size-14 stroke-foreground" />
          <p className="font-poppins uppercase text-foreground font-semibold">
            We Are Getting Married
          </p>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", duration: 1.5, delay: 0.2 }}
          exit={{ opacity: 0, y: 10 }}
          className="font-niconne text-6xl sm:text-8xl font-bold text-foreground"
        >
          Pipit <span className="text-accent">&</span> Bubung
        </motion.h1>
        <p className="font-poppins font-medium text-foreground">
          {displayedText}
        </p>
        {to && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", duration: 1.5, delay: 0.5 }}
            exit={{ opacity: 0, y: 10 }}
            className="flex flex-col items-center text-sm text-accent"
          >
            <p className="font-medium">
              Undangan untuk{" "}
              <span className="font-bold text-foreground">{to}</span> dari kami
              berdua 💌
            </p>
          </motion.div>
        )}
        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            duration: 1,
          }}
          exit={{ opacity: 0, y: 10 }}
          type="button"
          onClick={onButtonClick}
          className="flex items-center gap-2 px-4 py-2 text-foreground font-medium font-poppins text-sm bg-primary hover:bg-primary/50 rounded-full transition-all ease-in-out duration-300"
        >
          <Mail size={16} />
          <span>Buka Undangan</span>
        </motion.button>
      </section>
    </AnimatePresence>
  );
}
