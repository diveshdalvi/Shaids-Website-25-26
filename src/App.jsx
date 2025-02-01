/* eslint-disable no-unused-vars */

import React, { useEffect, useState } from "react";
import Navbar from "./components/Common/Navbar";
import ThreeBG from "./components/Home/ThreeBG";
import Loader from "./components/Home/Loader";

const App = () => {
  const [loading, setLoading] = useState(true); // Manage loading state in App.jsx
  const [showMain, setShowMain] = useState(false);

  useEffect(() => {
    if (!loading) {
      // Delay main content rendering by 500ms after loader disappears
      const timeout = setTimeout(() => setShowMain(true), 600);
      return () => clearTimeout(timeout); // Cleanup timeout
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
            {/* Pass loading state down as prop */}
            <ThreeBG setLoading={setLoading} />
          </div>
        )
      )}
    </>
  );
};

export default App;
