import CardRepository from "./CardRepository";
import type { GitHubRepository } from "@/types";

type RepoListProps = {
  repositories: GitHubRepository[];
  username: string;
};

export default function RepoList({ repositories, username }: RepoListProps) {
  return (
    <section className="repos-section" aria-label="Repositórios do usuário">
      <h2 className="repos-title font-black">Repositórios ({repositories.length})</h2>

      <ul className="repos-list" role="list">
        {repositories.map((repo) => (
          <li key={repo.id}>
            <CardRepository repository={repo} username={username} />
          </li>
        ))}
      </ul>
    </section>
  );
}
