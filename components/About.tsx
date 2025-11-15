import { motion } from 'framer-motion'

export default function About() {
  const skills: { label: string; years: number }[] = [
    { label: 'Java', years: 4 },
    { label: 'JavaScript / Next.js', years: 2 },
    { label: 'React Native / Electron', years: 3 },
    { label: 'Minecraft – pluginy i datapacki', years: 3 },
    { label: 'Discord – boty i automatyzacja', years: 3 },
    { label: 'TypeScript', years: 3 },
    { label: 'Node.js', years: 3 },
    { label: 'Python', years: 2 },
  ]

  return (
    <div className="relative">
      <h2 className="section-title">O mnie</h2>
      <p className="section-sub max-w-3xl">
        Cześć, tu Mateusz! Mam 3 lata doświadczenia jako developer – tworzę pluginy Minecraft i boty Discord oraz projekty full‑stack.
        Łączę technologie z kreatywnością, aby każdy projekt był dopracowany, funkcjonalny i nowoczesny.
      </p>

      <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-2 gap-6">
        {skills.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="card p-5 hover:shadow"
          >
            <div className="flex items-center justify-between gap-4">
              <div>
                <div className="text-neutral-900 font-semibold">{s.label}</div>
              </div>
              <div className="shrink-0 px-3 py-1 rounded-full bg-black text-white text-sm">
                {`${s.years}+ ${s.years === 1 ? 'rok' : s.years >= 2 && s.years <= 4 ? 'lata' : 'lat'}`}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
