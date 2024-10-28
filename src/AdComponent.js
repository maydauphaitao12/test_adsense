import React, { useEffect, useRef } from "react";

const AdComponent = ({ slot }) => {
  const adRef = useRef(null);

  useEffect(() => {
    const loadAdScript = () => {
      const script = document.createElement("script");
      script.async = true;
      script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5706143351800743";
      script.crossOrigin = "anonymous";
      document.body.appendChild(script);
    };

    const pushAd = () => {
      if (adRef.current && adRef.current.offsetWidth > 0) {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    };

    loadAdScript();

    // Wait for the ad container to have a defined width before pushing the ad
    const observer = new MutationObserver(() => {
      if (adRef.current && adRef.current.offsetWidth > 0) {
        pushAd();
        observer.disconnect(); // Stop observing after the ad is pushed
      }
    });

    observer.observe(adRef.current, { attributes: true, childList: true, subtree: true });

    // Cleanup on component unmount
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="ad-container">
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={{ display: "block", width: "100%", height: "100px" }}
        data-ad-client="ca-pub-5706143351800743"
        data-ad-slot={slot}
        data-ad-format="auto"
        data-full-width-responsive="true"
        data-ad-test="on" // Enable Test Ads
      ></ins>
    </div>
  );
};

export default AdComponent;
