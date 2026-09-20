"use client";

import { useSearchContext } from "@/context/SearchContext";

export default function HeroBanner() {
  const { focusSearch } = useSearchContext();

  return (
    <section className="hero-banner d-flex flex-column justify-content-center">
      <div className="container text-center">
        <h1 className="font-extralight mx-auto">
          Explore o <span className="font-black">GitHub</span> de um
          <span className="font-black mx-3">jeito</span>
          <span className="font-black hero-highlight">simples.</span>
        </h1>
        <p className="mt-5 mb-4">
          Encontre usuários, descubra seus repositórios e veja seus projetos
          mais populares.
        </p>
        <button
          type="button"
          onClick={focusSearch}
          className="btn btn-dark button-cta d-inline-flex align-items-center justify-content-center gap-2"
        >
          encontre agora um usuário
          <img
            src="/images/icon-arrow-cta.svg"
            alt="Ícone para ação de Buscar Usuário"
            aria-hidden="true"
            width={20}
            height={20}
          />
        </button>
      </div>
    </section>
  );
}
