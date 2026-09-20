// @vitest-environment jsdom

import axios from "axios";
import { cleanup, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import Header from "@/components/Header";

vi.mock("next/navigation", () => ({
  useRouter: () => ({
    push: vi.fn(),
    prefetch: vi.fn(),
  }),
}));

vi.mock("axios", () => ({
  default: {
    get: vi.fn(),
  },
}));

const searchedUser = {
  avatar_url: "https://github.com/malopestorres.png",
  bio: "Developer passionate about building open-source solutions.",
  email: "marcuslorenlopes@gmail.com",
  followers: 14,
  following: 38,
  login: "malopestorres",
  public_repos: 23,
};

describe("Header", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  afterEach(() => {
    cleanup();
  });

  it("deve aparecer  um card com as informacões referentes ao usuário pesquisado (seguidores, seguidos, avatar, email e bio) ", async () => {
    const user = userEvent.setup();
    vi.mocked(axios.get).mockResolvedValue({ data: searchedUser } as never);

    render(<Header />);

    const searchInput = screen.getByRole("searchbox");
    await user.click(searchInput);
    await user.type(searchInput, searchedUser.login);
    await user.click(
      screen.getByRole("button", { name: "Pesquisar username" }),
    );

    await waitFor(() => {
      expect(screen.getByText(searchedUser.login)).toBeTruthy();
    });

    expect(
      screen
        .getByRole("img", {
          name: `Foto de perfil do usuário ${searchedUser.login}`,
        })
        .getAttribute("src"),
    ).toBe(searchedUser.avatar_url);
    expect(screen.getByText(searchedUser.bio)).toBeTruthy();
    expect(screen.getByText("14 Seguidores")).toBeTruthy();
    expect(screen.getByText("38 seguindo")).toBeTruthy();
    expect(screen.getByText(searchedUser.email)).toBeTruthy();
  });

  it("deve navegar para a página do usuário ao clicar no botão de mais informações", async () => {
    const user = userEvent.setup();
    vi.mocked(axios.get).mockResolvedValue({ data: searchedUser } as never);

    render(<Header />);

    const searchInput = screen.getByRole("searchbox");
    await user.click(searchInput);
    await user.type(searchInput, searchedUser.login);
    await user.click(
      screen.getByRole("button", { name: "Pesquisar username" }),
    );

    await waitFor(() => {
      expect(screen.getByText(searchedUser.login)).toBeTruthy();
    });

    const moreInfoLink = screen.getByRole("link", { name: "+ mais info" });
    expect(moreInfoLink.getAttribute("href")).toBe(`/${searchedUser.login}`);

    await user.click(moreInfoLink);

    await waitFor(() => {
      expect(screen.queryByText(searchedUser.login)).toBeNull();
    });
  });
});
