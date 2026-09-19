import ButtonBack from "@/components/ButtonBack";

export default function NotFound() {
  return (
    <main className="not-found-container">
      <div className="not-found-content">
        <img
          src="/images/icon-not-found.svg"
          alt=""
          aria-hidden="true"
          className="not-found-icon"
          width={99}
          height={102}
        />
        <h1 className="not-found-title font-regular">
          oops! o que você está procurando não existe.
        </h1>
        <ButtonBack />
      </div>
    </main>
  );
}
