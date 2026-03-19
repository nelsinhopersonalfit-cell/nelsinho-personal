import { TRANSFORMATIONS_COPY } from "@/lib/copy";
import { TransformationCard } from "@/components/ui/transformation-card";
import { SectionLabel } from "@/components/ui/section-label";

export function Transformations() {
    return (
        <section id="transformacoes" className="w-full bg-brand-black py-6 md:py-16 relative overflow-hidden">
            {/* Geometric grid pattern */}
            <div className="absolute inset-0 bg-pattern-grid pointer-events-none" aria-hidden="true" />

            <div className="relative z-10 mx-auto w-full max-w-container px-container-px md:px-container-px-md lg:px-container-px-lg">

                {/* Header */}
                <div className="mb-5 md:mb-8 flex flex-col items-center text-center">
                    <SectionLabel>{TRANSFORMATIONS_COPY.sectionLabel}</SectionLabel>
                    <h2 className="mt-1 mb-3 md:mt-2 md:mb-6 font-barlow-condensed text-balance text-display-lg font-bold uppercase leading-none text-brand-offwhite">
                        {TRANSFORMATIONS_COPY.headline[0]}{" "}
                        <span className="text-brand-orange">{TRANSFORMATIONS_COPY.headline[1]}</span>
                    </h2>
                    <p className="max-w-prose-wide font-inter text-body-md md:text-body-lg text-brand-muted">
                        {TRANSFORMATIONS_COPY.subheadline}
                    </p>
                </div>

                {/* Grid de Transformações (Antes/Depois) */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
                    {TRANSFORMATIONS_COPY.transformations.map((transf, index) => (
                        <TransformationCard
                            key={index}
                            idx={index}
                            cardId={`transformation-${index}`}
                            name={transf.name}
                            result={transf.result}
                            description={transf.description}
                            beforeAlt={transf.beforeAlt}
                            afterAlt={transf.afterAlt}
                            beforeImage={transf.beforeImage}
                            afterImage={transf.afterImage}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
}
