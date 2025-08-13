import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Desktop } from "./screens/Desktop";
import { Gallery } from "./screens/Gallery";
import { Certifications } from "./screens/Certifications";
import { Projects } from "./screens/Projects";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Desktop />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/certifications" element={<Certifications />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>
  </StrictMode>,
);
