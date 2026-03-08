import { HERO_COPY } from "@/lib/copy";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";

export function Hero() {
    return (
        <section className="relative flex min-h-[100dvh] w-full flex-col justify-center overflow-hidden bg-brand-black pt-24 md:pt-0">
            {/* Background Image & Gradient Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/hero-bg.png"
                    alt="Nelsinho Personal treinando aluno"
                    fill
                    priority
                    className="object-cover object-top opacity-60 md:object-center"
                />
                <div className="absolute inset-0 bg-gradient-hero" />
            </div>

            {/* Content Container */}
            <div className="relative z-10 mx-auto w-full max-w-container px-container-px md:px-container-px-md lg:px-container-px-lg">
                <div className="flex max-w-3xl flex-col items-start gap-6">
                    {/* Badge de Autoridade */}
                    <span className="inline-flex animate-fade-in items-center rounded-badge bg-brand-surface-3/80 px-4 py-2 text-label-sm font-semibold uppercase tracking-widest text-brand-orange ring-1 ring-inset ring-brand-orange/30 backdrop-blur-md">
                        {HERO_COPY.badge}
                    </span>

                    {/* Headline Dinâmica */}
                    <h1 className="animate-fade-in-up font-barlow-condensed text-display-xl font-bold uppercase leading-none tracking-tight text-brand-offwhite md:text-display-2xl">
                        {HERO_COPY.headline[0]} <br className="hidden md:block" />
                        <span className="text-brand-orange">{HERO_COPY.headline[1]}</span> <br />
                        <span className="text-display-lg md:text-display-xl">
                            {HERO_COPY.headline[2]}{" "}
                        </span>
                        <span className="text-display-lg text-brand-orange md:text-display-xl">
                            {HERO_COPY.headline[3]}
                        </span>
                    </h1>

                    {/* Subheadline com maxWidth para controle de leitura */}
                    <p className="animate-fade-in-up max-w-prose-wide font-inter text-body-lg font-medium text-brand-muted md:text-xl" style={{ animationDelay: '150ms' }}>
                        {HERO_COPY.subheadline}
                    </p>

                    {/* CTAs */}
                    <div className="mt-4 flex animate-fade-in-up flex-col gap-4 font-inter w-full sm:flex-row sm:items-center sm:w-auto" style={{ animationDelay: '300ms' }}>
                        <WhatsAppButton
                            message="hero"
                            size="lg"
                            className="w-full sm:w-auto shadow-orange-glow"
                        >
                            {HERO_COPY.ctaPrimary}
                        </WhatsAppButton>
                        <a
                            href="#transformacoes"
                            className="inline-flex w-full items-center justify-center rounded-btn border border-brand-border bg-brand-surface/50 px-8 py-4 text-body-lg font-semibold text-brand-offwhite backdrop-blur-sm transition-all duration-350 hover:border-brand-border-light hover:bg-brand-surface sm:w-auto"
                        >
                            {HERO_COPY.ctaSecondary}
                        </a>
                    </div>

                    {/* Trust Badges - Social Proof Inicial */}
                    <div className="mt-10 flex animate-fade-in flex-wrap items-center gap-x-8 gap-y-4 border-t border-brand-border/50 pt-8" style={{ animationDelay: '500ms' }}>
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
