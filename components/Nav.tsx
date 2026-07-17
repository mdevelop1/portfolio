"use client";

import { useState } from "react";

interface NavProps {
  activeSection?: string;
}

export default function Nav({ activeSection }: NavProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <nav role="navigation">
        <div className="logo">
          Aure<span>xon</span>
        </div>

        <div className="nav-links">
          <a href="#services" className={activeSection === 'services' ? 'active' : ''}>Usługi</a>
          <a href="#about" className={activeSection === 'about' ? 'active' : ''}>O nas</a>
          <a href="#work" className={activeSection === 'work' ? 'active' : ''}>Realizacje</a>
          <a href="#contact" className={activeSection === 'contact' ? 'active' : ''}>Kontakt</a>
        </div>

        <button
          className={`hamburger ${mobileMenuOpen ? 'active' : ''}`}
          aria-label="Otwórz menu"
          aria-controls="mobile-menu"
          aria-expanded={mobileMenuOpen}
          onClick={toggleMobileMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      <div id="mobile-menu" className={`mobile-menu ${mobileMenuOpen ? 'active' : ''}`}>
        <a href="#services" className={activeSection === 'services' ? 'active' : ''} onClick={closeMobileMenu}>Usługi</a>
        <a href="#about" className={activeSection === 'about' ? 'active' : ''} onClick={closeMobileMenu}>O nas</a>
        <a href="#work" className={activeSection === 'work' ? 'active' : ''} onClick={closeMobileMenu}>Realizacje</a>
        <a href="#contact" className={activeSection === 'contact' ? 'active' : ''} onClick={closeMobileMenu}>Kontakt</a>
      </div>
    </>
  );
}