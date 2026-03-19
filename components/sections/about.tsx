import { ABOUT_COPY } from "@/lib/copy";
import Image from "next/image";
import { SectionLabel } from "@/components/ui/section-label";
import CountUp from "@/components/ui/count-up";
import { ExpandableAboutText } from "@/components/ui/expandable-about-text";

function CredentialItem({ text, variant = "primary" }: { text: string; variant?: "primary" | "secondary" }) {
    return (
        <li className="flex items-start gap-3 md:gap-4">
            <div className="mt-1 flex h-5 w-5 md:h-6 md:w-6 shrink-0 items-center justify-center rounded-full bg-brand-orange/10">
                <svg className="h-3 w-3 md:h-4 md:w-4 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
            </div>
            <span className={`font-inter text-body-sm md:text-body-md font-medium ${variant === "primary" ? "text-brand-offwhite" : "text-brand-muted"}`}>
                {text}
            </span>
        </li>
    );
}

export function About() {
    return (
        <section id="sobre" className="w-full bg-brand-black py-6 md:py-12 relative overflow-hidden">
            {/* Geometric grid pattern */}
            <div className="absolute inset-0 bg-pattern-grid pointer-events-none" aria-hidden="true" />
            <div className="mx-auto w-full max-w-container px-container-px md:px-container-px-md lg:px-container-px-lg relative z-10">
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:items-center lg:gap-12">

                    {/* Coluna 1: Imagem / Visual */}
                    <div className="order-2 lg:order-1 relative flex aspect-square md:aspect-[4/5] w-full max-w-md mx-auto lg:max-w-none items-center justify-center rounded-2xl bg-brand-surface-2 p-1 border border-brand-border">
                        <div className="relative w-full h-full overflow-hidden rounded-xl">
                            <Image
                                src="/images/about-bg-compressed.webp"
                                alt={ABOUT_COPY.imageAlt}
                                fill
                                className="object-cover transition-transform duration-700 hover:scale-105"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                            <div className="absolute inset-0 bg-brand-black/20 mix-blend-multiply" />
                            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-dark-up" />
                        </div>
                    </div>

                    {/* Coluna 2: Conteúdo Textual */}
                    <div className="order-1 flex flex-col items-center lg:items-start lg:order-2">
                        <SectionLabel>{ABOUT_COPY.sectionLabel}</SectionLabel>

                        <h2 className="mt-1 mb-3 md:mt-2 md:mb-4 font-barlow-condensed text-balance text-display-lg font-bold uppercase leading-none text-brand-offwhite text-center lg:text-left">
                            {ABOUT_COPY.headline[0]}{" "}
                            <span className="text-brand-orange">{ABOUT_COPY.headline[1]}</span>
                        </h2>

                        <ExpandableAboutText />

                        {/* Credenciais */}
                        <div className="mt-3 md:mt-4 w-full space-y-4 md:space-y-5 border-t border-brand-border/50 pt-3 md:pt-4">

                            {/* Grupo 1: Formação Acadêmica */}
                            <div>
                                <h3 className="font-barlow text-xs font-semibold uppercase tracking-widest text-brand-orange mb-2 md:mb-4">
                                    Formação
                                </h3>
                                <ul className="space-y-2 md:space-y-3">
                                    {ABOUT_COPY.credentials.academic.map((credencial, idx) => (
                                        <CredentialItem key={idx} text={credencial} />
                                    ))}
                                </ul>
                            </div>

                            {/* Grupo 2: Cursos e Especializações */}
                            <div>
                                <h3 className="font-barlow text-xs font-semibold uppercase tracking-widest text-brand-orange mb-2 md:mb-4">
                                    Especializações
                                </h3>
                                <ul className="space-y-2 md:space-y-3">
                                    {ABOUT_COPY.credentials.courses.map((curso, idx) => (
                                        <CredentialItem key={idx} text={curso} variant="secondary" />
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Stats Row */}
                <div className="mt-4 md:mt-6 grid grid-cols-2 gap-3 md:gap-4 md:grid-cols-4 border-t border-brand-border pt-3 md:pt-4">
                    {ABOUT_COPY.stats.map((stat, idx) => (
                        <div key={idx} className="flex flex-col items-center justify-center text-center p-3 md:p-4 rounded-lg md:rounded-xl bg-brand-surface-2/30 border border-brand-border/50">
                            <span className="font-barlow-condensed text-display-md font-bold text-brand-orange mb-1 md:mb-2 flex items-center">
                                {stat.number.startsWith('+') && <span>+</span>}
                                {stat.number.startsWith('-') && <span>-</span>}
                                <CountUp to={parseInt(stat.number.replace(/\D/g, ''))} className="inline-block" />
                                {stat.number.includes('kg') && <span>kg</span>}
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
