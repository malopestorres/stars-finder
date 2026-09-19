// @vitest-environment jsdom

import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import NotFound from "../../src/app/not-found";

describe("NotFound", () => {
  afterEach(() => {
    cleanup();
  });

  it("deve renderizar o ícone, o texto e o botão de voltar", () => {
    const { container } = render(<NotFound />);

    expect(
      screen.getByText("oops! o que você está procurando não existe."),
    ).toBeTruthy();

    const backButton = screen.getByRole("link", { name: "Voltar" });
    expect(backButton.getAttribute("href")).toBe("/");

    const icon = container.querySelector("img.not-found-icon");
    expect(icon).toBeTruthy();
    expect(icon!.getAttribute("src")).toBe("/images/icon-not-found.svg");
  });
});
