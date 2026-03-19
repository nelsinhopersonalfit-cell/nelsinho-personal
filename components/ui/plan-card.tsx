import { cn } from "@/lib/utils";
import { WhatsAppButton } from "./whatsapp-button";
import { Badge } from "./section-label";
import React from "react";
import { motion } from "framer-motion";

interface PlanCardProps {
    name: string;
    price: string;
    period: string;
    description: string;
    features: string[];
    cta: string;
    highlight?: boolean;
    badge?: string;
    className?: string;
}

export function PlanCard({
    name,
    price,
    period,
    description,
    features,
    cta,
    highlight = false,
    badge,
    className,
}: PlanCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -8, transition: { duration: 0.3, ease: "easeOut" } }}
            className={cn(
                "relative flex h-full w-full flex-col rounded-card-lg border p-5 sm:p-8 transition-all duration-300",
                highlight
                    ? "border-brand-orange bg-gradient-to-b from-brand-surface/80 to-brand-orange/10 shadow-orange-glow backdrop-blur-xl z-10"
                    : "border-brand-border/50 bg-brand-surface/60 hover:border-brand-orange/40 backdrop-blur-xl z-0",
                className
            )}
        >
            {/* Glow Effect para o card destaque */}
            {highlight && (
                <div className="absolute inset-0 -z-10 bg-brand-orange/5 blur-3xl rounded-card-lg" aria-hidden="true" />
            )}

            {badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 whitespace-nowrap">
                    <Badge className={cn(
                        "bg-brand-orange text-brand-black ring-0 shadow-lg font-bold uppercase tracking-wider",
                        highlight ? "scale-110" : "scale-100"
                    )}>
                        {badge}
                    </Badge>
                </div>
            )}

            {/* Header */}
            <div className="mb-4 md:mb-6 text-center">
                <h3 className="mb-2 font-barlow text-xl md:text-2xl font-bold uppercase tracking-tight text-brand-offwhite">
                    {name}
                </h3>
                <div className="flex items-baseline justify-center gap-1 font-barlow-condensed group">
                    {/* Preço: mantido grande — é o elemento de conversão */}
                    <span className="text-5xl sm:text-6xl lg:text-[4.5rem] leading-none font-extrabold text-brand-orange tracking-tighter drop-shadow-sm transition-transform group-hover:scale-105 duration-300">
                        {price}
                    </span>
                    <span className="text-body-sm md:text-body-md font-semibold text-brand-muted uppercase">{period}</span>
                </div>
                <p className="mt-2 md:mt-4 min-h-0 md:min-h-[40px] text-balance text-body-sm text-brand-muted leading-relaxed">
                    {description}
                </p>
            </div>

            {/* Features — leitura é crítica aqui, não reduzir texto */}
            <div className="mb-6 md:mb-10 flex-1">
                <ul className="space-y-3 md:space-y-4">
                    {features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-body-sm md:text-body-md text-brand-offwhite/90">
                            <div className="mt-0.5 flex h-4 w-4 md:h-5 md:w-5 shrink-0 items-center justify-center rounded-full bg-brand-orange/10 text-brand-orange">
                                <svg
                                    className="h-3 w-3 md:h-3.5 md:w-3.5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={3}
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <span className="leading-snug">{feature}</span>
                        </li>
                    ))}
                </ul>
            </div>

            <WhatsAppButton
                message="plans"
                variant={highlight ? "primary" : "secondary"}
                className={cn(
                    "mt-auto w-full text-center py-3 md:py-4 font-bold uppercase tracking-widest transition-all duration-300",
                    highlight ? "shadow-orange-glow hover:shadow-orange-glow-lg scale-[1.02]" : "hover:bg-brand-orange hover:text-brand-black"
                )}
            >
                {cta}
            </WhatsAppButton>
        </motion.div>
    );
}
