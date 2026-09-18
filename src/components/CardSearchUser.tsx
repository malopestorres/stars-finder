import type { CardSearchUserProps } from "../types";

export default function CardSearchUser({ user }: CardSearchUserProps) {
  return (
    <article className="card-search-user shadow">
      <div className="card-search-user-profile">
        <img
          className="card-search-user-avatar"
          src={user.avatar_url}
          alt={`Foto de perfil do usuário ${user.login}`}
          width={160}
          height={160}
        />
        <div>
          <div className="card-search-user-title">
            <img
              src="/images/icon-github.svg"
              alt="Ícone Github"
              aria-hidden="true"
            />
            <h2 className="font-black-italic">{user.login}</h2>
          </div>
          <p>{user.bio ?? "Este usuário não adicionou uma bio."}</p>
        </div>
      </div>

      <footer className="card-search-user-footer">
        <div className="card-search-user-stats">
          <span>
            <img src="/images/icon-followers.svg" alt="" aria-hidden="true" />
            {user.followers} Seguidores
          </span>
          <span>
            <img src="/images/icon-following.svg" alt="" aria-hidden="true" />
            {user.following} seguindo
          </span>
          <span>
            <img src="/images/icon-repository.svg" alt="" aria-hidden="true" />
            {user.public_repos} repos
          </span>
        </div>
        <button type="button" className="btn card-search-user-button">
          + mais info
        </button>
      </footer>
    </article>
  );
}
