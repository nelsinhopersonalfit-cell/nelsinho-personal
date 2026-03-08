import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

interface TransformationCardProps {
    name: string;
    result: string;
    description: string;
    beforeAlt: string;
    afterAlt: string;
    beforeImage?: string;
    afterImage?: string;
    idx: number; // to load mock images correctly while not provided
    className?: string;
}

export function TransformationCard({
    name,
    result,
    description,
    beforeAlt,
    afterAlt,
    beforeImage,
    afterImage,
    idx,
    className,
}: TransformationCardProps) {
    // Setup mocks to prevent crash
    const mIdx = idx === 0 ? 1 : 2;
    return (
        <div
            className={cn(
                "group flex w-full flex-col overflow-hidden rounded-card border border-brand-border bg-brand-black transition-all duration-350 hover:border-brand-orange/50 hover:shadow-orange-glow-sm",
                className
            )}
        >
            <div className="relative flex aspect-square w-full">
                {/* Divider line */}
                <div className="absolute left-1/2 top-0 z-20 h-full w-[2px] -translate-x-1/2 bg-brand-orange"></div>

                {/* Before Image */}
                <div className="relative h-full w-1/2 overflow-hidden bg-brand-surface-2 pr-[1px]">
                    <div className="absolute left-4 top-4 z-30 rounded-full bg-brand-orange px-3 py-1 text-label-sm font-bold uppercase tracking-wider text-white shadow-md">
                        Antes
                    </div>
                    <Image
                        src={beforeImage || `/images/transformations/t${mIdx}-before.jpg`}
                        alt={beforeAlt}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                </div>

                {/* After Image */}
                <div className="relative h-full w-1/2 overflow-hidden bg-brand-surface-2 pl-[1px]">
                    <div className="absolute right-4 top-4 z-30 rounded-full bg-brand-orange px-3 py-1 text-label-sm font-bold uppercase tracking-wider text-white shadow-md">
                        Depois
                    </div>
                    <Image
                        src={afterImage || `/images/transformations/t${mIdx}-after.jpg`}
                        alt={afterAlt}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                </div>
            </div>

            <div className="flex flex-col border-t border-brand-border bg-brand-surface p-6">
                <h3 className="mb-1 font-barlow text-xl font-bold text-brand-offwhite">{name}</h3>
                <p className="mb-4 text-body-lg font-semibold text-brand-orange">{result}</p>
                <p className="text-body-sm text-brand-muted">{description}</p>
            </div>
        </div>
    );
}
