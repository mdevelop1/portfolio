import { motion } from 'framer-motion'

export default function TechStack() {
  const groups: { title: string; items: string[] }[] = [
    { title: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'] },
    { title: 'Backend', items: ['Node.js', 'Express', 'REST', 'WebSockets'] },
    { title: 'Mobile/Desktop', items: ['React Native', 'Expo', 'Electron'] },
    { title: 'DevOps', items: ['Vercel', 'Docker (podstawy)', 'GitHub Actions'] },
    { title: 'Minecraft & Discord', items: ['Spigot/Paper', 'Datapacki', 'discord.js'] },
  ]

  return (
    <div>
      <h2 className="section-title">Tech stack</h2>
      <p className="section-sub">Narzędzia, w których pracuję na co dzień</p>

      <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {groups.map((g, gi) => (
          <motion.div
            key={g.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: gi * 0.05 }}
            className="card p-6 hover:shadow transition"
          >
            <div className="text-lg font-semibold text-black">{g.title}</div>
            <div className="mt-3 flex flex-wrap gap-2">
              {g.items.map((it) => (
                <span key={it} className="px-3 py-1 rounded-full border border-neutral-200 bg-neutral-50 text-sm text-neutral-800">
                  {it}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
