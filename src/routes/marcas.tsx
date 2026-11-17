import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowUpRight, Check, Pencil, Plus, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { initialBrands, type BrandEntry } from "@/lib/site-content";

export const Route = createFileRoute("/marcas")({
  head: () => ({ meta: [{ title: "Marcas | Flávia Lisboa" }, { name: "description", content: "Marcas que confiaram no meu trabalho: parcerias e projetos construídos com estratégia e criatividade." }, { property: "og:title", content: "Marcas | Flávia Lisboa" }, { property: "og:description", content: "Marcas que confiaram no meu trabalho: parcerias e projetos construídos com estratégia e criatividade." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }, { property: "og:url", content: "/marcas" }], links: [{ rel: "canonical", href: "/marcas" }] }),
  component: Marcas,
});

function monogram(name: string) {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "—";
  return ((parts[0]?.[0] ?? "") + (parts[1]?.[0] ?? "")).toUpperCase() || "—";
}

function Marcas() {
  const [brands, setBrands] = useState<BrandEntry[]>(initialBrands);
  const [brandEditingId, setBrandEditingId] = useState<string | null>(null);
  const [brandDraft, setBrandDraft] = useState("");

  const addBrand = () => {
    const entry: BrandEntry = { id: crypto.randomUUID(), name: "", imageUrl: "" };
    setBrands((items) => [...items, entry]);
    setBrandEditingId(entry.id);
    setBrandDraft("");
  };
  const saveBrand = () => {
    if (!brandEditingId) return;
    setBrands((items) => items.map((item) => item.id === brandEditingId ? { ...item, name: brandDraft.trim() } : item));
    setBrandEditingId(null);
    setBrandDraft("");
  };
  const removeBrand = (id: string) => {
    setBrands((items) => items.filter((item) => item.id !== id));
    if (brandEditingId === id) { setBrandEditingId(null); setBrandDraft(""); }
  };

  const addSlots = Math.max(1, 4 - brands.length);

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
      <div className="site-container py-16 md:py-24">
        <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="eyebrow">Marcas parceiras</p>
            <h2 className="mt-4 text-2xl font-semibold">Logotipos de marcas</h2>
          </div>
          <p className="max-w-sm text-xs leading-6 text-muted-foreground">Os logotipos só entram aqui após fornecidos oficialmente. Nenhum cliente foi inventado. Alterações nesta visualização não são publicadas nem salvas entre visitas.</p>
        </div>
        {brands.length === 0 && <p className="mb-8 max-w-xl border-l-2 border-line pl-4 text-sm leading-7 text-muted-foreground">A grade abaixo está vazia de propósito: cada espaço aguarda o logotipo de uma parceria real. Clique em &quot;Adicionar marca&quot; para começar a preparar os cartões.</p>}
        <div className="grid grid-cols-2 gap-5 md:grid-cols-3 xl:grid-cols-4">
          {brands.map((brand) => <article key={brand.id} className="case-card flex min-h-[190px] flex-col p-6">
            <div className="flex items-start justify-between gap-2">
              {brand.imageUrl
                ? <img src={brand.imageUrl} alt={`Logotipo de ${brand.name || "marca"}`} className="max-h-12 max-w-[70%] object-contain" />
                : <span aria-hidden="true" className="flex size-14 items-center justify-center rounded-full border border-line text-lg font-semibold text-primary/60">{monogram(brand.name)}</span>}
              <div className="flex shrink-0 gap-1">
                <Button variant="ghost" size="icon" aria-label={`Editar marca ${brand.name || "sem nome"}`} title="Editar marca" onClick={() => { setBrandEditingId(brand.id); setBrandDraft(brand.name); }}><Pencil size={15} /></Button>
                <Button variant="ghost" size="icon" aria-label={`Remover marca ${brand.name || "sem nome"}`} title="Remover marca" onClick={() => removeBrand(brand.id)}><X size={15} /></Button>
              </div>
            </div>
            {brandEditingId === brand.id
              ? <div className="mt-auto pt-6"><Label htmlFor={`brand-${brand.id}`}>Nome da marca</Label><Input id={`brand-${brand.id}`} maxLength={60} value={brandDraft} onChange={(e) => setBrandDraft(e.target.value)} placeholder="Nome oficial da marca" className="mt-2" /><Button variant="editorial" size="sm" className="mt-3" onClick={saveBrand}><Check size={15} /> Salvar</Button></div>
              : <div className="mt-auto pt-6"><h3 className="text-base font-semibold">{brand.name || "Marca sem nome"}</h3><p className="mt-2 text-xs text-muted-foreground">{brand.imageUrl ? "Logotipo fornecido" : "Logotipo aguardando arquivo oficial"}</p></div>}
          </article>)}
          {Array.from({ length: addSlots }).map((_, index) => <button key={`add-${index}`} type="button" onClick={addBrand} className="placeholder-frame flex min-h-[190px] flex-col items-center justify-center gap-3 p-6 text-center transition-colors hover:border-line" aria-label="Adicionar marca">
            <span className="flex size-12 items-center justify-center rounded-full border border-line text-primary"><Plus size={20} /></span>
            <span className="text-xs font-semibold uppercase tracking-[0.15em] text-soft">Adicionar marca</span>
            <span className="text-[11px] text-muted-foreground">Espaço reservado para logotipo real</span>
          </button>)}
        </div>
      </div>
    </section>

    <section className="border-t border-border bg-surface">
      <div className="site-container grid gap-8 py-20 md:grid-cols-2 md:items-end md:py-28">
        <div>
          <p className="eyebrow">Sua marca aqui</p>
          <h2 className="section-title mt-6">A próxima parceria<br />pode ser a sua.</h2>
        </div>
        <Button asChild variant="editorial" size="lg" className="h-13 px-7 md:justify-self-end"><Link to="/contato">Vamos conversar <ArrowUpRight /></Link></Button>
      </div>
    </section>
  </>;
}
