"use client";
import React, { useState } from "react";
import Doves from "./icons/doves";
import { useSearchParams } from "next/navigation";
import { Mail } from "lucide-react";

interface Props {
  onButtonClick: () => void;
}

export default function IntroSection({ onButtonClick }: Props) {
  const searchParams = useSearchParams();
  const to = searchParams.get("to");

  if (to === undefined) return null;

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
          <p className="font-medium">
            Undangan untuk{" "}
            <span className="font-bold text-foreground">{to}</span> dari kami
            berdua 💌
          </p>
        </div>
      )}
      <button
        type="button"
        onClick={onButtonClick}
        className="flex items-center gap-2 px-4 py-2 text-foreground font-medium font-poppins text-sm bg-primary hover:bg-primary/50 rounded-full transition-all ease-in-out duration-300"
      >
        <Mail size={16} />
        <span>Buka Undangan</span>
      </button>
    </section>
  );
}
