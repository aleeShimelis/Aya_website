import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { StickyContactBar } from "@/components/layout/StickyContactBar";
import { TopBar } from "@/components/layout/TopBar";
import { JsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/constants";
import { createMetadata } from "@/lib/seo";
import { organizationSchema } from "@/lib/schema";

export const metadata: Metadata = {
  ...createMetadata({
    title: "Aya Dental Studio | Dental Clinic in Addis Ababa",
    description:
      "Aya Dental Studio is a calm, premium dental clinic experience near Bole Atlas in Addis Ababa.",
    path: "/"
  }),
  manifest: "/manifest.json"
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#fbfaf7"
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
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
        {/* TODO: Add Amharic language routing with next-intl after approved translations exist. */}
        {/* TODO: Replace placeholders with final Aya Dental Studio logo and real clinic media. */}
        <noscript>
          {siteConfig.name} works best with JavaScript enabled for forms and interactive menus.
        </noscript>
      </body>
    </html>
  );
}
