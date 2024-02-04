import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PromptArt Create - Text to image",
  description: "Generated image by a text as a prompt",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} container m-auto grid min-h-screen grid-rows-[auto,1fr,auto] px-4 antialiased bg-[#343541] text-white overflow-hidden`}
      >
        <header className="text-xl font-bold leading-[4rem]">
          <Link href="/">
            PromptArt <span className="text-[#8b8fa5]">Create</span>
          </Link>
        </header>
        <main className="py-4">{children}</main>
        <footer className="flex items-center justify-center pb-8 text-xs">
          Sitio creado por
          <Link
            className="text-[#8b8fa5] hover:text-sky-700 ml-1 font-bold"
            href={"https://github.com/gabrieloporto"}
            target="_blank"
          >
            Gabriel Oporto
          </Link>
        </footer>
      </body>
    </html>
  );
}
