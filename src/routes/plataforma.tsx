import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { EstrategiaName, PlatformFeatures, PlatformIntro } from "@/components/sections";

export const Route = createFileRoute("/plataforma")({
  head: () => ({ meta: [{ title: "Plataforma EstrategIA | Flávia Lisboa" }, { name: "description", content: "EstrategIA: plataforma estratégica com análise de tendências do seu nicho no ambiente online, criação automatizada de posts e análises de performance." }, { property: "og:title", content: "Plataforma EstrategIA | Flávia Lisboa" }, { property: "og:description", content: "Tendências do seu nicho, posts automatizados e análise de performance em uma só plataforma." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }, { property: "og:url", content: "/plataforma" }], links: [{ rel: "canonical", href: "/plataforma" }] }),
  component: Plataforma,
});

function Plataforma() {
  return <>
    <section className="site-container py-20 md:py-28">
      <p className="eyebrow">Plataforma / 03</p>
      <div className="mt-7 grid gap-10 md:grid-cols-[1.2fr_.8fr] md:items-end">
        <h1 className="page-title">Conheça a<br /><EstrategiaName /></h1>
        <p className="max-w-md leading-8 text-muted-foreground">Estratégia orientada por dados para empresários que querem entender o mercado online e agir com mais velocidade.</p>
      </div>
    </section>
    <section className="platform-section border-y border-border"><div className="site-container py-20 md:py-28"><PlatformIntro /></div></section>
    <section className="site-container py-20 md:py-28"><p className="eyebrow mb-10">O que a plataforma faz</p><PlatformFeatures /></section>
    <section className="border-t border-border bg-surface">
      <div className="site-container grid gap-8 py-20 md:grid-cols-2 md:items-end md:py-28">
        <div><p className="eyebrow">Quer conhecer de perto?</p><h2 className="section-title mt-6">Leve a EstrategIA<br />para o seu negócio.</h2></div>
        <Button asChild variant="editorial" size="lg" className="h-13 px-7 md:justify-self-end"><Link to="/contato">Quero conhecer <ArrowUpRight /></Link></Button>
      </div>
    </section>
  </>;
}
