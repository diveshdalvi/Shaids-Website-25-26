/* eslint-disable no-unused-vars */

import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./components/Common/Navbar";
import ThreeBG from "./components/Home/ThreeBG";
import Loader from "./components/Home/Loader";

const App = () => {
  const [loading, setLoading] = useState(() => {
    return localStorage.getItem("hasLoaded") ? false : true;
  });

  const [showMain, setShowMain] = useState(false);
  const location = useLocation(); // Get the current route

  useEffect(() => {
    if (!loading) {
      // Delay main content rendering by 600ms after loader disappears
      const timeout = setTimeout(() => setShowMain(true), 600);
      return () => clearTimeout(timeout);
    }
  }, [loading]);

  useEffect(() => {
    if (loading) {
      // Mark as loaded in localStorage to prevent showing loader again
      localStorage.setItem("hasLoaded", "true");
    }
  }, [loading]);

  return (
    <>
      {loading ? (
        <Loader onComplete={() => setLoading(false)} />
      ) : (
        showMain && (
          <div>
            <Navbar />
            <ThreeBG setLoading={setLoading} />
          </div>
        )
      )}
    </>
  );
};

export default App;
