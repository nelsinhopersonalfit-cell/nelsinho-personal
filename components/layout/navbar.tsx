"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { NAVBAR_COPY } from "@/lib/copy";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
        e.preventDefault();
        setIsMobileMenuOpen(false);
        const element = document.querySelector(target);
        if (element) {
            window.scrollTo({
                top: element.getBoundingClientRect().top + window.scrollY - 80, // Offset navbar h
                behavior: "smooth",
            });
        }
    };

    return (
        <nav
            className={cn(
                "fixed left-0 top-0 z-navbar w-full transition-all duration-350",
                isScrolled
                    ? "bg-brand-black/90 py-4 shadow-md backdrop-blur-md"
                    : "bg-transparent py-6"
            )}
        >
            <div className="mx-auto flex w-full max-w-container items-center justify-between px-container-px md:px-container-px-md lg:px-container-px-lg">
                {/* Logo */}
                <Link href="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                    <Image
                        src="/images/logo/wordmark.png"
                        alt={NAVBAR_COPY.logoAlt}
                        width={180}
                        height={40}
                        className="h-8 w-auto object-contain transition-opacity hover:opacity-80"
                        priority
                    />
                </Link>

                {/* Desktop Links */}
                <div className="hidden items-center gap-8 md:flex">
                    {NAVBAR_COPY.links.map((link) => (
                        <a
                            key={link.anchor}
                            href={link.anchor}
                            onClick={(e) => scrollToSection(e, link.anchor)}
                            className="font-inter text-body-sm font-medium text-brand-offwhite transition-colors hover:text-brand-orange focus:text-brand-orange focus:outline-none"
                        >
                            {link.label}
                        </a>
                    ))}
                    <WhatsAppButton size="sm">{NAVBAR_COPY.cta}</WhatsAppButton>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="flex h-10 w-10 items-center justify-center rounded-btn text-brand-offwhite md:hidden"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <svg
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        {isMobileMenuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile Menu Dropdown */}
            <div
                className={cn(
                    "absolute left-0 top-full w-full overflow-hidden bg-brand-surface-2 transition-all duration-350 md:hidden",
                    isMobileMenuOpen ? "max-h-screen border-b border-brand-border pb-6 shadow-xl" : "max-h-0"
                )}
            >
                <div className="flex flex-col items-center gap-6 px-4 pt-6">
                    {NAVBAR_COPY.links.map((link) => (
                        <a
                            key={link.anchor}
                            href={link.anchor}
                            onClick={(e) => scrollToSection(e, link.anchor)}
                            className="text-body-lg font-semibold text-brand-offwhite"
                        >
                            {link.label}
                        </a>
                    ))}
                    <WhatsAppButton className="w-full" onClick={() => setIsMobileMenuOpen(false)}>
                        {NAVBAR_COPY.cta}
                    </WhatsAppButton>
                </div>
            </div>
        </nav>
    );
}
