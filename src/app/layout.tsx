import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Stars Finder",
  description: "Explore o GitHub de um jeito simples.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
