import StatusItem from "./StatusItem";
import { languageColors } from "@/constants";
import type { CardRepositoryDetailProps } from "@/types";

export default function CardRepositoryDetail({
  repository,
}: CardRepositoryDetailProps) {
  const languageColor =
    (repository.language && languageColors[repository.language]) || "#9ca3af";

  return (
    <section className="repo-detail">
      <div className="card-search-user-title">
        <img
          src="/images/icon-repository.svg"
          alt=""
          aria-hidden="true"
          className="repo-detail-folder-icon"
        />
        <h1 className="font-black-italic">{repository.name}</h1>
      </div>

      {repository.description && (
        <p className="card-search-user-bio repo-detail-description">
          {repository.description}
        </p>
      )}

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

      <footer className="repo-detail-stats">
        {repository.language && (
          <StatusItem dotColor={languageColor}>
            {repository.language}
          </StatusItem>
        )}

        <StatusItem icon="/images/icon-eye.svg">
          {repository.watchers_count}
        </StatusItem>

        <StatusItem icon="/images/icon-star.svg">
          {repository.stargazers_count}
        </StatusItem>

        <StatusItem icon="/images/icon-fork.svg">
          {repository.forks_count}
        </StatusItem>
      </footer>
    </section>
  );
}
