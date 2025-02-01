import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import { Achievements, ContactUs, Team } from "./pages/index.js";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/team" element={<Team />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
