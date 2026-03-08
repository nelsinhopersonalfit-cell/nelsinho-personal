import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

interface TestimonialCardProps {
    name: string;
    result: string;
    text: string;
    stars?: number;
    avatarAlt: string;
    className?: string;
}

export function TestimonialCard({
    name,
    result,
    text,
    stars = 5,
    avatarAlt,
    className,
}: TestimonialCardProps) {
    return (
        <div
            className={cn(
                "flex h-full flex-col rounded-card border border-brand-border bg-brand-surface p-8",
                className
            )}
        >
            <div className="mb-6 flex space-x-1">
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

            <p className="mb-8 flex-1 font-inter text-body-lg text-brand-offwhite leading-relaxed">
                "{text}"
            </p>

            <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-surface-3 overflow-hidden border border-brand-border">
                    <Image
                        src={`/images/testimonials/avatar-${Math.floor(Math.random() * 2) + 1}.jpg`}
                        alt={avatarAlt}
                        width={48}
                        height={48}
                        className="object-cover w-full h-full"
                        unoptimized // Para mock inicial sem imagem real
                    />
                </div>
                <div>
                    <h4 className="font-barlow text-lg font-bold text-brand-offwhite">{name}</h4>
                    <p className="text-body-sm font-medium text-brand-orange">{result}</p>
                </div>
            </div>
        </div>
    );
}
