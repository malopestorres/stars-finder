// @vitest-environment jsdom

import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import CardRepositoryDetail from "../../src/components/CardRepositoryDetail";
import type { GitHubRepository } from "../../src/types";

const mockRepository: GitHubRepository = {
  id: 1,
  name: "stars-finder",
  full_name: "malopestorres/stars-finder",
  description: "Explore o GitHub de um jeito simples.",
  html_url: "https://github.com/malopestorres/stars-finder",
  stargazers_count: 128,
  forks_count: 15,
  watchers_count: 42,
  language: "TypeScript",
  updated_at: "2026-09-19T20:00:00Z",
};

describe("CardRepositoryDetail", () => {
  afterEach(() => {
    cleanup();
  });

  it("deve renderizar todos os dados do repositório retornados pela API", () => {
    const { container } = render(
      <CardRepositoryDetail repository={mockRepository} />,
    );

    expect(screen.getByRole("heading", { level: 1, name: mockRepository.name })).toBeTruthy();

    expect(screen.getByText(mockRepository.description as string)).toBeTruthy();

    const externalLink = screen.getByRole("link", {
      name: new RegExp(mockRepository.html_url, "i"),
    });
    expect(externalLink.getAttribute("href")).toBe(mockRepository.html_url);
    expect(externalLink.getAttribute("target")).toBe("_blank");
    expect(externalLink.getAttribute("rel")).toContain("noopener");

    expect(screen.getByText(mockRepository.language as string)).toBeTruthy();

    expect(screen.getByText(String(mockRepository.watchers_count))).toBeTruthy();
    const eyeIcon = container.querySelector('img[src="/images/icon-eye.svg"]');
    expect(eyeIcon).toBeTruthy();

    expect(screen.getByText(String(mockRepository.stargazers_count))).toBeTruthy();
    const starIcon = container.querySelector('img[src="/images/icon-star.svg"]');
    expect(starIcon).toBeTruthy();

    expect(screen.getByText(String(mockRepository.forks_count))).toBeTruthy();
    const forkIcon = container.querySelector('img[src="/images/icon-fork.svg"]');
    expect(forkIcon).toBeTruthy();

    const folderIcon = container.querySelector('img[src="/images/icon-repository.svg"]');
    expect(folderIcon).toBeTruthy();
  });

  it("não deve renderizar descrição nem linguagem quando forem nulos", () => {
    const repoWithoutOptionals: GitHubRepository = {
      ...mockRepository,
      description: null,
      language: null,
    };

    render(<CardRepositoryDetail repository={repoWithoutOptionals} />);

    expect(screen.queryByText(mockRepository.description as string)).toBeNull();
    expect(screen.queryByText(mockRepository.language as string)).toBeNull();
  });
});
