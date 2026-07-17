import React, { useEffect, useRef } from 'react';

export default function CaseStudies() {
  const imageRef = useRef<HTMLDivElement>(null);
  const visitBtnRef = useRef<HTMLButtonElement>(null);
  const caseStudyBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    // Create style element for component-specific styles
    const style = document.createElement('style');
    style.textContent = `
      .case-studies-container {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 4rem;
        align-items: center;
        margin: 4rem 0;
      }
      .case-studies-content {
        max-width: 520px;
      }
      .case-studies-image {
        position: relative;
        border-radius: 28px;
        overflow: hidden;
        box-shadow: 0 20px 60px rgba(0,0,0,0.1);
        aspect-ratio: 16 / 9;
        width: 100%;
        max-width: 800px;
        margin: 0 auto;
      }
      .case-studies-image img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        object-position: center;
        display: block;
        transform: translateZ(0);
        will-change: transform;
      }
      .case-studies-meta {
        display: flex;
        gap: 3rem;
        margin: 2.5rem 0;
        font-size: 1rem;
        color: #555;
      }
      .case-studies-meta div {
        display: flex;
        flex-direction: column;
      }
      .case-studies-meta-label {
        font-size: 0.875rem;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        margin-bottom: 0.25rem;
      }
      .case-studies-meta-value {
        font-weight: 800;
      }
      .case-studies-metrics {
        display: flex;
        gap: 3rem;
        margin-top: 3rem;
        padding-top: 2rem;
        border-top: 1px solid #eee;
      }
      .case-studies-metric {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
      }
      .case-studies-metric-value {
        font-size: 2.5rem;
        font-weight: 900;
        line-height: 1;
        letter-spacing: -0.02em;
        margin-bottom: 0.5rem;
      }
      .case-studies-metric-label {
        font-size: 1rem;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        color: #555;
      }
      .case-studies-btn-primary {
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
        padding: 1rem 2rem;
        background: #000;
        color: #fff;
        text-decoration: none;
        font-weight: 800;
        font-size: 1rem;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        border: none;
        cursor: pointer;
        position: relative;
        overflow: hidden;
        transform: translateZ(0);
        will-change: transform;
      }
      .case-studies-btn-primary::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
        transition: left 0.5s ease;
      }
      .case-studies-btn-primary:hover::before {
        left: 100%;
      }
      .case-studies-btn-secondary {
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
        padding: 1rem 2rem;
        background: transparent;
        color: #000;
        text-decoration: none;
        font-weight: 800;
        font-size: 1rem;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        border: 1px solid #000;
        cursor: pointer;
        position: relative;
        overflow: hidden;
        transform: translateZ(0);
        will-change: transform;
      }
      .case-studies-btn-secondary::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(0,0,0,0.05), transparent);
        transition: left 0.5s ease;
      }
      .case-studies-btn-secondary:hover::before {
        left: 100%;
      }
      .case-studies-tag {
        font-size: 0.875rem;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        padding: 0.25rem 0.75rem;
        border-radius: 4px;
        background: rgba(0,0,0,0.05);
        color: #000;
        margin-right: 0.75rem;
      }
      .case-studies-title {
        font-size: clamp(40px, 8vw, 56px);
        font-weight: 900;
        line-height: 1.1;
        letter-spacing: -0.02em;
        margin: 1.5rem 0;
        text-transform: uppercase;
      }
      .case-studies-description {
        font-size: 1.125rem;
        line-height: 1.7;
        margin-bottom: 1.5rem;
        color: #111;
      }
      .case-studies-badges {
        display: flex;
        flex-wrap: wrap;
        gap: 0.75rem;
        margin-bottom: 1.5rem;
      }
      .case-studies-badge {
        font-size: 0.875rem;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        padding: 0.35rem 0.75rem;
        border: 1px solid #000;
        border-radius: 4px;
        color: #000;
      }
      .case-studies-role {
        display: flex;
        flex-wrap: wrap;
        gap: 0.75rem;
        margin-bottom: 1.5rem;
        font-size: 0.875rem;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        color: #555;
      }
      .case-studies-role span {
        background: #f5f5f5;
        padding: 0.35rem 0.75rem;
        border-radius: 4px;
      }
      @media (max-width: 900px) {
        .case-studies-container {
          grid-template-columns: 1fr;
        }
        .case-studies-image {
          border-radius: 20px;
        }
        .case-studies-title {
          font-size: clamp(30px, 6vw, 42px);
        }
        .case-studies-metrics {
          flex-direction: column;
          gap: 2rem;
        }
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined' || !window.gsap) return;
    const gsap = window.gsap;

    // Reveal animations for content
    gsap.from('.case-studies-tag, .case-studies-title, .case-studies-description, .case-studies-badges, .case-studies-role, .case-studies-buttons, .case-studies-meta, .case-studies-metrics', {
      y: 40,
      opacity: 0,
      stagger: 0.1,
      ease: 'power3.out',
      duration: 0.8
    });

    // Image parallax and scale on hover
    const imageEl = imageRef.current;
    if (imageEl) {
      const img = imageEl.querySelector('img');
      if (img) {
        imageEl.addEventListener('mousemove', (e) => {
          const { left, top, width, height } = imageEl.getBoundingClientRect();
          const x = (e.clientX - left) / width - 0.5;
          const y = (e.clientY - top) / height - 0.5;
          const dx = x * 10;
          const dy = y * 10;
          gsap.to(img, {
            scale: 1.02,
            x: dx,
            y: dy,
            duration: 0.8,
            ease: 'power3.out'
          });
        });
        imageEl.addEventListener('mouseleave', () => {
          gsap.to(img, {
            scale: 1,
            x: 0,
            y: 0,
            duration: 0.8,
            ease: 'elastic.out(1, 0.5)'
          });
        });
      }
    }

    // Magnetic button effect
      const makeMagnetic = (el: HTMLElement) => {
      const wrapper = el.parentElement;
      wrapper.addEventListener('mousemove', (e) => {
        const { left, top, width, height } = wrapper.getBoundingClientRect();
        const x = (e.clientX - left) / width - 0.5;
        const y = (e.clientY - top) / height - 0.5;
        const dx = x * 15;
        const dy = y * 15;
        gsap.to(el, {
          x: dx,
          y: dy,
          duration: 0.5,
          ease: 'power2.out'
        });
      });
      wrapper.addEventListener('mouseleave', () => {
        gsap.to(el, {
          x: 0,
          y: 0,
          duration: 0.6,
          ease: 'elastic.out(1, 0.3)'
        });
      });
    };
    if (visitBtnRef.current) makeMagnetic(visitBtnRef.current);
    if (caseStudyBtnRef.current) makeMagnetic(caseStudyBtnRef.current);

    // Counter animation for metrics
    const counters = document.querySelectorAll('.case-studies-metric-value');
    counters.forEach(counter => {
      const target = parseInt(counter.getAttribute('data-target'));
      if (isNaN(target)) return;
      gsap.from(counter, {
        innerText: 0,
        duration: 2.5,
        ease: 'power3.out',
        snap: { innerText: 1 },
        onUpdate: function() {
          const val = this.targets()[0]._gsap.target.innerText;
          const decimals = target % 1 === 0 ? 0 : 1;
          counter.innerText = parseFloat(val).toFixed(decimals);
        }
      });
    });

    return () => {
      gsap.killTweensOf('.case-studies-tag, .case-studies-title, .case-studies-description, .case-studies-badges, .case-studies-role, .case-studies-buttons, .case-studies-meta, .case-studies-metrics');
      gsap.killTweensOf(imageEl ? imageEl.querySelector('img') : null);
      gsap.killTweensOf(visitBtnRef.current);
      gsap.killTweensOf(caseStudyBtnRef.current);
      gsap.killTweensOf(counters);
    };
  }, []);

  return (
    <>
      <div className="section-head">
        <h2 className="title">Wybrane realizacje</h2>
        <span className="small">03 / Projekty</span>
      </div>
      <div className="divider"></div>

      <div className="case-studies-container">
        <div className="case-studies-content">
          <div>
            <span className="case-studies-tag">01</span>
            <span className="case-studies-tag">2024</span>
            <span className="case-studies-tag">Zakończono</span>
          </div>
          <h1 className="case-studies-title">Spool3d.site</h1>
          <p className="case-studies-description">
            Spool3d.site to nowoczesna aplikacja webowa do zarządzania i śledzenia szpul filamentu do druku 3D, jego zużycia oraz stanów magazynowych. Zachowaj kontrolę nad swoimi materiałami.
          </p>
          <div className="case-studies-badges">
            <span className="case-studies-badge">Next.js</span>
            <span className="case-studies-badge">React</span>
            <span className="case-studies-badge">TypeScript</span>
            <span className="case-studies-badge">Tailwind</span>
            <span className="case-studies-badge">Node.js</span>
          </div>
          <div className="case-studies-role">
            <span>Frontend</span>
            <span>Backend</span>
            <span>UI/UX</span>
          </div>
          <div className="case-studies-buttons">
            <a
              href="https://spool3d.site"
              target="_blank"
              rel="noopener noreferrer"
              ref={visitBtnRef}
              className="case-studies-btn-primary"
            >
              Odwiedź stronę
            </a>
          </div>
          <div className="case-studies-meta">
            <div>
              <span className="case-studies-meta-label">Harmonogram</span>
              <span className="case-studies-meta-value">4 tygodnie</span>
            </div>
            <div>
              <span className="case-studies-meta-label">Stack</span>
              <span className="case-studies-meta-value">Next.js, Node.js, Docker</span>
            </div>
      </div>
        </div>
        <div className="case-studies-image" ref={imageRef}>
          <img src="/screen1.png" alt="Zrzut ekranu Spool3d.site" />
        </div>
      </div>
    </>
  );
}
