import React, { useEffect, useRef } from "react";

const AdComponent = ({ slot }) => {
  const adRef = useRef(null);

  useEffect(() => {
    // Tải mã quảng cáo chỉ một lần
    const loadAdScript = () => {
      const script = document.createElement("script");
      script.async = true;
      script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5706143351800743";
      script.crossOrigin = "anonymous";
      document.body.appendChild(script);
    };

    if (!window.adsbygoogle) {
      loadAdScript();
    }

    if (adRef.current && !adRef.current.hasAd) {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
        adRef.current.hasAd = true; // Đánh dấu quảng cáo đã được tải          
      } catch (e) {
        console.error("AdSense error:", e);
      }
    }
  }, []);

  return (
    <div className="ad-container" style={{ textAlign: "center", margin: "20px 0" }}>
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={{ display: "block", width: "100%", height: "100px" }}
        data-ad-client="ca-pub-5706143351800743"
        data-ad-slot={slot}
        data-ad-format="auto"
        data-full-width-responsive="true"
        data-ad-test="on" // Bật chế độ Test Ads
      ></ins>
    </div>
  );
};

export default AdComponent;
