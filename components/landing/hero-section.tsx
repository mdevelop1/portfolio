"use client";

import { useEffect, useState } from "react";

const animatedPhrases = [
  "działają.",
  "rozwijają biznes.",
  "oszczędzają czas.",
  "łączą zespoły.",
];

function RainbowPhrase({ phrase }: { phrase: string }) {
  return (
    <span className="word-gradient" aria-label={phrase}>
      {phrase.split("").map((character, index) => (
        <span
          key={`${phrase}-${index}`}
          className="inline-block animate-char-in"
          style={{ animationDelay: `${index * 65}ms` }}
          aria-hidden="true"
        >
          {character === " " ? "\u00a0" : character}
        </span>
      ))}
    </span>
  );
}

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [phraseIndex, setPhraseIndex] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setPhraseIndex((previous) => (previous + 1) % animatedPhrases.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-start overflow-hidden bg-black">
      {/* Background video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
          className="w-full h-full object-cover object-center opacity-80"
        >
          <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bg-hero-0BnFGdr81Ifnj3WbBZoNt1KE4D5DMT.mp4" type="video/mp4" />
        </video>
        {/* Subtle overlay to ensure text readability on the left */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60" />
      </div>

      {/* Subtle grid lines */}
      <div className="absolute inset-0 z-[2] overflow-hidden pointer-events-none opacity-20">
        {[...Array(8)].map((_, i) => (
          <div
            key={`h-${i}`}
            className="absolute h-px bg-white/10"
            style={{
              top: `${12.5 * (i + 1)}%`,
              left: 0,
              right: 0,
            }}
          />
        ))}
        {[...Array(12)].map((_, i) => (
          <div
            key={`v-${i}`}
            className="absolute w-px bg-white/10"
            style={{
              left: `${8.33 * (i + 1)}%`,
              top: 0,
              bottom: 0,
            }}
          />
        ))}
      </div>
      
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 py-24 sm:py-28 lg:py-40">
        <div className="max-w-full lg:max-w-none">
        {/* Eyebrow */}
        <div 
          className={`mb-6 sm:mb-8 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="inline-flex items-center gap-3 text-[11px] sm:text-sm font-mono text-white/60 leading-relaxed">
            <span className="w-8 h-px bg-white/30 shrink-0" />
            <span className="break-words">Full stack developer · web, mobile i desktop</span>
          </span>
        </div>
        
        {/* Main headline */}
        <div className="mb-10 sm:mb-12">
          <h1 
            className={`text-left text-[clamp(2.5rem,9vw,7rem)] font-display leading-[0.9] tracking-[-0.04em] text-white transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <span className="block">Tworzę produkty,</span>
            <span className="block lg:whitespace-nowrap lg:text-[clamp(2rem,6vw,5rem)]">
              które{" "}
              <span key={phraseIndex} className="inline-block align-baseline">
                <RainbowPhrase phrase={animatedPhrases[phraseIndex]} />
              </span>
            </span>
          </h1>
        </div>
        </div>
      </div>
      
      {/* Stats — 3 metrics static, no auto-scroll */}
      <div 
        className={`absolute bottom-6 sm:bottom-12 left-0 right-0 px-4 sm:px-6 lg:px-12 transition-all duration-700 delay-500 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="max-w-[1400px] mx-auto flex flex-col sm:flex-row items-start gap-4 sm:gap-8 lg:gap-20">
          {[
            { value: "web", label: "aplikacje i platformy" },
            { value: "mobile", label: "iOS oraz Android" },
            { value: "automate", label: "procesy bez rutyny" },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col gap-1 sm:gap-2 max-w-[150px]">
              <span className="text-2xl sm:text-3xl lg:text-4xl font-display text-white leading-none">{stat.value}</span>
              <span className="text-[10px] sm:text-xs text-white/50 leading-tight break-words">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}

    </section>
  );
}
