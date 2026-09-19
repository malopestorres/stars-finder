import ButtonBack from "@/components/ButtonBack";
import CardSearchUser from "@/components/CardSearchUser";
import RepoList from "@/components/RepoList";
import { fetchUser } from "@/actions/fetchUser";
import type { GitHubUserPageProps } from "@/types";

export default async function GitHubUserPage({ params }: GitHubUserPageProps) {
  const { username } = await params;
  const { user, repos } = await fetchUser(username);

  return (
    <main className="container py-4">
      <div className="mb-4">
        <ButtonBack />
      </div>

      <CardSearchUser user={user} variant="full" />
      <RepoList repositories={repos} username={username} />
    </main>
  );
}
