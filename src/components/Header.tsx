/* eslint-disable @next/next/no-img-element */
export default function Header() {
  return (
    <header className="bg-blue-sky">
      <div className="container">
        <div className="d-flex flex-column flex-md-row align-items-center justify-content-between gap-3 p-3 p-md-4">
          <a>
            <img alt="Logo Stars Finder" src="/images/logo.svg" />
          </a>
          <form role="search" className="header-search-form">
            <img
              className="search-icon"
              src="/images/icon-search.svg"
              alt=""
              aria-hidden="true"
            />
            <input
              className="form-control font-extralight-italic shadow-sm header-search p-2"
              id="search"
              type="search"
              placeholder="digite um username"
            />
            <button
              className="search-submit"
              type="submit"
              aria-label="Pesquisar username"
            >
              <img
                src="/images/icon-arrow-search.svg"
                alt="Ícone de Seta Para Pesquisar"
                aria-hidden="true"
              />
            </button>
          </form>
        </div>
      </div>
    </header>
  );
}
