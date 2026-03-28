export const NAVBAR_COPY = {
    logoAlt: "Nelsinho Personal",
    cta: "Falar no WhatsApp",
    links: [
        { label: "Sobre", anchor: "#sobre" },
        { label: "Serviços", anchor: "#servicos" },
        { label: "Transformações", anchor: "#transformacoes" },
        { label: "PAE", anchor: "#pae" },
        { label: "Planos", anchor: "#planos" },
        { label: "Contato", anchor: "#contato" },
    ],
};

export const HERO_COPY = {
    badge: "+10 anos de experiência • Personal Completo",
    headline: ["Seu corpo tem", "potencial.", "Você só precisa de quem", "sabe extrair o máximo."],
    subheadline: "Treino 100% personalizado para emagrecimento, hipertrofia e condicionamento. Presencial e online, em Santa Rita - PB.",
    ctaPrimary: "Quero Meu Treino Personalizado",
    ctaSecondary: "Ver Transformações",
    trustBadges: ["+10 anos formado", "+500 alunos", "Presencial e Online"],
};

export const ABOUT_COPY = {
    sectionLabel: "Quem é o Nelsinho",
    headline: ["Uma história de", "dedicação real."],

    paragraphs: [
        "Tenho 44 anos e vivo a musculação desde os 7 — via meu pai treinar no quintal com um livrinho de instruções improvisado. Aos 12, já fazia exercícios adaptados numa academia totalmente artesanal aqui em Santa Rita, PB. Desde então, nunca parei.",
        "Bacharel em Educação Física e especialista em emagrecimento, criei o Programa de Aceleração de Emagrecimento — um protocolo documentado que já ajudou uma aluna a perder 13 kg em um mês e 15 dias. Meu foco é encontrar o caminho certo para o seu corpo.",
    ],

    credentials: {
        academic: [
            "Bacharel em Educação Física",
            "Especialista em Emagrecimento",
            "Criador do Programa de Aceleração de Emagrecimento",
        ],
        courses: [
            "Musculação e Hipertrofia",
            "Treinamento Funcional",
            "Nutrição Esportiva Aplicada",
            "Avaliação Física e Prescrição de Treino",
            "Condicionamento Físico e Performance",
        ],
    },

    // Campo dedicado à badge flutuante — NÃO usar stats[índice]
    badgeStat: {
        number: "-13kg",
        label: "em 45 dias",
        disclaimer: "* Resultado individual documentado.",
    },

    stats: [
        { number: "+37", label: "anos praticando musculação" },
        { number: "+10", label: "anos como PT formado" },
        { number: "+500", label: "alunos acompanhados" },
        { number: "-13kg", label: "em 45 dias (result. doc.)" },
    ],

    programName: "Programa de Aceleração de Emagrecimento",
    imageAlt: "Nelsinho Personal Trainer, bacharel em Educação Física e especialista em emagrecimento, em Santa Rita - PB",
};

export const SERVICES_COPY = {
    sectionLabel: "O que eu ofereço",
    headline: ["Um serviço completo", "para cada objetivo."],
    subheadline: "Do emagrecimento à hipertrofia, do treino presencial ao online — eu tenho o protocolo certo para você.",
    services: [
        {
            icon: "dumbbell",
            title: "Personal Presencial",
            description: "Treino individualizado com acompanhamento em tempo real. Execução correta, evolução constante e foco total nos seus objetivos.",
            highlight: "Na Estiga Total ou em domicílio",
        },
        {
            icon: "smartphone",
            title: "Personal Online",
            description: "Planilha de treino 100% personalizada com suporte contínuo via WhatsApp. Treine onde e quando quiser, sem abrir mão da orientação profissional.",
            highlight: "Acompanhamento semanal",
        },
        {
            icon: "fire",
            title: "Emagrecimento",
            description: "Protocolo focado em queima de gordura com preservação de massa muscular. Metodologia comprovada com resultados reais e duradouros.",
            highlight: "Resultados visíveis em 30 dias",
        },
        {
            icon: "muscle",
            title: "Hipertrofia",
            description: "Ganho de massa muscular com periodização inteligente, sobrecarga progressiva e ajuste contínuo de cargas. Para quem quer resultado de verdade.",
            highlight: "Método estruturado e progressivo",
        },
        {
            icon: "clipboard",
            title: "Avaliação Física",
            description: "Avaliação completa de composição corporal, postura e condicionamento para montar o plano de treino ideal para o seu perfil.",
            highlight: "Ponto de partida para qualquer objetivo",
        },
        {
            icon: "group",
            title: "Treino em Grupo",
            description: "Pequenos grupos com acompanhamento personalizado. A motivação do coletivo com a atenção individual que você merece.",
            highlight: "Grupos de até +20 pessoas",
        },
    ],
    cta: "Quero Conhecer os Planos",
};

