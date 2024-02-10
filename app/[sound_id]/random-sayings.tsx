"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import type { Saying } from "@/constants/sayings";
import { randomSayings } from "@/lib/random-sayings";

import styles from "./random-sayings.module.css";

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
            <Link href={`/${saying.id}`}>{saying.text}</Link>
          </li>
        ))}
        <li className={styles.list_item}>
          <Link href="/">View All</Link>
        </li>
      </ul>
    </section>
  );
};
