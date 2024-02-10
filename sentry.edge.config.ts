import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://b1aaa61ee97e478a933024617b2c0811@o1178011.ingest.sentry.io/6717246",
  tracesSampleRate: 1,
  debug: false,
});
