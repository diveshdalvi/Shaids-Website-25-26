import React, { useState } from "react";
import Lottie from "lottie-react";
import Footer from "../components/Common/Footer"; // Importing Footer component
import MemberCard from "../components/Teams/MemberCard";
import currentTeamMembers from "../data/leads-24-25.json";
import previousLeads from "../data/leads-23-24.json";
import teamAnimation from "../assets/animations/team/team-animation.json";
import Navbar from "../components/Common/Navbar";

const Team = () => {
  const [showPreviousLeads, setShowPreviousLeads] = useState(false);

  const handleToggleLeads = () => {
    setShowPreviousLeads(!showPreviousLeads);
  };

  const teamMembers = showPreviousLeads ? previousLeads : currentTeamMembers;

  return (
    <div className="min-h-screen flex flex-col bg-bgGradient ">
      <Navbar />
      <div className="max-w-[1280px] w-full px-4 mx-auto flex flex-col items-center flex-grow mt-5">
        {" "}
        {/* Ensures content stretches and footer stays at bottom */}
        <div className="w-full flex flex-col lg:flex-row items-center justify-between mb-12">
          {/* Title & Subtitle (Aligned to Cards) */}
          <div className="lg:w-[50%] text-center lg:text-left py-8">
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
            <Lottie
              animationData={teamAnimation}
              loop={true}
              className="w-[250px] lg:w-[300px] h-[200px] lg:h-[250px]"
            />
          </div>
        </div>
        {/* Team Members Grid (Now Properly Aligned) */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 gap">
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
        <div className="w-full flex mt-12 mb-12 justify-center">
          <button
            onClick={handleToggleLeads}
            className="bg-buttonGradient px-6 py-2 rounded-lg text-white font-Outfit text-center"
          >
            {showPreviousLeads ? "Leads of AY 2024-25" : "Leads of AY 2023-24"}
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Team;
