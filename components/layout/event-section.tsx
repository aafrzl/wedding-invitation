import React from "react";
import CountdownTimer from "../countdown-timer";
import { Calendar, CalendarCheck, Clock, MapPin } from "lucide-react";

export default function EventSection() {
  // date of the event 15 September 2024 08:00AM convert into ISO string format
  const date = new Date("2024-09-15T00:00:00");

  return (
    <section 
    id="event"
    className="flex flex-col items-center justify-center py-12 bg-event relative border-y-4 border-primary">
      <div className="absolute inset-0 bg-background opacity-50 -z-0" />
      <h2 className="font-niconne text-7xl shadow-sm text-foreground z-10">
        Detail Acara
      </h2>
      <div className="flex flex-col gap-8 items-center w-[450px] sm:w-[600px] z-10 border p-4 bg-primary/20 backdrop-blur-md rounded-xl mt-10">
        <CountdownTimer date={date} />
        <p className="font-niconne font-bold text-4xl text-foreground">
          15 September 2024
        </p>
        <div className="grid grid-cols-2 gap-5">
          <div className="flex flex-col gap-2 items-center p-4 bg-background rounded-xl shadow-sm">
            <p className="text-3xl font-niconne text-foreground">Akad</p>
            <div className="flex items-center gap-x-1 text-accent">
              <Clock className="size-5" />
              <span className="text-base sm:text-xl font-semibold">
                08:00 WIB - Selesai
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-2 items-center p-4 bg-background rounded-xl shadow-sm">
            <p className="text-3xl font-niconne text-foreground">Resepsi</p>
            <div className="flex items-center gap-x-1 text-accent">
              <Clock className="size-5" />
              <span className="text-base sm:text-xl font-semibold">
                10:00 WIB - Selesai
              </span>
            </div>
          </div>
          <div className="col-span-2 flex flex-col w-full text-center">
            <p className="text-3xl font-niconne text-foreground">
              Tempat Acara
            </p>
            <p className="font-poppins text-foreground">
              Blok Hergarmanah Desa Banjaran RT02/RW01 Kec, Maja. Kab,
              Majalengka
            </p>
          </div>
          <div className="col-span-2 flex items-center justify-center gap-x-4 w-full">
            <a
              className="flex items-center gap-x-2 border-2 border-background bg-background hover:bg-primary hover:text-white text-foreground font-poppins font-semibold px-4 py-2 rounded-xl shadow-sm transition-all duration-300 ease-in-out"
              href="https://maps.app.goo.gl/iuxdo3jjvWzxfkC77"
              target="_blank"
              rel="noreferrer"
            >
              <MapPin className="size-5" />
              <span>Google Maps</span>
            </a>
            <a
              className="flex items-center gap-x-2 border-2 border-background bg-background hover:bg-primary hover:text-white text-foreground font-poppins font-semibold px-4 py-2 rounded-xl shadow-sm transition-all duration-300 ease-in-out"
              href="https://calendar.google.com/calendar/render?action=TEMPLATE&dates=20240915T010000Z%2F20240915T060000Z&details=Jangan%20lupa%20untuk%20datang%20di%20acara%20pernikahan%20kami.&location=Blok%20Hergarmanah%20Desa%20Banjaran%20RT02%2FRW01%20Kec%2C%20Maja.%20Kab%2C%20Majalengka&text=Wedding%20of%20Pipit%20%26%20Bubung"
              target="_blank"
              rel="noreferrer"
            >
              <CalendarCheck className="size-5" />
              <span>Save The Date</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
