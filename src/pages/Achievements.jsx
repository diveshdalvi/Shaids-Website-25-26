import React, { useEffect } from "react";
import Navbar from "../components/Common/Navbar";
import useEmblaCarousel from "embla-carousel-react";
import AchievementBox from "../components/Achivements/AchievementBox";
import achievements from "../data/data.js"; // Import the data

const Achievements = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false, // Infinite scrolling
    spped: 15,
    slidesToScroll: 1, // Scroll one slide at a time
  });

  useEffect(() => {
    if (emblaApi) {
      emblaApi.reInit(); // Ensure the carousel re-initializes
    }
  }, [emblaApi]);

  // Convert the achievements object to an array of values
  const achievementsArray = Object.values(achievements);

  return (
    <div className="bg-bgGradient flex flex-col min-h-screen h-full">
      <Navbar />
      {/* Header Section */}
      <div className="p-10 pb-5 mt-20">
        {/* Mobile Design */}
        <div className="flex flex-col gap-8 sm:hidden mb-10">
          <h1 className="text-white text-3xl font-NordBold self-center">
            Achievements
          </h1>
          <img
            src="src/assets/images/achievements_page.png"
            alt="Achievements"
            className="size-36 self-center"
          />
          <p className="text-[#A576DF] text-center text-lg font-Outfit font-semibold">
            Our college celebrates top academic rankings, innovative research,
            and impactful community service. We’re proud of our students!
          </p>
        </div>
        {/* Desktop & Tablet Design */}
        <div className="sm:flex hidden mb-10 w-full justify-around">
          <div className="flex flex-col gap-4 justify-center">
            <h1 className="text-white text-6xl font-NordBold">Achievements</h1>
            <p className="text-[#A576DF] text-xl leading-relaxed max-w-xl mx-auto font-Outfit flex flex-col">
              Our college celebrates top academic rankings, innovative research,
              and impactful community service.{" "}
              <span>We’re proud of our students!</span>
            </p>
          </div>
          <img
            src="src/assets/images/achievements_page.png"
            alt="Achievements"
            className="size-72 object-cover object-center"
          />
        </div>
      </div>

      {/* Carousel Section (Mobile Only) */}
      <div className="sm:hidden">
        <div className="embla" ref={emblaRef}>
          <div className="embla__container">
            {achievementsArray.map((achievement, index) => (
              <div key={index} className="embla__slide">
                <AchievementBox
                  achievementname={achievement.title}
                  achievementdesc={achievement.description}
                  achievementimg={achievement.img}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
