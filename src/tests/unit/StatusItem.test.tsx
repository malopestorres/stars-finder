// @vitest-environment jsdom

import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import StatusItem from "@/components/StatusItem";

describe("StatusItem", () => {
  afterEach(() => {
    cleanup();
  });

  it("deve renderizar ícone e texto corretamente", () => {
    const { container } = render(
      <StatusItem icon="/images/icon-followers.svg">
        14 Seguidores
      </StatusItem>,
    );

    expect(screen.getByText("14 Seguidores")).toBeTruthy();
    const icon = container.querySelector("img.status-item-icon");
    expect(icon).toBeTruthy();
    expect(icon!.getAttribute("src")).toBe("/images/icon-followers.svg");
  });

  it("deve renderizar dot colorido quando dotColor for fornecido", () => {
    const { container } = render(
      <StatusItem dotColor="#3178c6">
        TypeScript
      </StatusItem>,
    );

    expect(screen.getByText("TypeScript")).toBeTruthy();
    const dot = container.querySelector(".status-item-dot");
    expect(dot).toBeTruthy();
  });
});
