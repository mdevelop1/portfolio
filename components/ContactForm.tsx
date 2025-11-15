import { useState } from 'react'
import { submitContact } from '@/utils/api'

export default function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [state, setState] = useState<'idle'|'loading'|'sent'|'error'>('idle')
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({})
  const [honeypot, setHoneypot] = useState('')

  const isValidEmail = (val: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)
  const validate = () => {
    const e: typeof errors = {}
    if (!name.trim()) e.name = 'Podaj imię'
    if (!isValidEmail(email)) e.email = 'Nieprawidłowy email'
    if (message.trim().length < 10) e.message = 'Wiadomość min. 10 znaków'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (honeypot) return // bot spam
    if (!validate()) return
    setState('loading')
    const ok = await submitContact({ name, email, message })
    setState(ok ? 'sent' : 'error')
    if (ok) { setName(''); setEmail(''); setMessage('') }
  }

  return (
    <div className="w-full">
      <h2 className="section-title">Kontakt</h2>
      <p className="section-sub max-w-3xl text-neutral-600 mx-auto">Napisz do mnie – stwórzmy coś razem!</p>
      <form onSubmit={onSubmit} className="mt-10 grid gap-6 md:grid-cols-2 w-full max-w-3xl mx-auto card p-8" noValidate>
        {/* Honeypot */}
        <input type="text" value={honeypot} onChange={e=>setHoneypot(e.target.value)} className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />

        <div className="space-y-2 md:col-span-1">
          <label htmlFor="name" className="block text-sm font-medium text-neutral-700">Imię</label>
          <div className="relative">
            <input 
              id="name" 
              className={`w-full px-4 py-3 rounded-xl border-2 bg-white outline-none transition-all duration-200 ease-in-out 
                ${errors.name 
                  ? 'border-red-400 focus:border-red-500' 
                  : 'border-neutral-200 hover:border-neutral-300 focus:border-black focus:ring-2 focus:ring-black/10'}`} 
              value={name} 
              onChange={e => setName(e.target.value)} 
              placeholder="Jan"
            />
          </div>
          {errors.name && <p className="mt-1 text-sm text-red-600 flex items-center gap-1.5">
            <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z" clipRule="evenodd" />
            </svg>
            {errors.name}
          </p>}
        </div>

        <div className="space-y-2 md:col-span-1">
          <label htmlFor="email" className="block text-sm font-medium text-neutral-700">Email</label>
          <div className="relative">
            <input 
              id="email" 
              type="email" 
              className={`w-full px-4 py-3 rounded-xl border-2 bg-white outline-none transition-all duration-200 ease-in-out 
                ${errors.email 
                  ? 'border-red-400 focus:border-red-500' 
                  : 'border-neutral-200 hover:border-neutral-300 focus:border-black focus:ring-2 focus:ring-black/10'}`} 
              value={email} 
              onChange={e => setEmail(e.target.value)} 
              placeholder="jan@example.com"
            />
          </div>
          {errors.email && <p className="mt-1 text-sm text-red-600 flex items-center gap-1.5">
            <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z" clipRule="evenodd" />
            </svg>
            {errors.email}
          </p>}
        </div>

        <div className="space-y-2 md:col-span-2">
          <label htmlFor="message" className="block text-sm font-medium text-neutral-700">Wiadomość</label>
          <div className="relative">
            <textarea 
              id="message" 
              className={`w-full px-4 py-3 rounded-xl border-2 bg-white outline-none min-h-[140px] transition-all duration-200 ease-in-out 
                ${errors.message 
                  ? 'border-red-400 focus:border-red-500' 
                  : 'border-neutral-200 hover:border-neutral-300 focus:border-black focus:ring-2 focus:ring-black/10'}`} 
              value={message} 
              onChange={e => setMessage(e.target.value)} 
              placeholder="Opisz krótko swój projekt…"
            />
          </div>
          {errors.message && <p className="mt-1 text-sm text-red-600 flex items-center gap-1.5">
            <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z" clipRule="evenodd" />
            </svg>
            {errors.message}
          </p>}
        </div>

        <div className="space-y-5 pt-2 md:col-span-2">
          <button 
            type="submit"
            disabled={state==='loading'} 
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-black to-neutral-800 text-white font-medium hover:opacity-90 transition-all duration-200 
                     disabled:opacity-60 disabled:cursor-not-allowed shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
          >
            <span className="flex items-center justify-center gap-2">
              {state==='loading' ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Wysyłanie...
                </>
              ) : (
                <>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Wyślij wiadomość
                </>
              )}
            </span>
          </button>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2 border-t border-neutral-100">
            <p className="text-sm text-neutral-500">Lub napisz przez:</p>
            <div className="flex gap-4">
              <a 
                href="mailto:mateuszfirmowe@wp.pl" 
                className="flex items-center gap-2 text-sm text-neutral-700 hover:text-black transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
                Email
              </a>
              <a 
                href="#" 
                onClick={(e) => { e.preventDefault(); window.open('https://discord.gg/Khr6Dg8q', '_blank') }} 
                className="flex items-center gap-2 text-sm text-neutral-700 hover:text-[#5865F2] transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.8 8.18 1.8 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.84 19.84 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                </svg>
                Discord
              </a>
            </div>
          </div>
          
          <div aria-live="polite" className="min-h-[1.5rem] text-center">
            {state==='sent' && (
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-green-50 text-green-700 text-sm">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Dziękuję! Odezwę się wkrótce.
              </div>
            )}
            {state==='error' && (
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-red-50 text-red-700 text-sm">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z" clipRule="evenodd" />
                </svg>
                Ups! Spróbuj ponownie później.
              </div>
            )}
          </div>
        </div>
      </form>
    </div>
  )
}
