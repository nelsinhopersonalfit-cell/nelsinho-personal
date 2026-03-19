import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Services } from "@/components/sections/services";
import { Transformations } from "@/components/sections/transformations";
import { Testimonials } from "@/components/sections/testimonials";
import { Plans } from "@/components/sections/plans";
import { FinalCTA } from "@/components/sections/final-cta";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between">
            <Hero />
            <Services />
            <Transformations />
            <Testimonials />
            <About />
            <Plans />
            <FinalCTA />
        </main>
    );
}
