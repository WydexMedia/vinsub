import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Desktop } from "./screens/Desktop";
import { Gallery } from "./screens/Gallery";
import { Certifications } from "./screens/Certifications";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Desktop />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/certifications" element={<Certifications />} />
      </Routes>
    </Router>
  </StrictMode>,
);
