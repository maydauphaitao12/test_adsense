// src/App.js

import React from "react";
import "./App.css";
import AdComponent from "./AdComponent";

function App() {
  const adsTxtUrl = "https://test-adsense.vercel.app/ads.txt"; // Địa chỉ của ads.txt

  const openAdsTxt = () => {
    window.open(adsTxtUrl); // Mở liên kết trong tab mới
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My Test AdSense Page</h1>
        <p>Check out the ad below:</p>
        <AdComponent slot={'2135685733'} />
      </header>

      <main className="App-content">
        <section className="content">
          <h2>Main Content Area</h2>
          <p>
            This is the main content area. You can add text, images, or other components here.
          </p>
        </section>

        {/* Quảng cáo AdSense */}
        <h2>Quảng cáo ở đây</h2>
        <AdComponent slot={'6171133665'} />

        <section className="content">
          <h2>Another Section</h2>
          <p>
            This is another section of content. More text and other information can go here.
          </p>
        </section>

        {/* Nút để mở trang ads.txt */}
        <button onClick={openAdsTxt} style={{ marginTop: '20px' }}>
          Xem Nội Dung ads.txt
        </button>
      </main>

      <footer className="App-footer">
        <p>&copy; 2024 My Test AdSense Page</p>
      </footer>
    </div>
  );
}

export default App;
