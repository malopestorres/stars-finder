import { getGitHubUser } from "@/lib/github";
import { GitHubUserPageProps } from "@/types";

export default async function GitHubUserPage({ params }: GitHubUserPageProps) {
  const { username } = await params;
  const user = await getGitHubUser(username);

  return (
    <main className="container py-5">
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </main>
  );
}
