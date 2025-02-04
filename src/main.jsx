import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import { Achievements, ContactUs, Team, Events } from "./pages/index.js";
import "./index.css";
import App from "./App.jsx";
import Technitude from "./pages/Technitude.jsx";
import Milestone from "./pages/Milestone.jsx";
import Wrkshop from "./pages/Wrkshop.jsx";
import Faculty from "./pages/Faculty.jsx";
import Credits from "./pages/Credits.jsx";
import AboutUs from "./pages/AboutUs.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/team" element={<Team />} />
        <Route path="/events" element={<Events />} />
        <Route path="/Technitude" element={<Technitude />} />
        <Route path="/milestone" element={<Milestone />} />
        <Route path="/workshop" element={<Wrkshop />} />
        <Route path="/faculty" element={<Faculty />} />
        <Route path="/credits" element={<Credits />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
