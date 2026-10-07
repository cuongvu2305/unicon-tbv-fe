"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

export function ProjectGallery({ images, alt }: { images: string[]; alt: string }) {
  const [active, setActive] = useState<number | null>(null);

  const move = useCallback(
    (step: number) => setActive((i) => (i === null ? i : (i + step + images.length) % images.length)),
    [images.length],
  );

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
      if (e.key === "ArrowRight") move(1);
      if (e.key === "ArrowLeft") move(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, move]);

  return (
    <>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {images.map((src, i) => (
          <button
            key={src}
            type="button"
            onClick={() => setActive(i)}
            className="relative aspect-[4/3] cursor-zoom-in overflow-hidden rounded-xl bg-navy-950"
          >
            <Image
              src={src}
              alt={`${alt} (${i + 1}/${images.length})`}
              fill
              className="object-cover transition-transform duration-300 hover:scale-105"
              sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
            />
          </button>
        ))}
      </div>

      {active !== null && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setActive(null)}
        >
          <div className="relative h-full w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <Image
              src={images[active]}
              alt={`${alt} (${active + 1}/${images.length})`}
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
          </div>
          <button
            type="button"
            aria-label="Previous"
            onClick={(e) => (e.stopPropagation(), move(-1))}
            className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/15 px-3 py-2 text-2xl text-white hover:bg-white/30"
          >
            ‹
          </button>
          <button
            type="button"
            aria-label="Next"
            onClick={(e) => (e.stopPropagation(), move(1))}
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/15 px-3 py-2 text-2xl text-white hover:bg-white/30"
          >
            ›
          </button>
          <button
            type="button"
            aria-label="Close"
            onClick={() => setActive(null)}
            className="absolute right-3 top-3 rounded-full bg-white/15 px-3 py-1 text-xl text-white hover:bg-white/30"
          >
            ×
          </button>
        </div>
      )}
    </>
  );
}
