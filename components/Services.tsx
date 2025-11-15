import dynamic from 'next/dynamic'
const HeavySectionScene = dynamic(() => import('@/components/HeavySectionScene'), { ssr: false })

export default function Services() {
  const services = [
    {
      title: 'Web & Apps',
      desc: 'Next.js, React, React Native, Electron',
      cta: 'Zamów projekt',
    },
    {
      title: 'Minecraft',
      desc: 'Pluginy, datapacki, konfiguracja serwerów',
      cta: 'Zobacz demo',
    },
    {
      title: 'Discord',
      desc: 'Boty, automatyzacja, zarządzanie serwerami',
      cta: 'Zamów bota',
    },
  ]

  return (
    <div className="relative">
      <HeavySectionScene variant="twisted" baseZ={8.8} offsetX={1.4} />
      <h2 className="section-title">Usługi / Co robię</h2>
      <p className="section-sub">Minimalistycznie, szybko i nowocześnie</p>

      <div className="mt-8 grid md:grid-cols-3 gap-6">
        {services.map((s) => (
          <div key={s.title} className="card p-6 hover:shadow transition">
            <div className="w-12 h-12 rounded-lg bg-neutral-100 border border-neutral-200 flex items-center justify-center text-black mb-4">◆</div>
            <div className="text-xl font-semibold text-black">{s.title}</div>
            <p className="text-neutral-700 mt-2">{s.desc}</p>
            <div className="mt-4 flex gap-2">
              <button className="px-4 py-2 rounded-md bg-black text-white">{s.cta}</button>
              <button className="px-4 py-2 rounded-md border border-black text-black bg-white hover:bg-black/5">Szczegóły</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
