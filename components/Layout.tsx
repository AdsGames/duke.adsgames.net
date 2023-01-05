import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import Logo from "../public/logo.webp";
import styles from "./Layout.module.css";

interface LayoutProps {
  title: string;
  description: string;
}

export const Layout: React.FC<React.PropsWithChildren<LayoutProps>> = ({
  title,
  description,
  children,
}) => (
  <>
    <Head>
      <title>{`${title} - Duke Nuke Says`}</title>
      <meta content={description} name="description" />

      <meta content="Duke Nukem Says" property="og:site_name" />
      <meta content={title} property="og:title" />
      <meta content="website" property="og:type" />
      <meta content="/logo.webp" property="og:image" />
      <meta content={description} property="og:description" />

      <link href="/favicon.png" rel="shortcut icon" />
      <link href="/favicon.png" rel="apple-touch-icon" />
      <link href="/favicon.png" rel="icon" />
      <link href="/manifest.json" rel="manifest" />

      <meta content="Allan Legemaate" name="author" />
      <meta content="#000" name="theme-color" />
      <meta content="width=device-width, initial-scale=1" name="viewport" />
    </Head>

    <header className={styles.header}>
      <Link href="/">
        <a>
          <Image alt="Duke Nuke Says Logo" height={79} src={Logo} width={300} />
        </a>
      </Link>
    </header>

    <main className={styles.content}>{children}</main>

    <footer className={styles.link}>
      Created by a bored employee at{" "}
      <Link href="https://www.adsgames.net">
        <a>A.D.S. Games</a>
      </Link>
    </footer>
  </>
);
