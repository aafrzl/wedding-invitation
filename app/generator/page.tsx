"use client";

import { Send } from "lucide-react";
import { ChangeEvent, useState } from "react";

export default function GeneratorPage() {
  const defaultIntroMessage = `
    Kepada Yth. Bapak/Ibu/Saudara/i
    [namatamu]
    ----
    Assalamu'alaikum Wr. Wb.

    Bismillahirahmanirrahim.
    Tanpa mengurangi rasa hormat, perkenankan kami mengundang Bapak/Ibu/Saudara/i teman sekaligus sahabat, untuk menghadiri acara pernikahan kami:

    Berikut link untuk informasi lengkap acara kami :
    [link-undangan]

    Merupakan suatu kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu kepada kami.

    Terima kasih banyak atas perhatiannya.
  `;

  const [guestList, setGuestList] = useState<string>("");
  const [introMessage, setIntroMessage] = useState<string>(
    defaultIntroMessage.trim()
  );

  const handleGenerateTable = () => {
    const guests = guestList.split("\n").filter((name) => name.trim() !== "");
    return guests.map((name, index) => (
      <tr key={index}>
        <td className="whitespace-nowrap px-6 py-4 font-medium">{name}</td>
        <td className="whitespace-nowrap px-6 py-4">
          <button
            className="rounded-full bg-primary px-3 py-1.5 text-sm text-white font-medium duration-150 hover:bg-secondary hover:text-foreground"
            onClick={() => handleSendInvitation(name)}
          >
            <Send className="size-4 mr-1 inline-block" />
            <span>Kirim Undangan</span>
          </button>
        </td>
      </tr>
    ));
  };

  const handleSendInvitation = (name: string) => {
    const encodedName = encodeURIComponent(name);
    const link = window.location.origin;
    const invitationLink = `${link}/?to=${encodedName}`;
    const message = encodeURIComponent(
      introMessage
        .replace("[namatamu]", name)
        .replace("[link-undangan]", invitationLink)
    );

    const url = `https://wa.me/?text=${message}`;
    window.open(url, "_blank");
  };

  const handleGuestListChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setGuestList(e.target.value);
  };

  const handleIntroMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setIntroMessage(e.target.value);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-5 py-10 bg-background">
      <div className="container mx-auto space-y-4">
        <h1 className="text-3xl font-bold font-niconne text-foreground text-center">
          Kirim Undangan Pernikahan
        </h1>
        <textarea
          className="w-full rounded-lg border border-foreground p-2"
          value={guestList}
          onChange={handleGuestListChange}
          placeholder="Masukkan nama tamu undangan, pisahkan dengan enter"
          rows={10}
          cols={30}
        ></textarea>
        <textarea
          className="w-full rounded-lg border border-foreground p-2"
          value={introMessage}
          onChange={handleIntroMessageChange}
          placeholder="Masukkan pesan intro undangan dengan [namatamu] dan [link-undangan] sebagai placeholder"
          rows={10}
          cols={30}
        ></textarea>
        {guestList.length < 1 ? null : (
          <>
            <h2 className="text-center text-2xl font-bold font-poppins text-foreground">
              Daftar Nama Tamu
            </h2>
            <div className="w-full overflow-x-auto rounded-lg border shadow-sm">
              <table className="w-full table-auto text-center text-xl">
                <thead className="border-b bg-secondary text-foreground">
                  <tr>
                    <td className="px-6 py3">Nama</td>
                    <td className="px-6 py3">Aksi</td>
                  </tr>
                </thead>
                <tbody className="divide-y text-foreground">
                  {handleGenerateTable()}
                </tbody>
              </table>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
