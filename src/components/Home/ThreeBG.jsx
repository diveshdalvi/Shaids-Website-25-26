/* eslint-disable no-unused-vars */

import React from "react";
import Spline from "@splinetool/react-spline";
// import assets from "../assets/asset";

const ThreeBG = ({ setLoading }) => {
  // Handle the loading state change when the scene is loaded
  const handleLoad = () => {
    setLoading(false); // Mark loading as false when the scene has finished loading
  };

  return (
    <div className="relative w-full h-screen">
      {/* Spline scene container */}
      <Spline
        className="absolute top-0 left-0 w-full h-full"
        scene="https://prod.spline.design/vTwioKQtvdizYR0c/scene.splinecode"
        onLoad={handleLoad} // Trigger when the scene finishes loading
      />

      {/* Optional: Red div fixed on top-right */}
      <div className="absolute bottom-0 right-0 bg-black w-40 h-20 z-20">
        <img className="ml-10 w-20 h-20" src="src\assets\images\logo.svg" alt="Logo" />
      </div>
    </div>
  );
};

export default ThreeBG;
