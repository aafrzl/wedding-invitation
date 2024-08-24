"use client";
import { Mail } from "lucide-react";
import Doves from "./icons/doves";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

export default function HeroSection() {
  const searchParams = useSearchParams();
  const [isVisible, setIvisible] = useState(false);

  const to = searchParams.get("to");

  const handleButtonClick = () => {
    setIvisible(true);
    //TODO: Scroll to the next section
    scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <section className="flex flex-col gap-4 items-center justify-center h-screen bg-red-500 text-white">
      <div className="flex flex-col items-center">
        <Doves className="size-14" />
        <p className="font-poppins uppercase">We Are Getting Married</p>
      </div>
      <h1 className="font-niconne text-6xl sm:text-8xl font-bold">
        Pipit <span className="text-green-900">&</span> Bubung
      </h1>
      <p className="font-poppins font-semibold">
        15<sup>th</sup> September 2024
      </p>
      {to && (
        <div className="flex flex-col items-center text-sm">
          <p>
            Dear <span className="font-bold">{to}</span>,
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
          className="flex items-center gap-2 px-4 py-2 text-white font-medium font-poppins text-sm bg-green-900 hover:bg-green-600 rounded-full"
        >
          <Mail size={16} />
          <span>Buka Undangan</span>
        </button>
      )}
    </section>
  );
}
