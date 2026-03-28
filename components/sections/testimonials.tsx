import { TESTIMONIALS_COPY, TRANSFORMATIONS_COPY } from "@/lib/copy";
import { TestimonialCard } from "@/components/ui/testimonial-card";
import { SectionLabel } from "@/components/ui/section-label";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";

export function Testimonials() {
    return (
        <section id="depoimentos" className="w-full bg-brand-black py-6 md:py-16 relative overflow-hidden">
            {/* Geometric grid pattern */}
            <div className="absolute inset-0 bg-pattern-grid pointer-events-none" aria-hidden="true" />
            {/* Ambient glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[600px] bg-brand-orange/5 blur-[120px] rounded-full pointer-events-none" aria-hidden="true" />

            <div className="relative z-10 mx-auto w-full max-w-container px-container-px md:px-container-px-md lg:px-container-px-lg">

                {/* Header */}
                <div className="mb-5 md:mb-8 flex flex-col items-center text-center">
                    <SectionLabel>{TESTIMONIALS_COPY.sectionLabel}</SectionLabel>
                    <h2 className="mt-1 mb-3 md:mt-2 md:mb-6 font-barlow-condensed text-balance text-display-lg font-bold uppercase leading-none text-brand-offwhite">
                        {TESTIMONIALS_COPY.headline[0]}{" "}
                        <span className="text-brand-orange">{TESTIMONIALS_COPY.headline[1]}</span>
                    </h2>
                </div>

                {/* Grid de Testemunhos */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6 lg:gap-8 mb-6 md:mb-10">
                    {TESTIMONIALS_COPY.testimonials.map((testim, index) => (
                        <TestimonialCard
                            key={index}
                            cardId={`testimonial-${index}`}
                            name={testim.name}
                            result={testim.result}
                            text={testim.text}
                            stars={testim.stars}
                            avatarAlt={testim.avatarAlt}
                            avatarImage={testim.avatarImage}
                        />
                    ))}
                </div>

                {/* CTA */}
                <div className="w-full flex justify-center mt-5 md:mt-8">
                    <WhatsAppButton size="lg" message="default">
                        {TRANSFORMATIONS_COPY.cta}
                    </WhatsAppButton>
                </div>

            </div>
        </section>
    );
}
