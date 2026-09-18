import type { ReactNode } from "react";

export type HomeContentCardProps = {
  children: ReactNode;
};
export type GitHubUserPageProps = {
  params: Promise<{
    username: string;
  }>;
};

export type GitHubUser = {
  avatar_url: string;
  bio: string | null;
  followers: number;
  following: number;
  login: string;
  public_repos: number;
};

export type CardSearchUserProps = {
  user: GitHubUser;
};

export type RouteProps = {
  params: Promise<{
    username: string;
  }>;
};
