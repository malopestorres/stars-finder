import { Inter } from "next/font/google";

export const GITHUB_BASE_URL = "https://github.com";

export const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
export const API_GITHUB_URL = process.env.API_GITHUB_URL;

export const EVENT_MOUSEDOWN = "mousedown";
export const EVENT_POINTERDOWN = "pointerdown";
export const EVENT_KEYDOWN = "keydown";
export const KEY_ESCAPE = "Escape";

export const inter = Inter({
  subsets: ["latin"],
  weight: ["200", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-inter",
});

// Referência: https://github.com/github/linguist/blob/master/lib/linguist/languages.yml
export const languageColors: Record<string, string> = {
  HTML: "#e34c26",
  CSS: "#563d7c",
  JavaScript: "#f1e05a",
  TypeScript: "#3178c6",
  Python: "#3572A5",
  Java: "#b07219",
  "C#": "#178600",
  PHP: "#4F5D95",
  Ruby: "#701516",
  Go: "#00ADD8",
  Rust: "#dea584",
  Shell: "#89e051",
  Vue: "#41b883",
  Kotlin: "#A97BFF",
  Swift: "#F05138",
  Dart: "#00B4AB",
};

