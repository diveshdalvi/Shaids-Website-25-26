import { Instagram, GitHub, LinkedIn } from "@mui/icons-material";

const Footer = () => {
  return (
    <div className="w-full bg-[#2E0B52] text-white text-center"> {/* Outer div for full width */}
      <div className="px-4 max-w-16xl mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Left Section */}
        <div className="text-left py-4 px-32">
          <div className="flex items-center space-x-3">
            <img src="./src/assets/images/logo.svg" alt="SHAIDS Logo" className="h-20 w-20"/>
            <h2 className="text-xl font-semibold">SHAIDS.</h2>
          </div>
          <p className="mt-2 text-base font-Outfit ">
            Empowering DMCE in AI & Data Science<br />through innovation.<br />
            Join us in learning and collaboration.
          </p>
        </div>

        {/* Right Section */}
        <div className="text-right mt-8 md:mt-0 px-32">
          <h3 className="text-base font-lg font-Outfit">DATTA MEGHE COLLEGE OF ENGINEERING</h3>
          <p className="text-xs">
            SEC-3, AIROLI, NAVI MUMBAI<br />
            MAHARASHTRA - 400708, INDIA
          </p>
          {/* Social Icons */}
          <div className="flex space-x-4 mt-3 justify-center md:justify-end">
            <a href="#" className="text-pink-400 hover:text-pink-500 text-xl">
              <Instagram />
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-500 text-xl">
              <GitHub />
            </a>
            <a href="#" className="text-blue-500 hover:text-blue-600 text-xl">
              <LinkedIn />
            </a>
          </div>
        </div>
      </div>
      
      {/* Bottom Section */}
      <div className="bg-[#552D91] mt-16 py-2 max-w-full">
        <p className="text-xs font-Outfit text-start px-4">© 2025 DMCE SHAIDS. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
