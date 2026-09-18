import { HomeContentCardProps } from "../types";

export default function HomeContentCard({ children }: HomeContentCardProps) {
  return (
    <article className="card home-content-card h-100">
      <div className="card-body">{children}</div>
    </article>
  );
}
