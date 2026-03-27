import { PAE_COPY } from "@/lib/copy";
import { SectionLabel } from "@/components/ui/section-label";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import CountUp from "@/components/ui/count-up";

function PillarCard({ icon, title, description }: { icon: string; title: string; description: string }) {
    return (
        <div className="flex flex-col items-center text-center p-5 md:p-8 rounded-card bg-brand-surface-2/50 border border-brand-border/50 transition-all duration-350 hover:border-brand-orange/30 hover:shadow-card-hover group">
            <div className="mb-3 md:mb-4 flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-full bg-brand-orange/10 border border-brand-orange/20 transition-colors duration-350 group-hover:bg-brand-orange/20">
                <img
                    src={`/icons/icon-${icon}.svg`}
                    alt=""
                    className="h-6 w-6 md:h-7 md:w-7"
                    aria-hidden="true"
                />
            </div>
            <h3 className="font-barlow-condensed text-lg md:text-xl font-bold uppercase text-brand-offwhite mb-2">
                {title}
            </h3>
            <p className="font-inter text-body-sm md:text-body-md text-brand-muted leading-relaxed">
                {description}
            </p>
        </div>
    );
}

function ResultCard({ number, label, note }: { number: string; label: string; note: string }) {
    return (
        <div className="flex flex-col items-center justify-center text-center p-5 md:p-8 rounded-card bg-brand-surface border border-brand-orange/20 shadow-orange-glow-sm">
            <span className="font-barlow-condensed text-display-xl font-bold text-brand-orange mb-1 md:mb-2 flex items-center">
                {number.startsWith("-") && <span>-</span>}
                <CountUp to={parseInt(number.replace(/\D/g, ""))} className="inline-block" />
                {number.includes("kg") && <span>kg</span>}
            </span>
            <span className="font-barlow text-body-md md:text-body-lg font-semibold text-brand-offwhite mb-1">
                {label}
            </span>
            <span className="font-inter text-label-sm text-brand-muted">{note}</span>
        </div>
    );
}

export function PAE() {
    return (
        <section id="pae" className="w-full bg-brand-surface py-6 md:py-16 relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 bg-pattern-grid-warm pointer-events-none" aria-hidden="true" />

            <div className="relative z-10 mx-auto w-full max-w-container px-container-px md:px-container-px-md lg:px-container-px-lg">
                {/* Section Header */}
                <div className="mb-6 md:mb-12 flex flex-col items-center text-center">
                    <SectionLabel>{PAE_COPY.sectionLabel}</SectionLabel>

                    <h2 className="mt-1 mb-3 md:mt-2 md:mb-6 font-barlow-condensed text-balance text-display-lg font-bold uppercase leading-none text-brand-offwhite">
                        {PAE_COPY.headline[0]}{" "}
                        <span className="text-brand-orange">{PAE_COPY.headline[1]}</span>
                    </h2>

                    <p className="max-w-prose-wide font-inter text-body-md md:text-body-lg text-brand-muted">
                        {PAE_COPY.subheadline}
                    </p>
                </div>

                {/* Origin Story */}
                <div className="mb-8 md:mb-14 max-w-3xl mx-auto">
                    <h3 className="font-barlow text-xs font-semibold uppercase tracking-widest text-brand-orange mb-4 md:mb-6 text-center">
                        {PAE_COPY.origin.title}
                    </h3>

                    <div className="space-y-4 md:space-y-5 relative pl-6 md:pl-8 border-l-2 border-brand-orange/30">
                        {PAE_COPY.origin.paragraphs.map((paragraph, idx) => (
                            <p
                                key={idx}
                                className="font-inter text-body-sm md:text-body-md text-brand-muted leading-relaxed"
                            >
                                {paragraph}
                            </p>
                        ))}
                    </div>
                </div>

                {/* Results Highlight */}
                <div className="mb-8 md:mb-14 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 max-w-2xl mx-auto">
                    {PAE_COPY.results.map((result, idx) => (
                        <ResultCard key={idx} {...result} />
                    ))}
                </div>

                {/* Pillars */}
                <div className="mb-8 md:mb-14">
                    <h3 className="font-barlow text-xs font-semibold uppercase tracking-widest text-brand-orange mb-4 md:mb-8 text-center">
                        Como funciona
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-6">
                        {PAE_COPY.pillars.map((pillar, idx) => (
                            <PillarCard key={idx} {...pillar} />
                        ))}
                    </div>
                </div>

                {/* Closing + CTA */}
                <div className="flex flex-col items-center text-center">
                    <p className="max-w-2xl font-inter text-body-md md:text-body-lg text-brand-muted leading-relaxed mb-6 md:mb-8">
                        {PAE_COPY.closing}
                    </p>

                    <WhatsAppButton size="lg" message="pae">
                        {PAE_COPY.cta}
                    </WhatsAppButton>
                </div>
            </div>
        </section>
    );
}
