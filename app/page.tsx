import { Navigation } from "@/components/landing/navigation";
import { HeroSection } from "@/components/landing/hero-section";
import { FeaturesSection } from "@/components/landing/features-section";
import { HowItWorksSection } from "@/components/landing/how-it-works-section";
import { DevelopersSection } from "@/components/landing/developers-section";
import { CtaSection } from "@/components/landing/cta-section";
import { FooterSection } from "@/components/landing/footer-section";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        name: "Mateusz Dymowski",
        url: siteUrl,
        jobTitle: "Full Stack Developer",
        description: "Full stack developer tworzący aplikacje webowe, mobilne i desktopowe, automatyzacje oraz systemy dla firm.",
        knowsAbout: [
          "Aplikacje webowe",
          "Aplikacje mobilne",
          "Aplikacje desktopowe",
          "Automatyzacje",
          "Systemy dla firm",
          "Backend i API",
        ],
      },
      {
        "@type": "WebSite",
        name: "Aurexon | Full Stack Developer",
        url: siteUrl,
        inLanguage: "pl-PL",
        description: "Aplikacje, automatyzacje i systemy dla firm.",
      },
      {
        "@type": "ProfessionalService",
        name: "Aurexon - Full Stack Development",
        url: siteUrl,
        description: "Tworzenie aplikacji webowych, mobilnych i desktopowych oraz automatyzacji dla firm.",
        areaServed: "PL",
        serviceType: [
          "Tworzenie aplikacji webowych",
          "Tworzenie aplikacji mobilnych",
          "Tworzenie aplikacji desktopowych",
          "Automatyzacja procesów",
          "Systemy dla firm",
        ],
      },
    ],
  };

  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <DevelopersSection />
      <CtaSection />
      <FooterSection />
    </main>
  );
}
