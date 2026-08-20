"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { email, siteContent, type Locale } from "../data/site-content";

export default function SiteFooter() {
  const pathname = usePathname();
  const locale: Locale = pathname.startsWith("/en") ? "en" : "pt";
  const copy = siteContent[locale].footer;

  return (
    <footer className="site-footer" lang={siteContent[locale].lang}>
      <div className="shell footer-grid">
        <div>
          <Link
            className="wordmark wordmark-footer"
            href={locale === "en" ? "/en" : "/"}
            aria-label={`Jordan Andrade — ${locale === "en" ? "home" : "início"}`}
          >
            JA<span>.</span>
          </Link>
          <p>{copy.description}</p>
        </div>

        <div className="footer-links" aria-label={locale === "en" ? "Social links" : "Links sociais"}>
          <a href="https://github.com/jord-andrade" target="_blank" rel="noreferrer">
            GitHub <span aria-hidden="true">↗</span>
          </a>
          <a
            href="https://www.linkedin.com/in/jord-andrade/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn <span aria-hidden="true">↗</span>
          </a>
          <a href={`mailto:${email}`}>
            {copy.emailLabel} <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>

      <div className="shell footer-bottom">
        <span>© {new Date().getFullYear()} Jordan Andrade</span>
        <span>jord-andrade.dev</span>
      </div>
    </footer>
  );
}
