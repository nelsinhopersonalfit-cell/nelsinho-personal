import { cn } from "@/lib/utils";
import React from "react";

interface StatCardProps {
    number: string;
    label: string;
    className?: string;
}

export function StatCard({ number, label, className }: StatCardProps) {
    return (
        <div
            className={cn(
                "flex flex-col items-center justify-center rounded-card border border-brand-border bg-brand-surface/80 p-6 backdrop-blur-sm transition-transform duration-350 hover:-translate-y-1 hover:border-brand-border-light hover:shadow-card-hover",
                className
            )}
        >
            <span className="mb-1 font-barlow-condensed text-display-md font-bold text-brand-orange">
                {number}
            </span>
            <span className="text-center font-inter text-label-sm font-semibold uppercase tracking-widest text-brand-muted">
                {label}
            </span>
        </div>
    );
}
