# structure.md — Nelsinho Personal
Arquitetura de pastas e componentes do projeto.
Seguir esta estrutura à risca — não criar pastas ou arquivos fora deste mapa.

---

## Árvore de Pastas

```
nelsinho-personal/
│
├── app/
│   ├── layout.tsx              # Root layout — fontes, metadata global, WhatsAppFloat
│   ├── page.tsx                # Composição das seções (apenas imports)
│   ├── globals.css             # Reset + variáveis CSS + scrollbar customizada
│   └── favicon.ico
│
├── components/
│   │
│   ├── layout/
│   │   ├── navbar.tsx          # Logo + links âncora + CTA WhatsApp
│   │   └── footer.tsx          # Logo + tagline + redes sociais + copyright
│   │
│   ├── sections/
│   │   ├── hero-section.tsx        # Seção 1 — Hero fullscreen
│   │   ├── about-section.tsx       # Seção 2 — Sobre + Credenciais
│   │   ├── services-section.tsx    # Seção 3 — Serviços (grid de cards)
│   │   ├── transformations-section.tsx  # Seção 4 — Before/After slider
│   │   ├── testimonials-section.tsx     # Seção 5 — Depoimentos slider
│   │   ├── plans-section.tsx       # Seção 6 — Planos e Preços
│   │   └── cta-section.tsx         # Seção 7 — CTA Final
│   │
│   └── ui/
│       ├── whatsapp-button.tsx     # Botão CTA reutilizável → WhatsApp
│       ├── whatsapp-float.tsx      # Botão flutuante fixo (canto inferior direito)
│       ├── section-label.tsx       # Badge/label de seção (ex: "Quem é o Nelsinho")
│       ├── stat-card.tsx           # Card de número/estatística (ex: "+10 anos")
│       ├── service-card.tsx        # Card individual de serviço
│       ├── plan-card.tsx           # Card individual de plano
│       ├── testimonial-card.tsx    # Card individual de depoimento
│       ├── transformation-card.tsx # Card before/after individual
│       ├── badge.tsx               # Badge genérico (ex: "Mais Escolhido")
│       └── section-divider.tsx     # Linha divisória laranja entre seções
│
├── lib/
│   ├── constants.ts            # WHATSAPP_NUMBER + mensagens pré-definidas
│   ├── copy.ts                 # Todos os textos (importado de copy.md)
│   └── utils.ts                # cn() helper + funções utilitárias
│
├── public/
│   ├── images/
│   │   ├── logo/
│   │   │   ├── logo-dark.png       # Logo versão dark (fundo preto)
│   │   │   ├── logo-light.png      # Logo versão light (fundo branco)
│   │   │   └── logo-icon.png       # Símbolo isolado (N + corredor)
│   │   ├── hero/
│   │   │   └── hero-bg.jpg         # Background do hero (gerado no Nano Banana 2)
│   │   ├── nelsinho/
│   │   │   ├── nelsinho-hero.jpg       # Foto principal (pose de autoridade)
│   │   │   ├── nelsinho-about.jpg      # Foto seção sobre (mais próxima)
│   │   │   └── nelsinho-action.jpg     # Foto treinando aluno
│   │   ├── transformations/
│   │   │   ├── t1-before.jpg
│   │   │   ├── t1-after.jpg
│   │   │   ├── t2-before.jpg
│   │   │   ├── t2-after.jpg
│   │   │   └── ...                 # Seguir padrão t{n}-before/after
│   │   ├── testimonials/
│   │   │   ├── avatar-1.jpg
│   │   │   ├── avatar-2.jpg
│   │   │   └── ...
│   │   └── backgrounds/
│   │       ├── bg-about.jpg        # Background seção sobre
│   │       ├── bg-services.jpg     # Background seção serviços
│   │       ├── bg-testimonials.jpg # Background seção depoimentos
│   │       └── bg-cta.jpg          # Background CTA final
│   │
│   └── icons/
│       ├── whatsapp.svg
│       ├── instagram.svg
│       ├── icon-dumbbell.svg
│       ├── icon-smartphone.svg
│       ├── icon-fire.svg
│       ├── icon-muscle.svg
│       ├── icon-clipboard.svg
│       └── icon-group.svg
│
├── AGENTS.md                   # Instruções globais para agentes
├── copy.md                     # Fonte de verdade dos textos
├── tailwind.config.ts          # Tokens de design
├── next.config.ts              # Configuração Next.js
├── tsconfig.json
├── package.json
└── .env.local                  # Variáveis de ambiente (não commitar)
```

