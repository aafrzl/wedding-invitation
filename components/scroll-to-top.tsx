"use client"
import { AnimatePresence, Variants, motion } from "framer-motion";
import { ChevronUp } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useWindowScroll } from "react-use";

const animationsVariants: Variants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0 },
};

export default function ScrollToTop() {
  const [isScrolling, setIsScrolling] = useState(false);
  const { y: scrollY } = useWindowScroll();

  useEffect(() => {
    setIsScrolling(scrollY > 10);
  }, [scrollY]);

  const scrollToTop = () =>
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

  return (
    <AnimatePresence>
      {isScrolling && (
        <motion.div
          className="fixed bottom-4 right-4 z-50"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={animationsVariants}
          transition={{ duration: 0.3 }}
        >
          <button
            className="rounded-xl bg-primary p-2 font-bold text-white shadow-md"
            onClick={scrollToTop}
          >
            <ChevronUp className="size-5 sm:size-8" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
