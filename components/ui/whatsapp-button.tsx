import { getWhatsAppUrl, WHATSAPP_MESSAGES } from "@/lib/constants";
import { cn } from "@/lib/utils";
import React from "react";

interface WhatsAppButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    message?: keyof typeof WHATSAPP_MESSAGES;
    variant?: "primary" | "secondary" | "ghost";
    size?: "sm" | "md" | "lg";
    children: React.ReactNode;
}

export function WhatsAppButton({
    message = "default",
    variant = "primary",
    size = "md",
    className,
    children,
    ...props
}: WhatsAppButtonProps) {
    const url = getWhatsAppUrl(message);

    const baseStyles = "inline-flex items-center justify-center font-semibold rounded-btn transition-colors duration-250 ease-smooth z-10 relative";

    const variants = {
        primary: "bg-brand-orange text-white hover:bg-brand-orange-light shadow-orange-glow-sm hover:shadow-orange-glow",
        secondary: "border border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white",
        ghost: "text-brand-orange hover:underline hover:text-brand-orange-light focus:underline underline-offset-4",
    };

    const sizes = {
        sm: "px-4 py-2 text-body-sm",
        md: "px-6 py-3 text-body-md",
        lg: "px-6 py-3.5 md:px-8 md:py-4 text-body-lg",
    };

    const variantClass = variants[variant];
    const sizeClass = variant === "ghost" ? "p-0 text-body-md" : sizes[size];

    return (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(baseStyles, variantClass, sizeClass, className)}
            {...props}
        >
            {children}
        </a>
    );
}
