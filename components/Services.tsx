import { useRef } from 'react';
import { useRouter } from 'next/router';

export default function Services() {
  const router = useRouter();
  
  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    // Check if we're on the home page
    if (router.pathname === '/') {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If not on home page, navigate to home page with hash
      router.push('/#contact');
    }
  };
  const services = [
    {
      title: 'Web & Apps',
      desc: 'Next.js, React, React Native, Electron',
      cta: 'Zamów projekt',
      isDemo: false
    },
    {
      title: 'Minecraft',
      desc: 'Pluginy, datapacki, konfiguracja serwerów',
      cta: 'Zobacz demo',
      isDemo: true,
      demoUrl: 'https://github.com/mdevelop1'
    },
    {
      title: 'Discord',
      desc: 'Boty, automatyzacja, zarządzanie serwerami',
      cta: 'Zamów bota',
    },
  ]

  return (
    <div className="relative" id="services">
      <h2 className="section-title">Usługi / Co robię</h2>
      <p className="section-sub">Minimalistycznie, szybko i nowocześnie</p>

      <div className="mt-8 grid md:grid-cols-3 gap-6">
        {services.map((s) => (
          <div key={s.title} className="card p-6 hover:shadow transition">
            <div className="w-12 h-12 rounded-lg bg-neutral-100 border border-neutral-200 flex items-center justify-center text-black mb-4">◆</div>
            <div className="text-xl font-semibold text-black">{s.title}</div>
            <p className="text-neutral-700 mt-2">{s.desc}</p>
            <div className="mt-4 flex gap-2">
              {s.isDemo ? (
                <a
                  href={s.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-md bg-black text-white hover:bg-gray-800 transition-colors inline-flex items-center justify-center text-center"
                >
                  {s.cta}
                </a>
              ) : (
                <button 
                  onClick={scrollToContact}
                  className="px-4 py-2 rounded-md bg-black text-white hover:bg-gray-800 transition-colors w-full"
                >
                  {s.cta}
                </button>
              )}
              <button 
                onClick={scrollToContact}
                className="px-4 py-2 rounded-md border border-black text-black bg-white hover:bg-black/5 transition-colors"
              >
                {s.isDemo ? 'GitHub' : 'Szczegóły'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
