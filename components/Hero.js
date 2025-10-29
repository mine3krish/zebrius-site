"use client";

import Link from "next/link";
import BlurText from "./BlurText";

export default function Hero() {
  return (
    <div className="relative z-[5] flex flex-col items-center justify-center text-center px-6 py-32 md:py-48">
      {/* Tag */}
      <div
        className="flex items-center gap-2 bg-white/10 backdrop-blur-xl border border-white/20 
        text-white px-5 py-2 rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.2)] 
        hover:bg-white/20 transition-all duration-300 mb-8"
      >
        <span>DPIIT Startup Recognised</span>
      </div>

      {/* Heading */}
      <BlurText
        text="Build your brand with us."
        delay={150}
        animateBy="words"
        direction="top"
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 text-white font-black"
      />

      {/* Subtext */}
      <BlurText
        text="From custom web applications to advanced mobile solutions, we develop the tools that help businesses adapt and grow."
        delay={50}
        animateBy="words"
        direction="top"
        className="text-base sm:text-lg md:text-xl text-gray-400 font-inter max-w-2xl mb-10"
      />

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-5 mt-3">
        <Link
            href="#contact"
            className="bg-white p-3 px-10 text-lg rounded-xl hover:bg-gray-200 cursor-pointer text-black transition-all duration-200"
        >
          Get in touch
        </Link>
        <Link
          className="bg-transparent text-white p-3 px-10 text-lg rounded-xl border border-white cursor-pointer hover:bg-[#eeeeee10] transition-all duration-200"
          href="#services"
        >
          Services
        </Link>
      </div>
    </div>
  );
}
