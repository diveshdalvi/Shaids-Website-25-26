import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const MemberCard = ({ name, designation, instagramUrl, linkedinUrl, avatar }) => {
  return (
    <div className="bg-[#5D3E98] rounded-lg p-8 flex flex-col items-center shadow-[0_0_30px_rgba(93,62,152,0.3)] w-[75%] max-w-[250px] mx-auto font-Outfit">
      {/* Avatar */}
      <div className="bg-white rounded-full p-1 w-24 h-24 overflow-hidden mb-3">
        <img src={avatar} alt={name} className="w-full h-full object-cover rounded-full" />
      </div>

      {/* Member Info */}
      <div className="text-center space-y-1"> 
        <p className="text-white text-">{name}</p>
        <p className="text-white/80 text-sm">{designation}</p>
      </div>

      {/* Social Links - Tighter spacing */}
      <div className="flex gap-2 justify-center mt-8"> 
        {instagramUrl && (
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/80 hover:text-white transition-colors"
          >
            <InstagramIcon fontSize="small" />
          </a>
        )}
        {linkedinUrl && (
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/80 hover:text-white transition-colors"
          >
            <LinkedInIcon fontSize="small" />
          </a>
        )}
      </div>
    </div>
  );
};

export default MemberCard;
