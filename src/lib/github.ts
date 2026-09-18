import axios from "axios";
import type { GitHubUser } from "@/types";

const token = process.env.GITHUB_TOKEN;
const baseURL = process.env.API_GITHUB_URL;

export const githubApi = axios.create({
  baseURL,
  headers: {
    Accept: "application/vnd.github+json",
    ...(token && { Authorization: `Bearer ${token}` }),
    "X-GitHub-Api-Version": "2022-11-28",
  },
});

export async function getGitHubUser(username: string) {
  const { data } = await githubApi.get<GitHubUser>(`/users/${username}`);

  return data;
}
