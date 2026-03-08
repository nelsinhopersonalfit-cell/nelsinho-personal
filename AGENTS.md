# AGENTS.md — Nelsinho Personal
Instruções globais para todos os agentes neste workspace.
Leia este arquivo antes de qualquer tarefa.

---

## Projeto
Landing page de personal trainer para **Nelsinho Personal**.
Site dark, energético e premium. Público: adultos buscando emagrecimento,
hipertrofia e condicionamento físico em Santa Rita - PB.

---

## Stack

- **Framework:** Next.js 14 (App Router)
- **Estilização:** Tailwind CSS — usar APENAS tokens definidos em `tailwind.config.ts`
- **Animações:** Framer Motion
- **Fontes:** Google Fonts via `next/font` (Barlow Condensed, Barlow, Inter)
- **Imagens:** `next/image` com `priority` no hero
- **Deploy:** Vercel
- **Linguagem:** TypeScript

---

## Identidade Visual — Regras Absolutas

- Fundo dominante: `bg-brand-black` (`#0A0A0A`)
- Cor de destaque: `text-brand-orange` / `bg-brand-orange` (`#E85D04`)
- Texto principal: `text-brand-offwhite` (`#F5F0EB`)
- **Nunca usar:** branco puro `#FFFFFF`, azul, verde ou qualquer cor fora da paleta
- **Nunca usar** classes Tailwind genéricas de cor (ex: `bg-gray-900`, `text-white`) — sempre usar os tokens customizados definidos em `tailwind.config.ts`

---

## Tipografia — Regras Absolutas

- Headlines: `font-barlow-condensed font-bold` ou `font-extrabold`
- Subtítulos: `font-barlow font-semibold`
- Corpo: `font-inter`
- Labels/Tags: `font-inter font-semibold uppercase tracking-widest`
- **Nunca usar** `font-sans` genérico em componentes visíveis ao usuário

---

## Estrutura de Componentes

- Cada seção da página é um componente próprio em `components/sections/`
- Componentes reutilizáveis (botões, cards, badges) ficam em `components/ui/`
- Layouts ficam em `components/layout/`
- **Nunca** colocar JSX de seções diretamente em `app/page.tsx` — apenas importar os componentes

---

## CTAs e WhatsApp

- Todo botão CTA principal abre WhatsApp: `https://wa.me/558399190XXXX`
- Usar o componente `<WhatsAppButton />` para todos os CTAs — nunca criar links soltos
- O número de WhatsApp está em `lib/constants.ts` como `WHATSAPP_NUMBER`
- O botão flutuante fixo (`<WhatsAppFloat />`) deve aparecer em todas as páginas

---

## Acessibilidade

- Todo `<img>` ou `<Image />` deve ter `alt` descritivo
- Botões sem texto visível devem ter `aria-label`
- Manter contraste mínimo AA em todos os textos sobre fundos coloridos

---

## Performance

- Imagens: sempre usar `next/image` com `width` e `height` definidos
- Hero image: usar `priority={true}`
- Não importar bibliotecas pesadas sem necessidade — verificar bundle size
- Fontes: carregar apenas os pesos usados

---

## O que NUNCA fazer

- Não usar `<style>` inline ou CSS modules — apenas Tailwind
- Não criar arquivos `.css` avulsos
- Não usar `any` em TypeScript sem justificativa
- Não colocar texto hardcoded em português diretamente no JSX — usar o arquivo `lib/copy.ts`
- Não inventar cores, espaçamentos ou fontes fora dos tokens
- Não criar componentes server-side com `useState` ou `useEffect` — verificar se é Client Component antes
- Não usar `<a>` para navegação interna — usar `<Link>` do Next.js

---

## Convenções de Código

```
// Nomenclatura de componentes: PascalCase
// Nomenclatura de arquivos de componente: kebab-case.tsx
// Exemplo:
components/sections/hero-section.tsx → export default function HeroSection()
components/ui/whatsapp-button.tsx → export default function WhatsAppButton()
```

---

## Ordem de Implementação Sugerida

1. `tailwind.config.ts` — tokens de design
2. `lib/constants.ts` — WhatsApp, dados estáticos
3. `lib/copy.ts` — todos os textos da página
4. `components/layout/` — Navbar e Footer
5. `components/ui/` — Button, Card, Badge, WhatsAppButton
6. `components/sections/` — cada seção em ordem da página
7. `app/page.tsx` — apenas composição dos componentes
8. SEO: `app/layout.tsx` com metadata completo

---

## Referência Visual
O site da Estiga Total Academia (academia do mesmo cliente) serve como
referência de qualidade e identidade de cor. Este site deve ser mais
**pessoal, premium e focado na figura do Nelsinho** — não na academia.
