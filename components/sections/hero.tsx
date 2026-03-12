import { HERO_COPY } from "@/lib/copy";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";

export function Hero() {
    return (
        <section className="relative flex min-h-[100dvh] w-full flex-col justify-center overflow-hidden bg-brand-black pt-24 md:pt-0">
            {/* Background Image & Gradient Overlay */}
            <div className="absolute inset-0 z-0 bg-brand-surface-3">
                <Image
                    src="/images/hero-bg-compressed.webp"
                    alt="Nelsinho Personal treinando aluno"
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover object-top md:object-center"
                    style={{ maskImage: 'linear-gradient(to right, rgba(0,0,0,0.6) 0%, rgba(0,0,0,1) 100%)', WebkitMaskImage: 'linear-gradient(to right, rgba(0,0,0,0.6) 0%, rgba(0,0,0,1) 100%)' }}
                />
                <div className="absolute inset-0 bg-gradient-hero" />
            </div>

            {/* Content Container */}
            <div className="relative z-10 mx-auto w-full max-w-container px-container-px md:px-container-px-md lg:px-container-px-lg">
                <div className="flex max-w-3xl flex-col items-start gap-5 md:gap-7 mt-12 sm:mt-16 md:mt-24 lg:mt-32">
                    {/* Badge de Autoridade */}
                    <span className="inline-flex animate-fade-in items-center rounded-badge bg-brand-surface-3/80 px-4 py-2 text-label-sm font-semibold uppercase tracking-widest text-brand-orange ring-1 ring-inset ring-brand-orange/30 backdrop-blur-md">
                        {HERO_COPY.badge}
                    </span>

                    {/* Headline Dinâmica */}
                    <h1 className="animate-fade-in-up font-barlow-condensed text-balance text-display-xl font-bold uppercase tracking-tight text-brand-offwhite md:text-display-2xl flex flex-col items-start leading-[0.9]">
                        <div>
                            {HERO_COPY.headline[0]}{" "}
                            <span className="text-brand-orange">{HERO_COPY.headline[1]}</span>
                        </div>
                        <div className="text-display-lg md:text-display-xl mt-1 md:mt-2">
                            {HERO_COPY.headline[2]}
                        </div>
                        <div className="text-display-lg text-brand-orange md:text-display-xl -mt-1 md:-mt-2">
                            {HERO_COPY.headline[3]}
                        </div>
                    </h1>

                    {/* Subheadline com maxWidth para controle de leitura */}
                    <p className="animate-fade-in-up max-w-prose-wide font-inter text-body-lg font-medium text-brand-muted md:text-xl" style={{ animationDelay: '150ms' }}>
                        {HERO_COPY.subheadline}
                    </p>

                    {/* CTAs */}
                    <div className="mt-2 flex animate-fade-in-up flex-col gap-3 font-inter w-full sm:mt-6 sm:flex-row sm:items-center sm:gap-4 sm:w-auto" style={{ animationDelay: '300ms' }}>
                        <WhatsAppButton
                            message="hero"
                            size="lg"
                            className="w-full sm:w-auto shadow-orange-glow"
                        >
                            {HERO_COPY.ctaPrimary}
                        </WhatsAppButton>
                        <a
                            href="#transformacoes"
                            className="inline-flex w-full items-center justify-center rounded-btn border border-brand-border bg-brand-surface/50 px-6 py-3.5 text-body-lg font-semibold text-brand-offwhite backdrop-blur-sm transition-all duration-350 hover:border-brand-border-light hover:bg-brand-surface sm:w-auto md:px-8 md:py-4"
                        >
                            {HERO_COPY.ctaSecondary}
                        </a>
                    </div>

                    {/* Trust Badges - Social Proof Inicial */}
                    <div className="mt-6 flex animate-fade-in flex-wrap items-center gap-x-6 gap-y-3 border-t border-brand-border/50 pt-6 sm:mt-10 sm:gap-x-8 sm:gap-y-4 sm:pt-8" style={{ animationDelay: '500ms' }}>
                        {HERO_COPY.trustBadges.map((badge, index) => (
                            <div key={index} className="flex items-center gap-2">
                                <svg
                                    className="h-5 w-5 text-brand-orange"
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

            {/* Scroll Indicator (Opcional visual) */}
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
