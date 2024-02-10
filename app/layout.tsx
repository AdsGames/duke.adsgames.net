/* eslint-disable react/no-danger */
import { GoogleAnalytics } from "@next/third-parties/google";
import type { Metadata, Viewport } from "next";
import Image from "next/image";
import Link from "next/link";

import { WEBSITE_INFO } from "@/constants/website-info";

import Logo from "../public/logo.webp";
import "./global.css";
import styles from "./layout.module.css";

export const metadata: Metadata = {
  openGraph: {
    siteName: "Duke Nukem Says",
    type: "website",
    images: ["/logo.webp"],
  },
  authors: [{ name: "Allan Legemaate" }],
  manifest: "/manifest.json",
  metadataBase: new URL(WEBSITE_INFO.url),
};

export const viewport: Viewport = {
  themeColor: "#000",
};

interface LayoutProps {
  readonly children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => (
  <html lang="en">
    <head>
      <link href="/icon.png" rel="shortcut icon" />
      <link href="/icon.png" rel="apple-touch-icon" />
      <link href="/favicon.png" rel="icon" />
      <script
        async
        crossOrigin="anonymous"
        src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${
          process.env.NEXT_PUBLIC_ADSENSE_CLIENT ?? ""
        }`}
      />
    </head>

    <body>
      <header className={styles.header}>
        <Link href="/">
          <Image alt="Duke Nuke Says Logo" height={79} src={Logo} width={300} />
        </Link>
      </header>

      <main className={styles.content}>{children}</main>

      <footer className={styles.link}>
        Created by a bored employee at{" "}
        <Link href="https://www.adsgames.net">A.D.S. Games</Link>
      </footer>
    </body>
    <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID ?? ""} />
  </html>
);

export default Layout;
