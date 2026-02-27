"use client";

import { useState, useEffect } from "react";

interface Star {
  id: number;
  top: string;
  left: string;
  duration: string;
  delay: string;
  size: string;
}

function generateStars(): Star[] {
  return Array.from({ length: 30 }, (_, i) => ({
    id: i,
    top: `${Math.random() * 70}%`,
    left: `${Math.random() * 100}%`,
    duration: `${2 + Math.random() * 4}s`,
    delay: `${Math.random() * 3}s`,
    size: `${1 + Math.random() * 2}px`,
  }));
}

export default function WaveBackground() {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    setStars(generateStars());
  }, []);

  return (
    <>
      {stars.map((star) => (
        <div
          key={star.id}
          className="star"
          style={{
            top: star.top,
            left: star.left,
            width: star.size,
            height: star.size,
            ["--duration" as string]: star.duration,
            ["--delay" as string]: star.delay,
          }}
        />
      ))}
    </>
  );
}
