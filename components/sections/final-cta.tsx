import { CTA_COPY } from "@/lib/copy";
import Image from "next/image";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";

export function FinalCTA() {
    return (
        <section id="contato" className="relative w-full overflow-hidden bg-brand-black py-24 md:py-32">

            {/* Background Image Subjacente */}
            <div className="absolute inset-0 z-0 h-full w-full">
                <Image
                    src="/images/cta-bg-compressed.webp"
                    alt="Dark Dramatic Fitness Motivation Background"
                    fill
                    className="object-cover object-center opacity-40 mix-blend-luminosity"
                    sizes="100vw"
                    priority={false}
                />

                {/* Degradê Duplo para legibilidade absoluta */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/80 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-b from-brand-black/90 via-transparent to-brand-black/40" />
            </div>

            <div className="relative z-10 mx-auto w-full max-w-container px-container-px md:px-container-px-md lg:px-container-px-lg">
                <div className="flex flex-col items-center justify-center text-center">

                    <h2 className="mb-6 font-barlow-condensed text-balance text-display-xl font-bold uppercase leading-none text-brand-offwhite drop-shadow-lg">
                        {CTA_COPY.headline[0]}{" "}
                        <span className="text-brand-orange">{CTA_COPY.headline[1]}</span>
                    </h2>

                    <p className="mb-10 max-w-2xl font-inter text-body-lg text-brand-offwhite/90 drop-shadow-md">
                        {CTA_COPY.subheadline}
                    </p>

                    <WhatsAppButton
                        size="lg"
                        message="default"
                        variant="primary"
                        className="shadow-orange-glow"
                    >
                        {CTA_COPY.cta}
                    </WhatsAppButton>

                </div>
            </div>
        </section>
    );
}
