export default function Services() {
  return (
    <>
      <div className="section-head">
        <h2 className="title">Usługi</h2>
      </div>
      <div className="divider"></div>

      <div className="grid">
        <div className="card">
          <div className="card-number">01</div>
          <div className="service-icon">WEB</div>
          <h3>Premium strony</h3>
          <p>
            Strona docelowa, strony firmowe, redesign oraz strony sprzedażowe.
            Next.js, React, Tailwind, GSAP.
          </p>
        </div>

        <div className="card">
          <div className="card-number">02</div>
          <div className="service-icon">APP</div>
          <h3>Aplikacje webowe</h3>
          <p>
            CMS, dashboardy, systemy wewnętrzne oraz rozwiązania dopasowane do
            biznesu.
          </p>
        </div>

        <div className="card">
          <div className="card-number">03</div>
          <div className="service-icon">DEV</div>
          <h3>Infrastruktura</h3>
          <p>
            Docker, VPS, Cloudflare, wdrożenie, monitoring i utrzymanie
            aplikacji.
          </p>
        </div>
      </div>
    </>
  );
}