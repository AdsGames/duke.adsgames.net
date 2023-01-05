import Link from "next/link";
import { useEffect, useState } from "react";

import type { Saying } from "@/constants/sayings";
import { randomSayings } from "@/lib/random-sayings";

import styles from "./RandomSayings.module.css";

export const RandomSayings = () => {
  const [sayings, setSayings] = useState<Saying[]>([]);

  useEffect(() => {
    setSayings(randomSayings(4));
  }, []);

  return (
    <section>
      <h3 className={styles.title}>View More Quotes:</h3>
      <ul className={styles.list}>
        {sayings.map((saying) => (
          <li className={styles.list_item} key={saying.id}>
            <Link href={`/${saying.id}`}>
              <a>{saying.text}</a>
            </Link>
          </li>
        ))}
        <li className={styles.list_item}>
          <Link href="/">
            <a>View All</a>
          </Link>
        </li>
      </ul>
    </section>
  );
};
