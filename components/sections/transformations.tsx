import { TRANSFORMATIONS_COPY, TESTIMONIALS_COPY } from "@/lib/copy";
import { TransformationCard } from "@/components/ui/transformation-card";
import { TestimonialCard } from "@/components/ui/testimonial-card";
import { SectionLabel, SectionDivider } from "@/components/ui/section-label";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";

export function Transformations() {
    return (
        <section id="transformacoes" className="w-full bg-brand-black py-section-y md:py-section-y-lg relative">
            <div className="mx-auto w-full max-w-container px-container-px md:px-container-px-md lg:px-container-px-lg">

                {/* 1. Header Transformações */}
                <div className="mb-12 flex flex-col items-center text-center">
                    <SectionLabel>{TRANSFORMATIONS_COPY.sectionLabel}</SectionLabel>
                    <h2 className="mt-2 mb-6 font-barlow-condensed text-display-lg font-bold uppercase leading-none text-brand-offwhite">
                        {TRANSFORMATIONS_COPY.headline[0]} <br className="hidden md:block" />
                        <span className="text-brand-orange">{TRANSFORMATIONS_COPY.headline[1]}</span>
                    </h2>
                    <p className="max-w-prose-wide font-inter text-body-lg text-brand-muted">
                        {TRANSFORMATIONS_COPY.subheadline}
                    </p>
                </div>

                {/* 2. Grid de Transformações (Antes/Depois) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20 lg:mb-24">
                    {TRANSFORMATIONS_COPY.transformations.map((transf, index) => (
                        <TransformationCard
                            key={index}
                            idx={index}
                            name={transf.name}
                            result={transf.result}
                            description={transf.description}
                            beforeAlt={transf.beforeAlt}
                            afterAlt={transf.afterAlt}
                        />
                    ))}
                </div>

                <SectionDivider className="mb-20 lg:mb-24 opacity-50" />

                {/* 3. Header Testemunhos */}
                <div className="mb-12 flex flex-col items-center text-center">
                    <SectionLabel>{TESTIMONIALS_COPY.sectionLabel}</SectionLabel>
                    <h2 className="mt-2 mb-6 font-barlow-condensed text-display-lg font-bold uppercase leading-none text-brand-offwhite">
                        {TESTIMONIALS_COPY.headline[0]} <br className="hidden md:block" />
                        <span className="text-brand-orange">{TESTIMONIALS_COPY.headline[1]}</span>
                    </h2>
                </div>

                {/* 4. Grid de Testemunhos */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-16">
                    {TESTIMONIALS_COPY.testimonials.map((testim, index) => (
                        <TestimonialCard
                            key={index}
                            name={testim.name}
                            result={testim.result}
                            text={testim.text}
                            stars={testim.stars}
                            avatarAlt={testim.avatarAlt}
                        />
                    ))}
                </div>

                {/* CTA Inferior */}
                <div className="w-full flex justify-center mt-12">
                    <WhatsAppButton size="lg" message="default">
                        {TRANSFORMATIONS_COPY.cta}
                    </WhatsAppButton>
                </div>

            </div>
        </section>
    );
}
