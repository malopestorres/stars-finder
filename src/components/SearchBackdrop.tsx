type SearchBackdropProps = {
  isVisible: boolean;
};

export default function SearchBackdrop({ isVisible }: SearchBackdropProps) {
  const visibleClass = isVisible ? "show" : "";

  return (
    <div
      className={`search-backdrop fade ${visibleClass}`}
      aria-hidden="true"
    />
  );
}
