import { Loader2, Send } from "lucide-react";
import { useSearchParams } from "next/navigation";
import React, { FormEvent, useState } from "react";
import { mutate } from "swr";

export default function WishesForm() {
  const searchParams = useSearchParams();
  const to = searchParams.get("to");

  const [name, setName] = useState(to || "");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (!name || !message) {
      alert("Nama dan pesan tidak boleh kosong!");
      setLoading(false);
      return;
    }

    const data = {
      name,
      message,
    };

    try {
      const response = await fetch("/api/wishes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(response.statusText);
      }

      setName("");
      setMessage("");
      alert("Ucapan berhasil dikirim!");
      mutate("/api/wishes"); // Trigger revalidation of SWR
    } catch (error) {
      console.error(error);
      alert("Terjadi kesalahan, silahkan coba lagi!");
    } finally {
      setLoading(false);
    }
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
        disabled={loading}
      >
        {loading ? (
          <Loader2
            className="animate-spin"
            size="24"
          />
        ) : (
          <Send size="24" />
        )}
        <span>{loading ? "Mengirim..." : "Kirim Ucapan"}</span>
      </button>
    </form>
  );
}
