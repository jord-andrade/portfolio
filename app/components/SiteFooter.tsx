import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div>
          <Link className="wordmark wordmark-footer" href="/" aria-label="Jordan Andrade — início">
            JA<span>.</span>
          </Link>
          <p>Produtos digitais construídos entre código, dados e negócio.</p>
        </div>

        <div className="footer-links" aria-label="Links sociais">
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
          <a href="mailto:andradelopesjordan@gmail.com">
            E-mail <span aria-hidden="true">↗</span>
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
