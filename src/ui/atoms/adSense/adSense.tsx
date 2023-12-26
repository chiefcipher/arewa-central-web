import React, { useEffect } from "react";

export function HomePageAd(): JSX.Element {
  useEffect(() => {
    console.log("entere use effect");
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }, []);
  return (
    <div>
      {/* home page add */}
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-6142130073764384"
        data-ad-slot="5041431895"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </div>
  );
}
