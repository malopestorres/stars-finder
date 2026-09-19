import axios from "axios";
import { API_GITHUB_URL, GITHUB_TOKEN } from "@/constants";
import type { GitHubRepository, GitHubUser } from "@/types";

export const githubApi = axios.create({
  baseURL: API_GITHUB_URL,
  headers: {
    Accept: "application/vnd.github+json",
    ...(GITHUB_TOKEN && { Authorization: `Bearer ${GITHUB_TOKEN}` }),
    "X-GitHub-Api-Version": "2022-11-28",
  },
});

export async function getGitHubUser(username: string) {
  const { data } = await githubApi.get<GitHubUser>(`/users/${username}`);

  return data;
}

export async function getGitHubUserRepos(username: string) {
  const { data } = await githubApi.get<GitHubRepository[]>(
    `/users/${username}/repos?sort=stars&per_page=100`,
  );

  return data;
}

export async function getGitHubRepo(username: string, repository: string) {
  const { data } = await githubApi.get<GitHubRepository>(
    `/repos/${username}/${repository}`,
  );

  return data;
}
