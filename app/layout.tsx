import type { Metadata } from "next";
import { DM_Sans, Space_Grotesk } from "next/font/google";
import SiteFooter from "./components/SiteFooter";
import SiteHeader from "./components/SiteHeader";
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
  metadataBase: new URL("https://jandrade.dev"),
  title: {
    default: "Jordan Andrade — Full-stack, Dados & IA",
    template: "%s — Jordan Andrade",
  },
  description:
    "Portfólio de Jordan Andrade, desenvolvedor full-stack e cientista de dados. Produtos digitais, plataformas web e experiências orientadas por dados.",
  authors: [{ name: "Jordan Andrade", url: "https://jandrade.dev" }],
  creator: "Jordan Andrade",
  keywords: [
    "Jordan Andrade",
    "desenvolvedor full-stack",
    "cientista de dados",
    "Next.js",
    "TypeScript",
    "Python",
    "portfólio",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://jandrade.dev",
    siteName: "Jordan Andrade",
    title: "Jordan Andrade — Full-stack, Dados & IA",
    description:
      "Produtos digitais construídos entre código, dados e negócio.",
    images: [
      {
        url: "/og.png",
        width: 1731,
        height: 909,
        alt: "Jordan Andrade — Full-stack, Dados & IA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jordan Andrade — Full-stack, Dados & IA",
    description:
      "Produtos digitais construídos entre código, dados e negócio.",
    images: ["/og.png"],
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
        <a className="skip-link" href="#conteudo">
          Pular para o conteúdo
        </a>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
