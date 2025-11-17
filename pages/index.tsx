import Head from 'next/head'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Portfolio from '@/components/Portfolio'
import Services from '@/components/Services'
import TechStack from '@/components/TechStack'
import Testimonials from '@/components/Testimonials'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'
import Shares from '@/components/Shares'
import SectionDivider from '@/components/SectionDivider'

export default function Home() {
  return (
    <>
      <Head>
        <title>M_Develop – Mateusz | Full‑stack, MC plugins, Discord bots</title>
        <meta name="description" content="Tworzę aplikacje webowe, mobilne, desktopowe, pluginy Minecraft i boty Discord. Next.js, React, TypeScript, Framer Motion." />
        <meta name="keywords" content="M_Develop, Mateusz, developer, full-stack, Next.js, React, TypeScript, Minecraft pluginy, Discord boty, aplikacje webowe, aplikacje mobilne" />
        <meta name="author" content="Mateusz Dymowski" />
        <link rel="canonical" href="https://mdevelop.netlify.app/" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="M_Develop" />
        <meta property="og:title" content="M_Develop – Mateusz | Full‑stack, MC plugins, Discord bots" />
        <meta property="og:description" content="Tworzę aplikacje webowe, mobilne, desktopowe, pluginy Minecraft i boty Discord. Next.js, React, TypeScript, Framer Motion." />
        <meta property="og:url" content="https://mdevelop.netlify.app/" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="M_Develop – Mateusz | Full‑stack, MC plugins, Discord bots" />
        <meta name="twitter:description" content="Tworzę aplikacje webowe, mobilne, desktopowe, pluginy Minecraft i boty Discord." />

        {/* JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Mateusz Dymowski',
              url: 'https://m-develop.dev/',
              sameAs: [
                'https://github.com/mdevelop1',
                'https://discord.gg/Khr6Dg8q',
                'mailto:mateuszfirmowe@wp.pl'
              ],
              jobTitle: 'Full‑stack Developer',
              worksFor: { '@type': 'Organization', name: 'M_Develop' }
            })
          }}
        />
      </Head>
      <main>
        <Hero />
        <section id="about" className="section py-20">
          <About />
        </section>
        <SectionDivider />
        <section id="shares" className="section py-20">
          <Shares />
        </section>
        <section id="portfolio" className="section py-20">
          <Portfolio />
        </section>
        <section id="services" className="section py-20">
          <Services />
        </section>
        <section id="tech" className="section py-20">
          <TechStack />
        </section>
        <section id="testimonials" className="section py-20">
          <Testimonials />
        </section>
        <section id="contact" className="section py-20">
          <ContactForm />
        </section>
        <Footer />
      </main>
    </>
  )
}
