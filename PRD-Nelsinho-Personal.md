# PRD — Nelsinho Personal
**Product Requirements Document**
Versão 1.0 | Março 2026

---

## 1. Visão Geral do Projeto

### 1.1 Contexto
Nelson ("Nelsinho") é personal trainer com mais de 10 anos de experiência e dono da Estiga Total Academia, em Santa Rita - PB. Apesar do reconhecimento consolidado como figura da academia, seu objetivo é construir uma marca pessoal independente como personal trainer, ganhando autoridade própria e atraindo clientes que o contratem diretamente — não apenas por associação com a Estiga Total.

### 1.2 Objetivo do Projeto
Criar a identidade visual completa e a landing page de Nelsinho Personal, posicionando-o como personal trainer completo e experiente, com autoridade própria, mantendo uma conexão visual sutil com a Estiga Total para aproveitar o reconhecimento já construído.

### 1.3 Entregáveis
- Identidade visual (logo, paleta, tipografia, tokens de design)
- Landing page (Next.js + Tailwind CSS)
- Organização e padronização do perfil no Instagram
- Templates de conteúdo para Instagram (feed, stories, reels covers)
- Prompts de Nano Banana 2 para assets visuais

---

## 2. Identidade Visual

### 2.1 Nome e Marca
- **Nome:** Nelsinho Personal
- **Tagline sugerida:** "Sua melhor versão começa aqui."

### 2.2 Logo
- **Estilo:** Emblema (símbolo + texto)
- **Conceito aprovado:** Conceito C — Letra N em bold com corredor laranja sobreposto, transmitindo movimento, identidade e energia
- **Versão dominante:** Dark (fundo preto)
- **Versões necessárias:**
  - Logo completo dark (fundo preto)
  - Logo completo light (fundo branco)
  - Símbolo isolado (para favicon, ícone de perfil, bordado)
  - Versão horizontal (para uso em banners e headers)

### 2.3 Paleta de Cores

| Token | Nome | Hex | Uso |
|---|---|---|---|
| `--color-primary` | Laranja Estiga | `#E85D04` | CTAs, destaques, nome da marca |
| `--color-bg` | Preto Profundo | `#0A0A0A` | Fundo principal |
| `--color-surface` | Grafite | `#141414` | Cards, seções alternadas |
| `--color-surface-2` | Grafite Médio | `#1E1E1E` | Hover states, bordas |
| `--color-text` | Off-white | `#F5F0EB` | Texto principal |
| `--color-text-muted` | Cinza Claro | `#9A9A9A` | Subtítulos, labels |
| `--color-accent` | Laranja Suave | `#FF7A2F` | Gradientes, variações |

> **Diferenciação da Estiga Total:** a paleta usa o mesmo laranja como âncora de reconhecimento, mas o tratamento dark + off-white (ao invés do branco puro da academia) cria uma estética mais premium e pessoal.

### 2.4 Tipografia

| Uso | Fonte | Peso | Observação |
|---|---|---|---|
| Headlines | Barlow Condensed | 700–800 | Impacto, energia |
| Subtítulos | Barlow | 600 | Hierarquia limpa |
| Corpo | Inter | 400–500 | Legibilidade web/mobile |
| Labels / Tags | Inter | 600 | Uppercase com tracking |

**Importar via Google Fonts:**
```
Barlow Condensed: 700, 800
Barlow: 500, 600
Inter: 400, 500, 600
```

### 2.5 Linguagem Visual
- Estética raw/editorial com fotos reais do Nelsinho
- Contraste forte entre fundo escuro e elementos laranja
- Geometria limpa: sem excessos decorativos
- Overlays escuros em fotos para manter legibilidade do texto
- Uso de separadores laranja (linhas finas horizontais) entre seções

---

## 3. Landing Page

### 3.1 Stack Técnico

