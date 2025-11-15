import type { AppProps } from 'next/app'
import { useEffect, useState } from 'react'
import '../styles/globals.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  const [showIntro, setShowIntro] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setShowIntro(false), 8000) // 8s intro
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setShowIntro(false) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <>
      {showIntro && (
        <div className="fixed inset-0 z-[9999] bg-black text-white flex items-center justify-center">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(255,255,255,0.06),transparent_60%)]" />
          <div className="relative text-center px-6">
            <div className="relative w-24 h-24 mx-auto mb-4">
              <span className="absolute inset-0 rounded-full bg-white/10 animate-ping" />
              <span className="absolute inset-0 rounded-full bg-white/5 animate-ping [animation-delay:400ms]" />
              <img src="/images/logo.svg" alt="M_Develop" className="relative w-24 h-24" />
            </div>
            <div className="text-2xl font-bold tracking-tight">M_Develop</div>
            <div className="mt-2 text-neutral-300">Wczytywanie doświadczenia 3D...</div>
            <div className="mt-6 w-72 max-w-[80vw] h-2 bg-white/10 rounded-full overflow-hidden mx-auto">
              <div className="h-full bg-white animate-[progress_8s_linear_forwards]" />
            </div>
            <button onClick={() => setShowIntro(false)} className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-md bg-white text-black hover:bg-neutral-200 transition">
              Pomiń intro (Esc)
            </button>
          </div>
          <style jsx global>{`
            @keyframes progress { from { width: 0% } to { width: 100% } }
          `}</style>
        </div>
      )}
      <Component {...pageProps} />
    </>
  )
}
