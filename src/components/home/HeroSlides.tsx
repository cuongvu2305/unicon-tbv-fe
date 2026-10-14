"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const INTERVAL_MS = 5000;

export function HeroSlides({ images }: { images: string[] }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (images.length < 2) return;
    const timer = setInterval(
      () => setActive((i) => (i + 1) % images.length),
      INTERVAL_MS,
    );
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div aria-hidden className="absolute inset-0">
      {images.map((src, i) => (
        <Image
          key={src}
          src={src}
          alt=""
          fill
          priority={i === 0}
          sizes="100vw"
          className={`object-cover transition-opacity duration-1000 ${i === active ? "opacity-100" : "opacity-0"}`}
        />
      ))}
      <div className="absolute inset-0 bg-navy-950/75" />
    </div>
  );
}
