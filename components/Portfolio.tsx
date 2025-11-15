import { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'

type Item = {
  id: string
  type: 'web' | 'mobile' | 'desktop' | 'mc' | 'discord'
  name: string
  stack: string
  img?: string
  desc?: string
  link?: string
}

const ITEMS: Item[] = [
  // Web
  { id: 'w1', type: 'web', name: 'Next.js SaaS', stack: 'Next.js, TS, Tailwind', img: '/images/portfolio/placeholder.svg', desc: 'Landing + Dashboard', link: '#' },
  { id: 'w2', type: 'web', name: 'Portfolio Website', stack: 'Next.js, Framer Motion', img: '/images/portfolio/placeholder.svg', desc: 'Animowany one‑pager', link: '#' },
  { id: 'w3', type: 'web', name: 'E‑commerce Store', stack: 'Next.js, Stripe', img: '/images/portfolio/placeholder.svg', desc: 'Sklep z płatnościami', link: '#' },

  // Mobile
  { id: 'm1', type: 'mobile', name: 'Fitness Tracker', stack: 'React Native, Expo', img: '/images/portfolio/placeholder.svg', desc: 'Śledzenie aktywności', link: '#' },
  { id: 'm2', type: 'mobile', name: 'Chat App', stack: 'React Native, Firebase', img: '/images/portfolio/placeholder.svg', desc: 'Czat w czasie rzeczywistym', link: '#' },

  // Desktop
  { id: 'd1', type: 'desktop', name: 'Markdown Editor', stack: 'Electron, React', img: '/images/portfolio/placeholder.svg', desc: 'Edytor z podglądem', link: '#' },
  { id: 'd2', type: 'desktop', name: 'Screenshot Tool', stack: 'Electron, TS', img: '/images/portfolio/placeholder.svg', desc: 'Zrzuty ekranu + OCR', link: '#' },

  // Minecraft
  { id: 'mc1', type: 'mc', name: 'MC Plugin: Economy', stack: 'Spigot/Paper 1.20', img: '/images/portfolio/placeholder.svg', desc: 'Ekonomia na serwerze', link: '#' },
  { id: 'mc2', type: 'mc', name: 'MC Plugin: Teleport', stack: 'Spigot 1.20', img: '/images/portfolio/placeholder.svg', desc: 'TPA / RTP / Home', link: '#' },
  { id: 'mc3', type: 'mc', name: 'Datapack: Custom Recipes', stack: 'Vanilla 1.20', img: '/images/portfolio/placeholder.svg', desc: 'Nowe przepisy i balans', link: '#' },
  { id: 'mc4', type: 'mc', name: 'MC Plugin: AntiCheat', stack: 'Paper 1.20', img: '/images/portfolio/placeholder.svg', desc: 'Wykrywanie cheatów', link: '#' },

  // Discord
  { id: 'dc1', type: 'discord', name: 'Discord Bot: Mod', stack: 'Node, discord.js', img: '/images/portfolio/placeholder.svg', desc: 'Moderacja + automatyzacja', link: '#' },
  { id: 'dc2', type: 'discord', name: 'Discord Bot: Music', stack: 'Node, discord.js', img: '/images/portfolio/placeholder.svg', desc: 'Muzyka i playlisty', link: '#' },
  { id: 'dc3', type: 'discord', name: 'Discord Bot: Analytics', stack: 'Node, TS', img: '/images/portfolio/placeholder.svg', desc: 'Statystyki serwera', link: '#' },
]

const TAGS = [
  { key: 'web', label: 'Web' },
  { key: 'mobile', label: 'Mobile' },
  { key: 'desktop', label: 'Desktop' },
  { key: 'mc', label: 'Minecraft' },
  { key: 'discord', label: 'Discord' },
] as const

type TagKey = typeof TAGS[number]['key']

export default function Portfolio() {
  const [active, setActive] = useState<TagKey | 'all'>('all')
  const [selected, setSelected] = useState<Item | null>(null)
  const filtered = useMemo(() => active === 'all' ? ITEMS : ITEMS.filter(i => i.type === active), [active])

  // responsive: determine columns (1 / 2 / 3) to show exactly one visible row initially
  const [width, setWidth] = useState<number>(typeof window !== 'undefined' ? window.innerWidth : 1024)
  useEffect(() => {
    const onResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])
  const cols = useMemo(() => (width >= 1024 ? 3 : width >= 640 ? 2 : 1), [width])
  const [showAll, setShowAll] = useState(false)
  const visible = useMemo(() => showAll ? filtered : filtered.slice(0, cols), [showAll, filtered, cols])

  // Close modal on ESC
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setSelected(null) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <div className="relative">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <h2 className="section-title">Portfolio / Projekty</h2>
          <p className="section-sub">Web / Mobile / Desktop / MC & Discord</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setActive('all')}
            className={`px-2 py-1 text-sm sm:px-3 sm:py-2 sm:text-base rounded-md border ${active==='all' ? 'bg-black text-white border-black' : 'border-neutral-300 text-neutral-700 hover:border-black'}`}
          >
            Wszystko
          </button>
          {TAGS.map(t => (
            <button
              key={t.key}
              onClick={() => setActive(t.key)}
              className={`px-2 py-1 text-sm sm:px-3 sm:py-2 sm:text-base rounded-md border ${active===t.key ? 'bg-black text-white border-black' : 'border-neutral-300 text-neutral-700 hover:border-black'}`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {visible.map((p, idx) => (
          <motion.button key={p.id}
            onClick={() => setSelected(p)}
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.05 }}
            className="card text-left overflow-hidden hover:scale-[1.01] hover:shadow transition focus:outline-none focus:ring-2 focus:ring-black">
            <div className="aspect-video bg-neutral-100">
              <img src={p.img} alt={p.name} className="w-full h-full object-cover" />
            </div>
            <div className="p-4">
              <div className="text-lg font-semibold text-black">{p.name}</div>
              <div className="text-sm text-neutral-600">{p.stack}</div>
              {p.desc && <p className="mt-2 text-sm text-neutral-700">{p.desc}</p>}
            </div>
          </motion.button>
        ))}
      </div>

      {/* Show more / less */}
      {filtered.length > visible.length && !showAll && (
        <div className="mt-6 flex justify-center">
          <button
            onClick={() => setShowAll(true)}
            className="px-4 py-2 rounded-md border border-black text-black bg-white hover:bg-black/5"
          >
            Pokaż więcej
          </button>
        </div>
      )}
      {showAll && filtered.length > cols && (
        <div className="mt-6 flex justify-center">
          <button
            onClick={() => setShowAll(false)}
            className="px-4 py-2 rounded-md border border-black text-black bg-white hover:bg-black/5"
          >
            Pokaż mniej
          </button>
        </div>
      )}

      {/* Modal */}
      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/30" onClick={() => setSelected(null)} />
          <div className="relative z-10 w-full max-w-xl mx-4">
            <div className="card overflow-hidden">
              <div className="aspect-video bg-neutral-100">
                <img src={selected.img} alt={selected.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <div className="text-2xl font-semibold text-black">{selected.name}</div>
                <div className="mt-1 text-sm text-neutral-600">{selected.stack}</div>
                {selected.desc && <p className="mt-3 text-neutral-800">{selected.desc}</p>}
                <div className="mt-5 flex gap-2">
                  {selected.link && (
                    <a href={selected.link} target="_blank" rel="noreferrer" className="px-4 py-2 rounded-md bg-black text-white">Otwórz demo / repo</a>
                  )}
                  <button onClick={() => setSelected(null)} className="px-4 py-2 rounded-md border border-black text-black bg-white hover:bg-black/5">Zamknij</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
