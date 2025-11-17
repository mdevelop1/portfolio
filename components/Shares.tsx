import { Card } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/utils/cn";

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
    name: " Virifo",
    href: "https://virifo.pl/",
    logoSrc: "/images/portfolio/virifo.png",
    alt: "Virifo logo",
  },
  {
    name: "HyperGrid",
    href: "https://hypergrid.pl/",
    logoSrc: "/images/portfolio/hypergrid.png",
    alt: "HyperGrid logo",
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
            <Card
              key={item.name}
              className={cn(
                "group flex items-center justify-center p-6 hover:shadow-md transition-shadow",
                item.name === "HyperGrid" ? "bg-zinc-900" : "bg-white"
              )}
            >
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
                      className={cn(
                        "w-auto opacity-90 transition-all group-hover:opacity-100 group-hover:scale-[1.03]",
                        item.name === "M_Develop" ? "h-16 sm:h-20" : "h-12"
                      )}
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
