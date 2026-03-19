"use client";

import { SectionLabel } from "@/components/ui/section-label";
import { PlanCard } from "@/components/ui/plan-card";
import { PLANS_COPY } from "@/lib/copy";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function Plans() {
    return (
        <section
            id="planos"
            className="relative w-full overflow-hidden bg-brand-surface py-6 md:py-16"
        >
            {/* Background Decor */}
            <div className="absolute inset-0 z-0 bg-brand-surface">
                <div className="absolute inset-0 bg-pattern-grid-warm pointer-events-none" aria-hidden="true" />
                <div className="absolute left-1/2 top-0 h-[500px] w-full -translate-x-1/2 bg-gradient-to-b from-brand-orange/5 to-transparent opacity-50 blur-3xl pointer-events-none" aria-hidden="true" />
            </div>

            <div className="relative z-10 mx-auto w-full max-w-container px-container-px md:px-container-px-md lg:px-container-px-lg">
                <div className="mb-6 md:mb-10 flex flex-col items-center text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <SectionLabel>{PLANS_COPY.sectionLabel}</SectionLabel>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="mt-2 md:mt-4 font-barlow-condensed text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold uppercase tracking-tight text-brand-offwhite"
                    >
                        {PLANS_COPY.headline[0]}{" "}
                        <span className="text-brand-orange">{PLANS_COPY.headline[1]}</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="mt-3 md:mt-6 max-w-2xl text-body-md md:text-body-lg text-brand-muted"
                    >
                        {PLANS_COPY.subheadline}
                    </motion.p>
                </div>

                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={{
                        hidden: { opacity: 0 },
                        show: {
                            opacity: 1,
                            transition: { staggerChildren: 0.15 },
                        },
                    }}
                    className="flex flex-wrap justify-center gap-8 md:gap-5 lg:gap-6"
                >
                    {PLANS_COPY.plans.map((plan, idx) => (
                        <div
                            key={idx}
                            className={cn(
                                "flex w-full max-w-md md:w-[calc(50%-12px)] lg:w-[calc(33.33%-22px)] lg:max-w-none",
                                plan.highlight ? "lg:scale-105 z-10" : ""
                            )}
                        >
                            <PlanCard {...plan} />
                        </div>
                    ))}
                </motion.div>

                {/* Disclaimer */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="mt-6 md:mt-10 flex flex-col items-center justify-center text-center"
                >
                    <p className="font-inter text-body-md text-brand-muted/80 max-w-2xl">
                        {PLANS_COPY.disclaimer}
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
