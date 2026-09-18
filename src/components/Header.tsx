"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import axios from "axios";
import type { FormEvent } from "react";
import type { GitHubUser, SearchState } from "../types";
import CardSearchUser from "./CardSearchUser";
import SearchBackdrop from "./SearchBackdrop";

export default function Header() {
  const [search, setSearch] = useState<SearchState>({
    isFocus: false,
    status: "idle",
    user: null,
  });
  const searchFormRef = useRef<HTMLFormElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const closeSearch = useCallback(() => {
    setSearch({ isFocus: false, status: "idle", user: null });
    searchFormRef.current?.reset();
    searchInputRef.current?.blur();
  }, []);

  async function handleSearchSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const username = formData.get("username")?.toString().trim();

    if (!username) return;

    setSearch((prev) => ({ ...prev, status: "loading" }));

    try {
      const { data } = await axios.get<GitHubUser>(
        `/api/users/${encodeURIComponent(username)}`,
      );

      setSearch((prev) => ({ ...prev, status: "success", user: data }));
    } catch {
      setSearch((prev) => ({ ...prev, status: "error", user: null }));
    }
  }

  useEffect(() => {
    if (!search.isFocus) return;

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
  }, [closeSearch, search.isFocus]);

  return (
    <header className="bg-blue-sky">
      <SearchBackdrop isVisible={search.isFocus} />

      <div className="container">
        <div className="d-flex flex-column flex-md-row align-items-center justify-content-between gap-3 p-3 p-md-4">
          <a>
            <img alt="Logo Stars Finder" src="/images/logo.svg" />
          </a>
          <form
            ref={searchFormRef}
            role="search"
            className={`header-search-form ${search.isFocus ? "active" : ""}`}
            onSubmit={handleSearchSubmit}
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
              name="username"
              type="search"
              placeholder="digite um username. ex:ryanflorence"
              onFocus={() => {
                setSearch((prev) => ({
                  ...prev,
                  isFocus: true,
                  status: "idle",
                }));
              }}
            />
            <button
              className="search-submit"
              type="submit"
              aria-label="Pesquisar username"
              disabled={search.status === "loading"}
            >
              <img
                src="/images/icon-arrow-search.svg"
                alt="Ícone de Seta Para Pesquisar"
                aria-hidden="true"
              />
            </button>
            {search.status === "loading" ? (
              <div className="typing_loader" role="status">
                <span className="visually-hidden">Buscando usuário</span>
              </div>
            ) : null}
            {search.status === "success" && search.user ? (
              <CardSearchUser user={search.user} onNavigate={closeSearch} />
            ) : null}
            {search.status === "error" ? (
              <p className="search-feedback text-center">
                Usuário não encontrado.
              </p>
            ) : null}
          </form>
        </div>
      </div>
    </header>
  );
}
