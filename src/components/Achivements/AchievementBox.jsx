import React from "react";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
const AchievementBox = ({
  achievementname,
  achievementdesc,
  achievementimg,
}) => {
  return (
    <div className={`bg-[#4B2F8A] text-white p-2 rounded-2xl  w-4/5 `}>
      <img
        src={achievementimg}
        alt="img"
        className=" w-full   rounded-md self-center "
      />
      <div className=" flex justify-between items-center gap-2 pr-2">
        <div className=" flex flex-col gap-2 ">
          <h1 className="font-NordMedium text-xl whitespace-normal  overflow-hidden text-ellipsis text-center  break-words line-clamp-2">
            {achievementname}
          </h1>
          <div className=" flex justify-center gap-3  ">
            <p className="font-Outfit text-lg line-clamp-2 overflow-hidden text-center text-ellipsis">
              {achievementdesc}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AchievementBox;