| Camada | Tecnologia |
|---|---|
| Framework | Next.js 14 (App Router) |
| Estilização | Tailwind CSS |
| Animações | Framer Motion |
| Formulário / CTA | Links para WhatsApp (wa.me) |
| Deploy | Vercel |
| Imagens | Next/Image com otimização automática |
| Fontes | Google Fonts via next/font |

### 3.2 Estrutura de Seções

#### Seção 1 — Hero
**Objetivo:** Capturar atenção e gerar o primeiro clique no WhatsApp.

- Background: foto real do Nelsinho em ação com overlay dark
- Headline: "Seu corpo tem potencial. Você só precisa de quem sabe extrair o máximo."
- Subheadline: "Personal trainer completo com +10 anos de experiência em Santa Rita - PB."
- Badge de credibilidade: "⭐ +10 anos formado | Personal Completo"
- CTA primário: botão laranja "Quero Meu Treino Personalizado" → WhatsApp
- CTA secundário: link âncora "Ver Transformações ↓"

**Assets necessários (Nano Banana 2):**
```
Dramatic dark fitness gym background, cinematic lighting, orange accent light
from the right side, bokeh equipment in background, ultra wide, 16:9,
photorealistic, no people, for use as hero section overlay background.
4K resolution.
```

---

#### Seção 2 — Sobre + Credenciais
**Objetivo:** Construir autoridade e conexão pessoal.

- Layout: foto do Nelsinho (lado direito) + texto (lado esquerdo) — ou invertido em mobile (foto acima)
- Foto: pose profissional, de preferência na academia com uniforme
- Conteúdo sugerido:
  - Apresentação pessoal (2–3 linhas)
  - +10 anos de experiência
  - Formação e certificações (a preencher com dados reais)
  - Dono da Estiga Total Academia — reconhecimento local
  - Especialidades: emagrecimento, hipertrofia, condicionamento, grupos especiais
- Cards de números: `+10 anos de exp.` | `+XXX alunos` | `2 unidades`

---

#### Seção 3 — Serviços
**Objetivo:** Mostrar o que ele oferece de forma clara e organizada.

Layout de cards em grid (3 colunas desktop / 1 coluna mobile):

| Serviço | Descrição | Ícone |
|---|---|---|
| Personal Presencial | Treino individualizado na Estiga Total ou em domicílio | 🏋️ |
| Personal Online | Planilha personalizada + acompanhamento via WhatsApp | 📱 |
| Emagrecimento | Protocolo focado em perda de gordura e saúde | 🔥 |
| Hipertrofia | Ganho de massa muscular com método estruturado | 💪 |
| Avaliação Física | Avaliação completa para montar o plano ideal | 📊 |
| Grupos / Coletivo | Treinos em pequenos grupos com acompanhamento | 👥 |

> Ícones a usar: SVG customizados no estilo da marca, laranja sobre fundo grafite.

---

#### Seção 4 — Planos e Preços
**Objetivo:** Apresentar opções claras e direcionar para o WhatsApp.

> ⚠️ **A preencher com Nelsinho:** valores reais, modalidades inclusas e condições.

Layout sugerido: 2–3 cards de planos, com o mais popular destacado em laranja.

Estrutura de cada card:
- Nome do plano
- Preço
- Lista de benefícios
- CTA → WhatsApp

---

#### Seção 5 — Transformações
**Objetivo:** Prova social visual — resultados reais de alunos.

- Grid de before/after em cards
- Cada card: foto antes | foto depois | nome do aluno | resultado (ex: "-12kg em 3 meses")
- Fonte: fotos já existentes no Instagram e no site da Estiga Total
- Mínimo recomendado: 4 transformações
- Layout: slider horizontal no mobile, grid 2 colunas no desktop

**Frame visual (Nano Banana 2):**
```
Clean minimalist before-and-after photo frame template, dark background #0A0A0A,
thin orange border accent, small "ANTES" and "DEPOIS" labels in bold white uppercase
on orange pill badges, professional fitness transformation card design,
flat vector style. 1:1 aspect ratio, 2K resolution.
```

