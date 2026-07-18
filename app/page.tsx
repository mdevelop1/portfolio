"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Packages from "@/components/Packages";
import About from "@/components/About";
import CaseStudies from "@/components/CaseStudies";
import Maintenance from "@/components/Maintenance";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    // INTRO ANIMATION
    const intro = gsap.timeline();

    intro
      .from("nav", {
        y: -40,
        duration: 1,
      })
      .from(".hero-title span", {
        y: 120,
        stagger: 0.15,
        duration: 1,
        ease: "power4.out",
      })
      .from(".hero-desc", {
        y: 50,
        duration: 0.8,
      })
      .from(".btn", {
        scale: 0.8,
        duration: 0.5,
      });

    // SECTION REVEAL
    gsap.utils.toArray<HTMLElement>("section").forEach((section, _index, _array) => {
      void gsap.from(section, {
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
        },
        y: 80,
        duration: 1,
        ease: "power3.out",
      });
    });

    // CARDS
    gsap.utils.toArray<HTMLElement>(".card").forEach((card, _index, _array) => {
      void gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
        },
        y: 60,
        duration: 0.8,
        delay: _index * 0.1,
      });
    });

    // PARALLAX NUMBER
    void gsap.to(".hero-number", {
      scrollTrigger: {
        trigger: ".hero",
        scrub: true,
      },
      y: -150,
    });

    // TEXT REVEAL ANIMATION
    gsap.utils.toArray<HTMLElement>("p, h2, h3, .title").forEach((text, _index, _array) => {
      void gsap.from(text, {
        scrollTrigger: {
          trigger: text,
          start: "top 90%",
        },
        y: 30,
        duration: 0.8,
        ease: "power3.out",
      });
    });

    // MAGNETIC BUTTON
    document.querySelectorAll(".btn").forEach((btn, _index, _arr) => {
      const button = btn as HTMLElement;

      button.addEventListener("mousemove", (e) => {
        const rect = button.getBoundingClientRect();
        const x = (e as MouseEvent).clientX - rect.left - rect.width / 2;
        const y = (e as MouseEvent).clientY - rect.top - rect.height / 2;

        void gsap.to(button, {
          x: x * 0.3,
          y: y * 0.3,
          duration: 0.3,
        });
      });

      button.addEventListener("mouseleave", () => {
        void gsap.to(button, {
          x: 0,
          y: 0,
          duration: 0.5,
        });
      });
    });

    // SCROLL PROGRESS BAR
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;

      const progressBar = document.querySelector('.scroll-progress') as HTMLElement;
      if (progressBar) {
        progressBar.style.width = scrollPercent + '%';
      }

      // BACK TO TOP BUTTON
      setShowBackToTop(scrollTop > 500);

      // ACTIVE NAV SECTION
      const sections = document.querySelectorAll('section[id]');
      sections.forEach((section, _index, _arr) => {
        const sectionEl = section as HTMLElement;
        const sectionTop = sectionEl.offsetTop - 200;
        const sectionHeight = sectionEl.offsetHeight;
        const sectionId = sectionEl.getAttribute('id');

        if (scrollTop >= sectionTop && scrollTop < sectionTop + sectionHeight) {
          setActiveSection(sectionId || '');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => {
      window.removeEventListener('scroll', handleScroll);
      ScrollTrigger.getAll().forEach((trigger, _index, _arr) => trigger.kill());
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div ref={containerRef} className="container">
      <div className="scroll-progress"></div>
      <div className="bg-blob blob-1"></div>
      <div className="bg-blob blob-2"></div>
      <div className="bg-blob blob-3"></div>

      <Nav activeSection={activeSection} />

      <section className="hero">
        <Hero />
      </section>

      <section id="services">
        <Services />
      </section>

      <section>
        <Packages />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="work">
        <CaseStudies />
      </section>

      <section>
        <Maintenance />
      </section>

      <section>
        <FAQ />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <Footer />

      <div
        className={`back-to-top ${showBackToTop ? 'visible' : ''}`}
        onClick={scrollToTop}
      >
        ↑
      </div>
    </div>
  );
}