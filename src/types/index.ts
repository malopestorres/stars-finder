import type { ReactNode } from "react";

export type SearchStatus = "idle" | "loading" | "success" | "error";

export type SearchState = {
  isFocus: boolean;
  status: SearchStatus;
  user: GitHubUser | null;
};

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
  email: string | null;
  followers: number;
  following: number;
  login: string;
  public_repos: number;
};

export type CardSearchUserProps = {
  user: GitHubUser;
  onNavigate?: () => void;
};

export type RouteProps = {
  params: Promise<{
    username: string;
  }>;
};
