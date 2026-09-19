import Link from "next/link";
import StatusItem from "./StatusItem";
import { GITHUB_BASE_URL } from "@/constants";
import type { CardSearchUserProps } from "../types";

export default function CardSearchUser({
  user,
  variant = "compact",
  onNavigate,
}: CardSearchUserProps) {
  const isFull = variant === "full";
  const profileUrl = user.html_url ?? `${GITHUB_BASE_URL}/${user.login}`;

  return (
    <article
      className={`card-search-user ${isFull ? "card-search-user-full" : "shadow"}`}
    >
      <div className="card-search-user-profile">
        <img
          className="card-search-user-avatar"
          src={user.avatar_url}
          alt={`Foto de perfil do usuário ${user.login}`}
          width={isFull ? 240 : 160}
          height={isFull ? 240 : 160}
        />
        <div className="card-search-user-info">
          <div className="card-search-user-title">
            <img
              src="/images/icon-github.svg"
              alt="Ícone Github"
              aria-hidden="true"
            />
            <h2 className="font-black-italic">{user.login}</h2>
          </div>
          <p className="card-search-user-bio">
            {user.bio ?? "Este usuário não adicionou uma bio."}
          </p>
          {user.email && <p className="card-search-user-email">{user.email}</p>}

          {isFull && (
            <footer className="card-search-user-footer">
              <div className="card-search-user-stats">
                <StatusItem icon="/images/icon-followers.svg">
                  {user.followers} Seguidores
                </StatusItem>
                <StatusItem icon="/images/icon-following.svg">
                  {user.following} seguindo
                </StatusItem>
                <StatusItem icon="/images/icon-repository.svg">
                  {user.public_repos} repositórios
                </StatusItem>
              </div>

              <a
                href={profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn card-search-user-button font-black card-search-user-button-full"
              >
                Visitar perfil
                <img
                  src="/images/icon-arrow-cta-white.svg"
                  alt=""
                  aria-hidden="true"
                  width={16}
                  height={16}
                />
              </a>
            </footer>
          )}
        </div>
      </div>

      {!isFull && (
        <footer className="card-search-user-footer">
          <div className="card-search-user-stats">
            <StatusItem icon="/images/icon-followers.svg">
              {user.followers} Seguidores
            </StatusItem>
            <StatusItem icon="/images/icon-following.svg">
              {user.following} seguindo
            </StatusItem>
            <StatusItem icon="/images/icon-repository.svg">
              {user.public_repos} repos
            </StatusItem>
          </div>

          <Link
            href={`/${user.login}`}
            className="btn font-black card-search-user-button"
            onClick={onNavigate}
          >
            + mais info
          </Link>
        </footer>
      )}
    </article>
  );
}
