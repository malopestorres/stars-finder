import ButtonBack from "@/components/ButtonBack";
import CardRepositoryDetail from "@/components/CardRepositoryDetail";
import { fetchRepo } from "@/actions/fetchRepo";
import type { GitHubRepoPageProps } from "@/types";

export default async function RepositoryUserPage({
  params,
}: GitHubRepoPageProps) {
  const { username, repository } = await params;
  const repo = await fetchRepo(username, repository);

  return (
    <main className="container py-4">
      <div className="mb-4">
        <ButtonBack href={`/${username}`} />
      </div>

      <CardRepositoryDetail repository={repo} />
    </main>
  );
}
