import type { AppProps } from "next/app";
import Script from "next/script";
import React from "react";

import * as gtag from "@/lib/gtag";
import "@/styles/global.css";

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <Script
      src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
      strategy="afterInteractive"
    />
    <Script
      dangerouslySetInnerHTML={{
        __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
      }}
      id="gtag-init"
      strategy="afterInteractive"
    />
    <Component {...pageProps} />
  </>
);

export default App;
