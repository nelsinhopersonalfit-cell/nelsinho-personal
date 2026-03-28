import { PAE_COPY } from "@/lib/copy";
import { SectionLabel } from "@/components/ui/section-label";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import CountUp from "@/components/ui/count-up";

function ResultBadge({ number, label }: { number: string; label: string }) {
    return (
        <div className="flex flex-col items-center justify-center text-center px-4 py-3 md:px-6 md:py-5 rounded-card bg-brand-surface border border-brand-orange/20 shadow-orange-glow-sm">
            <span className="font-barlow-condensed text-display-md md:text-display-lg font-bold text-brand-orange flex items-center">
                {number.startsWith("-") && <span>-</span>}
                <CountUp to={parseInt(number.replace(/\D/g, ""))} className="inline-block" />
                {number.includes("kg") && <span>kg</span>}
            </span>
            <span className="font-inter text-label-sm md:text-body-sm text-brand-muted">
                {label}
            </span>
        </div>
    );
}

export function PAE() {
    return (
        <section id="pae" className="w-full bg-brand-surface py-6 md:py-14 relative overflow-hidden">
            <div className="absolute inset-0 bg-pattern-grid-warm pointer-events-none" aria-hidden="true" />

            <div className="relative z-10 mx-auto w-full max-w-container px-container-px md:px-container-px-md lg:px-container-px-lg">
                {/* Header */}
                <div className="mb-4 md:mb-8 flex flex-col items-center text-center">
                    <SectionLabel>{PAE_COPY.sectionLabel}</SectionLabel>

                    <h2 className="mt-1 mb-2 md:mt-2 md:mb-4 font-barlow-condensed text-balance text-display-lg font-bold uppercase leading-none text-brand-offwhite">
                        {PAE_COPY.headline[0]}{" "}
                        <span className="text-brand-orange">{PAE_COPY.headline[1]}</span>
                    </h2>

                    <p className="max-w-prose-wide font-inter text-body-sm md:text-body-lg text-brand-muted">
                        {PAE_COPY.subheadline}
                    </p>
                </div>

                {/* Results — sempre visíveis, compactos */}
                <div className="mb-4 md:mb-8 grid grid-cols-2 gap-3 md:gap-5 max-w-md md:max-w-lg mx-auto">
                    {PAE_COPY.results.map((result, idx) => (
                        <ResultBadge key={idx} {...result} />
                    ))}
                </div>

                {/* Origin — versão mobile (curta) / desktop (contexto) */}
                <p className="block md:hidden mb-4 max-w-xl mx-auto text-center font-inter text-body-sm text-brand-muted leading-relaxed">
                    {PAE_COPY.originMobile}
                </p>
                <p className="hidden md:block mb-8 max-w-2xl mx-auto text-center font-inter text-body-md text-brand-muted leading-relaxed">
                    {PAE_COPY.originDesktop}
                </p>

                {/* Pillars — inline no mobile, cards no desktop */}
                <div className="mb-5 md:mb-10 grid grid-cols-3 gap-2 md:gap-5 max-w-3xl mx-auto">
                    {PAE_COPY.pillars.map((pillar, idx) => (
                        <div key={idx} className="flex flex-col items-center text-center p-3 md:p-6 rounded-card bg-brand-surface-2/50 border border-brand-border/50">
                            <div className="mb-2 md:mb-3 flex h-9 w-9 md:h-12 md:w-12 items-center justify-center rounded-full bg-brand-orange/10 border border-brand-orange/20">
                                <img
                                    src={`/icons/icon-${pillar.icon}.svg`}
                                    alt=""
                                    className="h-4 w-4 md:h-6 md:w-6"
                                    aria-hidden="true"
                                />
                            </div>
                            <h3 className="font-barlow-condensed text-sm md:text-lg font-bold uppercase text-brand-offwhite mb-1">
                                {pillar.title}
                            </h3>
                            <p className="hidden md:block font-inter text-body-sm text-brand-muted leading-relaxed">
                                {pillar.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="flex justify-center">
                    <WhatsAppButton size="lg" message="pae">
                        {PAE_COPY.cta}
                    </WhatsAppButton>
                </div>
            </div>
        </section>
    );
}
