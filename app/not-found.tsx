import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found" id="conteudo">
      <div className="shell">
        <p className="section-kicker">Erro 404</p>
        <h1>Esta rota não chegou à produção.</h1>
        <p>A página pode ter mudado de endereço ou nunca ter existido.</p>
        <Link className="button button-primary" href="/">
          Voltar ao início <span aria-hidden="true">→</span>
        </Link>
      </div>
    </main>
  );
}
