import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { FlipNav } from "@/components/nav-bar/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Stock-Mind-BR ",
  description: "...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-Br">
      <body className={inter.className}>
        <FlipNav />
        {children}
      </body>
    </html>
  );
}
