import { cn } from "@/lib/utils";
import { WhatsAppButton } from "./whatsapp-button";
import { Badge } from "./section-label";
import React from "react";

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
        <div
            className={cn(
                "relative flex flex-col rounded-card-lg border bg-brand-surface p-8 transition-all duration-350",
                highlight
                    ? "border-brand-orange shadow-orange-glow md:-translate-y-4"
                    : "border-brand-border hover:border-brand-border-light hover:shadow-card",
                className
            )}
        >
            {badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className="bg-brand-orange text-brand-black ring-0 drop-shadow-md">
                        {badge}
                    </Badge>
                </div>
            )}

            <div className="mb-6 text-center">
                <h3 className="mb-2 font-barlow text-2xl font-bold text-brand-offwhite">
                    {name}
                </h3>
                <div className="flex items-baseline justify-center gap-1 font-barlow-condensed">
                    <span className="text-display-md font-bold text-brand-orange">{price}</span>
                    <span className="text-body-md font-medium text-brand-muted">{period}</span>
                </div>
                <p className="mt-4 text-body-sm text-brand-muted">{description}</p>
            </div>

            <div className="mb-8 flex-1">
                <ul className="space-y-4">
                    {features.map((feature, idx) => (
                        <li key={idx} className="flex gap-3 text-body-md text-brand-offwhite">
                            <svg
                                className="h-6 w-6 shrink-0 text-brand-orange"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                            {feature}
                        </li>
                    ))}
                </ul>
            </div>

            <WhatsAppButton
                message="plans"
                variant={highlight ? "primary" : "secondary"}
                className="w-full text-center"
            >
                {cta}
            </WhatsAppButton>
        </div>
    );
}
