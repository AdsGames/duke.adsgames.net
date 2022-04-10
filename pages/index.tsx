import Link from "next/link";

import { Layout } from "@/components/Layout";
import { SAYINGS } from "@/constants/sayings";

const HomePage = () => (
  <Layout description="Duke Nukem soundboard" isHome title="Home">
    <h2>Duke Nukem Says...</h2>
    <div className="sayings">
      {SAYINGS.map((saying) => (
        <Link href={`/${saying.id}`} key={saying.id}>
          <a>{saying.text}</a>
        </Link>
      ))}
    </div>
  </Layout>
);

export default HomePage;
