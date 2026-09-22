import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Manrope } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site-config";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Institut de Beauté & Cosmétiques`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  keywords: [
    "institut de beauté",
    "cosmétiques",
    "soins visage",
    "coiffure",
    "maquillage",
    "Halyd's Secret",
  ],
  openGraph: {
    title: `${site.name} — Institut de Beauté & Cosmétiques`,
    description: site.description,
    url: site.url,
    siteName: site.name,
    images: ["/logo.jpg"],
    locale: "fr_FR",
    type: "website",
  },
  icons: {
    icon: "/logo.jpg",
    apple: "/logo.jpg",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      className={`${jakarta.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-ink overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
