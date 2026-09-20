"use client";

import { createContext, useContext } from "react";
import type { SearchContextValue } from "@/types";

export const SearchContext = createContext<SearchContextValue>({
  focusSearch: () => {},
});

export function useSearchContext() {
  return useContext(SearchContext);
}
