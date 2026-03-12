"use client";

import { SERVICES_COPY } from "@/lib/copy";
import { ServiceCard } from "@/components/ui/service-card";
import { SectionLabel } from "@/components/ui/section-label";
import { motion } from "framer-motion";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2,
        },
    },
};

export function Services() {
    return (
        <section id="servicos" className="relative w-full overflow-hidden bg-brand-surface py-section-y md:py-section-y-lg">
            {/* Background Texture/Ambient */}
            <div className="absolute inset-0 z-0 bg-brand-surface">
                {/* Subtle radial gradients for depth */}
                <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-full max-w-4xl h-[800px] bg-brand-orange/5 blur-[120px] rounded-full pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-orange/5 blur-[100px] rounded-full pointer-events-none translate-x-1/2 translate-y-1/2" />
            </div>

            <div className="relative z-10 mx-auto w-full max-w-container px-container-px md:px-container-px-md lg:px-container-px-lg">
                <div className="mb-16 flex flex-col items-center text-center">
                    <SectionLabel>{SERVICES_COPY.sectionLabel}</SectionLabel>

                    <h2 className="mt-2 mb-6 font-barlow-condensed text-balance text-display-lg font-bold uppercase leading-none text-brand-offwhite">
                        {SERVICES_COPY.headline[0]}{" "}
                        <span className="text-brand-orange">{SERVICES_COPY.headline[1]}</span>
                    </h2>

                    <p className="max-w-prose-wide font-inter text-body-lg text-brand-muted">
                        {SERVICES_COPY.subheadline}
                    </p>
                </div>

                {/* Grid de Serviços */}
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 md:gap-8"
                >
                    {SERVICES_COPY.services.map((service, index) => (
                        <ServiceCard
                            key={index}
                            icon={service.icon}
                            title={service.title}
                            description={service.description}
                            highlight={service.highlight}
                            className="z-10"
                        />
                    ))}
                </motion.div>

                {/* CTA Final da Seção */}
                <div className="mt-16 flex justify-center">
                    <a
                        href="#planos"
                        className="inline-flex h-14 items-center justify-center rounded-btn bg-brand-orange px-8 text-body-lg font-semibold text-white shadow-orange-glow transition-all duration-350 hover:bg-brand-orange-light hover:-translate-y-1 hover:shadow-orange-glow-sm focus:outline-none focus:ring-4 focus:ring-brand-orange/50"
                    >
                        {SERVICES_COPY.cta}
                    </a>
                </div>
            </div>
        </section>
    );
}
