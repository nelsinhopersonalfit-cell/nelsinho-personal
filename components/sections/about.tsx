import { ABOUT_COPY } from "@/lib/copy";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { SectionLabel } from "@/components/ui/section-label";

export function About() {
    return (
        <section id="sobre" className="w-full bg-brand-black py-section-y md:py-section-y-lg relative overflow-hidden">
            <div className="mx-auto w-full max-w-container px-container-px md:px-container-px-md lg:px-container-px-lg relative z-10">
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center lg:gap-24">
                    {/* Coluna 1: Imagem / Visual */}
                    <div className="order-2 lg:order-1 relative flex aspect-square w-full max-w-md mx-auto lg:max-w-none items-center justify-center rounded-2xl bg-brand-surface-2 p-1 border border-brand-border">
                        <div className="relative w-full h-full overflow-hidden rounded-xl">
                            <Image
                                src="/images/about-bg.png"
                                alt={ABOUT_COPY.imageAlt}
                                fill
                                className="object-cover transition-transform duration-700 hover:scale-105"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                            {/* Overlay sutil para manter o tom dark */}
                            <div className="absolute inset-0 bg-brand-black/20 mix-blend-multiply" />
                            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-dark-up" />
                        </div>

                        {/* Badge Flutuante de Estatística Principal */}
                        <div className="absolute -bottom-6 -right-6 md:auto md:-right-8 md:bottom-8 z-20 flex flex-col items-center justify-center rounded-2xl border border-brand-border bg-brand-surface/90 p-6 shadow-card backdrop-blur-md">
                            <span className="font-barlow-condensed text-display-md font-bold text-brand-orange leading-none">
                                {ABOUT_COPY.stats[0].number}
                            </span>
                            <span className="mt-1 font-inter text-label-sm font-semibold uppercase tracking-widest text-brand-offwhite text-center max-w-[80px]">
                                {ABOUT_COPY.stats[0].label}
                            </span>
                        </div>
                    </div>

                    {/* Coluna 2: Conteúdo Textual */}
                    <div className="order-1 flex flex-col items-start lg:order-2">
                        <SectionLabel>{ABOUT_COPY.sectionLabel}</SectionLabel>

                        <h2 className="mt-2 mb-8 font-barlow-condensed text-display-lg font-bold uppercase leading-none text-brand-offwhite">
                            {ABOUT_COPY.headline[0]} <br className="hidden md:block" />
                            <span className="text-brand-orange">{ABOUT_COPY.headline[1]}</span>
                        </h2>

                        <div className="space-y-6 font-inter text-body-lg text-brand-muted">
                            {ABOUT_COPY.paragraphs.map((paragraph, idx) => (
                                <p key={idx}>{paragraph}</p>
                            ))}
                        </div>

                        {/* Lista de Credenciais */}
                        <div className="mt-12 w-full space-y-4 border-t border-brand-border/50 pt-8">
                            <h3 className="font-barlow text-xl font-bold text-brand-offwhite mb-6">
                                Minha Trajetória
                            </h3>
                            {ABOUT_COPY.credentials.map((credencial, idx) => (
                                <div key={idx} className="flex items-start gap-4">
                                    <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-orange/10">
                                        <svg
                                            className="h-4 w-4 text-brand-orange"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={3}
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <span className="font-inter text-body-md font-medium text-brand-offwhite">
                                        {credencial}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom Stats Row */}
                <div className="mt-20 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 border-t border-brand-border pt-12">
                    {ABOUT_COPY.stats.map((stat, idx) => (
                        <div key={idx} className="flex flex-col items-center justify-center text-center p-6 rounded-xl bg-brand-surface-2/30 border border-brand-border/50">
                            <span className="font-barlow-condensed text-display-md font-bold text-brand-orange mb-2">
                                {stat.number}
                            </span>
                            <span className="font-inter text-label-sm font-semibold uppercase tracking-widest text-brand-muted">
                                {stat.label}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
