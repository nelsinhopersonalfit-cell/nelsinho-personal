"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { NAVBAR_COPY } from "@/lib/copy";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import { AnimatePresence, motion } from "framer-motion";

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Bloqueia scroll do body quando menu aberto
    useEffect(() => {
        document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [isMobileMenuOpen]);

    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
        e.preventDefault();
        setIsMobileMenuOpen(false);
        const element = document.querySelector(target);
        if (element) {
            window.scrollTo({
                top: element.getBoundingClientRect().top + window.scrollY - 80,
                behavior: "smooth",
            });
        }
    };

    return (
        <>
            <nav
                className={cn(
                    "fixed left-0 top-0 z-navbar w-full transition-all duration-350",
                    isScrolled || isMobileMenuOpen
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

                    {/* Hamburger animado */}
                    <button
                        onClick={() => setIsMobileMenuOpen(prev => !prev)}
                        aria-label="Toggle menu"
                        aria-expanded={isMobileMenuOpen}
                        className={cn(
                            "relative flex h-10 w-10 flex-col items-center justify-center gap-[5px] rounded-btn transition-colors duration-250 md:hidden",
                            isMobileMenuOpen && "gap-0"
                        )}
                    >
                        <span className={cn(
                            "block h-[2px] w-5 rounded-full bg-brand-offwhite transition-all duration-300 origin-center",
                            isMobileMenuOpen && "rotate-45 translate-y-[2px]"
                        )} />
                        <span className={cn(
                            "block h-[2px] w-5 rounded-full bg-brand-offwhite transition-all duration-300",
                            isMobileMenuOpen && "opacity-0 scale-x-0"
                        )} />
                        <span className={cn(
                            "block h-[2px] w-5 rounded-full bg-brand-offwhite transition-all duration-300 origin-center",
                            isMobileMenuOpen && "-rotate-45 -translate-y-[2px]"
                        )} />
                    </button>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            key="mobile-menu"
                            initial={{ opacity: 0, y: -6 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -6 }}
                            transition={{ duration: 0.22, ease: "easeOut" }}
                            className="absolute left-0 top-full w-full border-b border-brand-border bg-brand-surface-2/95 shadow-xl backdrop-blur-md md:hidden"
                        >
                            <div className="flex flex-col px-container-px pb-6 pt-2">
                                {NAVBAR_COPY.links.map((link, idx) => (
                                    <a
                                        key={link.anchor}
                                        href={link.anchor}
                                        onClick={(e) => scrollToSection(e, link.anchor)}
                                        className="group flex items-center justify-between border-b border-brand-border/40 py-4 last:border-0"
                                    >
                                        <div className="flex items-center gap-3">
                                            <span className="font-inter text-[10px] font-bold uppercase tracking-widest text-brand-orange/60">
                                                {String(idx + 1).padStart(2, "0")}
                                            </span>
                                            <span className="font-barlow text-lg font-semibold text-brand-offwhite transition-colors duration-200 group-hover:text-brand-orange">
                                                {link.label}
                                            </span>
                                        </div>
                                        <svg
                                            className="h-4 w-4 text-brand-subtle transition-all duration-200 group-hover:translate-x-1 group-hover:text-brand-orange"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                        </svg>
                                    </a>
                                ))}

                                <div className="mt-5">
                                    <WhatsAppButton
                                        size="lg"
                                        className="w-full gap-2"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 shrink-0" aria-hidden="true">
                                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.662-2.06-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                        </svg>
                                        {NAVBAR_COPY.cta}
                                    </WhatsAppButton>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>

            {/* Backdrop */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        key="backdrop"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.22 }}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="fixed inset-0 z-40 bg-brand-black/60 backdrop-blur-sm md:hidden"
                    />
                )}
            </AnimatePresence>
        </>
    );
}
