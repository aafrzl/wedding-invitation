"use client";
import { useSearchParams } from "next/navigation";

export default function HeroSection() {
  const searchParams = useSearchParams();
  const to = searchParams.get("to");

  return (
    <section
      id="home"
      className="flex flex-col items-center justify-center px-4 bg-background h-screen bg-hero-pattern"
    >
      <div className="flex flex-col gap-4 w-full sm:w-1/2">
        <h1 className="font-niconne font-bold text-5xl sm:text-7xl text-foreground">
          Assalamualaikum, <br />
          <span className="font-extrabold font-poppins text-4xl sm:text-6xl">
            {to}
          </span>
        </h1>
        <hr
          className="w-full h-1 bg-accent my-4"
          style={{ width: "4rem" }}
        />
        <p className="font-poppins font-medium text-accent text-base sm:text-xl">
          Dengan penuh rasa syukur, kami mengundang Bapak/Ibu/Saudara/i untuk
          hadir dalam acara pernikahan kami dan menyaksikan kami saat
          mengucapkan janji suci di hadapan untuk memulai perjalanan baru kami.
        </p>
      </div>
    </section>
  );
}
