import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-transparent fixed top-0 left-0 right-0 py-4 z-40">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="text-2xl font-bold cursor-pointer text-white">
          SHAIDS
        </div>
        <ul className="flex space-x-6 cursor-pointer text-white ">
          <li className="hover:text-purple-400">Home</li>
          <li className="hover:text-purple-400">About</li>
          <li className="hover:text-purple-400">Services</li>
          <li className="hover:text-purple-400">Contact</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
