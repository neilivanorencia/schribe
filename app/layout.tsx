import type { Metadata } from "next";
import "@/app/globals.css";

import { Inter } from "next/font/google";

import { ConvexClientProvider } from "@/components/convex-provider";
import { ModalProvider } from "@/components/modal-provider";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { EdgeStoreProvider } from "@/lib/edgestore";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Schribe — Capture Ideas and Conquer Your Day",
    template: "%s — Schribe",
  },
  description: "A minimalistic note-taking web application for capturing and organizing thoughts offering features such as nested documents, cover images, and public sharing capabilities with modern, user-friendly text editing through multiple text formatting options.",
  metadataBase: new URL("https://schribe.vercel.app/"),
  keywords: [
    "Schribe",
    "note-taking",
    "Blocknotes",
    "real-time collaboration",
    "Convex database",
    "nested documents",
    "dual theme system",
    "text formatting",
    "document archiving",
    "public sharing",
    "knowledge management",
    "productivity tool",
    "markdown alternative",
    "dark mode",
    "note organization",
    "hierarchical documents",
    "cloud sync",
  ],
  authors: [
    { name: "Neil Ivan Orencia", url: "https://github.com/neilivanorencia" },
  ],
  creator: "Neil Ivan Orencia",
  publisher: "Neil Ivan Orencia",
  openGraph: {
    type: "website",
    title: "Schribe — Capture Ideas and Conquer Your Day",
    description: "Transform your note-taking experience with real-time sync, hierarchical documents, and powerful text formatting. Available in light/dark themes.",
    url: "https://schribe.vercel.app/",
    siteName: "Schribe",
    images: [
      {
        url: "https://schribe.vercel.app/website-preview.png",
        width: 1200,
        height: 630,
        alt: "Schribe Interface Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Schribe — Capture Ideas and Conquer Your Day",
    description: "Capture ideas instantly with block-based editing, real-time sync, and public sharing. Experience modern note management with dual themes.",
    images: [
      {
        url: "https://schribe.vercel.app/website-preview.png",
        width: 1200,
        height: 630,
        alt: "Schribe Twitter Preview",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://schribe.vercel.app/",
  },
  applicationName: "Schribe",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/icon-light.svg",
        href: "/icon-light.svg",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/icon-dark.svg",
        href: "/icon-dark.svg",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ConvexClientProvider>
          <EdgeStoreProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              storageKey="theme"
              enableSystem
              disableTransitionOnChange
            >
              <Toaster />
              <ModalProvider />
              {children}
            </ThemeProvider>
          </EdgeStoreProvider>
        </ConvexClientProvider>
      </body>
    </html>
  );
}
