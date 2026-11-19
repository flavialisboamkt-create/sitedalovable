import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { ArrowUpRight, Instagram, MessageCircle, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { contact } from "@/lib/site-content";
export const Route = createFileRoute("/contato")({ head: () => ({ meta: [{ title: "Contato | Flávia Lisboa" }, { name: "description", content: "Entre em contato com Flávia Lisboa para conversar sobre marketing, estratégia e os próximos passos do seu negócio." }, { property: "og:title", content: "Contato | Flávia Lisboa" }, { property: "og:description", content: "Vamos conversar sobre os desafios e oportunidades do seu negócio." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }, { property: "og:url", content: "/contato" }], links: [{ rel: "canonical", href: "/contato" }] }), component: Contact });
function Contact() {
 const [notice, setNotice] = useState(false);
 const onSubmit = (event: FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  const form = event.currentTarget;
  if (!form.reportValidity()) return;
  const data = new FormData(form);
  const field = (key: string) => String(data.get(key) ?? "").trim();
  const lines = ["Olá, Flávia! Vim pelo site.", "", `*Nome:* ${field("name")}`, `*E-mail:* ${field("email")}`];
  if (field("company")) lines.push(`*Empresa:* ${field("company")}`);
  lines.push(`*Mensagem:* ${field("message")}`);
  const url = `${contact.whatsappHref}?text=${encodeURIComponent(lines.join("\n"))}`;
  // "noopener" would make window.open always return null, so detach the opener by hand.
  const win = window.open(url, "_blank");
  if (win) win.opener = null;
  else window.location.href = url;
  setNotice(true);
 };
 return <><section className="site-container py-20 md:py-32"><p className="eyebrow">Contato / 04</p><h1 className="page-title mt-7">Vamos falar sobre<br /><span className="text-primary">o próximo passo?</span></h1><p className="mt-8 max-w-xl text-lg leading-9 text-muted-foreground">Conte um pouco sobre o seu negócio e o desafio que você quer resolver. Toda boa estratégia começa com uma conversa.</p></section><section className="border-y border-border bg-surface"><div className="site-container grid gap-16 py-20 md:grid-cols-[1.3fr_.7fr] md:gap-24 md:py-28"><div><p className="eyebrow">Sua mensagem</p><h2 className="mt-5 text-2xl font-semibold">Conte-me sobre seu projeto.</h2><p className="mt-4 max-w-xl text-sm leading-7 text-muted-foreground">Preencha os campos e clique em enviar: o WhatsApp abre com a sua mensagem pronta para mim. É só confirmar o envio por lá.</p><form onSubmit={onSubmit} className="mt-10 space-y-6"><div className="grid gap-6 sm:grid-cols-2"><div><Label htmlFor="name">Seu nome *</Label><Input id="name" name="name" required minLength={2} maxLength={100} autoComplete="name" placeholder="Como podemos chamar você?" className="mt-3 h-12 bg-background" /></div><div><Label htmlFor="email">Seu e-mail *</Label><Input id="email" type="email" name="email" required autoComplete="email" placeholder="voce@empresa.com" className="mt-3 h-12 bg-background" /></div></div><div><Label htmlFor="company">Empresa ou negócio</Label><Input id="company" name="company" maxLength={120} placeholder="Nome da empresa (opcional)" className="mt-3 h-12 bg-background" /></div><div><Label htmlFor="message">Sobre o que você gostaria de conversar? *</Label><Textarea id="message" name="message" required minLength={10} maxLength={2000} placeholder="Conte um pouco sobre seu momento e seus objetivos..." className="mt-3 min-h-40 bg-background" /></div><p className="text-xs leading-6 text-muted-foreground">* Campos obrigatórios. Os dados não ficam salvos no site: eles vão apenas para a mensagem do WhatsApp.</p><Button type="submit" variant="editorial" size="lg" className="h-13 px-7">Enviar pelo WhatsApp <Send /></Button>{notice && <p role="status" className="border-l-2 border-primary pl-4 text-sm leading-7 text-soft">Abrimos o WhatsApp com a sua mensagem. Confirme o envio por lá. Se ele não abriu, <a href={contact.whatsappHref} target="_blank" rel="noopener noreferrer" className="font-semibold text-primary underline">clique aqui</a>.</p>}</form></div><aside className="md:border-l md:border-border md:pl-12"><p className="eyebrow">Outros canais</p><h2 className="mt-5 text-2xl font-semibold">Prefere falar direto?</h2><p className="mt-4 text-sm leading-7 text-muted-foreground">Fale comigo pelo WhatsApp, por telefone ou pelo Instagram.</p><div className="mt-9 border-t border-border">{[{label:"WhatsApp",detail:contact.phoneDisplay,icon:MessageCircle,url:contact.whatsappHref,external:true},{label:"Telefone",detail:contact.phoneDisplay,icon:Phone,url:contact.phoneHref,external:false},{label:"Instagram",detail:contact.instagramHandle,icon:Instagram,url:contact.instagramHref,external:true}].map(({label,detail,icon:Icon,url,external}) => <a key={label} href={url} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})} className="contact-link"><span className="flex items-center gap-3"><Icon size={19} className="shrink-0 text-primary" /><span><span className="block text-sm font-semibold">{label}</span><span className="block text-xs text-muted-foreground">{detail}</span></span></span><ArrowUpRight size={19} className="shrink-0 text-primary" /></a>)}</div></aside></div></section></>;
}
