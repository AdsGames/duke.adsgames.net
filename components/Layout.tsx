import Head from "next/head";
import Link from "next/link";
import type { PropsWithChildren } from "react";

interface LayoutProps {
  title: string;
  description: string;
  isHome?: boolean;
}

export const Layout: React.FC<PropsWithChildren<LayoutProps>> = ({
  title,
  description,
  children,
  isHome = false,
}) => (
  <>
    <Head>
      <title>{title} - Duke Nuke Says</title>
      <meta content={description} name="description" />
    </Head>

    <div className="content">{children}</div>

    {!isHome && (
      <div className="link">
        <Link href="/">
          <a>More from DukeNukemSays</a>
        </Link>
      </div>
    )}

    <div className="link">
      Created by a bored employee at{" "}
      <Link href="https://www.adsgames.net">
        <a>A.D.S. Games</a>
      </Link>
    </div>
  </>
);
