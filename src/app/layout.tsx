import type { Metadata } from "next";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import Header from "../components/Header";
import { inter } from "@/constants";

export const metadata: Metadata = {
  title: "Stars Finder",
  description: "Explore o GitHub de um jeito simples.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
