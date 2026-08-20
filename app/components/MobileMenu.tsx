"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { email, siteContent, type Locale } from "../data/site-content";

type MobileMenuProps = {
  alternateHref: string;
  links: Array<{ href: string; label: string }>;
  locale: Locale;
};

export default function MobileMenu({ alternateHref, links, locale }: MobileMenuProps) {
  const [open, setOpen] = useState(false);
  const copy = siteContent[locale].navigation;

  useEffect(() => {
    document.body.dataset.menuOpen = open ? "true" : "false";

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => {
      delete document.body.dataset.menuOpen;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [open]);

  return (
    <div className="mobile-menu-wrap">
      <button
        className="menu-trigger"
        type="button"
        aria-expanded={open}
        aria-controls="mobile-navigation"
        aria-label={open ? copy.menuClose : copy.menuOpen}
        onClick={() => setOpen((current) => !current)}
      >
        <span />
        <span />
      </button>

      <div
        className={`mobile-menu ${open ? "is-open" : ""}`}
        id="mobile-navigation"
        aria-hidden={!open}
      >
        <nav aria-label={copy.mobileLabel}>
          {links.map((link, index) => (
            <Link
              href={link.href}
              key={link.href}
              tabIndex={open ? 0 : -1}
              onClick={() => setOpen(false)}
            >
              <span>0{index + 1}</span>
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="mobile-menu-bottom">
          <Link
            className="mobile-language-switch"
            href={alternateHref}
            hrefLang={locale === "en" ? "pt-BR" : "en"}
            tabIndex={open ? 0 : -1}
            onClick={() => setOpen(false)}
          >
            {copy.languageShort} · {copy.languageLabel}
          </Link>
          <a
            className="mobile-menu-email"
            href={`mailto:${email}`}
            tabIndex={open ? 0 : -1}
          >
            {email}
          </a>
        </div>
      </div>
    </div>
  );
}
