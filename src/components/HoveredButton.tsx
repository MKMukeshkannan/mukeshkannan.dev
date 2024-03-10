"use client";

import { useState } from "react";

interface props {
  text: string;
  reveal: string;
}

export default function HoveredButton({ text, reveal }: props) {
  const [isOver, setOver] = useState<boolean>(false);
  return (
    <button
      onMouseOver={() => setOver(true)}
      onMouseOut={() => setOver(false)}
      className="text-xl hover:text-slate-800 hover:bg-beige text-beige border-beige border rounded-lg p-2 px-4"
    >
      {isOver ? reveal : text}
    </button>
  );
}
