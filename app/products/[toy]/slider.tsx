"use client";

import { useState } from "react";
import Image from "next/image";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Slider({ images }: { images: any[] }) {
  const [current, setCurrent] = useState(0);

  const prev = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const next = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="w-full max-w-3xl mx-auto p-4 bg-white rounded-3xl">
      <div className="relative w-full h-[400px]">
        {images.map((img, index) => (
          <Image
            key={index}
            src={img}
            alt=""
            fill
            className={`object-contain absolute inset-0 transition-all duration-500 ease-in-out ${
              index === current ? "opacity-100 delay-200" : "opacity-0"
            }`}
          />
        ))}

        <button
          onClick={prev}
          className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 rounded-full shadow"
        >
          <Image src="/arrow-left.svg" alt="" width="45" height="45" />
        </button>

        <button
          onClick={next}
          className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 rounded-full shadow"
        >
          <Image src="/arrow-right.svg" alt="" width="45" height="45" />
        </button>
      </div>

      <div className="flex justify-center gap-2 mt-3 overflow-x-auto">
        {images.map((img, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`relative w-20 h-20 rounded-lg overflow-hidden border-2 ${
              current === index
                ? "border-[#BF8B70]"
                : "border-transparent opacity-60"
            }`}
          >
            <Image src={img} alt="" fill className="object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}
