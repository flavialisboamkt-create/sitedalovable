import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TestimonialList } from "@/components/sections";

export const Route = createFileRoute("/depoimentos")({
  head: () => ({ meta: [{ title: "Depoimentos | Flávia Lisboa" }, { name: "description", content: "O que dizem sobre o trabalho de Flávia Lisboa: depoimentos de Paulo Mineiro (Inglês com Paulo Mineiro) e Pedro (Pride & Joy)." }, { property: "og:title", content: "Depoimentos | Flávia Lisboa" }, { property: "og:description", content: "O que dizem sobre meu trabalho." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }, { property: "og:url", content: "/depoimentos" }], links: [{ rel: "canonical", href: "/depoimentos" }] }),
  component: Depoimentos,
});

function Depoimentos() {
  return <>
    <section className="site-container py-20 md:py-32">
      <div className="fade-in">
        <p className="eyebrow">Depoimentos / 05</p>
        <div className="mt-7 grid gap-10 md:grid-cols-[1.2fr_.8fr] md:items-end">
          <h1 className="page-title">O que dizem sobre<br /><span className="text-primary">meu trabalho.</span></h1>
          <p className="max-w-md leading-8 text-muted-foreground">Experiências de quem caminhou comigo.</p>
        </div>
      </div>
    </section>
    <section className="border-y border-border bg-surface"><div className="site-container py-16 md:py-24"><TestimonialList /></div></section>
    <section className="site-container grid gap-8 py-20 md:grid-cols-2 md:items-end md:py-28">
      <div><p className="eyebrow">Próximo passo</p><h2 className="section-title mt-6">A próxima parceria<br />pode ser a sua.</h2></div>
      <Button asChild variant="editorial" size="lg" className="h-13 px-7 md:justify-self-end"><Link to="/contato">Vamos conversar <ArrowUpRight /></Link></Button>
    </section>
  </>;
}
