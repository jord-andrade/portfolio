import type { Metadata } from "next";
import { DM_Sans, Space_Grotesk } from "next/font/google";
import SiteFooter from "./components/SiteFooter";
import SiteHeader from "./components/SiteHeader";
import LocaleSync from "./components/LocaleSync";
import "./globals.css";

const bodyFont = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const displayFont = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jord-andrade.dev"),
  title: {
    default: "Jordan Andrade — Full-stack, Dados & IA",
    template: "%s — Jordan Andrade",
  },
  description:
    "Portfólio de Jordan Andrade, desenvolvedor full-stack focado em produtos de dados e ferramentas de IA.",
  authors: [{ name: "Jordan Andrade", url: "https://jord-andrade.dev" }],
  creator: "Jordan Andrade",
  keywords: [
    "Jordan Andrade",
    "desenvolvedor full-stack",
    "produtos de dados",
    "Next.js",
    "TypeScript",
    "Python",
    "portfólio",
  ],
  alternates: {
    canonical: "/",
    languages: { "pt-BR": "/", en: "/en" },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://jord-andrade.dev",
    siteName: "Jordan Andrade",
    title: "Jordan Andrade — Full-stack, Dados & IA",
    description:
      "Produtos digitais construídos entre código, dados e negócio.",
    images: [
      {
        url: "/og-system.png",
        width: 1745,
        height: 909,
        alt: "Jordan Andrade — Full-stack, Data & AI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jordan Andrade — Full-stack, Dados & IA",
    description:
      "Produtos digitais construídos entre código, dados e negócio.",
    images: ["/og-system.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="pt-BR"
      className={`${bodyFont.variable} ${displayFont.variable}`}
      data-scroll-behavior="smooth"
    >
      <body>
        <LocaleSync />
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
