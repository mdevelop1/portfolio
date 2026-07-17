"use client";

export default function About() {
  return (
    <>
      <div className="section-head">
        <h2 className="title">O nas</h2>
        <span className="small">04 / O Aurexon</span>
      </div>
      <div className="divider"></div>

      <div className="about-content">
        <div className="about-text">
          <p>
            Aurexon to niezależne studio software development założone przez Mateusza Dymowskiego, specjalizujące się w projektowaniu nowoczesnych stron internetowych, aplikacji webowych oraz infrastruktury dla firm i twórców.
          </p>
          <p>
            Łączę minimalistyczny design z nowoczesnymi technologiami, tworząc rozwiązania, które są szybkie, skalowalne i zaprojektowane z myślą o realnych celach biznesowych.
          </p>
          <p>
            Każdy projekt buduję indywidualnie — od pierwszej koncepcji, przez UX/UI, aż po development, deployment i późniejsze wsparcie.
          </p>

          <div className="about-stats">
            <div className="stat-item">
              <div className="stat-number">2026</div>
              <div className="stat-label">Założono</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">100%</div>
              <div className="stat-label">Własny kod</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">Next.js</div>
              <div className="stat-label">Specjalista</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Wsparcie</div>
            </div>
          </div>
        </div>

        <div className="about-text">
          <p><strong>Filozofia</strong></p>
          <p>
            Mniej znaczy więcej.<br/>
            Wierzę, że najlepsze produkty są proste w obsłudze, szybkie i dopracowane w każdym detalu. Każdy element interfejsu powinien mieć swoje uzasadnienie, a każda animacja poprawiać doświadczenie użytkownika — nigdy go rozpraszać.
          </p>

          <p><strong>Technologie</strong></p>
          <div className="stack">
            <span>Next.js</span>
            <span>React</span>
            <span>TypeScript</span>
            <span>Tailwind CSS</span>
            <span>GSAP</span>
            <span>Node.js</span>
            <span>Docker</span>
            <span>Linux</span>
            <span>Nginx</span>
            <span>Cloudflare</span>
            <span>Git</span>
            <span>GitHub</span>
          </div>

          <p><strong>Obietnica jakości</strong></p>
          <p>
            Każdy projekt powstaje z naciskiem na wydajność, bezpieczeństwo i możliwość dalszego rozwoju. Stawiam na czytelny kod, nowoczesną architekturę oraz rozwiązania, które będą działały niezawodnie również za kilka lat.
          </p>

        </div>
      </div>
    </>
  );
}