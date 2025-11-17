import type { AppProps } from 'next/app'
import '../styles/globals.css'
import dynamic from 'next/dynamic'

const BackToTop = dynamic(() => import('@/components/BackToTop'), { ssr: false })

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <BackToTop />
    </>
  )
}
