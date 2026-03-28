import { PAE_COPY } from "@/lib/copy";
import { SectionLabel } from "@/components/ui/section-label";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import CountUp from "@/components/ui/count-up";

function ResultBadge({ number, label }: { number: string; label: string }) {
    return (
        <div className="flex flex-col items-center justify-center text-center px-4 py-3 md:px-8 md:py-6 rounded-card bg-brand-surface border border-brand-orange/20 shadow-orange-glow-sm">
            <span className="font-barlow-condensed text-display-md md:text-display-xl font-bold text-brand-orange flex items-center">
                {number.startsWith("-") && <span>-</span>}
                <CountUp to={parseInt(number.replace(/\D/g, ""))} className="inline-block" />
                {number.includes("kg") && <span>kg</span>}
            </span>
            <span className="font-inter text-label-sm md:text-body-md text-brand-muted">
                {label}
            </span>
        </div>
    );
}

export function PAE() {
    return (
        <section id="pae" className="relative w-full overflow-hidden bg-brand-surface py-6 md:py-16">
            {/* Background — matching services/plans pattern */}
            <div className="absolute inset-0 z-0 bg-brand-surface">
                <div className="absolute inset-0 bg-pattern-grid-warm pointer-events-none" aria-hidden="true" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[600px] bg-brand-orange/5 blur-[120px] rounded-full pointer-events-none" aria-hidden="true" />
            </div>

            <div className="relative z-10 mx-auto w-full max-w-container px-container-px md:px-container-px-md lg:px-container-px-lg">
                {/* Header — matching site pattern */}
                <div className="mb-4 md:mb-10 flex flex-col items-center text-center">
                    <SectionLabel>{PAE_COPY.sectionLabel}</SectionLabel>

                    <h2 className="mt-1 mb-2 md:mt-2 md:mb-6 font-barlow-condensed text-balance text-display-lg font-bold uppercase leading-none text-brand-offwhite">
                        {PAE_COPY.headline[0]}{" "}
                        <span className="text-brand-orange">{PAE_COPY.headline[1]}</span>
                    </h2>

                    <p className="max-w-prose-wide font-inter text-body-sm md:text-body-lg text-brand-muted">
                        {PAE_COPY.subheadline}
                    </p>
                </div>

                {/* Results + Origin — stacked mobile, side-by-side desktop */}
                <div className="mb-4 md:mb-10 flex flex-col md:grid md:grid-cols-[auto_1fr] md:items-center md:gap-10 lg:gap-14">
                    {/* Results */}
                    <div className="grid grid-cols-2 gap-3 md:gap-5 max-w-md mx-auto md:max-w-none md:mx-0">
                        {PAE_COPY.results.map((result, idx) => (
                            <ResultBadge key={idx} {...result} />
                        ))}
                    </div>

                    {/* Origin — mobile (curta) / desktop (contexto) */}
                    <p className="block md:hidden mt-4 max-w-xl mx-auto text-center font-inter text-body-sm text-brand-muted leading-relaxed">
                        {PAE_COPY.originMobile}
                    </p>
                    <p className="hidden md:block font-inter text-body-md lg:text-body-lg text-brand-muted leading-relaxed">
                        {PAE_COPY.originDesktop}
                    </p>
                </div>

                {/* Pillars — 3 compact cols mobile, full cards desktop */}
                <div className="mb-5 md:mb-10 grid grid-cols-3 gap-2 md:gap-6">
                    {PAE_COPY.pillars.map((pillar, idx) => (
                        <div key={idx} className="flex flex-col items-center text-center p-3 md:p-8 rounded-card bg-brand-surface-2/50 border border-brand-border/50 md:transition-all md:duration-350 md:hover:border-brand-orange/30 md:hover:shadow-card-hover">
                            <div className="mb-2 md:mb-4 flex h-9 w-9 md:h-14 md:w-14 items-center justify-center rounded-full bg-brand-orange/10 border border-brand-orange/20">
                                <img
                                    src={`/icons/icon-${pillar.icon}.svg`}
                                    alt=""
                                    className="h-4 w-4 md:h-7 md:w-7"
                                    aria-hidden="true"
                                />
                            </div>
                            <h3 className="font-barlow-condensed text-sm md:text-xl font-bold uppercase text-brand-offwhite mb-1 md:mb-2">
                                {pillar.title}
                            </h3>
                            <p className="hidden md:block font-inter text-body-sm text-brand-muted leading-relaxed">
                                {pillar.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Identification + Scarcity/CTA — stacked mobile, side-by-side desktop */}
                <div className="flex flex-col md:grid md:grid-cols-[1fr_auto] md:items-center md:gap-10 lg:gap-14">
                    {/* Identification Card */}
                    <div className="mb-4 md:mb-0 max-w-md mx-auto md:max-w-none md:mx-0 rounded-card bg-brand-black/60 border border-brand-border/50 p-4 md:p-8">
                        <h3 className="font-barlow-condensed text-sm md:text-lg font-bold uppercase text-brand-orange mb-2 md:mb-4 text-center md:text-left">
                            {PAE_COPY.identification.title}
                        </h3>
                        <ul className="space-y-2 md:space-y-3">
                            {PAE_COPY.identification.items.map((item, idx) => (
                                <li key={idx} className="flex items-start gap-2.5 md:gap-3">
                                    <svg className="mt-0.5 h-4 w-4 md:h-5 md:w-5 shrink-0 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="font-inter text-body-sm md:text-body-md text-brand-muted leading-snug">
                                        {item}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Scarcity + CTA */}
                    <div className="flex flex-col items-center text-center gap-3 md:gap-5">
                        <div className="inline-flex items-center gap-2 rounded-badge bg-brand-orange/10 px-4 py-2 border border-brand-orange/20">
                            <span className="relative flex h-2 w-2">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-orange opacity-75" />
                                <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-orange" />
                            </span>
                            <span className="font-inter text-label-sm md:text-body-sm font-medium text-brand-orange">
                                {PAE_COPY.scarcity}
                            </span>
                        </div>

                        <WhatsAppButton size="lg" message="pae">
                            {PAE_COPY.cta}
                        </WhatsAppButton>
                    </div>
                </div>
            </div>
        </section>
    );
}
