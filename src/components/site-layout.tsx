import { Link, useRouterState } from "@tanstack/react-router";
import { ArrowUpRight, Instagram, Menu, MessageCircle, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { contact } from "@/lib/site-content";
import brainMark from "@/assets/brain-mark.png";
import fullLogo from "@/assets/logo-flavia-lisboa.jpg";

function BrandName({ className = "" }: { className?: string }) {
  return <span className={`brand-name ${className}`}>FL<span className="a-accent">Á</span>VIA <span className="light">LISBOA</span></span>;
}

const links = [
  { to: "/" as const, label: "Início" },
  { to: "/sobre" as const, label: "Sobre" },
  { to: "/servicos" as const, label: "Serviços" },
  { to: "/plataforma" as const, label: "Plataforma" },
  { to: "/marcas" as const, label: "Marcas" },
  { to: "/depoimentos" as const, label: "Depoimentos" },
  { to: "/contato" as const, label: "Contato" },
];

export function SiteLayout({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="site-header">
        <div className="site-container flex h-[84px] items-center justify-between gap-6">
          <Link to="/" aria-label="Flávia Lisboa — início" className="flex shrink-0 items-center gap-3" onClick={() => setOpen(false)}>
            <img src={brainMark} alt="" aria-hidden="true" width={40} height={40} className="brand-mark" />
            <span className="brand-lockup"><BrandName />
            <span className="brand-subtitle">MARKETING <span>•</span> ESTRATÉGIA <span>•</span> NEGÓCIOS</span></span>
          </Link>
          <nav aria-label="Navegação principal" className="hidden items-center gap-8 lg:flex">
            {links.map((link) => <Link key={link.to} to={link.to} className={`nav-link ${pathname === link.to ? "nav-link-active" : ""}`}>{link.label}</Link>)}
          </nav>
          <Button asChild variant="editorialOutline" className="hidden h-10 px-5 text-xs uppercase tracking-widest lg:inline-flex">
            <Link to="/contato">Vamos conversar <ArrowUpRight /></Link>
          </Button>
          <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setOpen(!open)} aria-label={open ? "Fechar menu" : "Abrir menu"} aria-expanded={open} aria-controls="mobile-nav">
            {open ? <X /> : <Menu />}
          </Button>
        </div>
        {open && <nav id="mobile-nav" aria-label="Navegação móvel" className="mobile-nav lg:hidden">
          {links.map((link) => <Link key={link.to} to={link.to} onClick={() => setOpen(false)} className={`mobile-nav-link ${pathname === link.to ? "text-primary" : ""}`}>{link.label}<ArrowUpRight size={17} /></Link>)}
        </nav>}
      </header>
      <main>{children}</main>
      <footer className="border-t border-border bg-background">
        <div className="site-container py-14 md:py-20">
          <div className="grid gap-12 md:grid-cols-[1fr_auto] md:items-start">
            <div><img src={fullLogo} alt="Logomarca Flávia Lisboa — Marketing, Estratégia, Negócios" width={1600} height={900} loading="lazy" className="w-full max-w-sm rounded-lg border border-border" /><p className="mt-7 max-w-sm text-sm leading-7 text-muted-foreground">Estratégia com visão de negócio. Criação com intenção.</p><div className="mt-6 flex flex-col gap-3 text-sm"><a href={contact.whatsappHref} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-soft transition-colors hover:text-primary"><MessageCircle size={16} className="text-primary" /> {contact.phoneDisplay}</a><a href={contact.instagramHref} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-soft transition-colors hover:text-primary"><Instagram size={16} className="text-primary" /> {contact.instagramHandle}</a></div></div>
            <nav aria-label="Navegação do rodapé" className="grid grid-cols-2 gap-x-12 gap-y-4 text-sm text-muted-foreground md:grid-cols-3">
              {links.map((link) => <Link key={link.to} to={link.to} className="transition-colors hover:text-primary">{link.label}</Link>)}
            </nav>
          </div>
          <div className="mt-16 flex flex-col gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:justify-between"><span>© {new Date().getFullYear()} Flávia Lisboa. Todos os direitos reservados.</span><span>Estratégia que move ideias e negócios.</span></div>
        </div>
      </footer>
    </div>
  );
}
