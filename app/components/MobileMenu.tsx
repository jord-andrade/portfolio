"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { href: "/#projetos", label: "Projetos" },
  { href: "/#expertise", label: "Expertise" },
  { href: "/#sobre", label: "Sobre" },
  { href: "/#contato", label: "Contato" },
];

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

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
        aria-label={open ? "Fechar menu" : "Abrir menu"}
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
        <nav aria-label="Navegação móvel">
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

        <a
          className="mobile-menu-email"
          href="mailto:andradelopesjordan@gmail.com"
          tabIndex={open ? 0 : -1}
        >
          andradelopesjordan@gmail.com
        </a>
      </div>
    </div>
  );
}