export const TRANSFORMATIONS_COPY = {
    sectionLabel: "Resultados Reais",
    headline: ["Histórias que", "provam o método."],
    subheadline: "Cada transformação começou com uma decisão. Veja o que é possível quando você tem o acompanhamento certo.",
    transformations: [
        {
            name: "Thaise",
            result: "-9kg em 30 dias",
            description: "Em apenas 30 dias consegui resultados que nunca imaginei! O Nelsinho é um profissional incrível e me motivou todos os dias com um treino focado no meu objetivo. Estou muito feliz!",
            beforeAlt: "Foto antes da transformação de Thaise",
            afterAlt: "Foto depois da transformação de Thaise",
            beforeImage: "/images/transformations/t2-before-compressed.webp",
            afterImage: "/images/transformations/t2-after-compressed.webp",
        },
        {
            name: "Adriana",
            result: "-18kg em 6 meses",
            description: "Perder 18kg em 6 meses parecia impossível, mas com o acompanhamento do Nelsinho eu consegui! A metodologia e o incentivo dele fizeram toda a diferença na minha jornada.",
            beforeAlt: "Foto antes da transformação de Adriana",
            afterAlt: "Foto depois da transformação de Adriana",
            beforeImage: "/images/transformations/t3-before-compressed.webp",
            afterImage: "/images/transformations/t3-after-compressed.webp",
        },
        {
            name: "Ellis Vitória",
            result: "+11kg de massa em 8 meses",
            description: "Ganhei 11kg de massa muscular em 8 meses! O conhecimento técnico e os treinos personalizados do Nelsinho foram essenciais para eu alcançar meu objetivo de hipertrofia de forma segura.",
            beforeAlt: "Foto antes da transformação de Ellis Vitória",
            afterAlt: "Foto depois da transformação de Ellis Vitória",
            beforeImage: "/images/transformations/t4-before-compressed.webp",
            afterImage: "/images/transformations/t4-after-compressed.webp",
        },
    ],
    cta: "Quero Minha Transformação",
};

export const TESTIMONIALS_COPY = {
    sectionLabel: "O que dizem meus alunos",
    headline: ["Quem treinou", "recomenda."],
    testimonials: [
        {
            name: "Marcos Oliveira",
            result: "Eliminou 12kg e ganhou disposição",
            stars: 5,
            text: "Treinar com o Nelsinho foi a melhor decisão que tomei para minha saúde. Ele não foca apenas na carga, mas na execução perfeita. Em 3 meses, mudei meu corpo e minha mentalidade sobre atividade física.",
            avatarAlt: "Foto de Marcos Oliveira, aluno do Nelsinho Personal",
            avatarImage: "/images/testimonials/avatar-male.png",
        },
        {
            name: "Juliana Costa",
            result: "Conquistou o corpo dos sonhos com a Consultoria Online",
            stars: 5,
            text: "Mesmo treinando em outra cidade, o acompanhamento online do Nelsinho é impecável. Os treinos são desafiadores e o suporte via WhatsApp me mantém motivada. Resultados visíveis e consistentes!",
            avatarAlt: "Foto de Juliana Costa, aluna do Nelsinho Personal",
            avatarImage: "/images/testimonials/avatar-female.png",
        },
    ],
};

