import { cn } from "@/lib/utils";
import React from "react";
import Image from "next/image";

interface ServiceCardProps {
    icon: string;
    title: string;
    description: string;
    highlight?: string;
    className?: string;
}

export function ServiceCard({ icon, title, description, highlight, className }: ServiceCardProps) {
    return (
        <div
            className={cn(
                "group relative flex flex-col rounded-card border border-brand-border bg-brand-surface p-8 transition-all duration-350 ease-smooth hover:-translate-y-1 hover:border-brand-border-light hover:shadow-card-hover",
                className
            )}
        >
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-surface-3 transition-colors duration-350 group-hover:bg-brand-orange/10">
                <Image
                    src={`/icons/icon-${icon}.svg`}
                    alt={title}
                    width={28}
                    height={28}
                    className="text-brand-orange"
                />
            </div>

            <h3 className="mb-3 font-barlow text-2xl font-semibold text-brand-offwhite">
                {title}
            </h3>

            <p className="mb-6 flex-1 text-body-md text-brand-muted">
                {description}
            </p>

            {highlight && (
                <div className="mt-auto border-t border-brand-border pt-4">
                    <p className="text-body-sm font-medium text-brand-subtle flex shadow-none items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-orange"></span>
                        {highlight}
                    </p>
                </div>
            )}
        </div>
    );
}
