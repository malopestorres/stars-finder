"use client";

import { createContext, useCallback, useContext, useRef } from "react";
import type { SearchContextValue, SearchProviderProps } from "@/types";

export const SearchContext = createContext<SearchContextValue>({
  focusSearch: () => {},
  registerSearchInput: () => {},
});

export function SearchProvider({ children }: SearchProviderProps) {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const registerSearchInput = useCallback((element: HTMLInputElement | null) => {
    inputRef.current = element;
  }, []);

  const focusSearch = useCallback(() => {
    if (inputRef.current) {
      inputRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
      inputRef.current.focus();
    }
  }, []);

  return (
    <SearchContext.Provider value={{ focusSearch, registerSearchInput }}>
      {children}
    </SearchContext.Provider>
  );
}

export function useSearchContext() {
  return useContext(SearchContext);
}