---

## Detalhamento dos Componentes

### `app/layout.tsx`
```tsx
// Responsabilidades:
// - Carregar fontes via next/font (Barlow Condensed, Barlow, Inter)
// - Definir metadata global (title, description, OG tags)
// - Renderizar <Navbar /> e <WhatsAppFloat /> em todas as páginas
// - Aplicar bg-brand-black como fundo padrão do body

// Fontes a carregar:
// Barlow_Condensed: weights [700, 800] → var(--font-barlow-condensed)
// Barlow: weights [500, 600] → var(--font-barlow)
// Inter: weights [400, 500, 600] → var(--font-inter)
```

### `app/page.tsx`
```tsx
// Apenas composição — nenhum JSX direto, só imports
// Ordem exata das seções:

import HeroSection           from "@/components/sections/hero-section"
import AboutSection          from "@/components/sections/about-section"
import ServicesSection       from "@/components/sections/services-section"
import TransformationsSection from "@/components/sections/transformations-section"
import TestimonialsSection   from "@/components/sections/testimonials-section"
import PlansSection          from "@/components/sections/plans-section"
import CtaSection            from "@/components/sections/cta-section"

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <TransformationsSection />
      <TestimonialsSection />
      <PlansSection />
      <CtaSection />
    </main>
  )
}
```

### `lib/constants.ts`
```ts
// Centraliza todos os dados estáticos

export const WHATSAPP_NUMBER = "5583987011695"

export const WHATSAPP_MESSAGES = {
  hero:      "Olá Nelsinho! Vim pelo site e quero saber mais sobre o personal training.",
  plans:     "Olá Nelsinho! Quero conhecer os planos de personal trainer.",
  avaliacao: "Olá Nelsinho! Quero agendar minha avaliação física gratuita.",
  default:   "Olá Nelsinho! Vim pelo site e gostaria de mais informações.",
}

export const SOCIAL_LINKS = {
  instagram: "https://instagram.com/nelsinhopersonaltrainer321",
  whatsapp:  `https://wa.me/${WHATSAPP_NUMBER}`,
}

