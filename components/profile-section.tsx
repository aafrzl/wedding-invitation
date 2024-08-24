import Image from "next/image";
import React from "react";

export default function ProfileSection() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 px-4 py-14 bg-background">
      <div className="flex items-center gap-x-5 border p-4 w-full lg:w-1/2 rounded-xl bg-secondary">
        <div className="relative">
          <Image
            src="/bride-profile.png"
            alt="Pipit"
            width={200}
            height={200}
            className="rounded-full border-2 border-primary hover:scale-105 transition-all duration-500 ease-in-out cursor-pointer"
          />
          <div className="bg-primary text-white text-center text-sm font-semibold absolute inset-x-0 mx-auto -bottom-2 w-fit py-1 px-2 rounded-full">
            The Bride
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="font-niconne text-2xl sm:text-6xl text-foreground font-semibold">
            Pipit Siti Solehah
          </h2>
          <p className="font-poppins text-accent text-sm sm:text-base">
            Putri dari <br />
            Bapak Engkos <br />& Ibu Elus Lusmanah
          </p>
        </div>
      </div>
      <div className="flex flex-row-reverse items-center gap-x-5 border p-4 w-full lg:w-1/2 rounded-xl bg-secondary">
        <div className="relative">
          <Image
            src="/groom-profile.png"
            alt="Pipit"
            width={200}
            height={200}
            className="rounded-full border-2 border-primary hover:scale-105 transition-all duration-500 ease-in-out cursor-pointer"
          />
          <div className="bg-primary text-white text-center text-sm font-semibold absolute inset-x-0 mx-auto -bottom-2 w-fit py-1 px-2 rounded-full">
            The Groom
          </div>
        </div>
        <div className="flex flex-col gap-2 text-end">
          <h2 className="font-niconne text-2xl sm:text-6xl text-foreground font-semibold">
            Bubung Saeful Milah
          </h2>
          <p className="font-poppins text-accent text-sm sm:text-base">
            Putra dari <br />
            Bapak Saeful Uyun <br />& Ibu Haeti
          </p>
        </div>
      </div>
    </section>
  );
}
