import Link from "next/link";
import CardSearchUser from "@/components/CardSearchUser";
import { getGitHubUser } from "@/lib/github";
import { GitHubUserPageProps } from "@/types";

export default async function GitHubUserPage({ params }: GitHubUserPageProps) {
  const { username } = await params;
  const user = await getGitHubUser(username);

  return (
    <main className="container py-4">
      <div className="mb-4">
        <Link href="/" className="btn-back">
          Voltar
        </Link>
      </div>

      <CardSearchUser user={user} variant="full" />
    </main>
  );
}
