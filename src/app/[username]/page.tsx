import Link from "next/link";
import CardSearchUser from "@/components/CardSearchUser";
import RepoList from "@/components/RepoList";
import { getGitHubUser, getGitHubUserRepos } from "@/lib/github";
import type { GitHubUserPageProps } from "@/types";

export default async function GitHubUserPage({ params }: GitHubUserPageProps) {
  const { username } = await params;

  const [user, repos] = await Promise.all([
    getGitHubUser(username),
    getGitHubUserRepos(username),
  ]);

  return (
    <main className="container py-4">
      <div className="mb-4">
        <Link href="/" className="btn-back">
          Voltar
        </Link>
      </div>

      <CardSearchUser user={user} variant="full" />

      <RepoList repositories={repos} username={username} />
    </main>
  );
}
