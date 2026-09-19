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
          className="repo-card-title font-semibold"
        >
          <img
            src="/images/icon-repository.svg"
            alt=""
            aria-hidden="true"
            className="repo-card-icon"
          />
          <span>{repository.name}</span>
        </Link>

        <a
          href={repository.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="repo-card-link-external"
        >
          <span>{repository.html_url}</span>
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            className="repo-card-link-icon"
          >
            <path
              d="M3.5 2.5H9.5V8.5M9.5 2.5L2.5 9.5"
              stroke="currentColor"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
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
