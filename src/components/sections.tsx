import { Quote } from "lucide-react";
import logoEstrategia from "@/assets/logo-estrategia.webp";
import { brands, platformFeatures, testimonials } from "@/lib/site-content";

export function EstrategiaName() {
  return <span className="estrategia-name">ESTRATEG<span>IA</span></span>;
}

export function PlatformVideo() {
  return (
    <div className="platform-video">
      <video controls playsInline preload="none" poster="/videos/estrategia-poster.jpg" aria-label="Vídeo de apresentação da plataforma EstrategIA">
        <source src="/videos/estrategia.mp4" type="video/mp4" />
        Seu navegador não reproduz vídeos. <a href="/videos/estrategia.mp4">Baixe o vídeo de apresentação</a>.
      </video>
    </div>
  );
}

export function PlatformIntro() {
  return (
    <div className="grid gap-12 lg:grid-cols-[.95fr_1.05fr] lg:items-center lg:gap-16">
      <div>
        <img src={logoEstrategia} alt="Logomarca da plataforma EstrategIA" width={1400} height={788} loading="lazy" className="w-full max-w-md rounded-lg border border-line" />
        <p className="eyebrow mt-10">Conheça a plataforma</p>
        <h2 className="section-title mt-5"><EstrategiaName /></h2>
        <p className="mt-6 max-w-xl text-base leading-8 text-soft md:text-lg">
          Uma plataforma estratégica para o empresário ter uma análise ampla de todas as tendências de mercado do seu nicho no ambiente online — com criação automatizada de posts e análises de performance.
        </p>
      </div>
      <PlatformVideo />
    </div>
  );
}

export function PlatformFeatures() {
  return (
    <div className="grid border-t border-border md:grid-cols-3">
      {platformFeatures.map((f, i) => (
        <div key={f.title} className="border-b border-border py-9 md:border-r md:px-8 md:first:pl-0 md:last:border-r-0">
          <span className="number-badge">0{i + 1}</span>
          <h3 className="mt-6 text-xl font-semibold">{f.title}</h3>
          <p className="mt-4 text-sm leading-7 text-muted-foreground">{f.description}</p>
        </div>
      ))}
    </div>
  );
}

export function BrandGrid({ compact = false }: { compact?: boolean }) {
  return (
    <ul className={`grid gap-4 ${compact ? "grid-cols-2 sm:grid-cols-3 lg:grid-cols-6" : "grid-cols-2 md:grid-cols-3"}`}>
      {brands.map((b) => (
        <li key={b.name} className={`brand-card ${compact ? "aspect-[4/3]" : "aspect-[5/4]"}`}>
          <img src={b.logo} alt={`Logomarca ${b.name}`} loading="lazy" />
          {!compact && <span className="sr-only">{b.name}</span>}
        </li>
      ))}
    </ul>
  );
}

export function TestimonialList() {
  return (
    <div className="grid gap-5 lg:grid-cols-2">
      {testimonials.map((t) => (
        <figure key={t.author} className="case-card flex flex-col p-7 md:p-9">
          <Quote size={22} className="text-primary" aria-hidden="true" />
          <blockquote className="mt-5 flex-1 text-sm leading-8 text-soft md:text-base">“{t.quote}”</blockquote>
          <figcaption className="mt-8 border-t border-border pt-5">
            <p className="font-semibold">{t.author}</p>
            <p className="mt-1 text-xs uppercase tracking-[0.14em] text-muted-foreground">{t.role}</p>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
