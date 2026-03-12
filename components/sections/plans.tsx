import { PLANS_COPY } from "@/lib/copy";
import { PlanCard } from "@/components/ui/plan-card";
import { SectionLabel } from "@/components/ui/section-label";

export function Plans() {
    return (
        <section id="planos" className="relative w-full overflow-hidden bg-brand-surface py-section-y md:py-section-y-lg">
            <div className="relative z-10 mx-auto w-full max-w-container px-container-px md:px-container-px-md lg:px-container-px-lg">

                {/* Header */}
                <div className="mb-12 flex flex-col items-center text-center md:mb-16">
                    <SectionLabel>{PLANS_COPY.sectionLabel}</SectionLabel>
                    <h2 className="mt-2 mb-6 font-barlow-condensed text-balance text-display-lg font-bold uppercase leading-none text-brand-offwhite">
                        {PLANS_COPY.headline[0]}{" "}
                        <span className="text-brand-orange">{PLANS_COPY.headline[1]}</span>
                    </h2>
                    <p className="max-w-prose-wide font-inter text-body-lg text-brand-muted">
                        {PLANS_COPY.subheadline}
                    </p>
                </div>

                {/* Grid de Planos */}
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 md:gap-6 lg:gap-8 items-center justify-center">
                    {PLANS_COPY.plans.map((plan, index) => (
                        <div key={index} className="flex w-full justify-center">
                            <PlanCard
                                name={plan.name}
                                price={plan.price}
                                period={plan.period}
                                features={plan.features}
                                description={plan.description}
                                cta={plan.cta}
                                highlight={plan.highlight}
                                badge={plan.highlight ? "Mais Escolhido" : undefined}
                                className={plan.highlight ? "lg:scale-105 z-10" : ""}
                            />
                        </div>
                    ))}
                </div>

                {/* Disclaimer / Rodapé da seção */}
                <div className="mt-16 flex flex-col items-center justify-center text-center">
                    <p className="font-inter text-body-md text-brand-muted/80 max-w-2xl">
                        * Todos os planos possuem garantia de 7 dias incondicional. Os resultados podem variar de acordo com a biologia e disciplina individual do aluno(a).
                    </p>
                </div>

            </div>
        </section>
    );
}
