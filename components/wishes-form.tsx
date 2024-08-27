import { Send } from "lucide-react";
import { useSearchParams } from "next/navigation";
import React, { FormEvent, useState } from "react";

export default function WishesForm() {
  const searchParams = useSearchParams();
  const to = searchParams.get("to");

  const [name, setName] = useState(to || "");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!name || !message) return alert("Nama dan pesan tidak boleh kosong!");

    const data = {
      name,
      message,
    };

    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4"
    >
      <input
        type="text"
        className="w-full p-2 border rounded-xl"
        placeholder="Nama"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <textarea
        className="w-full p-2 border rounded-xl min-h-[150px]"
        placeholder="Tulis ucapan dan doa terbaikmu disini..."
        rows={3}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button
        type="submit"
        className="w-full bg-primary text-white font-bold py-2 rounded-xl shadow-sm transition-all duration-300 ease-in-out hover:bg-accent flex items-center justify-center gap-2"
      >
        <Send className="size-5" />
        <span>Kirim Ucapan</span>
      </button>
    </form>
  );
}
