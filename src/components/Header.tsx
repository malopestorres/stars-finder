"use client";

import { useEffect, useRef, useState } from "react";
import SearchBackdrop from "./SearchBackdrop";

export default function Header() {
  const [isSearchFocus, setIsSearchFocus] = useState(false);
  const searchFormRef = useRef<HTMLFormElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const isActiveFocus = isSearchFocus ? "active" : "";

  function closeSearch() {
    setIsSearchFocus(false);
    searchInputRef.current?.blur();
  }

  useEffect(() => {
    if (!isSearchFocus) {
      return;
    }

    function handlePointerDown(event: PointerEvent) {
      const target = event.target as Node;

      if (!searchFormRef.current?.contains(target)) {
        closeSearch();
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        closeSearch();
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isSearchFocus]);

  return (
    <header className="bg-blue-sky">
      <SearchBackdrop isVisible={isSearchFocus} />

      <div className="container">
        <div className="d-flex flex-column flex-md-row align-items-center justify-content-between gap-3 p-3 p-md-4">
          <a>
            <img alt="Logo Stars Finder" src="/images/logo.svg" />
          </a>
          <form
            ref={searchFormRef}
            role="search"
            className={`header-search-form ${isActiveFocus}`}
          >
            <img
              className="search-icon"
              src="/images/icon-search.svg"
              alt=""
              aria-hidden="true"
            />
            <input
              ref={searchInputRef}
              className="form-control font-extralight-italic shadow-sm header-search p-2"
              id="search"
              type="search"
              placeholder="digite um username"
              onFocus={() => setIsSearchFocus(true)}
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
