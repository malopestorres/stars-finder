// @vitest-environment jsdom

import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import CardSearchUser from "../../src/components/CardSearchUser";
import type { GitHubUser } from "../../src/types";

const mockUser: GitHubUser = {
  avatar_url: "https://github.com/malopestorres.png",
  bio: "Developer passionate about building open-source solutions.",
  email: "marcuslorenlopes@gmail.com",
  followers: 14,
  following: 38,
  login: "malopestorres",
  public_repos: 23,
  html_url: "https://github.com/malopestorres",
};

describe("CardSearchUser", () => {
  afterEach(() => {
    cleanup();
  });

  it("deve aparecer  ao carregar a rota as informacões referentes ao usuário pesquisado (seguidores, seguidos, avatar, email, bio e botão de visitar perfil)", () => {
    render(<CardSearchUser user={mockUser} variant="full" />);

    const avatar = screen.getByRole("img", {
      name: `Foto de perfil do usuário ${mockUser.login}`,
    });
    expect(avatar.getAttribute("src")).toBe(mockUser.avatar_url);

    expect(screen.getByText(mockUser.login)).toBeTruthy();
    expect(screen.getByText(mockUser.bio as string)).toBeTruthy();
    expect(screen.getByText(mockUser.email as string)).toBeTruthy();
    expect(screen.getByText(`${mockUser.followers} Seguidores`)).toBeTruthy();
    expect(screen.getByText(`${mockUser.following} seguindo`)).toBeTruthy();
    expect(screen.getByText(`${mockUser.public_repos} repositórios`)).toBeTruthy();

    const visitProfileLink = screen.getByRole("link", {
      name: /visitar perfil/i,
    });
    expect(visitProfileLink.getAttribute("href")).toBe(mockUser.html_url);
  });
});
