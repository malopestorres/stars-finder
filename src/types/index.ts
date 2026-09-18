import type { ReactNode } from "react";

export type HomeContentCardProps = {
  children: ReactNode;
};
export type GitHubUserPageProps = {
  params: Promise<{
    username: string;
  }>;
};
