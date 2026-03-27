export const WHATSAPP_NUMBER = "5583991900000"; // TODO: Atualizar para o número real se fornecido

export const WHATSAPP_MESSAGES = {
    hero: "Olá Nelsinho! Vim pelo site e quero saber mais sobre o personal training.",
    plans: "Olá Nelsinho! Quero conhecer os planos de personal trainer.",
    avaliacao: "Olá Nelsinho! Quero agendar minha avaliação física gratuita.",
    pae: "Olá Nelsinho! Quero saber mais sobre o Programa de Aceleração de Emagrecimento!",
    default: "Olá Nelsinho! Vim pelo site e gostaria de mais informações.",
};

export const SOCIAL_LINKS = {
    instagram: "https://instagram.com/nelsinhopersonaltrainer321",
    whatsapp: `https://wa.me/${WHATSAPP_NUMBER}`,
};

export function getWhatsAppUrl(messageKey: keyof typeof WHATSAPP_MESSAGES = "default") {
    const text = encodeURIComponent(WHATSAPP_MESSAGES[messageKey]);
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
}
