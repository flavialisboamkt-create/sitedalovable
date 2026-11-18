# Site Flávia Lisboa — Marketing • Estratégia • Negócios

Site pessoal criado originalmente no Lovable e preparado para publicação no Netlify.

## Rodar localmente

```bash
npm install
npm run dev
```

## Publicação

O Netlify lê o `netlify.toml`: roda `npm run build` e publica a pasta `dist`.
As páginas são renderizadas por uma Netlify Function gerada automaticamente no build.

## Conteúdo

Textos de serviços, marcas, depoimentos, contatos e da plataforma EstrategIA ficam em `src/lib/site-content.ts`.

## Imagens e vídeo

- `src/assets`: logo, ícone, fotos, logo da EstrategIA e a imagem do topo (`hero-brain.webp`).
- `src/assets/marcas`: logomarcas das marcas parceiras.
- `public`: favicon e imagem de compartilhamento.
- `public/videos`: vídeo de apresentação da EstrategIA e a capa do vídeo.

As conexões do cérebro no topo da página Início piscam via CSS/SVG em `src/components/hero-visual.tsx`
(desligadas automaticamente para quem ativa "reduzir movimento" no aparelho).
