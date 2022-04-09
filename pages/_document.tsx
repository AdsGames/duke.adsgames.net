import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link href="/favicon.png" rel="icon" type="image/png" />

        {/* <script type="text/javascript">
          var _gaq = _gaq || [];
          _gaq.push(["_setAccount", "UA-34470404-1"]);
          _gaq.push(["_trackPageview"]);

          (function () {
            var ga = document.createElement("script");
            ga.type = "text/javascript";
            ga.async = true;
            ga.src =
              ("https:" == document.location.protocol ? "https://" : "http://") +
              "stats.g.doubleclick.net/dc.js";
            var s = document.getElementsByTagName("script")[0];
            s.parentNode.insertBefore(ga, s);
          })();
        </script> */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
