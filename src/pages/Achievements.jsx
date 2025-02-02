import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import AchievementBox from "../components/Achivements/AchievementBox";
import achievements from "../data/data";
// import { ChevronLeft, ChevronRight } from "lucide-react";

const Achievements = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  // Handle Navigation State
  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  // Go to Previous Slide
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  // Go to Next Slide
  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  // Attach event listeners
  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  return (
    <div className="bg-bgGradient flex flex-col justify-center min-h-screen h-full">
      {/* Header Section */}
      <div className="p-10 pb-5">
        <div className="flex flex-col items-center gap-8 sm:hidden mb-10">
          <h1 className="text-white text-3xl font-NordBold">Achievements</h1>
          <img
            src="src/assets/images/achievements_page.png"
            alt="Achievements"
            className="h-auto"
          />
          <p className="text-[#A576DF] text-center text-lg font-Outfit font-semibold">
            Our college celebrates top academic rankings, innovative research, and impactful community service. We’re proud of our students!
          </p>
        </div>
      </div>

      {/* Embla Carousel */}
      <div className="relative max-w-4xl mx-auto px-4">
        {/* Navigation Arrows */}
        <button
          onClick={scrollPrev}
          className={`absolute left-0 top-1/2 transform -translate-y-1/2 bg-darkblue p-2 rounded-full z-10 ${
            canScrollPrev ? "opacity-100" : "opacity-50 pointer-events-none"
          }`}
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {Object.keys(achievements).map((key, index) => (
              <div key={index} className="flex-[0_0_100%] px-2">
                <AchievementBox
                  achievementname={achievements[key].title}
                  achievementdesc={achievements[key].description}
                  achievementimg={achievements[key].img}
                  className="w-full bg-purple-600 text-white rounded-lg p-4 shadow-md mx-auto"
                />
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={scrollNext}
          className={`absolute right-0 top-1/2 transform -translate-y-1/2 bg-darkblue p-2 rounded-full z-10 ${
            canScrollNext ? "opacity-100" : "opacity-50 pointer-events-none"
          }`}
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>
      </div>
    </div>
  );
};

export default Achievements;
