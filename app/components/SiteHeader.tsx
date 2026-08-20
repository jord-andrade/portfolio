"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteContent, type Locale } from "../data/site-content";
import MobileMenu from "./MobileMenu";

function getLocalePath(pathname: string, locale: Locale) {
  if (locale === "en") {
    const projectMatch = pathname.match(/^\/projetos\/(.+)$/);
    if (projectMatch) return `/en/projects/${projectMatch[1]}`;
    return "/en";
  }

  const projectMatch = pathname.match(/^\/en\/projects\/(.+)$/);
  if (projectMatch) return `/projetos/${projectMatch[1]}`;
  return "/";
}

export default function SiteHeader() {
  const pathname = usePathname();
  const locale: Locale = pathname.startsWith("/en") ? "en" : "pt";
  const copy = siteContent[locale].navigation;
  const home = locale === "en" ? "/en" : "/";
  const links = [
    { href: `${home}#${locale === "en" ? "projects" : "projetos"}`, label: copy.projects },
    { href: `${home}#expertise`, label: copy.expertise },
    { href: `${home}#${locale === "en" ? "journey" : "sobre"}`, label: copy.about },
  ];
  const alternateLocale: Locale = locale === "en" ? "pt" : "en";
  const alternateHref = getLocalePath(pathname, alternateLocale);

  return (
    <header className="site-header" lang={siteContent[locale].lang}>
      <div className="shell site-header-inner">
        <Link className="wordmark" href={home} aria-label={`Jordan Andrade — ${locale === "en" ? "home" : "início"}`}>
          JA<span>.</span>
        </Link>

        <nav className="desktop-navigation" aria-label={copy.mainLabel}>
          {links.map((link) => (
            <Link href={link.href} key={link.href}>
              {link.label}
            </Link>
          ))}
          <Link
            className="language-switch"
            href={alternateHref}
            hrefLang={alternateLocale === "en" ? "en" : "pt-BR"}
            aria-label={copy.languageLabel}
          >
            {copy.languageShort}
          </Link>
          <Link className="header-contact" href={`${home}#${locale === "en" ? "contact" : "contato"}`}>
            {copy.contactCta} <span aria-hidden="true">↗</span>
          </Link>
        </nav>

        <MobileMenu
          alternateHref={alternateHref}
          links={[
            ...links,
            {
              href: `${home}#${locale === "en" ? "contact" : "contato"}`,
              label: copy.contact,
            },
          ]}
          locale={locale}
        />
      </div>
    </header>
  );
}
