import Link from "next/link";
import { formatTime, languageColors } from "@/lib/formatters";
import type { CardRepositoryProps } from "@/types";

export default function CardRepository({
  repository,
  username,
}: CardRepositoryProps) {
  const languageColor =
    (repository.language && languageColors[repository.language]) || "#9ca3af";

  return (
    <article className="repo-card">
      <div className="repo-card-header">
        <Link
          href={`/${username}/repo/${repository.name}`}
          className="repo-card-title"
        >
          <img
            src="/images/icon-repository.svg"
            alt=""
            aria-hidden="true"
            className="repo-card-icon"
          />
          <span>{repository.name}</span>
        </Link>
      </div>

      {repository.description && (
        <p className="repo-card-description">{repository.description}</p>
      )}

      <footer className="repo-card-footer">
        {repository.language && (
          <span className="repo-card-meta-item">
            <span
              className="repo-card-lang-dot"
              style={{ backgroundColor: languageColor }}
              aria-hidden="true"
            />
            <span>{repository.language}</span>
          </span>
        )}

        <span className="repo-card-meta-item">
          <img
            src="/images/icon-star.svg"
            alt=""
            aria-hidden="true"
            className="repo-card-meta-icon"
          />
          <span>{repository.stargazers_count}</span>
        </span>

        <span className="repo-card-meta-item">
          <img
            src="/images/icon-fork.svg"
            alt=""
            aria-hidden="true"
            className="repo-card-meta-icon"
          />
          <span>{repository.forks_count}</span>
        </span>

        <span className="repo-card-updated">
          {formatTime(repository.updated_at)}
        </span>
      </footer>
    </article>
  );
}
