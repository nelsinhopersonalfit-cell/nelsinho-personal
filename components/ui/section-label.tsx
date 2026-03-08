import { cn } from "@/lib/utils";
import React from "react";

export function SectionLabel({ className, children, ...props }: React.HTMLAttributes<HTMLSpanElement>) {
    return (
        <span
            className={cn(
                "inline-flex items-center font-inter font-semibold uppercase tracking-[0.12em] text-[0.75rem] text-brand-orange mb-4",
                className
            )}
            {...props}
        >
            <span className="w-8 h-[2px] bg-brand-orange mr-3 rounded-full" />
            {children}
        </span>
    );
}

export function Badge({ className, children, ...props }: React.HTMLAttributes<HTMLSpanElement>) {
    return (
        <span
            className={cn(
                "inline-flex items-center rounded-badge bg-brand-orange/10 px-3 py-1 text-label-sm font-semibold text-brand-orange ring-1 ring-inset ring-brand-orange/20",
                className
            )}
            {...props}
        >
            {children}
        </span>
    );
}

export function SectionDivider({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div className={cn("w-full max-w-container mx-auto px-container-px md:px-container-px-md lg:px-container-px-lg", className)} {...props}>
            <div className="w-full h-[1px] bg-brand-border" />
        </div>
    );
}
