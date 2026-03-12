"use client";

import { cn } from "@/lib/utils";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface ServiceCardProps {
    icon: string;
    title: string;
    description: string;
    highlight?: string;
    className?: string;
}

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
        },
    },
};

export function ServiceCard({ icon, title, description, highlight, className }: ServiceCardProps) {
    return (
        <motion.div
            variants={itemVariants}
            className={cn(
                "group relative flex flex-col rounded-card border border-brand-border bg-brand-surface/60 backdrop-blur-md p-8 transition-all duration-500 ease-smooth hover:-translate-y-2 hover:border-brand-orange/50 hover:shadow-orange-glow-sm hover:bg-brand-surface",
                className
            )}
        >
            {/* Efeito de brilho no hover */}
            <div className="absolute inset-0 -z-10 rounded-card bg-gradient-to-br from-brand-orange/0 to-brand-orange/0 opacity-0 transition-opacity duration-500 group-hover:from-brand-orange/5 group-hover:to-transparent group-hover:opacity-100" />

            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-surface-3 transition-colors duration-500 group-hover:bg-brand-orange/10">
                <Image
                    src={`/icons/icon-${icon}.svg`}
                    alt={title}
                    width={28}
                    height={28}
                    className="text-brand-orange transition-transform duration-500 group-hover:scale-110"
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
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-pulse"></span>
                        {highlight}
                    </p>
                </div>
            )}
        </motion.div>
    );
}
