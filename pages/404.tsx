import Head from "next/head";
import Link from "next/link";

const Custom404 = () => (
  <>
    <Head>
      <title>404 Not Found - Duke Nukem Says</title>
      <meta content="Page not found" name="description" />
    </Head>

    <div className="content">
      <h2>404 Page not found</h2>
      <Link href="/">
        <a>Go back to the homepage</a>
      </Link>
    </div>
  </>
);

export default Custom404;
