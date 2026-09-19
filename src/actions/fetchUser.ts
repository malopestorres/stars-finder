import { notFound } from "next/navigation";
import { getGitHubUser, getGitHubUserRepos } from "@/lib/github";

export async function fetchUser(username: string) {
  try {
    const [user, repos] = await Promise.all([
      getGitHubUser(username),
      getGitHubUserRepos(username),
    ]);

    return { user, repos };
  } catch (error: any) {
    if (error?.response?.status === 404) notFound();

    throw error;
  }
}
