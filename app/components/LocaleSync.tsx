"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function LocaleSync() {
  const pathname = usePathname();
  const isEnglish = pathname.startsWith("/en");

  useEffect(() => {
    document.documentElement.lang = isEnglish ? "en" : "pt-BR";
  }, [isEnglish]);

  return (
    <a className="skip-link" href="#conteudo">
      {isEnglish ? "Skip to content" : "Pular para o conteúdo"}
    </a>
  );
}
