"use client";
import { Mail } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Doves from "./icons/doves";

export default function HeroSection() {
  const searchParams = useSearchParams();
  const [isVisible, setIvisible] = useState(false);

  const to = searchParams.get("to");

  const handleButtonClick = () => {
    setIvisible(true);
    scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    if (!isVisible) {
      // Lock scrolling
      document.body.style.overflow = "hidden";
    } else {
      // Unlock scrolling
      document.body.style.overflow = "auto";
    }

    // Cleanup function to unlock scrolling when the component is unmounted or isVisible changes
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isVisible]);

  return (
    <section className="flex flex-col gap-4 items-center justify-center h-screen bg-hero-pattern text-white">
      <div className="flex flex-col items-center">
        <Doves className="size-14 stroke-foreground" />
        <p className="font-poppins uppercase text-foreground font-semibold">
          We Are Getting Married
        </p>
      </div>
      <h1 className="font-niconne text-6xl sm:text-8xl font-bold text-foreground">
        Pipit <span className="text-accent">&</span> Bubung
      </h1>
      <p className="font-poppins font-medium text-foreground">
        15<sup>th</sup> September 2024
      </p>
      {to && (
        <div className="flex flex-col items-center text-sm text-accent">
          <p>
            Dear <span className="font-bold text-foreground">{to}</span>,
          </p>
          <p className="text-center text-sm max-w-xs">
            Kami mengundang Bpk/Ibu/Saudara/i untuk hadir dalam acara pernikahan
            kami.
          </p>
        </div>
      )}
      {!isVisible && (
        <button
          type="button"
          onClick={handleButtonClick}
          className="flex items-center gap-2 px-4 py-2 text-foreground font-medium font-poppins text-sm bg-primary hover:bg-primary/50 rounded-full transition-all ease-in-out duration-300"
        >
          <Mail size={16} />
          <span>Buka Undangan</span>
        </button>
      )}
    </section>
  );
}
