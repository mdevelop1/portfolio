import { Card } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

type ShareLogo = {
  name: string;
  href: string;
  logoSrc: string;
  alt?: string;
};

const SHARES_LOGOS: ShareLogo[] = [
  {
    name: "M_Develop",
    href: "https://mdevelop.netlify.app/",
    logoSrc: "/images/logo.svg",
    alt: "M_Develop logo",
  },
  {
    name: "Projekt 2",
    href: "#",
    logoSrc: "/images/portfolio/placeholder.svg",
    alt: "Projekt 2 logo",
  },
  {
    name: "Projekt 3",
    href: "#",
    logoSrc: "/images/portfolio/placeholder.svg",
    alt: "Projekt 3 logo",
  },
];

export default function Shares() {
  return (
    <section>
      <h2 className="section-title">Moje udziały</h2>
      <p className="section-sub">Kliknij logo, aby przejść na stronę projektu.</p>

      <TooltipProvider>
        <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
          {SHARES_LOGOS.map((item) => (
            <Card key={item.name} className="group flex items-center justify-center p-6 bg-white hover:shadow-md transition-shadow">
              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                    aria-label={item.name}
                    className="inline-flex"
                  >
                    <img
                      src={item.logoSrc}
                      alt={item.alt || item.name}
                      className="h-12 w-auto opacity-90 transition-all group-hover:opacity-100 group-hover:scale-[1.03]"
                    />
                  </a>
                </TooltipTrigger>
                <TooltipContent>{item.name}</TooltipContent>
              </Tooltip>
            </Card>
          ))}
        </div>
      </TooltipProvider>
    </section>
  );
}