export const PLANS_COPY = {
    sectionLabel: "Investimento",
    headline: ["Planos que cabem", "no seu objetivo."],
    subheadline: "Escolha o formato ideal e comece sua transformação agora.",
    plans: [
        {
            name: "Plano Mensal",
            price: "R$ 250",
            period: "/mês",
            highlight: false,
            badge: "Ideal para começar",
            description: "Para quem quer flexibilidade total sem fidelidade.",
            features: [
                "Foco: Presencial (3x por semana)",
                "Avaliação Física inclusa",
                "Suporte via WhatsApp",
                "Sem taxa de cancelamento",
            ],
            cta: "Começar Mensal",
        },
        {
            name: "Plano Semestral",
            price: "R$ 200",
            period: "/mês",
            highlight: true,
            badge: "Mais Escolhido",
            description: "O compromisso ideal para ver resultados reais.",
            features: [
                "Foco: Presencial (3x por semana)",
                "Avaliação Física mensal",
                "Suporte 24h via WhatsApp",
                "Acesso à Estiga Total incluso",
                "Investimento total: 6x R$ 200",
            ],
            cta: "Escolher Semestral",
        },
        {
            name: "Plano Anual",
            price: "R$ 150",
            period: "/mês",
            highlight: false,
            badge: "Melhor Custo-Benefício",
            description: "Cada treino sai por apenas R$ 12,50.",
            features: [
                "Foco: Presencial (3x por semana)",
                "Avaliação Física mensal VIP",
                "Suporte prioritário",
                "Consultoria Nutricional inclusa",
                "Investimento total: 12x R$ 150",
            ],
            cta: "Garantir Valor Anual",
        },
    ],
    disclaimer: "Tem dúvidas sobre qual plano é ideal para você? Me chama no WhatsApp e a gente conversa.",
    ctaPlans: "Falar no WhatsApp",
};

export const PAE_COPY = {
    sectionLabel: "Método Exclusivo",
    headline: ["Programa de Aceleração", "de Emagrecimento."],
    subheadline:
        "O método que já eliminou 25kg em 2 meses — sem treino monótono, sem fórmula genérica.",

    // Mobile: 1 frase de impacto. Desktop: contexto + curiosidade.
    originMobile:
        "Nasceu de um desafio real: uma aluna que odiava musculação precisava perder peso rápido para o casamento. O resultado surpreendeu até a mim.",
    originDesktop:
        "Uma aluna que odiava musculação precisava emagrecer em 2 meses para o casamento. Desenvolvi uma combinação específica de cardios estratégicos com musculação integrada — ela perdeu 13kg em 45 dias. Desde então, virou minha metodologia mais procurada.",

    pillars: [
        {
            icon: "fire",
            title: "Cardios Estratégicos",
            description: "Selecionados para acelerar o metabolismo ao máximo.",
        },
        {
            icon: "dumbbell",
            title: "Musculação Integrada",
            description: "Força + cardio na mesma sessão. Gasto calórico potencializado.",
        },
        {
            icon: "clipboard",
            title: "Metas Semanais",
            description: "Resultados visíveis semana a semana. Você acompanha sua evolução.",
        },
    ],

    results: [
        { number: "-13kg", label: "em 45 dias" },
        { number: "-25kg", label: "em 2 meses" },
    ],

    identification: {
        title: "O PAE é para você que:",
        items: [
            "Já tentou emagrecer e sempre desistiu no meio",
            "Não aguenta mais treino repetitivo e monótono",
            "Precisa de resultado visível e rápido",
            "Quer acompanhamento de verdade, não só uma planilha",
        ],
    },

    scarcity:
        "Turmas reduzidas para garantir acompanhamento individual de cada aluno.",

    cta: "Quero Conhecer o PAE",
};

export const CTA_COPY = {
    headline: ["Pronto para sua", "transformação?"],
    subheadline: "Agende agora sua avaliação gratuita e descubra o plano ideal para o seu objetivo.",
    note: "Atendimento personalizado — apenas para quem está comprometido com a própria evolução.",
    cta: "Quero Minha Avaliação Gratuita",
    ctaSub: "Resposta em até 24h • Sem compromisso",
};

export const FOOTER_COPY = {
    tagline: "Sua melhor versão começa aqui.",
    location: "Santa Rita - PB",
    links: [
        { label: "Instagram", url: "https://instagram.com/nelsinhopersonaltrainer321" },
        { label: "WhatsApp", url: "https://wa.me/5583991900000" },
    ],
    copyright: "© 2026 Nelsinho Personal. Todos os direitos reservados.",
};

export const WHATSAPP_FLOAT_COPY = {
    ariaLabel: "Falar com o Nelsinho no WhatsApp",
    tooltip: "Fale comigo agora!",
};
