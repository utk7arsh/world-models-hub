import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Engram — A Second Brain for World Models",
  description:
    "A living knowledge graph of world-models research. Papers as notes, lineage as memory traces — a self-maintaining second brain in the spirit of Obsidian and Karpathy's LLM wiki.",
  keywords: [
    "world models",
    "knowledge graph",
    "second brain",
    "model-based RL",
    "Dreamer",
    "MuZero",
    "JEPA",
    "research",
  ],
};

export const viewport: Viewport = {
  themeColor: "#05060b",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;0,6..72,600;1,6..72,400;1,6..72,500&family=IBM+Plex+Sans:wght@300;400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <div className="engram-bg" aria-hidden />
        {children}
      </body>
    </html>
  );
}
