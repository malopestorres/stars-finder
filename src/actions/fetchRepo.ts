import { notFound } from "next/navigation";
import { getGitHubRepo } from "@/lib/github";

export async function fetchRepo(username: string, repository: string) {
  try {
    return await getGitHubRepo(username, repository);
  } catch (error: any) {
    if (error?.response?.status === 404) notFound();

    throw error;
  }
}
