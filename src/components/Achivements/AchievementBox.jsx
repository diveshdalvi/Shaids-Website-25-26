import React from "react";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

const AchievementBox = ({ achievementname, achievementdesc, achievementimg }) => {
  return (
    <div className="bg-[#4B2F8A] text-white p-4 rounded-2xl w-full max-w-[320px] sm:max-w-[350px] flex flex-col items-center">
      {/* Image */}
      <img
        src={achievementimg}
        alt="img"
        className="w-full h-auto aspect-video rounded-md self-center"
      />

      {/* Text Content */}
      <div className="flex flex-col gap-2 text-center mt-3 w-full">
        {/* Heading with truncation */}
        <h1 className="font-NordMedium text-lg text-center overflow-hidden text-ellipsis whitespace-nowrap">
          {achievementname}
        </h1>

        {/* Description with line-clamping */}
        <p className="font-Outfit text-sm sm:text-base line-clamp-3 overflow-hidden text-ellipsis">
          {achievementdesc}
        </p>
      </div>
    </div>
  );
};

export default AchievementBox;
