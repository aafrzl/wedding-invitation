import React from "react";
import Marquee from "./marquee";
import CardWishes from "./card-wishes";
import { GuestWishes } from "@prisma/client";

interface Props {
  wishes: GuestWishes[];
  isLoading: boolean;
  error: any;
}

export function WishesGuestDesktop({ wishes, isLoading, error }: Props) {
  if (isLoading)
    return (
      <div className="flex h-[600px] w-fit flex-row items-center justify-center">
        <p className="text-center text-accent">Memuat ucapan...</p>
      </div>
    );

  if (error)
    return (
      <div className="flex h-[600px] w-fit flex-row items-center justify-center">
        <p className="text-center text-accent">Gagal memuat ucapan.</p>
      </div>
    );

  if (wishes.length === 0)
    return (
      <div className="flex h-[600px] w-fit flex-row items-center justify-center">
        <p className="text-center text-accent">Belum ada ucapan.</p>
      </div>
    );

  const firstRow = wishes.slice(0, wishes.length / 2);
  const secondRow = wishes.slice(wishes.length / 2);

  return (
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
  );
}

export function WishesGuestMobile({ wishes, isLoading, error }: Props) {
  if (isLoading)
    return (
      <div className="flex h-[600px] w-fit flex-row items-center justify-center">
        <p className="text-center text-accent">Memuat ucapan...</p>
      </div>
    );

  if (error)
    return (
      <div className="flex h-[600px] w-fit flex-row items-center justify-center">
        <p className="text-center text-accent">Gagal memuat ucapan.</p>
      </div>
    );

  if (wishes.length === 0)
    return (
      <div className="flex h-[600px] w-fit flex-row items-center justify-center">
        <p className="text-center text-accent">Belum ada ucapan.</p>
      </div>
    );

  const firstRow = wishes.slice(0, wishes.length / 2);
  const secondRow = wishes.slice(wishes.length / 2);

  return (
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
  );
}
