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

