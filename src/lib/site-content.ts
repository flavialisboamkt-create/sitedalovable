import estacio from "@/assets/marcas/estacio.webp";
import fasesEFaces from "@/assets/marcas/fases-e-faces.webp";
import inglesPauloMineiro from "@/assets/marcas/ingles-com-paulo-mineiro.webp";
import katyaLisboa from "@/assets/marcas/katya-lisboa.webp";
import prideAndJoy from "@/assets/marcas/pride-and-joy.webp";
import fribourg from "@/assets/marcas/fribourg.webp";

export const contact = {
  phoneDisplay: "(22) 99955-7666",
  phoneHref: "tel:+5522999557666",
  whatsappHref: "https://wa.me/5522999557666",
  instagramHandle: "@flavialisboamkt",
  instagramHref: "https://www.instagram.com/flavialisboamkt/",
};

export const services = [
  { number: "01", title: "Criação de sites e sistemas", description: "Sites e sistemas sob medida, pensados para apresentar o negócio, gerar contatos e organizar a operação." },
  { number: "02", title: "Planejamento de marketing", description: "Diagnóstico, prioridades e um plano de ação conectado aos objetivos do negócio." },
  { number: "03", title: "Estratégia comercial", description: "Estruturação de processos, oportunidades e indicadores para decisões mais consistentes." },
  { number: "04", title: "Branding e posicionamento", description: "Clareza de marca, narrativa e presença para ocupar o lugar certo no mercado." },
  { number: "05", title: "Social media", description: "Direção editorial e conteúdo pensado para construir relevância, não apenas preencher um calendário." },
  { number: "06", title: "Campanhas e produção audiovisual", description: "Ideia, conceito e execução criativa em diferentes formatos e pontos de contato." },
];

export type BrandEntry = { name: string; logo: string };
export const brands: BrandEntry[] = [
  { name: "Estácio", logo: estacio },
  { name: "Fases e Faces — Grupo Terapêutico", logo: fasesEFaces },
  { name: "Inglês com Paulo Mineiro", logo: inglesPauloMineiro },
  { name: "Kátya Lisboa — Neuropsicóloga", logo: katyaLisboa },
  { name: "Pride & Joy — Eventos e Buffet", logo: prideAndJoy },
  { name: "Fribourg — Picolés e Sorvetes", logo: fribourg },
];

export type Testimonial = { quote: string; author: string; role: string };
export const testimonials: Testimonial[] = [
  {
    quote: "A Flávia é uma profissional que vai muito além do marketing convencional. Ela tem uma visão estratégica diferenciada, entende as necessidades do negócio e consegue transformar ideias em ações práticas e resultados. Sua criatividade, organização e comprometimento fazem toda a diferença. O que mais admiro é sua capacidade de enxergar oportunidades, propor soluções inovadoras e cuidar de cada detalhe com profissionalismo. É uma profissional que realmente agrega valor ao crescimento de uma empresa.",
    author: "Paulo Mineiro",
    role: "CEO Inglês com Paulo Mineiro",
  },
  {
    quote: "Trabalhar com a Flávia foi uma experiência excelente! Ela tem uma visão estratégica incrível e consegue transformar ideias em ações que realmente geram resultados. Além de ser extremamente criativa e profissional, está sempre atenta aos detalhes e às necessidades do negócio. O que mais me impressionou foi a capacidade dela de entender a marca, identificar oportunidades e desenvolver estratégias de marketing que fazem a diferença. Recomendo de olhos fechados!",
    author: "Pedro",
    role: "CEO Pride & Joy",
  },
];

export const platformFeatures = [
  { title: "Tendências do seu nicho", description: "Análise ampla do que está em alta no ambiente online do seu mercado, para decidir com base em dados." },
  { title: "Posts criados automaticamente", description: "Criação automatizada de publicações alinhadas à sua marca e às tendências identificadas." },
  { title: "Análise de performance", description: "Acompanhamento de resultados para entender o que funciona e ajustar a estratégia com rapidez." },
];
