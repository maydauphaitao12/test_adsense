import React from "react";
import "./App.css";
import AdComponent from "./AdComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My Test AdSense Page</h1>
        <p>Check out the ad below:</p>
        <AdComponent  slot={'2135685733'} />
      </header>

      <main className="App-content">
        <section className="content">
          <h2>Main Content Area</h2>
          <p>
            This is the main content area. You can add text, images, or other components here.
          </p>
        </section>

        {/* Quảng cáo AdSense */}
        <h2>Quang cao o day</h2>
        <AdComponent  slot={'6171133665'} />

        <section className="content">
          <h2>Another Section</h2>
          <p>
            This is another section of content. More text and other information can go here.
          </p>
        </section>
      </main>

      <footer className="App-footer">
        <p>&copy; 2024 My Test AdSense Page</p>
      </footer>
    </div>
  );
}

export default App;
