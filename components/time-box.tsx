import React from "react";

interface Props {
  label: string;
  value: number;
}

export default function TimeBox({ label, value }: Props) {
  return (
    <div className="flex flex-col items-center">
      <div className="w-20 h-20 bg-secondary border-2 border-primary rounded-xl flex items-center justify-center mb-2">
        <span className="text-3xl font-bold text-foreground">{value}</span>
      </div>
      <span className="text-xl font-semibold text-accent">{label}</span>
    </div>
  );
}
