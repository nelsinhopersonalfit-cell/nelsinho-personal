"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

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
        <motion.div
            whileHover="hover"
            className={cn(
                "group flex w-full flex-col overflow-hidden rounded-card border border-brand-border bg-brand-black transition-all duration-350 hover:border-brand-orange/50 hover:shadow-orange-glow-sm",
                className
            )}
        >
            <div className="relative flex aspect-[4/5] w-full">
                {/* Divider line */}
                <div className="absolute left-1/2 top-0 z-20 h-full w-[2px] -translate-x-1/2 bg-brand-orange"></div>

                {/* Before Image */}
                <div className="relative h-full w-1/2 overflow-hidden bg-brand-surface-2 pr-[1px]">
                    <div className="absolute left-4 bottom-4 z-30 rounded-full bg-brand-orange px-3 py-1 text-label-sm font-bold uppercase tracking-wider text-white shadow-md">
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
                    <div className="absolute right-4 bottom-4 z-30 rounded-full bg-brand-orange px-3 py-1 text-label-sm font-bold uppercase tracking-wider text-white shadow-md">
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

            <div className="relative flex flex-col border-t border-brand-border bg-brand-surface p-6">
                {/* Quote Icon Background */}
                <motion.div 
                    variants={{
                        hover: { rotateY: 180 }
                    }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="absolute right-6 top-6 opacity-[0.03] text-brand-offwhite group-hover:opacity-20 group-hover:text-brand-orange transition-all duration-300 delay-200"
                >
                    <svg width="32" height="24" viewBox="0 0 48 36" fill="currentColor">
                        <path d="M12 0C5.37258 0 0 5.37258 0 12V36H18V18H6V12C6 8.68629 8.68629 6 12 6V0ZM42 0C35.3726 0 30 5.37258 30 12V36H48V18H36V12C36 8.68629 38.6863 6 42 6V0Z" />
                    </svg>
                </motion.div>
                <h3 className="mb-1 font-barlow text-2xl font-bold text-brand-offwhite">{name}</h3>
                <p className="mb-4 text-body-lg font-semibold text-brand-orange">{result}</p>
                <p className="text-body-sm text-brand-muted">"{description}"</p>
            </div>
        </motion.div>
    );
}
