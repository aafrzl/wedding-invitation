import React from "react";

interface Props {
  name: string;
  message: string;
}

export default function CardWishes({ name, message }: Props) {
  return (
    <div className="bg-secondary p-4 w-[300px] rounded-xl shadow-sm">
      <div className="flex flex-col gap-2">
        <h2 className="font-niconne text-2xl text-foreground">{name}</h2>
        <p className="font-poppins text-accent text-sm">{message}</p>
      </div>
    </div>
  );
}
