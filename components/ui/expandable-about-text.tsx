"use client";

import { useState } from "react";

export function ExpandableAboutText() {
    const [expanded, setExpanded] = useState(false);

    return (
        <div className="space-y-3 md:space-y-4 font-inter text-body-md md:text-body-lg text-brand-muted">
            {/* Parágrafo 1 — sempre visível */}
            <p>
                Tenho 44 anos e vivo a{" "}
                <strong className="text-brand-offwhite font-semibold">musculação desde os 7</strong> — via meu pai treinar no quintal com um livrinho de instruções improvisado. Aos 12, já fazia exercícios adaptados numa academia totalmente artesanal aqui em Santa Rita, PB. Desde então,{" "}
                <strong className="text-brand-offwhite font-semibold">nunca parei.</strong>
            </p>

            {/* Parágrafo 2 — oculto no mobile até expandir */}
            <p className={expanded ? "block" : "hidden md:block"}>
                <strong className="text-brand-offwhite font-semibold">Bacharel em Educação Física</strong> e{" "}
                <strong className="text-brand-offwhite font-semibold">especialista em emagrecimento</strong>, criei o Programa de Aceleração de Emagrecimento — um protocolo documentado que já ajudou uma aluna a perder{" "}
                <strong className="text-brand-offwhite font-semibold">13 kg em um mês e 15 dias</strong>. Meu foco é encontrar o caminho certo para o seu corpo.
            </p>

            {/* Botão Ver mais — mobile only */}
            <button
                onClick={() => setExpanded(prev => !prev)}
                className="flex items-center gap-1 text-brand-orange font-semibold text-body-sm transition-colors hover:text-brand-orange-light md:hidden ml-auto"
            >
                {expanded ? "Ver menos" : "Ver mais"}
                <svg
                    className={`w-4 h-4 transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
            </button>
        </div>
    );
}
