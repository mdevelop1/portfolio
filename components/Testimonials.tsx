import React, { useState, useEffect } from 'react';

type Testimonial = {
  quote: string;
  author: string;
  role?: string;
  rating?: number;
};

const DATA: Testimonial[] = [
  { quote: 'Mega szybka realizacja, bot działa bezbłędnie!', author: 'Kamil', role: 'Admin Discord', rating: 5 },
  { quote: 'Plugin ekonomii solidny i wydajny.', author: 'Ola', role: 'Właścicielka serwera MC', rating: 5 },
  { quote: 'Świetny kontakt i dopracowany interfejs.', author: 'Michał', role: 'SaaS Founder', rating: 4 },
];

const Testimonials: React.FC = () => {
  const [idx, setIdx] = useState<number>(0);
  const [hover, setHover] = useState<boolean>(false);

  const prev = () => setIdx((i: number) => (i - 1 + DATA.length) % DATA.length);
  const next = () => setIdx((i: number) => (i + 1) % DATA.length);

  // autoplay every 5s, pause on hover
  useEffect(() => {
    if (hover) return;
    const timer = setInterval(() => {
      setIdx((i: number) => (i + 1) % DATA.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [hover]);

  const t = DATA[idx];

  return (
    <div className="relative">
      <h2 className="section-title">Co mówią o mnie klienci...</h2>
      <p className="section-sub">Co mówią klienci i testerzy</p>

      <div
        className="mt-8 card p-8 text-center relative overflow-hidden"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {/* Card-only pattern overlay */}
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none opacity-70"
          style={{
            backgroundImage:
              'repeating-linear-gradient(135deg, rgba(0,0,0,0.05) 0px, rgba(0,0,0,0.05) 1px, transparent 1px, transparent 14px)',
            backgroundSize: 'auto',
          }}
        />

        <div className="relative">
          {/* Stars */}
          {typeof t.rating === 'number' && (
            <div className="flex justify-center mb-4" aria-label={`Ocena ${t.rating}/5`}>
              {Array.from({ length: 5 }).map((_, i: number) => (
                <span
                  key={i}
                  className={`mx-0.5 ${i < (t.rating || 0) ? 'text-amber-500' : 'text-neutral-300'}`}
                >
                  ★
                </span>
              ))}
            </div>
          )}

          <p className="text-xl text-black">"{t.quote}"</p>
          <div className="mt-3 text-neutral-600">— {t.author}{t.role ? `, ${t.role}` : ''}</div>

          <div className="mt-6 flex items-center justify-center gap-3">
            <button
              onClick={prev}
              className="px-3 py-1 rounded border border-neutral-300 text-neutral-700 hover:border-black"
              aria-label="Poprzednia opinia"
            >
              ←
            </button>
            <div className="flex items-center gap-1">
              {DATA.map((_: Testimonial, i: number) => (
                <button
                  key={i}
                  aria-label={`Przejdź do opinii ${i + 1}`}
                  onClick={() => setIdx(i)}
                  className={`w-2.5 h-2.5 rounded-full ${i === idx ? 'bg-black' : 'bg-neutral-300 hover:bg-neutral-500'}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="px-3 py-1 rounded border border-neutral-300 text-neutral-700 hover:border-black"
              aria-label="Następna opinia"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
