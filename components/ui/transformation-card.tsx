"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { useActiveCard } from "@/components/providers/active-card-provider";

interface TransformationCardProps {
    name: string;
    result: string;
    description: string;
    beforeAlt: string;
    afterAlt: string;
    beforeImage?: string;
    afterImage?: string;
    idx: number;
    cardId: string;
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
    cardId,
    className,
}: TransformationCardProps) {
    const mIdx = idx === 0 ? 1 : 2;
    const { activeId, setActiveId } = useActiveCard();
    const isActive = activeId === cardId;

    const handleClick = () => setActiveId(isActive ? null : cardId);

    return (
        <motion.div
            whileHover="hover"
            animate={isActive ? "hover" : "idle"}
            onClick={handleClick}
            className={cn(
                "group flex w-full flex-col overflow-hidden rounded-card border bg-brand-black transition-all duration-350 cursor-pointer",
                isActive
                    ? "border-brand-orange/50 shadow-orange-glow-sm"
                    : "border-brand-border hover:border-brand-orange/50 hover:shadow-orange-glow-sm",
                className
            )}
        >
            <div className="relative flex aspect-[3/4] md:aspect-[4/5] w-full">
                {/* Divider line */}
                <div className="absolute left-1/2 top-0 z-20 h-full w-[2px] -translate-x-1/2 bg-brand-orange" />

                {/* Before Image */}
                <div className="relative h-full w-1/2 overflow-hidden bg-brand-surface-2 pr-[1px]">
                    <div className="absolute left-2 bottom-2 md:left-4 md:bottom-4 z-30 rounded-full bg-brand-orange px-3 py-1 text-label-sm font-bold uppercase tracking-wider text-white shadow-md">
                        Antes
                    </div>
                    <Image
                        src={beforeImage || `/images/transformations/t${mIdx}-before.jpg`}
                        alt={beforeAlt}
                        fill
                        className={cn(
                            "object-cover transition-transform duration-700",
                            isActive ? "scale-105" : "group-hover:scale-105"
                        )}
                    />
                </div>

                {/* After Image */}
                <div className="relative h-full w-1/2 overflow-hidden bg-brand-surface-2 pl-[1px]">
                    <div className="absolute right-2 bottom-2 md:right-4 md:bottom-4 z-30 rounded-full bg-brand-orange px-3 py-1 text-label-sm font-bold uppercase tracking-wider text-white shadow-md">
                        Depois
                    </div>
                    <Image
                        src={afterImage || `/images/transformations/t${mIdx}-after.jpg`}
                        alt={afterAlt}
                        fill
                        className={cn(
                            "object-cover transition-transform duration-700",
                            isActive ? "scale-105" : "group-hover:scale-105"
                        )}
                    />
                </div>
            </div>

            <div className="relative flex flex-col border-t border-brand-border bg-brand-surface p-4 md:p-6">
                {/* Quote Icon Background */}
                <motion.div
                    variants={{
                        idle: { rotateY: 0, opacity: 0.03 },
                        hover: { rotateY: 180, opacity: 0.2 },
                    }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className={cn(
                        "absolute right-4 top-4 md:right-6 md:top-6 transition-colors duration-300 delay-200",
                        isActive ? "text-brand-orange" : "text-brand-offwhite group-hover:text-brand-orange"
                    )}
                >
                    <svg width="32" height="24" viewBox="0 0 48 36" fill="currentColor">
                        <path d="M12 0C5.37258 0 0 5.37258 0 12V36H18V18H6V12C6 8.68629 8.68629 6 12 6V0ZM42 0C35.3726 0 30 5.37258 30 12V36H48V18H36V12C36 8.68629 38.6863 6 42 6V0Z" />
                    </svg>
                </motion.div>
                <h3 className="mb-1 font-barlow text-lg md:text-2xl font-bold text-brand-offwhite">{name}</h3>
                <p className="mb-2 md:mb-4 text-body-md md:text-body-lg font-semibold text-brand-orange">{result}</p>
                <p className="text-body-sm text-brand-muted">"{description}"</p>
            </div>
        </motion.div>
    );
}
