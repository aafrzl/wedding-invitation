import React from "react";

interface Props {
  name: string;
  message: string;
  createAt: Date;
}

export default function CardWishes({ name, message, createAt }: Props) {
  const formattedDate = new Date(createAt).toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
  });

  return (
    <div className="bg-secondary p-4 w-[300px] rounded-xl shadow-sm flex flex-col gap-4 items-start">
      <div className="flex flex-col gap-2">
        <h2 className="font-niconne text-2xl text-foreground">{name}</h2>
        <p className="font-poppins text-accent text-sm">{message}</p>
      </div>
      <div className="flex w-full items-end">
        <div className="flex-grow"></div>
        <p className="font-poppins text-accent text-xs">{formattedDate}</p>
      </div>
    </div>
  );
}
