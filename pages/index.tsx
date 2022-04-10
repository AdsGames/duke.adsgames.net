import Link from "next/link";

import { Layout } from "@/components/Layout";
import { SAYINGS } from "@/constants/sayings";

const HomePage = () => (
  <Layout description="Duke Nukem soundboard" title="Home">
    <h1>Duke Nukem Says...</h1>
    <div className="sayings">
      {SAYINGS.map((saying) => (
        <Link href={`/${saying.id}`} key={saying.id} prefetch={false}>
          <a>
            <p>{saying.text}</p>
          </a>
        </Link>
      ))}
    </div>
  </Layout>
);

export default HomePage;
