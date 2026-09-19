// @vitest-environment jsdom

import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it, vi } from "vitest";
import SortDropdown from "../../src/components/SortDropdown";

describe("SortDropdown", () => {
  afterEach(() => {
    cleanup();
  });

  it("deve abrir o menu ao clicar no botão e listar opções", async () => {
    const user = userEvent.setup();
    const handleSelect = vi.fn();

    render(<SortDropdown sortBy="stars" onSelect={handleSelect} />);

    const trigger = screen.getByRole("button", { name: /ordenar por/i });
    expect(trigger).toBeTruthy();
    expect(screen.queryByRole("listbox")).toBeNull();

    await user.click(trigger);

    expect(screen.getByRole("listbox")).toBeTruthy();
    expect(screen.getByText("Mais estrelas")).toBeTruthy();
    expect(screen.getByText("Mais forks")).toBeTruthy();
    expect(screen.getByText("Nome (A - Z)")).toBeTruthy();
    expect(screen.getByText("Nome (Z - A)")).toBeTruthy();
  });

  it("deve selecionar uma opção e fechar o menu", async () => {
    const user = userEvent.setup();
    const handleSelect = vi.fn();

    render(<SortDropdown sortBy="stars" onSelect={handleSelect} />);

    await user.click(screen.getByRole("button", { name: /ordenar por/i }));
    await user.click(screen.getByText("Mais forks"));

    expect(handleSelect).toHaveBeenCalledWith("forks");
    expect(screen.queryByRole("listbox")).toBeNull();
  });
});
