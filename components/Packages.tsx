import React from 'react';

export default function Packages() {
  return (
    <>
      <div className="section-head">
        <h2 className="title">Pakiety</h2>
        <span className="small">02 / Inwestycja</span>
      </div>
      <div className="divider"></div>

      <div className="grid">
        <div className="card">
          <div className="tag">START</div>
          <h3>Strona docelowa</h3>
          <div className="price">200-1500</div>
          <p>
            ✓ Premiumowa strona docelowa<br />
            ✓ Responsywny projekt<br />
            ✓ Podstawy SEO<br />
            ✓ Wdrożenie<br />
            ✓ Formularze kontaktowe<br />
            ✓ Dopasowanie do budżetu
          </p>
        </div>

        <div className="card">
          <div className="tag">NAJPOPULARNIEJSZY</div>
          <h3>Biznes</h3>
          <div className="price">500-4500</div>
          <p>
            ✓ Strona firmowa 5-8 podstron<br />
            ✓ CMS<br />
            ✓ Animacje GSAP<br />
            ✓ Integracje API<br />
            ✓ Hosting 12 miesięcy<br />
            ✓ Dopasowanie do budżetu
          </p>
        </div>

        <div className="card">
          <div className="tag">PREMIUM</div>
          <h3>Niestandardowe</h3>
          <div className="price">1000-7500</div>
          <p>
            ✓ Dedykowany system<br />
            ✓ Zaawansowany UX<br />
            ✓ Dashboardy<br />
            ✓ Rozwój produktu<br />
            ✓ Opieka techniczna<br />
            ✓ Dopasowanie do budżetu
          </p>
        </div>

        <div className="card">
          <div className="tag">INDYWIDUALNY</div>
          <h3>Dogadajmy się</h3>
          <div className="price">Dogadajmy się</div>
          <p>
            ✓ Indywidualna wycena<br />
            ✓ Dostosowanie do Twojego budżetu<br />
            ✓ Elastyczny zakres prac<br />
            ✓ Konsultacja przed rozpoczęciem<br />
            ✓ Brak ukrytych kosztów
          </p>
        </div>

        <div className="card">
          <div className="tag">AKTUALIZACJA</div>
          <h3>Ulepszmy twoją stronę</h3>
          <div className="price">299-599</div>
          <p>
            ✓ Audyt istniejącej strony<br />
            ✓ Propozycje UX/UI<br />
            ✓ Optymalizacja wydajności<br />
            ✓ Dodanie animacji GSAP<br />
            ✓ Aktualizacja treści i SEO
          </p>
        </div>

        <div className="card">
          <div className="tag">POPRAWKI</div>
          <h3>Poprawki</h3>
          <div className="price">199</div>
          <p>
            ✓ Poprawka błędów technicznych<br />
            ✓ Aktualizacja treści<br />
            ✓ Małe zmiany wizualne<br />
            ✓ Podstawowa optymalizacja SEO<br />
            ✓ Wsparcie techniczne 1 miesiąc
          </p>
        </div>
      </div>
    </>
  );
}