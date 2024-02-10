"use client";

import * as Sentry from "@sentry/nextjs";
import Error from "next/error";
import { useEffect } from "react";

interface GlobalErrorProps {
  readonly error: Error;
}

const GlobalError = ({ error }: GlobalErrorProps) => {
  useEffect(() => {
    Sentry.captureException(error);
  }, [error]);

  return (
    <html lang="en">
      <body>
        <Error statusCode={undefined as unknown as number} />
      </body>
    </html>
  );
};

export default GlobalError;
