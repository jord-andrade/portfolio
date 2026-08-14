import Link from "next/link";
import MobileMenu from "./MobileMenu";

const links = [
  { href: "/#projetos", label: "Projetos" },
  { href: "/#expertise", label: "Expertise" },
  { href: "/#sobre", label: "Sobre" },
];

export default function SiteHeader() {
  return (
    <header className="site-header">
      <div className="shell site-header-inner">
        <Link className="wordmark" href="/" aria-label="Jordan Andrade — início">
          JA<span>.</span>
        </Link>

        <nav className="desktop-navigation" aria-label="Navegação principal">
          {links.map((link) => (
            <Link href={link.href} key={link.href}>
              {link.label}
            </Link>
          ))}
          <Link className="header-contact" href="/#contato">
            Vamos conversar <span aria-hidden="true">↗</span>
          </Link>
        </nav>

        <MobileMenu />
      </div>
    </header>
  );
}
