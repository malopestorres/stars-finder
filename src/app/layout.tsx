import type { Metadata } from "next";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import { Inter } from "next/font/google";
import Header from "../components/Header";

export const metadata: Metadata = {
  title: "Stars Finder",
  description: "Explore o GitHub de um jeito simples.",
};

const inter = Inter({
  subsets: ["latin"],
  weight: ["200", "400", "500", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-inter",
});

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
