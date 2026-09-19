import { notFound } from "next/navigation";
import ButtonBack from "@/components/ButtonBack";
import CardSearchUser from "@/components/CardSearchUser";
import RepoList from "@/components/RepoList";
import { getGitHubUser, getGitHubUserRepos } from "@/lib/github";
import type { GitHubUserPageProps } from "@/types";

export default async function GitHubUserPage({ params }: GitHubUserPageProps) {
  const { username } = await params;
  let user, repos;

  try {
    [user, repos] = await Promise.all([
      getGitHubUser(username),
      getGitHubUserRepos(username),
    ]);
  } catch (error: any) {
    if (error?.response?.status === 404) notFound();
  
    throw error;
  }

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
