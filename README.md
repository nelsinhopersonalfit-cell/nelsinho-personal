# Nelsinho Personal

Landing page profissional para **Nelsinho Personal** — personal trainer com +10 anos de experiência em Santa Rita - PB.

## Sobre o Projeto

Site institucional e de conversão para captação de clientes via WhatsApp. O design segue uma estética dark premium com acentos em laranja, focada em transmitir autoridade e profissionalismo.

### Seções

- **Hero** — Fullscreen com CTA direto para WhatsApp
- **Sobre** — Apresentação, credenciais e números
- **Serviços** — Grid de cards (presencial, online, emagrecimento, hipertrofia, avaliação, grupos)
- **Transformações** — Slider before/after de alunos
- **Planos** — Cards de preços com destaque no plano popular
- **CTA Final** — Seção de conversão com urgência sutil

## Tech Stack

| Tecnologia | Versão |
|---|---|
| Next.js | 16 |
| React | 19 |
| TypeScript | 5 |
| Tailwind CSS | 4 |
| Framer Motion | 12 |

## Começando

### Pré-requisitos

- Node.js 18+
- npm

### Instalação

```bash
# Clonar o repositório
git clone https://github.com/nelsinhopersonalfit-cell/nelsinho-personal.git
cd nelsinho-personal

# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000).

### Scripts

| Comando | Descrição |
|---|---|
| `npm run dev` | Servidor de desenvolvimento |
| `npm run build` | Build de produção |
| `npm run start` | Servidor de produção |
| `npm run lint` | Linter |

## Estrutura do Projeto

```
nelsinho-personal/
├── app/                  # Pages e layout (App Router)
├── components/
│   ├── layout/           # Navbar, Footer
│   ├── sections/         # Seções da landing page
│   └── ui/               # Componentes reutilizáveis
├── lib/                  # Constantes, textos e utilitários
└── public/
    ├── images/           # Logos, backgrounds, fotos
    └── icons/            # Ícones SVG
```

## Design

- **Paleta:** Preto profundo (`#0A0A0A`) + Laranja Estiga (`#E85D04`) + Off-white (`#F5F0EB`)
- **Tipografia:** Barlow Condensed (headlines) + Inter (corpo)
- **Estilo:** Dark premium, editorial, high contrast

## Deploy

O projeto está configurado para deploy na **Vercel**.

## Licença

Projeto privado — todos os direitos reservados.
