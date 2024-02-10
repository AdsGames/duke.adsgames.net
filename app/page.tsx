import type { Metadata } from "next";
import Link from "next/link";

import { SAYINGS } from "@/constants/sayings";

export const metadata: Metadata = {
  title: "Home - Duke Nuke Says",
  description: "Duke Nukem soundboard",
};

const HomePage = () => (
  <>
    <h1>Duke Nukem Says...</h1>
    <div className="sayings">
      {SAYINGS.map((saying) => (
        <Link href={`/${saying.id}`} key={saying.id} prefetch={false}>
          <p>{saying.text}</p>
        </Link>
      ))}
    </div>
  </>
);

export default HomePage;
