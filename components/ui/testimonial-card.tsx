"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

interface TestimonialCardProps {
    name: string;
    result: string;
    text: string;
    stars?: number;
    avatarAlt: string;
    avatarImage?: string;
    className?: string;
}

export function TestimonialCard({
    name,
    result,
    text,
    stars = 5,
    avatarAlt,
    avatarImage,
    className,
}: TestimonialCardProps) {
    return (
        <motion.div
            whileHover="hover"
            className={cn(
                "group relative flex h-full flex-col rounded-card border border-brand-border bg-brand-surface p-8 transition-all duration-350 hover:border-brand-orange/30 hover:shadow-orange-glow-sm",
                className
            )}
        >
            {/* Quote Icon Background */}
            <motion.div 
                variants={{
                    hover: { rotateY: 180 }
                }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="absolute right-8 top-8 opacity-[0.03] text-brand-offwhite group-hover:opacity-20 group-hover:text-brand-orange transition-all duration-300 delay-200"
            >
                <svg width="48" height="36" viewBox="0 0 48 36" fill="currentColor">
                    <path d="M12 0C5.37258 0 0 5.37258 0 12V36H18V18H6V12C6 8.68629 8.68629 6 12 6V0ZM42 0C35.3726 0 30 5.37258 30 12V36H48V18H36V12C36 8.68629 38.6863 6 42 6V0Z" />
                </svg>
            </motion.div>
            <div className="mb-6 flex items-center gap-2">
                <div className="flex space-x-1">
                    {[...Array(stars)].map((_, i) => (
                        <svg
                            key={i}
                            className="h-5 w-5 text-brand-orange"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                        >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                    ))}
                </div>
                <span className="font-barlow text-lg font-medium text-brand-muted">(5.0)</span>
            </div>

            <p className="mb-8 flex-1 font-inter text-body-lg text-brand-offwhite leading-relaxed">
                "{text}"
            </p>

            <div className="flex items-center gap-4">
                <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-brand-surface-3 overflow-hidden border border-brand-border-light shadow-sm">
                    <Image
                        src={avatarImage || `/images/testimonials/avatar-1.png`}
                        alt={avatarAlt}
                        fill
                        className="object-cover"
                    />
                </div>
                <div>
                    <h4 className="font-barlow text-lg font-bold text-brand-offwhite group-hover:text-brand-orange transition-colors">{name}</h4>
                    <p className="text-body-sm font-medium text-brand-orange group-hover:text-brand-offwhite transition-colors">{result}</p>
                </div>
            </div>
        </motion.div>
    );
}
