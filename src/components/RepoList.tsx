"use client";

import { useMemo, useState } from "react";
import CardRepository from "./CardRepository";
import SortDropdown from "./SortDropdown";
import type { GitHubRepository, RepoListProps, SortOption } from "@/types";

export default function RepoList({ repositories, username }: RepoListProps) {
  const [sortBy, setSortBy] = useState<SortOption>("stars");

  const sortedRepositories = useMemo(() => {
    const list = [...repositories];

    switch (sortBy) {
      case "forks":
        return list.sort((a, b) => b.forks_count - a.forks_count);
      case "name-asc":
        return list.sort((a, b) => (a.name < b.name ? -1 : 1));
      case "name-desc":
        return list.sort((a, b) => (b.name < a.name ? -1 : 1));
      case "stars":
      default:
        return list.sort((a, b) => b.stargazers_count - a.stargazers_count);
    }
  }, [repositories, sortBy]);

  return (
    <section className="repos-section" aria-label="Repositórios do usuário">
      <div className="repos-header">
        <h2 className="repos-title font-black">
          Repositórios ({repositories.length})
        </h2>
        <SortDropdown sortBy={sortBy} onSelect={setSortBy} />
      </div>

      <ul className="repos-list" role="list">
        {sortedRepositories.map((repo) => (
          <li key={repo.id}>
            <CardRepository repository={repo} username={username} />
          </li>
        ))}
      </ul>
    </section>
  );
}
