import React from "react";

export const AdsenseAd = () => {
  React.useEffect(() => {
    try {
      if (typeof window !== "undefined") {
        // eslint-disable-next-line
        ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push(
          {},
        );
      }
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <ins
      className="adsbygoogle"
      data-ad-client={process.env.NEXT_PUBLIC_ADSENSE_CLIENT}
      data-ad-format="auto"
      data-ad-slot={process.env.NEXT_PUBLIC_ADSENSE_SLOT}
      data-adtest={process.env.NODE_ENV === "development" ? "on" : "off"}
      data-full-width-responsive="true"
      style={{ display: "block" }}
    />
  );
};
