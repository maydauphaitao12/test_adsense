import React, { useEffect, useState } from "react";

const AdsTxtComponent = () => {
  const [adsTxtContent, setAdsTxtContent] = useState("");

  useEffect(() => {
    const fetchAdsTxt = async () => {
      try {
        const response = await fetch("/ads.txt"); // Đường dẫn đến file ads.txt
        if (!response.ok) {
          throw new Error("Failed to fetch ads.txt");
        }
        const text = await response.text();
        setAdsTxtContent(text);
      } catch (error) {
        console.error("Error fetching ads.txt:", error);
      }
    };

    fetchAdsTxt();
  }, []);

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>Nội dung của ads.txt</h2>
      <pre>{adsTxtContent}</pre>
    </div>
  );
};

export default AdsTxtComponent;
