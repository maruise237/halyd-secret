import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site-config";

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
      className={`${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-surface text-ink overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