---

#### Seção 6 — Depoimentos
**Objetivo:** Reforçar credibilidade com vozes reais de alunos.

- Layout: cards em slider (Framer Motion)
- Cada card: foto do aluno (circular) + nome + estrelas (5) + depoimento em texto
- Mínimo recomendado: 4–6 depoimentos
- Fonte: comentários do Instagram, Google Meu Negócio da Estiga Total, WhatsApp

---

#### Seção 7 — CTA Final
**Objetivo:** Converter visitantes que chegaram ao fim da página.

- Fundo: gradiente dark com textura sutil
- Headline: "Pronto para começar sua transformação?"
- Subheadline: "Agende agora uma avaliação gratuita e descubra o plano ideal para você."
- Badge: "⚡ Vagas limitadas por horário"
- CTA: botão laranja grande → WhatsApp
- Elemento de urgência sutil (não agressivo): "Atendimento personalizado — somente para quem se comprometer de verdade."

---

### 3.3 Componentes Técnicos

| Componente | Descrição |
|---|---|
| `<Navbar />` | Logo + link âncoras (Sobre, Serviços, Contato) + botão WhatsApp |
| `<HeroSection />` | Full screen, foto background, headline, CTAs |
| `<AboutSection />` | Dois painéis: foto + texto + cards de números |
| `<ServicesGrid />` | Grid responsivo de cards de serviços |
| `<PlansSection />` | Cards de planos com destaque no popular |
| `<TransformationsSlider />` | Slider before/after com Framer Motion |
| `<TestimonialsSlider />` | Slider de depoimentos |
| `<CTAFinal />` | Seção de conversão final |
| `<WhatsAppButton />` | Botão flutuante fixo no canto inferior direito |
| `<Footer />` | Logo + redes sociais + créditos |

### 3.4 WhatsApp CTA
Todos os botões de CTA devem apontar para:
```
https://wa.me/5583XXXXXXXXX?text=Olá%20Nelsinho%2C%20quero%20saber%20mais%20sobre%20o%20personal%20training!
```
> Substituir pelo número real do Nelsinho.

### 3.5 SEO
- Title: `Nelsinho Personal | Personal Trainer em Santa Rita - PB`
- Description: `Personal trainer completo com +10 anos de experiência em Santa Rita - PB. Emagrecimento, hipertrofia e condicionamento. Agende sua avaliação gratuita.`
- OG Image: versão hero da landing page (1200x630px)
- Schema: `Person` + `LocalBusiness`

---

## 4. Instagram

### 4.1 Perfil
| Campo | Atual | Proposto |
|---|---|---|
| Username | nelsinhopersonaltrainer321 | Manter ou simplificar para `nelsinhopersonal` |
| Nome | Nelsinho Personal | Nelsinho Personal 💪 |
| Bio | "Personal trainer / Luz, Paz e amor" | Ver abaixo |
| Link | wa.me | Manter WhatsApp |

**Bio proposta:**
```
Personal Trainer • +10 anos de exp. 🏆
Emagrecimento | Hipertrofia | Condicionamento
📍 Santa Rita - PB | Presencial e Online
👇 Agende sua avaliação gratuita
```

### 4.2 Highlights
Organizar os destaques com covers padronizados na identidade visual:

| Highlight | Cover |
|---|---|
| Transformações | Ícone "antes/depois" |
| Serviços | Ícone haltere |
| Depoimentos | Ícone aspas |
| Sobre mim | Ícone pessoa |
| Planos | Ícone lista |
| Dicas | Ícone lâmpada |

**Prompt para covers (Nano Banana 2):**
```
A set of minimalist Instagram highlight cover icons, dark black background #0A0A0A,
single centered icon in solid orange, clean flat vector style, perfectly circular
composition. Icons needed: dumbbell, before-after arrows, speech bubble with quotes,
person silhouette, clipboard checklist, lightbulb. Each icon isolated,
1:1 aspect ratio, 1080x1080px.
```

