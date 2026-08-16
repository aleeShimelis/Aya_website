import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import type { ReactNode } from "react";
import "@photo-sphere-viewer/core/index.css";
import "./globals.css";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { StickyContactBar } from "@/components/layout/StickyContactBar";
import { TopBar } from "@/components/layout/TopBar";
import { JsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/constants";
import { createMetadata } from "@/lib/seo";
import { organizationSchema } from "@/lib/schema";

const manrope = localFont({
  src: "../node_modules/@fontsource-variable/manrope/files/manrope-latin-wght-normal.woff2",
  variable: "--font-manrope",
  display: "swap",
  weight: "200 800",
  fallback: ["Arial", "sans-serif"],
  adjustFontFallback: "Arial",
  preload: true
});

const spaceGrotesk = localFont({
  src: "../node_modules/@fontsource-variable/space-grotesk/files/space-grotesk-latin-wght-normal.woff2",
  variable: "--font-space-grotesk",
  display: "swap",
  weight: "300 700",
  fallback: ["Arial", "sans-serif"],
  adjustFontFallback: "Arial",
  preload: true
});

export const metadata: Metadata = {
  ...createMetadata({
    title: "Aya Dental Studio | Dental Clinic in Addis Ababa",
    description:
      "Aya Dental Studio is a calm, premium dental clinic experience near Bole Atlas in Addis Ababa.",
    path: "/"
  }),
  manifest: "/manifest.json",
  icons: {
    icon: [{ url: siteConfig.faviconPath, type: "image/png" }]
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#fbfaf7"
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${manrope.variable} ${spaceGrotesk.variable}`}>
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <TopBar />
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <StickyContactBar />
        <JsonLd data={organizationSchema()} />
        <noscript>
          {siteConfig.name} works best with JavaScript enabled for forms and interactive menus.
        </noscript>
      </body>
    </html>
  );
}
