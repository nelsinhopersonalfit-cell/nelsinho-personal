"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { useActiveCard } from "@/components/providers/active-card-provider";

interface TestimonialCardProps {
    name: string;
    result: string;
    text: string;
    stars?: number;
    avatarAlt: string;
    avatarImage?: string;
    cardId: string;
    className?: string;
}

export function TestimonialCard({
    name,
    result,
    text,
    stars = 5,
    avatarAlt,
    avatarImage,
    cardId,
    className,
}: TestimonialCardProps) {
    const { activeId, setActiveId } = useActiveCard();
    const isActive = activeId === cardId;

    const handleClick = () => setActiveId(isActive ? null : cardId);

    return (
        <motion.div
            whileHover="hover"
            animate={isActive ? "hover" : "idle"}
            onClick={handleClick}
            className={cn(
                "group relative flex h-full flex-col rounded-card border bg-brand-surface p-4 md:p-8 transition-all duration-350 cursor-pointer",
                isActive
                    ? "border-brand-orange/30 shadow-orange-glow-sm"
                    : "border-brand-border hover:border-brand-orange/30 hover:shadow-orange-glow-sm",
                className
            )}
        >
            {/* Quote Icon Background */}
            <motion.div
                variants={{
                    idle: { rotateY: 0, opacity: 0.03 },
                    hover: { rotateY: 180, opacity: 0.2 },
                }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className={cn(
                    "absolute right-4 top-4 md:right-8 md:top-8 transition-colors duration-300 delay-200",
                    isActive ? "text-brand-orange" : "text-brand-offwhite group-hover:text-brand-orange"
                )}
            >
                <svg width="28" height="21" viewBox="0 0 48 36" fill="currentColor" className="md:w-12 md:h-9">
                    <path d="M12 0C5.37258 0 0 5.37258 0 12V36H18V18H6V12C6 8.68629 8.68629 6 12 6V0ZM42 0C35.3726 0 30 5.37258 30 12V36H48V18H36V12C36 8.68629 38.6863 6 42 6V0Z" />
                </svg>
            </motion.div>

            <div className="mb-3 md:mb-6 flex items-center gap-2">
                <div className="flex space-x-0.5 md:space-x-1">
                    {[...Array(stars)].map((_, i) => (
                        <svg
                            key={i}
                            className="h-4 w-4 md:h-5 md:w-5 text-brand-orange"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                        >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                    ))}
                </div>
                <span className="font-barlow text-sm md:text-lg font-medium text-brand-muted">(5.0)</span>
            </div>

            <p className="mb-4 md:mb-8 flex-1 font-inter text-body-sm md:text-body-lg text-brand-offwhite leading-relaxed">
                "{text}"
            </p>

            <div className="flex items-center gap-3 md:gap-4">
                <div className="relative flex h-10 w-10 md:h-14 md:w-14 shrink-0 items-center justify-center rounded-full bg-brand-surface-3 overflow-hidden border border-brand-border-light shadow-sm">
                    <Image
                        src={avatarImage || `/images/testimonials/avatar-1.png`}
                        alt={avatarAlt}
                        fill
                        className="object-cover"
                    />
                </div>
                <div>
                    <h4 className={cn(
                        "font-barlow text-base md:text-lg font-bold transition-colors",
                        isActive ? "text-brand-orange" : "text-brand-offwhite group-hover:text-brand-orange"
                    )}>{name}</h4>
                    <p className={cn(
                        "text-body-sm font-medium transition-colors",
                        isActive ? "text-brand-offwhite" : "text-brand-orange group-hover:text-brand-offwhite"
                    )}>{result}</p>
                </div>
            </div>
        </motion.div>
    );
}
