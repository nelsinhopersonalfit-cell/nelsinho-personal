import { HERO_COPY } from "@/lib/copy";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";

export function Hero() {
    return (
        <section className="relative flex h-[100dvh] w-full flex-col justify-end md:justify-center overflow-hidden bg-brand-black">
            {/* Background Images */}
            <div className="absolute inset-0 z-0 bg-brand-surface-3">
                {/* Mobile image */}
                <Image
                    src="/images/hero-bg-mobile.webp"
                    alt="Nelsinho Personal treinando aluno"
                    fill
                    priority
                    quality={100}
                    sizes="100vw"
                    className="object-cover object-top md:hidden"
                />
                {/* Desktop image */}
                <Image
                    src="/images/hero-bg.webp"
                    alt="Nelsinho Personal treinando aluno"
                    fill
                    priority
                    quality={100}
                    sizes="100vw"
                    className="object-cover object-center hidden md:block"
                    style={{ maskImage: 'linear-gradient(to right, rgba(0,0,0,0.6) 0%, rgba(0,0,0,1) 100%)', WebkitMaskImage: 'linear-gradient(to right, rgba(0,0,0,0.6) 0%, rgba(0,0,0,1) 100%)' }}
                />
                {/* Mobile overlay — escurece base para legibilidade do texto */}
                <div
                    className="absolute inset-0 md:hidden"
                    style={{ background: 'linear-gradient(to top, rgba(10,10,10,0.97) 0%, rgba(10,10,10,0.82) 38%, rgba(10,10,10,0.3) 62%, transparent 85%)' }}
                />
            </div>

            {/* Content Container */}
            <div className="relative z-10 mx-auto w-full max-w-container px-container-px md:px-container-px-md lg:px-container-px-lg pb-8 md:pb-0">
                <div className="flex max-w-3xl flex-col items-start gap-3 md:gap-7 md:mt-24 lg:mt-32">
                    {/* Badge de Autoridade — desktop only (mobile aparece abaixo dos CTAs) */}
                    <span className="hidden md:inline-flex animate-fade-in items-center rounded-badge bg-brand-surface-3/80 px-4 py-2 text-label-sm font-semibold uppercase tracking-widest text-brand-orange ring-1 ring-inset ring-brand-orange/30 backdrop-blur-md">
                        {HERO_COPY.badge}
                    </span>

                    {/* Headline Dinâmica */}
                    <h1 className="animate-fade-in-up font-barlow-condensed text-display-xl font-bold uppercase tracking-tight text-brand-offwhite md:text-display-2xl flex flex-col items-start leading-[0.9]">
                        <div>
                            {HERO_COPY.headline[0]}{" "}
                            <span className="text-brand-orange">{HERO_COPY.headline[1]}</span>
                        </div>
                        <div className="text-display-lg md:text-display-xl mt-0.5 md:mt-2">
                            {HERO_COPY.headline[2]}
                        </div>
                        <div className="text-display-lg text-brand-orange md:text-display-xl -mt-0.5 md:-mt-2">
                            {HERO_COPY.headline[3]}
                        </div>
                    </h1>

                    {/* Subheadline */}
                    <p className="animate-fade-in-up max-w-prose-wide font-inter text-body-md font-medium text-brand-muted md:text-body-lg md:text-xl" style={{ animationDelay: '150ms' }}>
                        {HERO_COPY.subheadline}
                    </p>

                    {/* CTAs */}
                    <div className="flex animate-fade-in-up flex-col gap-2 font-inter w-full md:mt-2 md:flex-row md:items-center md:gap-4 md:w-auto" style={{ animationDelay: '300ms' }}>
                        <WhatsAppButton
                            message="hero"
                            size="lg"
                            className="w-full md:w-auto shadow-orange-glow"
                        >
                            {HERO_COPY.ctaPrimary}
                        </WhatsAppButton>
                        <a
                            href="#transformacoes"
                            className="inline-flex w-full items-center justify-center rounded-btn border border-brand-border bg-brand-surface/50 px-5 py-3 text-body-md font-semibold text-brand-offwhite backdrop-blur-sm transition-all duration-350 hover:border-brand-border-light hover:bg-brand-surface md:w-auto md:px-8 md:py-4 md:text-body-lg"
                        >
                            {HERO_COPY.ctaSecondary}
                        </a>
                    </div>

                    {/* Badge mobile — abaixo dos CTAs, oculta no desktop */}
                    <span className="inline-flex md:hidden animate-fade-in items-center rounded-badge bg-brand-surface-3/80 px-3 py-1.5 text-label-sm font-semibold uppercase tracking-widest text-brand-orange ring-1 ring-inset ring-brand-orange/30 backdrop-blur-md" style={{ animationDelay: '400ms' }}>
                        {HERO_COPY.badge}
                    </span>

                    {/* Trust Badges */}
                    <div className="mt-2 flex animate-fade-in flex-wrap items-center gap-x-4 gap-y-2 border-t border-brand-border/50 pt-3 md:mt-6 md:gap-x-8 md:gap-y-4 md:pt-8" style={{ animationDelay: '500ms' }}>
                        {HERO_COPY.trustBadges.map((badge, index) => (
                            <div key={index} className="flex items-center gap-1.5 md:gap-2">
                                <svg
                                    className="h-4 w-4 md:h-5 md:w-5 text-brand-orange flex-shrink-0"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2.5}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M5 13l4 4L19 7"
                                    />
                                </svg>
                                <span className="font-barlow text-body-sm font-semibold text-brand-offwhite">
                                    {badge}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Scroll Indicator — desktop only */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce flex-col items-center gap-2 hidden md:flex opacity-60">
                <svg
                    className="h-6 w-6 text-brand-muted"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
            </div>
        </section>
    );
}
