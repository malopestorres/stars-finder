export function formatTime(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);
  const minutes = Math.floor(diffInSeconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);
  const years = Math.floor(days / 365);

  if (years > 0) {
    return `Atualizado há ${years} ${years === 1 ? "ano" : "anos"}`;
  }
  if (months > 0) {
    return `Atualizado há ${months} ${months === 1 ? "mês" : "meses"}`;
  }
  if (days > 0) {
    return `Atualizado há ${days} ${days === 1 ? "dia" : "dias"}`;
  }
  if (hours > 0) {
    return `Atualizado há ${hours} ${hours === 1 ? "hora" : "horas"}`;
  }
  return "Atualizado recentemente";
}

//referencia: https://github.com/github/linguist/blob/master/lib/linguist/languages.yml
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

