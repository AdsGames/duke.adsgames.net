import Head from "next/head";
import Link from "next/link";

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
    </Head>

    <div className="logo">
      <Link href="/">
        <a>
          <img
            alt="Duke Nuke Says Logo"
            height={100}
            src="/logo.png"
            width={300}
          />
        </a>
      </Link>
    </div>

    <div className="content">{children}</div>

    <div className="link">
      Created by a bored employee at{" "}
      <Link href="https://www.adsgames.net">
        <a>A.D.S. Games</a>
      </Link>
    </div>
  </>
);