### 4.3 Pilares de Conteúdo

| Pilar | Frequência | Formato |
|---|---|---|
| Transformações de alunos | 2x/semana | Carrossel before/after |
| Dicas de treino e nutrição | 2x/semana | Reels curtos (30–60s) |
| Autoridade / Educação | 1x/semana | Carrossel com texto |
| Bastidores / Humanização | 1x/semana | Stories / Reels |
| Promoções / Planos | Pontual | Post + Stories |

### 4.4 Template de Feed (Nano Banana 2)
```
A professional fitness Instagram post template, dark background #0A0A0A,
bold orange accent color #E85D04, clean modern layout. Top area: space for
headline text in bold white Barlow Condensed style. Bottom bar: orange strip
with "NELSINHO PERSONAL" logo placeholder. Minimal geometric design,
no clutter, high contrast. 1:1 square format, 1080x1080px, flat design.
```

---

## 5. Assets de IA — Plano de Geração

Todos os assets a serem gerados no **Nano Banana 2 (Gemini 3.1 Flash Image)** via Gemini app ou API.

| Asset | Seção | Prompt Base | Resolução |
|---|---|---|---|
| Hero background | Hero | Dramatic dark gym, cinematic orange lighting | 4K 16:9 |
| Foto de apoio "Sobre" | Sobre | Dark gym interior, motivational atmosphere | 4K 4:3 |
| Texture overlay | Geral | Subtle dark concrete texture, very dark, minimal | 4K |
| Before/After frame | Transformações | Dark card frame with orange accents | 2K 1:1 |
| Highlight covers (6x) | Instagram | Minimal icon set, dark + orange | 1K 1:1 |
| Feed template | Instagram | Post template dark + orange | 1K 1:1 |
| Story template | Instagram | Story template dark + orange, 9:16 | 1K 9:16 |

---

## 6. Cronograma Sugerido

| Fase | Entregável | Prazo |
|---|---|---|
| 1 | Identidade visual finalizada (logo vetorizado, paleta, tipografia) | Semana 1 |
| 2 | Assets de IA gerados e aprovados | Semana 1 |
| 3 | Estrutura Next.js + componentes base | Semana 2 |
| 4 | Conteúdo real inserido (fotos, textos, preços) | Semana 2–3 |
| 5 | Revisão, ajustes e aprovação do cliente | Semana 3 |
| 6 | Deploy + configuração de domínio | Semana 3 |
| 7 | Instagram: bio, highlights, primeiros posts | Semana 3–4 |

---

## 7. Informações Pendentes (a coletar com Nelsinho)

- [ ] Número de WhatsApp para os CTAs
- [ ] Certificações e formação acadêmica
- [ ] Número total de alunos atendidos
- [ ] Fotos profissionais selecionadas (hero, sobre, ação)
- [ ] Fotos de transformações de alunos (com autorização)
- [ ] Depoimentos de alunos (texto ou vídeo)
- [ ] Valores dos planos de personal
- [ ] Modalidades oferecidas (presencial, online, domicílio)
- [ ] Domínio desejado (ex: nelsinhopersonal.com.br)

---

## 8. Referências Visuais

Para orientar o desenvolvimento, o site da Estiga Total (já desenvolvido) serve como referência de:
- Qualidade técnica esperada
- Identidade laranja + preto já estabelecida no mercado local
- Estrutura de seções que funcionou bem com o público

A diferenciação virá no **tratamento mais premium** (dark mode aprofundado, tipografia mais editorial, fotografia mais autoral) e no **foco na pessoa** em vez da academia.

---

*PRD gerado em Março de 2026 | Projeto: Nelsinho Personal | Desenvolvedor: a definir*
