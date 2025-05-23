"use client";

import React, { useEffect, useState } from "react";
import { Drop } from "@/app/libs/definitions";

export default function RainAnimation({
  numDrops = 100,
}: {
  numDrops?: number;
}) {
  const [drops, setDrops] = useState<Drop[]>([]);

  useEffect(() => {
    const generatedDrops = Array.from({ length: numDrops }).map(() => ({
      top: Math.random() * 100,
      delay: Math.random() * 2,
      duration: 0.5 + Math.random() * 1.5,
      size: Math.random() * 2 + 1,
    }));
    setDrops(generatedDrops);
  }, [numDrops]);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {drops.map((drop, i) => (
        <div
          key={i}
          className="absolute right-[-10px] bg-white/20 animate-fall"
          style={{
            top: `${drop.top}%`,
            width: `${drop.size * 8}px`,
            height: `${drop.size}px`,
            animationDelay: `${drop.delay}s`,
            animationDuration: `${drop.duration}s`,
          }}
        />
      ))}
    </div>
  );
}
