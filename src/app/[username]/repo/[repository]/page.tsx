import ButtonBack from "@/components/ButtonBack";
import StatusItem from "@/components/StatusItem";
import { fetchRepo } from "@/actions/fetchRepo";
import { languageColors } from "@/constants";
import type { GitHubRepoPageProps } from "@/types";

export default async function RepositoryUserPage({
  params,
}: GitHubRepoPageProps) {
  const { username, repository } = await params;
  const repo = await fetchRepo(username, repository);

  const languageColor =
    (repo.language && languageColors[repo.language]) || "#9ca3af";

  return (
    <main className="container py-4">
      <div className="mb-4">
        <ButtonBack href={`/${username}`} />
      </div>

      <section className="repo-detail">
        <div className="card-search-user-title">
          <img
            src="/images/icon-repository.svg"
            alt=""
            aria-hidden="true"
            className="repo-detail-folder-icon"
          />
          <h1 className="font-black-italic">{repo.name}</h1>
        </div>

        {repo.description && (
          <p className="card-search-user-bio repo-detail-description">
            {repo.description}
          </p>
        )}

        <a
          href={repo.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="repo-card-link-external"
        >
          <span>{repo.html_url}</span>
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
          {repo.language && (
            <StatusItem dotColor={languageColor}>
              {repo.language}
            </StatusItem>
          )}

          <StatusItem icon="/images/icon-eye.svg">
            {repo.watchers_count}
          </StatusItem>

          <StatusItem icon="/images/icon-star.svg">
            {repo.stargazers_count}
          </StatusItem>

          <StatusItem icon="/images/icon-fork.svg">
            {repo.forks_count}
          </StatusItem>
        </footer>
      </section>
    </main>
  );
}
