export const socialLinks = {
  whatsapp: "",
  instagram: "",
};

export const services = [
  { number: "01", title: "Planejamento de marketing", description: "Diagnóstico, prioridades e um plano de ação conectado aos objetivos do negócio." },
  { number: "02", title: "Estratégia comercial", description: "Estruturação de processos, oportunidades e indicadores para decisões mais consistentes." },
  { number: "03", title: "Branding e posicionamento", description: "Clareza de marca, narrativa e presença para ocupar o lugar certo no mercado." },
  { number: "04", title: "Social media", description: "Direção editorial e conteúdo pensado para construir relevância, não apenas preencher um calendário." },
  { number: "05", title: "Campanhas e produção audiovisual", description: "Ideia, conceito e execução criativa em diferentes formatos e pontos de contato." },
];

export const initialCases = [
  { category: "ESTUDO DE CASO 01", title: "Título do projeto", context: "Contexto do projeto a ser preenchido.", approach: "Abordagem estratégica a ser preenchida.", outcome: "Resultados verificados a serem preenchidos." },
  { category: "ESTUDO DE CASO 02", title: "Título do projeto", context: "Contexto do projeto a ser preenchido.", approach: "Abordagem estratégica a ser preenchida.", outcome: "Resultados verificados a serem preenchidos." },
  { category: "ESTUDO DE CASO 03", title: "Título do projeto", context: "Contexto do projeto a ser preenchido.", approach: "Abordagem estratégica a ser preenchida.", outcome: "Resultados verificados a serem preenchidos." },
];

// Marcas: preenchido somente com logotipos e nomes oficiais fornecidos.
// imageUrl aceita a logo quando houver arquivo real; vazio = espaço reservado.
export type BrandEntry = { id: string; name: string; imageUrl: string };
export const initialBrands: BrandEntry[] = [];

// Depoimentos: exemplos de layout apenas — nenhum depoimento fictício é
// apresentado como real. Publicação sempre condicionada ao campo authorization.
export type TestimonialEntry = {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  imageUrl: string; // imagem opcional; vazio = nenhum retrato utilizado
  authorization: "Pendente" | "Autorizada" | "Não autorizada";
  isPlaceholder: boolean;
};

export const initialTestimonials: TestimonialEntry[] = [
  {
    id: "exemplo-01",
    quote: "Espaço reservado para o texto do depoimento. Este cartão é apenas um exemplo de layout — nenhum depoimento foi criado ou atribuído a pessoas reais.",
    author: "Nome do cliente",
    role: "Cargo",
    company: "Empresa",
    imageUrl: "",
    authorization: "Pendente",
    isPlaceholder: true,
  },
  {
    id: "exemplo-02",
    quote: "Espaço reservado para o texto do depoimento. A publicação só acontece com autorização expressa de quem depoimentou.",
    author: "Nome do cliente",
    role: "Cargo",
    company: "Empresa",
    imageUrl: "",
    authorization: "Pendente",
    isPlaceholder: true,
  },
];