export function getWhatsAppUrl(message: keyof typeof WHATSAPP_MESSAGES) {
  const text = encodeURIComponent(WHATSAPP_MESSAGES[message])
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`
}
```

### `lib/utils.ts`
```ts
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

// Helper padrão para classes condicionais com Tailwind
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

### `components/ui/whatsapp-button.tsx`
```tsx
// Props:
// - message: keyof WHATSAPP_MESSAGES (qual mensagem pré-definida usar)
// - variant: "primary" | "secondary" | "ghost"
// - size: "sm" | "md" | "lg"
// - className?: string (para overrides pontuais via cn())
// - children: ReactNode (texto do botão)

// Variantes:
// primary  → bg-brand-orange text-white hover:bg-brand-orange-light
// secondary → border border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white
// ghost    → text-brand-orange underline hover:no-underline
```

### `components/ui/section-label.tsx`
```tsx
// Badge de label de seção
// Exemplo: <SectionLabel>Quem é o Nelsinho</SectionLabel>
// Estilo: texto laranja + uppercase + tracking-widest + tamanho label-sm
// Opcional: linha laranja decorativa antes do texto
```

### `components/sections/hero-section.tsx`
```tsx
// "use client" — necessário para animações Framer Motion
//
// Estrutura:
// - Div fullscreen (h-hero) com position relative
// - Image de fundo (next/image, priority, objectFit cover) + overlay gradient-hero
// - Foto do Nelsinho (png com fundo transparente ou recortado) posicionada à direita
// - Conteúdo centralizado à esquerda:
//   └── Badge de credibilidade
//   └── Headline (Barlow Condensed, display-2xl, brand-offwhite)
//   └── Subheadline (Inter, body-lg, brand-muted)
//   └── Dois CTAs: WhatsAppButton primary + link âncora ghost
//   └── Trust badges (3 itens inline)
// - Scroll indicator animado na base (seta para baixo)
```

### `components/sections/about-section.tsx`
```tsx
// Layout dois painéis: grid lg:grid-cols-2
// Painel esquerdo: textos + credenciais + stats
//   └── SectionLabel
//   └── Headline (display-lg)
//   └── Dois parágrafos (body-md, brand-muted)
//   └── Lista de credenciais (ícone check laranja + texto)
// Painel direito: foto do Nelsinho + stat cards sobrepostos
//   └── Image com border/glow sutil
//   └── 3x StatCard posicionados em absolute sobre a imagem
```

### `components/sections/services-section.tsx`
```tsx
// Grid responsivo: grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
// gap-6, max-w-container, mx-auto
// 6x ServiceCard com hover state (card-hover shadow + translate-y-1)
// CTA abaixo do grid (WhatsAppButton secondary centralizado)
```

### `components/sections/transformations-section.tsx`
```tsx
// "use client" — Framer Motion slider
// Desktop: mostrar 2 cards lado a lado
// Mobile: 1 card por vez com swipe
// Controles: setas prev/next + dots de paginação
// Cada card: TransformationCard com before/after + nome + resultado
```

### `components/sections/testimonials-section.tsx`
```tsx
// "use client" — Framer Motion slider  
// Auto-play a cada 5s com pause on hover
// Desktop: 2 cards visíveis
// Mobile: 1 card por vez
// Cada card: TestimonialCard com avatar + nome + estrelas + texto
```

### `components/sections/plans-section.tsx`
```tsx
// Grid: grid-cols-1 md:grid-cols-3
// Card do meio (highlight: true) é maior visualmente + badge "Mais Escolhido"
//   + border brand-orange + shadow-orange-glow
// CTA abaixo: texto disclaimer + WhatsAppButton ghost
```

### `components/sections/cta-section.tsx`
```tsx
// Fundo: bg-gradient-dark-up sobre bg-cta.jpg
// Conteúdo centralizado, texto-center
// Badge de urgência animado (pulse suave)
// Headline grande (display-xl)
// Subheadline
// WhatsAppButton primary (tamanho lg)
// Nota de confiança abaixo do botão (brand-muted, body-sm)
```

---

## Dependências a Instalar

```bash
npm install framer-motion clsx tailwind-merge
npm install -D @types/node
```

---

## Comando para Iniciar o Projeto

```bash
npx create-next-app@latest nelsinho-personal \
  --typescript \
  --tailwind \
  --eslint \
  --app \
  --src-dir=false \
  --import-alias="@/*"
```

---

## Ordem de Implementação para o Agente

1. Configurar `tailwind.config.ts` (já criado)
2. Configurar fontes em `app/layout.tsx`
3. Criar `lib/constants.ts` e `lib/utils.ts`
4. Criar `lib/copy.ts` a partir de `copy.md`
5. Criar componentes `ui/` (do mais simples ao mais complexo)
6. Criar `layout/navbar.tsx` e `layout/footer.tsx`
7. Criar seções na ordem da página
8. Compor `app/page.tsx`
9. Configurar metadata SEO em `app/layout.tsx`
10. Revisar responsividade mobile-first
11. Testar performance (Lighthouse)
