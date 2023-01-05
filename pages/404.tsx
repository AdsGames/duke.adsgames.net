import Link from "next/link";

import { Layout } from "@/components/Layout";

const Custom404 = () => (
  <Layout description="Page not found" title="404 Not Found - Duke Nukem Says">
    <h2>404 Page not found</h2>
    <Link href="/">
      <a>Go back to the homepage</a>
    </Link>
  </Layout>
);

export default Custom404;
