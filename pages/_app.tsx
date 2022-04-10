import type { AppProps } from "next/app";
import Script from "next/script";
import React from "react";

import "@/styles/global.css";

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <Script
      src={`https://www.googletagmanager.com/gtag/js?id=${
        process.env.NEXT_PUBLIC_GTM_ID ?? ""
      }`}
      strategy="afterInteractive"
    />
    <Script id="google-analytics" strategy="afterInteractive">
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){window.dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${process.env.NEXT_PUBLIC_GTM_ID ?? ""}');
      `}
    </Script>
    <Component {...pageProps} />
  </>
);

export default App;
