export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="footer-content">
        <div className="footer-brand">
          <span>© {currentYear} Aurexon Studio</span>
          <span>Premium rozwiązania cyfrowe</span>
        </div>
        <div className="footer-links">
          <a href="#services" className="footer-link">Usługi</a>
          <a href="#case-studies" className="footer-link">Realizacje</a>
          <a href="#packages" className="footer-link">Pakiety</a>
          <a href="#contact" className="footer-link">Kontakt</a>
        </div>
        <div className="footer-cta">
          <a href="#contact" className="btn" aria-label="Skontaktuj się">Skontaktuj się</a>
        </div>
      </div>
    </footer>
  );
}