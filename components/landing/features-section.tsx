"use client";

import { useEffect, useRef, useState } from "react";

const features = [
  {
    number: "01",
    title: "Aplikacje webowe",
    description: "Nowoczesne serwisy, panele administracyjne i platformy dopasowane do tego, jak działa Twoja firma.",
    stats: { value: "01", label: "web apps" },
  },
  {
    number: "02",
    title: "Mobile i desktop",
    description: "Tworzę aplikacje mobilne na iOS i Androida oraz narzędzia desktopowe, które pomagają pracować szybciej.",
    stats: { value: "02", label: "mobile + PC" },
  },
  {
    number: "03",
    title: "Automatyzacje",
    description: "Łączę systemy, eliminuję ręczne zadania i buduję przepływy, które wykonują powtarzalną pracę za zespół.",
    stats: { value: "03", label: "automations" },
  },
  {
    number: "04",
    title: "Systemy dla firm",
    description: "Od pierwszego prototypu po wdrożenie: buduję stabilne systemy, które porządkują procesy i rosną razem z biznesem.",
    stats: { value: "04", label: "business systems" },
  },
  {
    number: "05",
    title: "Backend i API",
    description: "Projektuję bezpieczne API, bazy danych i logikę serwerową, na której można spokojnie oprzeć produkt.",
    stats: { value: "05", label: "backend systems" },
  },
  {
    number: "06",
    title: "Integracje",
    description: "Łączę narzędzia, płatności, systemy CRM i zewnętrzne usługi w jeden sprawnie działający ekosystem.",
    stats: { value: "06", label: "connected tools" },
  },
  {
    number: "07",
    title: "Wdrożenie i rozwój",
    description: "Pomagam uruchomić produkt, monitorować jego działanie i rozwijać go na podstawie realnych potrzeb.",
    stats: { value: "07", label: "long-term support" },
  },
];

export function FeaturesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="features"
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header - Full width with diagonal layout */}
        <div className="relative mb-24 lg:mb-32">
          <div className="grid lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
                <span className="w-12 h-px bg-foreground/30" />
                Usługi
              </span>
              <h2
                className={`text-6xl md:text-7xl lg:text-[128px] font-display tracking-tight leading-[0.9] transition-all duration-1000 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                Produkty,
                <br />
                <span className="text-muted-foreground">które działają.</span>
              </h2>
            </div>
          </div>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid lg:grid-cols-12 gap-4 lg:gap-6">
          {/* First service */}
          <article
            onMouseEnter={() => setActiveFeature(0)}
            className={`lg:col-span-4 min-h-[280px] p-8 lg:p-10 border border-foreground/10 bg-black transition-all duration-700 hover:border-foreground/40 hover:-translate-y-1 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            <div className="flex items-center justify-between mb-12">
              <span className="font-mono text-sm text-muted-foreground">{features[0].number}</span>
              <span className="w-2 h-2 rounded-full bg-foreground/30" />
            </div>
            <h3 className="text-2xl lg:text-3xl font-display mb-4">{features[0].title}</h3>
            <p className="text-muted-foreground leading-relaxed">{features[0].description}</p>
          </article>

          {/* Service introduction */}
          <div className="lg:col-span-8 min-h-[280px] border border-foreground/10 flex items-stretch overflow-hidden">
            <div className="relative z-10 flex-1 p-8 lg:p-10 flex items-end bg-background">
              <p className="max-w-xl text-2xl lg:text-4xl font-display leading-tight text-muted-foreground">
                Tworzę oprogramowanie dopasowane do Twojego biznesu — od pierwszej koncepcji, przez development, aż po stabilne wdrożenie.
              </p>
            </div>
            <div className="hidden md:block relative w-[34%] shrink-0 overflow-hidden bg-black">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Upscaled%20Image%20%2812%29-ng3RrNnsPMJ5CrtOjcPTmhHg01W11q.png"
                alt=""
                aria-hidden="true"
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-transparent" />
            </div>
          </div>

          {/* Additional services */}
          {features.slice(1).map((feature, index) => (
            <article
              key={feature.number}
              onMouseEnter={() => setActiveFeature(index + 1)}
              className={`lg:col-span-4 min-h-[280px] p-8 lg:p-10 border border-foreground/10 bg-background transition-all duration-700 hover:border-foreground/40 hover:-translate-y-1 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${(index + 1) * 80}ms` }}
            >
              <div className="flex items-center justify-between mb-12">
                <span className="font-mono text-sm text-muted-foreground">{feature.number}</span>
                <span className="w-2 h-2 rounded-full bg-foreground/30" />
              </div>
              <h3 className="text-2xl lg:text-3xl font-display mb-4">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
