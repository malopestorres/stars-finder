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

export type GitHubRepoPageProps = {
  params: Promise<{
    username: string;
    repository: string;
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
  html_url?: string;
};

export type CardSearchUserProps = {
  user: GitHubUser;
  variant?: "compact" | "full";
  onNavigate?: () => void;
};

export type RouteProps = {
  params: Promise<{
    username: string;
  }>;
};

export type GitHubRepository = {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  watchers_count?: number;
  language: string | null;
  updated_at: string;
};

export type CardRepositoryProps = {
  repository: GitHubRepository;
  username: string;
};

export type ButtonBackProps = {
  href?: string;
  className?: string;
};

export type SearchBackdropProps = {
  isVisible: boolean;
};

export type StatusItemProps = {
  icon?: string;
  dotColor?: string;
  children: ReactNode;
  className?: string;
};

export type SortOption = "stars" | "forks" | "name-asc" | "name-desc";

export type SortDropdownProps = {
  sortBy: SortOption;
  onSelect: (option: SortOption) => void;
};

export type RepoListProps = {
  repositories: GitHubRepository[];
  username: string;
};
