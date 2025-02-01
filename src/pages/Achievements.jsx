import React, { useState } from "react";
import AchievementBox from "../components/Achivements/AchievementBox";
import achievements from "../data/data";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const Achievements = () => {
  const [currentSlide, setCurrentSlide] = useState(0); // Track the current slide index

  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3, // Display 3 slides at a time
      spacing: 1, // Space between slides
    },
    loop: true,
    centered: true, // Center the active slide
    slideChanged(s) {
      setCurrentSlide(s.track.details.rel); // Update the current slide index
    },
  });

  return (
    <div className="bg-bgGradient flex flex-col justify-center min-h-screen h-full">
      {/* Header Section */}
      <div className="p-10 pb-5">
        {/* Mobile View */}
        <div className="flex flex-col items-center gap-8 sm:hidden mb-10">
          <h1 className="text-white text-3xl font-NordBold">Achievements</h1>
          <img
            src="/assets/images/achievements_page.png"
            alt="Achievements Illustration"
            className="w-64 h-auto"
          />
          <p className="text-[#A576DF] text-center text-lg font-Outfit font-semibold">
            Our college celebrates top academic rankings, innovative research,
            and impactful community service. We’re proud of our students!
          </p>
        </div>

        {/* Tablet & Desktop View */}
        <div className="hidden sm:flex items-center gap-12 p-10 mb-12">
          <div className="flex flex-col gap-4 max-w-lg">
            <h1 className="text-white text-5xl 2xl:text-6xl font-NordBold">
              Achievements
            </h1>
            <p className="text-[#A576DF] text-left text-lg 2xl:text-xl font-Outfit font-semibold">
              Our college celebrates top academic rankings, innovative research,
              and impactful community service. We’re proud of our students!
            </p>
          </div>
          <img
            src="/assets/images/achievements_page.png"
            alt="Achievements Illustration"
            className="w-80 h-auto 2xl:w-96"
          />
        </div>
      </div>

      {/* Keen Slider Section */}
      <div className="py-4 w-full">
        <div ref={sliderRef} className="keen-slider">
          {Object.keys(achievements).map((key, index) => (
            <div
              key={index}
              className={`keen-slider__slide flex justify-center items-center ${
                index === currentSlide
                  ? "scale-105 z-10" // Larger scale for the active slide
                  : "scale-20 opacity-75 " // Smaller and dimmer for surrounding slides
              }`}
            >
              <AchievementBox
                achievementname={achievements[key].title}
                achievementdesc={achievements[key].description}
                achievementimg={achievements[key].img}
                className="w-full max-w-[300px] bg-purple-600 text-white rounded-lg p-4 shadow-md"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Achievements;
