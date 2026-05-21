import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import WhatsAppButton from "@/components/WhatsAppButton";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--display",
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--body",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Poultney Trading — Horticulture, Poultry & Quality Animal Feed",
  description:
    "Zimbabwe's trusted partner in horticulture produce, day-old chicks, broilers, pigs, and premium animal feed including dog food. Quality from soil to feed.",
  keywords: [
    "Poultney Trading",
    "Zimbabwe poultry",
    "day-old chicks",
    "animal feed Zimbabwe",
    "horticulture",
    "dog food Zimbabwe",
    "pigs for sale",
  ],
  openGraph: {
    title: "Poultney Trading",
    description:
      "Horticulture, poultry and premium animal feed — grown and produced with care.",
    type: "website",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${manrope.variable}`}>
      <body>
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
