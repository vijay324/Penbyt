import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://f8e919092d2d340cda414ec27b5a6936@o4508454587793408.ingest.us.sentry.io/4508454590545920",
  integrations: [
    Sentry.feedbackIntegration({
      // Additional SDK configuration goes in here, for example:
      colorScheme: "system",
    }),
  ],
});
