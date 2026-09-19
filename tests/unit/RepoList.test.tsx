// @vitest-environment jsdom

import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import RepoList from "../../src/components/RepoList";
import { formatTime } from "../../src/lib/formatters";
import type { GitHubRepository } from "../../src/types";

const mockRepositories: GitHubRepository[] = [
  {
    id: 1,
    name: "frontend-architecture-docs",
    full_name: "malopestorres/frontend-architecture-docs",
    description: "Guia central de arquitetura, governança e padronização frontend.",
    html_url: "https://github.com/malopestorres/frontend-architecture-docs",
    stargazers_count: 12,
    forks_count: 4,
    language: "TypeScript",
    updated_at: "2026-09-10T12:00:00Z",
  },
  {
    id: 2,
    name: "malopestorres",
    full_name: "malopestorres/malopestorres",
    description: null,
    html_url: "https://github.com/malopestorres/malopestorres",
    stargazers_count: 0,
    forks_count: 0,
    language: null,
    updated_at: "2026-09-15T10:00:00Z",
  },
];

describe("RepoList", () => {
  afterEach(() => {
    cleanup();
  });

  it("deve renderizar a quantidade correta de repositórios", () => {
    render(
      <RepoList
        repositories={mockRepositories}
        username="malopestorres"
      />,
    );

    expect(
      screen.getByRole("heading", {
        name: `Repositórios (${mockRepositories.length})`,
      }),
    ).toBeTruthy();

    const repoCards = screen.getAllByRole("article");
    expect(repoCards).toHaveLength(mockRepositories.length);
  });

  it("deve aparecer as informações referentes ao repositório do usuário pesquisado (stars, forks, data e linguagem opcional)", () => {
    render(
      <RepoList
        repositories={mockRepositories}
        username="malopestorres"
      />,
    );

    const firstRepoLink = screen.getByRole("link", {
      name: mockRepositories[0].name,
    });
    expect(firstRepoLink.getAttribute("href")).toBe(
      `/malopestorres/repo/${mockRepositories[0].name}`,
    );
    expect(
      screen.getByText(mockRepositories[0].description as string),
    ).toBeTruthy();
    expect(screen.getByText(mockRepositories[0].language as string)).toBeTruthy();
    expect(
      screen.getByText(mockRepositories[0].stargazers_count.toString()),
    ).toBeTruthy();
    expect(
      screen.getByText(mockRepositories[0].forks_count.toString()),
    ).toBeTruthy();
    expect(
      screen.getByText(formatTime(mockRepositories[0].updated_at)),
    ).toBeTruthy();

    const secondRepoLink = screen.getByRole("link", {
      name: mockRepositories[1].name,
    });
    expect(secondRepoLink.getAttribute("href")).toBe(
      `/malopestorres/repo/${mockRepositories[1].name}`,
    );
    expect(screen.getAllByText("0")).toHaveLength(2);
    expect(
      screen.getByText(formatTime(mockRepositories[1].updated_at)),
    ).toBeTruthy();

    const secondCard = screen.getAllByRole("article")[1];
    expect(secondCard.querySelector(".repo-card-lang-dot")).toBeNull();
  });

  it("deve exibir link que direciona para rota do repositório", () => {
    render(
      <RepoList
        repositories={mockRepositories}
        username="malopestorres"
      />,
    );

    const repoLink = screen.getByRole("link", {
      name: mockRepositories[0].name,
    });
    expect(repoLink.getAttribute("href")).toBe(
      `/malopestorres/repo/${mockRepositories[0].name}`,
    );
  });

  it("deve exibir link externo que direciona para repositório no GitHub", () => {
    render(
      <RepoList
        repositories={mockRepositories}
        username="malopestorres"
      />,
    );

    const externalLink = screen.getByRole("link", {
      name: new RegExp(mockRepositories[0].html_url, "i"),
    });
    expect(externalLink.getAttribute("href")).toBe(
      mockRepositories[0].html_url,
    );
    expect(externalLink.getAttribute("target")).toBe("_blank");
  });
});
