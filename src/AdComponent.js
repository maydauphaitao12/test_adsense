import React, { useEffect, useRef } from "react";

const AdComponent = ({slot}) => {
    const adRef = useRef(null);

    useEffect(() => {
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
    <div className="ad-container" style={{ textAlign: "center", margin: "20px 0"}}>
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={{ display: "block", width: "100%", height: "100px" }}
        data-ad-client="ca-pub-5706143351800743"
        data-ad-slot={slot}
        data-ad-format="auto"
        data-full-width-responsive="true"
        data-ad-test="on" // Bật chế độ Test Ads
        // data-ad-status={'filled'}
      ></ins>
    </div>
  );
};

export default AdComponent;
