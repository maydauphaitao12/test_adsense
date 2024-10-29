// src/App.js
import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useParams, useNavigate } from "react-router-dom";

function IframeComponent() {
  const { page } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const handleIframeClick = (event) => {
      const target = event.target;
      if (target.tagName === "A" && target.dataset.path) {
        event.preventDefault(); // Prevent the default anchor click behavior
        const newPath = target.dataset.path.replace(".html", ""); // Get the path without .html
        navigate(newPath); // Use react-router's navigate function
      }
    };

    const iframe = document.getElementById("dynamic-iframe");

    // Add click event listener to the iframe's content
    iframe.onload = () => {
      const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
      iframeDocument.addEventListener("click", handleIframeClick);
    };

    // Cleanup the event listener when the component unmounts
    return () => {
      if (iframe) {
        const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
        iframeDocument.removeEventListener("click", handleIframeClick);
      }
    };
  }, [navigate]);

  return (
    <iframe
      id="dynamic-iframe"
      src={`${process.env.PUBLIC_URL}/${page || "about-screen"}.html`}
      title="Dynamic Page"
      style={{ width: "100%", height: "100vh", border: "none" }}
    />
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<IframeComponent />} />
        <Route path="/:page" element={<IframeComponent />} />
      </Routes>
    </Router>
  );
}

export default App;
