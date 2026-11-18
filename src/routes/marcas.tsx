import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BrandGrid } from "@/components/sections";

export const Route = createFileRoute("/marcas")({
  head: () => ({ meta: [{ title: "Marcas | Flávia Lisboa" }, { name: "description", content: "Marcas que confiaram no meu trabalho: Estácio, Fases e Faces, Inglês com Paulo Mineiro, Kátya Lisboa, Pride & Joy e Fribourg." }, { property: "og:title", content: "Marcas | Flávia Lisboa" }, { property: "og:description", content: "Marcas que confiaram no meu trabalho: parcerias e projetos construídos com estratégia e criatividade." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }, { property: "og:url", content: "/marcas" }], links: [{ rel: "canonical", href: "/marcas" }] }),
  component: Marcas,
});

function Marcas() {
  return <>
    <section className="site-container py-20 md:py-32">
      <div className="fade-in">
        <p className="eyebrow">Marcas / 04</p>
        <div className="mt-7 grid gap-10 md:grid-cols-[1.2fr_.8fr] md:items-end">
          <h1 className="page-title">Marcas que confiaram<br /><span className="text-primary">no meu trabalho.</span></h1>
          <p className="max-w-md leading-8 text-muted-foreground">Parcerias, projetos e experiências construídas com estratégia e criatividade.</p>
        </div>
      </div>
    </section>
    <section className="border-y border-border bg-surface">
      <div className="site-container py-16 md:py-24"><BrandGrid /></div>
    </section>
    <section className="site-container grid gap-8 py-20 md:grid-cols-2 md:items-end md:py-28">
      <div><p className="eyebrow">Sua marca aqui</p><h2 className="section-title mt-6">A próxima parceria<br />pode ser a sua.</h2></div>
      <Button asChild variant="editorial" size="lg" className="h-13 px-7 md:justify-self-end"><Link to="/contato">Vamos conversar <ArrowUpRight /></Link></Button>
    </section>
  </>;
}
