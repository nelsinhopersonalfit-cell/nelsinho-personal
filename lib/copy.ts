export const NAVBAR_COPY = {
    logoAlt: "Nelsinho Personal",
    cta: "Falar no WhatsApp",
    links: [
        { label: "Sobre", anchor: "#sobre" },
        { label: "Serviços", anchor: "#servicos" },
        { label: "Transformações", anchor: "#transformacoes" },
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
    trustBadges: ["+10 anos formado", "+[PREENCHER] alunos", "Presencial e Online"],
};

export const ABOUT_COPY = {
    sectionLabel: "Quem é o Nelsinho",
    headline: ["Mais de uma década", "transformando vidas."],
    paragraphs: [
        "Sou o Nelsinho, personal trainer formado há mais de 10 anos e fundador da Estiga Total Academia, em Santa Rita - PB. Ao longo da minha trajetória, acompanhei de perto a evolução de centenas de alunos — do primeiro treino até resultados que eles nunca imaginaram ser possíveis.",
        "Meu trabalho vai além de montar uma planilha. Eu entendo o seu corpo, o seu ritmo e o seu objetivo. Seja para perder gordura, ganhar massa ou simplesmente se sentir melhor no dia a dia — eu crio o caminho certo para você.",
    ],
    credentials: [
        "[PREENCHER — ex: Bacharel em Educação Física, UFPB]",
        "[PREENCHER — ex: Certificação em Musculação e Hipertrofia]",
        "[PREENCHER — ex: Especialização em Treinamento Funcional]",
        "Fundador da Estiga Total Academia",
    ],
    stats: [
        { number: "+10", label: "Anos de experiência" },
        { number: "+[PREENCHER]", label: "Alunos transformados" },
        { number: "2", label: "Unidades da Estiga Total" },
    ],
    imageAlt: "Nelsinho Personal Trainer sorrindo com uniforme da marca na academia",
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
            highlight: "Grupos de até [PREENCHER] pessoas",
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
            name: "Thaiz",
            result: "-10kg (74kg → 64kg)",
            description: "A Estiga Total mudou minha vida! Com o apoio da equipe, eliminei 10kg e conquistei a saúde que sempre quis. Me sinto incrível!",
            beforeAlt: "Foto antes da transformação de Thaiz",
            afterAlt: "Foto depois da transformação de Thaiz",
            beforeImage: "/images/transformations/t1-before.jpg",
            afterImage: "/images/transformations/t1-after.jpg",
        },
        {
            name: "Thaise",
            result: "-9kg em 30 dias",
            description: "Em apenas 30 dias consegui resultados que nunca imaginei! A equipe da Estiga Total é incrível, me motivarem todos os dias. Estou muito feliz com minha transformação!",
            beforeAlt: "Foto antes da transformação de Thaise",
            afterAlt: "Foto depois da transformação de Thaise",
            beforeImage: "/images/transformations/t2-before.jpg",
            afterImage: "/images/transformations/t2-after.jpg",
        },
        {
            name: "Adriana",
            result: "-18kg em 6 meses",
            description: "Perder 18kg em 6 meses parecia impossível, mas na Estiga Total eu consegui! A metodologia e o incentivo dos professores fizeram toda a diferença nessa jornada.",
            beforeAlt: "Foto antes da transformação de Adriana",
            afterAlt: "Foto depois da transformação de Adriana",
            beforeImage: "/images/transformations/t3-before.jpg",
            afterImage: "/images/transformations/t3-after.jpg",
        },
        {
            name: "Ellis Vitória",
            result: "+11kg de massa em 8 meses",
            description: "Ganhei 11kg de massa muscular em 8 meses! A estrutura e os treinos personalizados da Estiga Total foram essenciais para eu alcançar meu objetivo de hipertrofia.",
            beforeAlt: "Foto antes da transformação de Ellis Vitória",
            afterAlt: "Foto depois da transformação de Ellis Vitória",
            beforeImage: "/images/transformations/t4-before.jpg",
            afterImage: "/images/transformations/t4-after.jpg",
        },
    ],
    cta: "Quero Minha Transformação",
};

export const TESTIMONIALS_COPY = {
    sectionLabel: "O que dizem meus alunos",
    headline: ["Quem treinou", "recomenda."],
    testimonials: [
        {
            name: "[PREENCHER]",
            result: "[PREENCHER — ex: Perdeu 8kg em 2 meses]",
            stars: 5,
            text: "[PREENCHER — depoimento real do aluno]",
            avatarAlt: "Foto de [nome], aluno do Nelsinho Personal",
        },
        {
            name: "[PREENCHER 2]",
            result: "[PREENCHER 2]",
            stars: 5,
            text: "[PREENCHER 2]",
            avatarAlt: "Avatar",
        },
    ],
};

export const PLANS_COPY = {
    sectionLabel: "Investimento",
    headline: ["Planos que cabem", "no seu objetivo."],
    subheadline: "Escolha o formato ideal e comece sua transformação agora.",
    plans: [
        {
            name: "Personal Online",
            price: "R$ [PREENCHER]",
            period: "/mês",
            highlight: false,
            description: "Para quem quer resultado com flexibilidade de horário.",
            features: [
                "Planilha de treino personalizada",
                "Suporte via WhatsApp",
                "Ajuste mensal de cargas",
                "Orientação nutricional básica",
            ],
            cta: "Começar Agora",
        },
        {
            name: "Personal Presencial",
            price: "R$ [PREENCHER]",
            period: "/mês",
            highlight: true,
            badge: "Mais Escolhido",
            description: "Acompanhamento completo com o Nelsinho ao seu lado.",
            features: [
                "[PREENCHER] sessões por semana",
                "Avaliação física completa",
                "Planilha + suporte online",
                "Acesso à Estiga Total",
                "Orientação nutricional",
            ],
            cta: "Quero Este Plano",
        },
        {
            name: "Pacote Completo",
            price: "R$ [PREENCHER]",
            period: "/mês",
            highlight: false,
            description: "A experiência mais completa de transformação.",
            features: [
                "Personal presencial + online",
                "Avaliação física mensal",
                "[PREENCHER] sessões por semana",
                "Suporte nutricional avançado",
                "Acesso prioritário",
            ],
            cta: "Falar com o Nelsinho",
        },
    ],
    disclaimer: "Tem dúvidas sobre qual plano é ideal para você? Me chama no WhatsApp e a gente conversa.",
    ctaPlans: "Falar no WhatsApp",
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
