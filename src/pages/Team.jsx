import React, { useState } from "react";
import Lottie from "lottie-react";
import MemberCard from "../components/Teams/MemberCard";
import currentTeamMembers from "../data/leads-24-25.json";
import previousLeads from "../data/leads-23-24.json";
import teamAnimation from "../assets/animations/team/team-animation.json";

const Team = () => {
  const [showPreviousLeads, setShowPreviousLeads] = useState(false);

  const handleToggleLeads = () => {
    setShowPreviousLeads(!showPreviousLeads);
  };

  const teamMembers = showPreviousLeads ? previousLeads : currentTeamMembers;

  return (
    <div className="min-h-screen bg-[#0A051E] py-20 px-4 flex flex-col items-center">
      <div className="max-w-[1100px] w-full px-4"> {/* Added px-4 to match all content */}

        <div className="w-full flex flex-col lg:flex-row items-center justify-between mb-12">
          
          {/* Title & Subtitle (Aligned to Cards) */}s
          <div className="lg:w-[50%] text-center lg:text-left">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-2 font-NordMedium">
              MEET THE <br className="hidden lg:block" />
              <span className="text-[#5D3E98]">TEAM!</span>
            </h1>
            <p className="text-white/80 text-xl lg:text-3xl font-Outfit">
              Our Hive of Innovators
            </p>
          </div>

          {/* Lottie Animation (Aligned to Grid End) */}
          <div className="lg:w-[50%] flex justify-center lg:justify-end">
            <Lottie animationData={teamAnimation} loop={true} className="w-[250px] lg:w-[300px] h-[200px] lg:h-[250px]" />
          </div>
        </div>

        {/* Team Members Grid (Now Properly Aligned) */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <MemberCard
              key={index}
              name={member.name}
              designation={member.designation}
              instagramUrl={member.instagramUrl}
              linkedinUrl={member.linkedinUrl}
              avatar={member.avatar}
            />
          ))}
        </div>

        {/* Leads Button (Aligned to Grid Width) */}
        <div className="w-full flex mt-12 justify-center">
          <button
            onClick={handleToggleLeads}
            className="bg-buttonGradient px-6 py-2 rounded-lg text-white font-Outfits text-center"
          >
            {showPreviousLeads ? "Leads of AY 2024-25" : "Leads of AY 2023-24"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Team;