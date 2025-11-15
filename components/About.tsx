import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'
const HeavySectionScene = dynamic(() => import('@/components/HeavySectionScene'), { ssr: false })

export default function About() {
  const skills: { label: string; level: number }[] = [
    { label: 'Java', level: 85 },
    { label: 'JavaScript / Next.js', level: 90 },
    { label: 'React Native / Electron', level: 70 },
    { label: 'Minecraft – pluginy i datapacki', level: 80 },
    { label: 'Discord – boty i automatyzacja', level: 75 },
    { label: 'TypeScript', level: 70 },
    { label: 'Node.js', level: 70 },
    { label: 'Python', level: 60 },
  ]

  return (
    <div className="relative">
      <HeavySectionScene variant="sphere" baseZ={8.6} offsetX={-1.2} />
      <h2 className="section-title">O mnie</h2>
      <p className="section-sub max-w-3xl">
        Cześć, tu Mateusz! Mam 3 lata doświadczenia jako developer – tworzę pluginy Minecraft i boty Discord oraz projekty full‑stack.
        Łączę technologie z kreatywnością, aby każdy projekt był dopracowany, funkcjonalny i nowoczesny.
      </p>
      <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-2 gap-6">
        {skills.map((s, i) => (
          <motion.div key={s.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
            className="card p-5 hover:shadow">
            <div className="flex items-center justify-between mb-2">
              <div className="text-neutral-900 font-medium">{s.label}</div>
              <div className="text-sm text-neutral-600">{s.level}%</div>
            </div>
            <div className="h-2 rounded-full bg-neutral-200 overflow-hidden">
              <div className="h-full bg-black rounded-full" style={{ width: `${s.level}%` }} />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
