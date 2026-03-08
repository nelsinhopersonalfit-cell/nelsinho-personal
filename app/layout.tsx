import type { Metadata } from "next";
import { Barlow_Condensed, Barlow, Inter } from "next/font/google";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { WhatsAppFloat } from "@/components/ui/whatsapp-float";
import "./globals.css";

const barlowCondensed = Barlow_Condensed({
    subsets: ["latin"],
    weight: ["700", "800"],
    variable: "--font-barlow-condensed",
});

const barlow = Barlow({
    subsets: ["latin"],
    weight: ["500", "600"],
    variable: "--font-barlow",
});

const inter = Inter({
    subsets: ["latin"],
    weight: ["400", "500", "600"],
    variable: "--font-inter",
});

export const metadata: Metadata = {
    title: "Nelsinho Personal | Personal Trainer em Santa Rita - PB",
    description: "Personal trainer completo com +10 anos de experiência em Santa Rita - PB. Emagrecimento, hipertrofia e condicionamento. Agende sua avaliação gratuita.",
    icons: {
        icon: "/images/logo/icon.png",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-BR" className="scroll-smooth">
            <body
                className={`${barlowCondensed.variable} ${barlow.variable} ${inter.variable} font-inter bg-brand-black text-brand-offwhite antialiased selection:bg-brand-orange selection:text-white`}
            >
                <Navbar />
                {children}
                <Footer />
                <WhatsAppFloat />
            </body>
        </html>
    );
}
