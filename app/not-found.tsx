import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "404 Not Found - Duke Nuke Says",
  description: "Page not found",
};

const NotFound = () => (
  <>
    <h2>404 Page not found</h2>
    <Link href="/">Go back to the homepage</Link>
  </>
);

export default NotFound;
