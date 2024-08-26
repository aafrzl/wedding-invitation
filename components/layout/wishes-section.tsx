import { Send } from "lucide-react";
import { useSearchParams } from "next/navigation";
import React from "react";
import Marquee from "../marquee";
import { wishes } from "@/lib/constants";
import CardWishes from "../card-wishes";

export default function WishesSection() {
  const searchParams = useSearchParams();
  const to = searchParams.get("to");

  const firstRow = wishes.slice(0, wishes.length / 2);
  const secondRow = wishes.slice(wishes.length / 2);

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center container mx-auto py-10">
      <div className="flex flex-col gap-4">
        <div className="space-y-2 max-w-md text-center sm:text-left">
          <h2 className="font-niconne text-5xl text-foreground">
            Ucapan & Doa Untuk Kedua Mempelai
          </h2>
          <p className="font-poppins text-accent">
            Tuliskan ucapan dan doa terbaikmu untuk kedua mempelai.
          </p>
        </div>
        <div className="bg-secondary p-6 w-[450px] sm:w-[500px] rounded-xl">
          <form className="flex flex-col gap-4">
            <input
              type="text"
              className="w-full p-2 border rounded-xl"
              placeholder="Nama"
              defaultValue={to || ""}
            />
            <textarea
              className="w-full p-2 border rounded-xl min-h-[150px]"
              placeholder="Tulis ucapan dan doa terbaikmu disini..."
              rows={3}
            />
            <button
              type="submit"
              className="w-full bg-primary text-white font-bold py-2 rounded-xl shadow-sm transition-all duration-300 ease-in-out hover:bg-accent flex items-center justify-center gap-2"
            >
              <Send className="size-5" />
              <span>Kirim Ucapan</span>
            </button>
          </form>
        </div>
      </div>
      <div className="hidden relative sm:flex h-[600px] w-fit flex-row items-center justify-center overflow-hidden">
        <Marquee
          pauseOnHover
          vertical
          className="[--duration:150s]"
        >
          {firstRow.map((wish, i) => (
            <CardWishes
              key={i}
              {...wish}
            />
          ))}
        </Marquee>
        <Marquee
          reverse
          pauseOnHover
          vertical
          className="[--duration:150s]"
        >
          {secondRow.map((wish, i) => (
            <CardWishes
              key={i}
              {...wish}
            />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[20%] bg-gradient-to-b from-white" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[20%] bg-gradient-to-t from-white" />
      </div>
      <div className="flex relative sm:hidden w-full flex-col items-center justify-center overflow-hidden">
        <Marquee
          pauseOnHover
          className="[--duration:150s]"
        >
          {firstRow.map((wish, i) => (
            <CardWishes
              key={i}
              {...wish}
            />
          ))}
        </Marquee>
        <Marquee
          reverse
          pauseOnHover
          className="[--duration:150s]"
        >
          {secondRow.map((wish, i) => (
            <CardWishes
              key={i}
              {...wish}
            />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-[15%] bg-gradient-to-r from-white dark:from-background" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-[15%] bg-gradient-to-l from-white dark:from-background" />
      </div>
    </section>
  );
}
