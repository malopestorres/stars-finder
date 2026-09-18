export default function CardSearchUser() {
  return (
    <article className="card-search-user shadow">
      <div className="card-search-user-profile">
        <img
          className="card-search-user-avatar"
          src="https://github.com/malopestorres.png?size=160"
          alt="Foto de perfil de malopestorres"
          width={160}
          height={160}
        />
        <div>
          <h2 className="font-black-italic">malopestorres</h2>
          <p>
            Developer passionate about building open-source solutions that make a
            real difference in people&apos;s lives.
          </p>
        </div>
      </div>

      <footer className="card-search-user-footer">
        <div className="card-search-user-stats">
          <span>
            <img
              src="/images/icon-followers.svg"
              alt=""
              aria-hidden="true"
            />
            14 Seguidores
          </span>
          <span>
            <img
              src="/images/icon-following.svg"
              alt=""
              aria-hidden="true"
            />
            38 seguindo
          </span>
          <span>
            <img
              src="/images/icon-repository.svg"
              alt=""
              aria-hidden="true"
            />
            23 repos
          </span>
        </div>
        <button type="button" className="btn card-search-user-button">
          + mais info
        </button>
      </footer>
    </article>
  );
}
