import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowUpRight, Check, ImagePlus, Pencil, Plus, Quote, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { initialTestimonials, type TestimonialEntry } from "@/lib/site-content";

export const Route = createFileRoute("/depoimentos")({
  head: () => ({ meta: [{ title: "Depoimentos | Flávia Lisboa" }, { name: "description", content: "O que dizem sobre meu trabalho: depoimentos publicados somente com autorização expressa." }, { property: "og:title", content: "Depoimentos | Flávia Lisboa" }, { property: "og:description", content: "O que dizem sobre meu trabalho: depoimentos publicados somente com autorização expressa." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }, { property: "og:url", content: "/depoimentos" }], links: [{ rel: "canonical", href: "/depoimentos" }] }),
  component: Depoimentos,
});

function Depoimentos() {
  const [testimonials, setTestimonials] = useState<TestimonialEntry[]>(initialTestimonials);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [draft, setDraft] = useState<TestimonialEntry | null>(null);

  const editTestimonial = (id: string) => {
    const selected = testimonials.find((item) => item.id === id);
    if (!selected) return;
    setDraft({ ...selected });
    setEditingId(id);
  };
  const saveTestimonial = () => {
    if (!editingId || !draft) return;
    setTestimonials((items) => items.map((item) => item.id === editingId ? { ...draft, isPlaceholder: false } : item));
    setEditingId(null);
    setDraft(null);
  };
  const removeTestimonial = (id: string) => {
    setTestimonials((items) => items.filter((item) => item.id !== id));
    if (editingId === id) { setEditingId(null); setDraft(null); }
  };
  const addTestimonial = () => {
    const entry: TestimonialEntry = { id: crypto.randomUUID(), quote: "", author: "", role: "", company: "", imageUrl: "", authorization: "Pendente", isPlaceholder: false };
    setTestimonials((items) => [...items, entry]);
    setDraft({ ...entry });
    setEditingId(entry.id);
  };

  return <>
    <section className="site-container py-20 md:py-32">
      <div className="fade-in">
        <p className="eyebrow">Depoimentos / 05</p>
        <div className="mt-7 grid gap-10 md:grid-cols-[1.2fr_.8fr] md:items-end">
          <h1 className="page-title">O que dizem sobre<br /><span className="text-primary">meu trabalho.</span></h1>
          <p className="max-w-md leading-8 text-muted-foreground">Experiências de quem caminhou comigo, publicadas somente com autorização.</p>
        </div>
      </div>
    </section>

    <section className="border-t border-border site-container py-20 md:py-28">
      <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
        <div>
          <p className="eyebrow">Depoimentos</p>
          <h2 className="mt-4 text-2xl font-semibold">Cartões de feedback</h2>
        </div>
        <div className="max-w-sm">
          <p className="text-xs leading-6 text-muted-foreground">Os cartões abaixo são exemplos de layout, claramente identificados. Nenhum depoimento fictício é apresentado como real, e cada publicação depende da autorização de quem depoimentou.</p>
          <Button variant="editorialOutline" className="mt-5 h-10 px-5 text-xs uppercase tracking-widest" onClick={addTestimonial}><Plus size={16} /> Adicionar depoimento</Button>
        </div>
      </div>
      {testimonials.length === 0 && <p className="max-w-xl border-l-2 border-line pl-4 text-sm leading-7 text-muted-foreground">Nenhum depoimento cadastrado ainda. Use o botão acima para preparar um cartão; o conteúdo só é publicado com autorização confirmada.</p>}
      <div className="grid gap-5 lg:grid-cols-2">
        {testimonials.map((item) => <article key={item.id} className="case-card flex min-h-[300px] flex-col p-7">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-2">
              {item.isPlaceholder && <span className="border border-line px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-primary">Exemplo de layout</span>}
              <span className={`px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.15em] ${item.authorization === "Autorizada" ? "border border-line text-soft" : "border border-border text-muted-foreground"}`}>Autorização: {item.authorization}</span>
            </div>
            <div className="flex gap-1">
              <Button variant="ghost" size="icon" aria-label={`Editar depoimento de ${item.author || "autor sem nome"}`} title="Editar depoimento" onClick={() => editTestimonial(item.id)}><Pencil size={16} /></Button>
              <Button variant="ghost" size="icon" aria-label={`Remover depoimento de ${item.author || "autor sem nome"}`} title="Remover depoimento" onClick={() => removeTestimonial(item.id)}><X size={16} /></Button>
            </div>
          </div>
          {editingId === item.id && draft ? <div className="mt-6 flex flex-1 flex-col gap-4">
            <div><Label htmlFor={`quote-${item.id}`}>Depoimento</Label><Textarea id={`quote-${item.id}`} maxLength={600} value={draft.quote} onChange={(e) => setDraft({ ...draft, quote: e.target.value })} className="mt-2 min-h-24" /></div>
            <div className="grid gap-4 sm:grid-cols-3">
              <div><Label htmlFor={`author-${item.id}`}>Nome</Label><Input id={`author-${item.id}`} maxLength={80} value={draft.author} onChange={(e) => setDraft({ ...draft, author: e.target.value })} className="mt-2" /></div>
              <div><Label htmlFor={`role-${item.id}`}>Cargo</Label><Input id={`role-${item.id}`} maxLength={80} value={draft.role} onChange={(e) => setDraft({ ...draft, role: e.target.value })} className="mt-2" /></div>
              <div><Label htmlFor={`company-${item.id}`}>Empresa</Label><Input id={`company-${item.id}`} maxLength={80} value={draft.company} onChange={(e) => setDraft({ ...draft, company: e.target.value })} className="mt-2" /></div>
            </div>
            <div><Label htmlFor={`authorization-${item.id}`}>Autorização para publicação</Label><select id={`authorization-${item.id}`} value={draft.authorization} onChange={(e) => setDraft({ ...draft, authorization: e.target.value as TestimonialEntry["authorization"] })} className="mt-2 h-10 w-full rounded-[var(--radius)] border border-input bg-background px-3 text-sm text-foreground">
              <option value="Pendente">Pendente</option>
              <option value="Autorizada">Autorizada</option>
              <option value="Não autorizada">Não autorizada</option>
            </select></div>
            <div className="mt-auto flex gap-2"><Button variant="editorial" onClick={saveTestimonial}><Check size={16} /> Salvar</Button><Button variant="editorialOutline" onClick={() => { setEditingId(null); setDraft(null); }}><X size={16} /> Cancelar</Button></div>
          </div> : <div className="mt-8 flex flex-1 flex-col">
            <Quote size={20} className="text-primary/60" aria-hidden="true" />
            <p className="mt-4 flex-1 text-sm leading-7 text-soft">{item.quote || "Depoimento aguardando conteúdo."}</p>
            <div className="mt-8 flex items-end justify-between gap-4 border-t border-border pt-5">
              <div>
                <p className="text-sm font-semibold">{item.author || "Nome a definir"}</p>
                <p className="mt-1 text-xs text-muted-foreground">{[item.role, item.company].filter(Boolean).join(" • ") || "Cargo e empresa a definir"}</p>
              </div>
              {item.imageUrl
                ? <img src={item.imageUrl} alt={`Imagem de ${item.author || "cliente"}`} className="size-14 rounded-full border border-line object-cover" />
                : <span className="flex size-14 shrink-0 items-center justify-center rounded-full border border-dashed border-input text-muted-foreground" title="Imagem opcional — nenhuma foto utilizada"><ImagePlus size={18} aria-hidden="true" /><span className="sr-only">Imagem opcional — nenhuma foto utilizada</span></span>}
            </div>
          </div>}
        </article>)}
      </div>
    </section>

    <section className="border-t border-border bg-surface">
      <div className="site-container grid gap-8 py-20 md:grid-cols-2 md:items-end md:py-28">
        <div>
          <p className="eyebrow">Próximo passo</p>
          <h2 className="section-title mt-6">A próxima parceria<br />pode ser a sua.</h2>
        </div>
        <Button asChild variant="editorial" size="lg" className="h-13 px-7 md:justify-self-end"><Link to="/contato">Vamos conversar <ArrowUpRight /></Link></Button>
      </div>
    </section>
  </>;
}
