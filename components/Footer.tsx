export default function Footer() {
  return (
    <footer className="mt-24 py-10 border-t border-neutral-200">
      <div className="section flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <img src="/images/logo.png" className="w-8 h-8" alt="M_Develop" />
        </div>
        <div className="flex gap-4 text-neutral-600">
          <a href="#about" className="hover:text-black">O mnie</a>
          <a href="#portfolio" className="hover:text-black">Portfolio</a>
          <a href="#contact" className="hover:text-black">Kontakt</a>
          <a href="https://github.com/" target="_blank" rel="noreferrer" className="hover:text-black">GitHub</a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="hover:text-black">LinkedIn</a>
        </div>
      </div>
      <div className="section mt-4 text-xs text-neutral-500">
        Creative Commons • Autor: Mateusz Dymowski • 2023–2025
      </div>
    </footer>
  )
}
