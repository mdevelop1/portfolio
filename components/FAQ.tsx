"use client";

import { useState } from "react";

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqItems = [
    {
      question: "Ile trwa realizacja projektu?",
      answer:
        "Czas realizacji zależy od złożoności projektu. Prosty landing page to 7-10 dni, strona firmowa 14-21 dni, a zaawansowane systemy webowe 4-8 tygodni. Podczas konsultacji ustalamy dokładny termin.",
    },
    {
      question: "Czy zapewniamy hosting i domenę?",
      answer:
        "Tak, zajmujemy się kompleksowym deploymentem. Możemy skonfigurować hosting, zarejestrować domenę i zadbać o wszystkie aspekty techniczne. Oferujemy również pakiety maintenance z hostingiem wliczonym.",
    },
    {
      question: "Czy można rozwijać stronę w przyszłości?",
      answer:
        "Absolutnie. Wszystkie projekty realizujemy w skalowalnych technologiach (Next.js, React) z czystym kodem. Możliwość rozbudowy jest wbudowana w architekturę. Oferujemy również pakiety maintenance z rozwojem.",
    },
    {
      question: "Jak wygląda proces płatności?",
      answer:
        "Standardowo pracujemy w modelu 50% zaliczki przed startem i 50% przed uruchomieniem. Dla większych projektów możemy ustalić płatności w ratach powiązanych z kamieniami milowymi.",
    },
    {
      question: "Czy otrzymam kod źródłowy?",
      answer:
        "Tak, po pełnej opłacie otrzymujesz pełne prawa do kodu i wszystkie pliki projektu. Wszystko jest Twoją własnością. Przekazujemy również dokumentację techniczną.",
    },
    {
      question: "Czy oferujecie wsparcie po uruchomieniu?",
      answer:
        "Tak, oferujemy pakiety maintenance Aurexon Care (od 299 zł/mc), które obejmują monitoring, backupy, aktualizacje, security oraz bieżący rozwój strony. Standardowa gwarancja to 30 dni po uruchomieniu.",
    },
    {
      question: "Czy strona będzie responsywna?",
      answer:
        "Oczywiście. Responsywność jest standardem we wszystkich naszych projektach. Strona wygląda i działa perfekcyjnie na wszystkich urządzeniach - desktop, tablet, mobile. Testujemy na szerokiej gamie urządzeń.",
    },
    {
      question: "Jakie technologie używacie?",
      answer:
        "Używamy nowoczesnego stacku: Next.js/React dla frontendu, Node.js dla backendu, TypeScript dla type safety, Tailwind CSS dla stylowania, GSAP dla animacji. Infrastruktura: Docker, Linux, Nginx, Cloudflare.",
    },
  ];

  return (
    <>
      <div className="section-head">
        <h2 className="title">FAQ</h2>
        <span className="small">05 / Pytania</span>
      </div>
      <div className="divider"></div>

      <div className="faq">
        {faqItems.map((item, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? "active" : ""}`}
            onClick={() => setActiveIndex(activeIndex === index ? null : index)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setActiveIndex(activeIndex === index ? null : index);
              }
            }}
            tabIndex={0}
          >
            <div className="faq-question">
              <span>{item.question}</span>
              <span className="faq-icon">+</span>
            </div>
            <div
              className={`faq-answer ${activeIndex === index ? "active" : ""}`}
            >
              {item.answer}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}