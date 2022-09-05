import * as Sentry from "@sentry/nextjs";

const SENTRY_DSN = process.env.SENTRY_DSN ?? process.env.NEXT_PUBLIC_SENTRY_DSN;

Sentry.init({
  dsn:
    SENTRY_DSN ??
    "https://b1aaa61ee97e478a933024617b2c0811@o1178011.ingest.sentry.io/6717246",
  tracesSampleRate: 1.0,
});
