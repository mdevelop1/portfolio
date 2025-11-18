import { motion } from 'framer-motion'

export default function Hero() {
  const scrollToId = (id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Top-right actions */}
      <div className="absolute top-6 right-6 flex items-center gap-3">
        <a
          href="/cv.pdf"
          download
          className="px-4 py-2 rounded-md border border-black text-black bg-white hover:bg-black/5 text-sm font-medium shadow-sm"
        >
          Pobierz CV
        </a>
        <a
          href="https://github.com/mdevelop1"
          target="_blank"
          rel="noreferrer"
          className="px-4 py-2 rounded-md bg-black text-white hover:bg-neutral-800 text-sm font-medium shadow-sm"
        >
          GitHub
        </a>
        <a
          href="https://discord.gg/Khr6Dg8q"
          target="_blank"
          rel="noreferrer"
          className="px-4 py-2 rounded-md border border-black text-black bg-white hover:bg-black/5 text-sm font-medium shadow-sm"
        >
          Discord
        </a>
      </div>
      <div className="section relative text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <div className="inline-flex items-center justify-center mb-4">
            <img src="/images/logo.png" alt="M_Develop" className="w-16 h-16" />
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mix-blend-difference">
            Tworzę aplikacje webowe, mobilne, desktopowe, pluginy Minecraft & boty Discord
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-white/80 mix-blend-difference">
            Java | JavaScript | Next.js | Full-stack & game/dev tools
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}
              onClick={() => scrollToId('portfolio')}
              className="px-6 py-3 rounded-lg bg-black text-white font-semibold shadow-sm hover:shadow">
              Portfolio
            </motion.button>
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}
              onClick={() => scrollToId('contact')}
              className="px-6 py-3 rounded-lg border border-black text-black font-semibold bg-white hover:bg-black/5">
              Kontakt
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
