import type { Metadata } from "next";
import HomePage from "../components/HomePage";

export const metadata: Metadata = {
  title: "Jordan Andrade — Full-stack, Data & AI",
  description:
    "Jordan Andrade’s portfolio: full-stack development focused on data products and AI tools.",
  alternates: {
    canonical: "/en",
    languages: { "pt-BR": "/", en: "/en" },
  },
  openGraph: {
    locale: "en_US",
    url: "https://jord-andrade.dev/en",
    title: "Jordan Andrade — Full-stack, Data & AI",
    description: "Data and AI products built from interface to infrastructure.",
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
    title: "Jordan Andrade — Full-stack, Data & AI",
    description: "Data and AI products built from interface to infrastructure.",
    images: ["/og-system.png"],
  },
};

export default function EnglishPage() {
  return <HomePage locale="en" />;
}
