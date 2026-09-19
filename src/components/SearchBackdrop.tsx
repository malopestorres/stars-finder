import type { SearchBackdropProps } from "@/types";

export default function SearchBackdrop({ isVisible }: SearchBackdropProps) {
  const visibleClass = isVisible ? "show" : "";

  return (
    <div
      className={`search-backdrop fade ${visibleClass}`}
      aria-hidden="true"
    />
  );
}
