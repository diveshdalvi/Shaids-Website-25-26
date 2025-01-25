import React from "react";
import AchievementBox from "../components/Achivements/AchievementBox";
import achievements from "../data/data";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Achievements = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="bg-bgGradient flex flex-col justify-center min-h-screen h-full ">
      <div className="p-10 pb-5">
        {/* for mobile device */}
        <div className="flex flex-col items-center gap-12 sm:hidden justify-center mb-10">
          <h1 className="text-white text-3xl font-NordBold">Achievements</h1>
          <img
            src="src/assets/images/achievements_page.png"
            alt="img"
            className="size-auto scale-125"
          />
          <p className="text-[#A576DF] text-center text-lg font-Outfit font-semibold">
            Our college celebrates top academic rankings, innovative research,
            and impactful community service. We’re proud of our students!
          </p>
        </div>
        {/* for tablets & desktops */}
        <div className="sm:flex items-center gap-12 hidden p-10 mb-12 justify-center ">
          <div className="flex flex-col gap-4">
            <h1 className="text-white text-5xl 2xl:text-6xl font-NordBold">
              Achievements
            </h1>
            <p className="text-[#A576DF] text-left text-lg 2xl:text-xl font-Outfit font-semibold">
              Our college celebrates top academic rankings, innovative research,
              and impactful community service. We’re proud of our students!
            </p>
          </div>
          <img
            src="src/assets/images/achievements_page.png"
            alt="img"
            className="size-auto scale-125 2xl:scale-150"
          />
        </div>
      </div>

      <div className="py-4 w-full">
        <Carousel
          responsive={responsive}
          containerClass="w-full"
          itemClass="flex justify-center"
          className="overflow-hidden"
        >
          {Object.keys(achievements).map((key, index) => {
            return (
              <div
                key={index}
                className="flex justify-center items-center w-full "
              >
                <AchievementBox
                  achievementname={achievements[key].title}
                  achievementdesc={achievements[key].description}
                  achievementimg={achievements[key].img}
                  className="w-full max-w-[300px]"
                />
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};

export default Achievements;
