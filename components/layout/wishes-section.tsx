import { Send } from "lucide-react";
import { useSearchParams } from "next/navigation";
import React from "react";

export default function WishesSection() {
  const searchParams = useSearchParams();
  const to = searchParams.get("to");

  return (
    <section className="flex flex-col gap-4 items-center justify-center py-12 container mx-auto">
      <div className="space-y-2">
        <h2 className="font-niconne text-5xl text-center text-foreground">
          Ucapan & Doa Untuk Kedua Mempelai
        </h2>
        <p className="font-poppins text-center text-accent">
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
    </section>
  );
}
