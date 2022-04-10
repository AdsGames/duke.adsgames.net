export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID ?? "";

export const pageview = (url: string) => {
  window.gtag("config", GA_TRACKING_ID, {
    page_path: url,
  });
};

export const event = (
  action: string,
  params: Gtag.ControlParams | Gtag.CustomParams | Gtag.EventParams,
) => {
  window.gtag("event", action, params);
};
