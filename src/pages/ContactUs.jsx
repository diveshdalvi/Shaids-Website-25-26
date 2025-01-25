import React from "react";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
const ContactUs = () => {
  return (
    <div className=" bg-bgGradient text-white font-Outfit  flex flex-col min-h-screen h-full py-20  px-12 xl:flex-row justify-around">
      {/* top text box */}
      <div className=" flex flex-col   gap-1 sm:gap-2 md:gap-4  sm:text-left  xl:w-1/2 ">
        <span className=" bg-[#0148E0] rounded-3xl px-4 py-1 border  w-max md:text-lg ">
          Contact us
        </span>
        <h1 className=" font-NordMedium text-2xl sm:text-4xl md:text-5xl">
          let's get in touch.
        </h1>
        <span className=" flex text-sm text-center flex-col sm:text-xl sm:text-left sm:gap-2 sm:flex-row md:text-2xl">
          Or just reach out manually to{" "}
          <span className=" text-[#9654F4] underline">shaids@gmail.com</span>
        </span>
        <img
          src="src\assets\images\mail.gif"
          alt="img"
          className="hidden xl:block size-3/4 "
        />
      </div>
      <div className=" flex flex-col gap-4 ">
        <span className="flex flex-col">
          Full name{" "}
          <span className="custom-input">
            <AccountCircleOutlinedIcon />
            <input
              type="text"
              className="custom-input"
              placeholder="Enter your full name..."
            />
          </span>
        </span>
        <span className="flex flex-col">
          Email{" "}
          <input
            type="email"
            placeholder="Enter your email..."
            className="custom-input"
          />
        </span>
        <span className="flex flex-col">
          Phone number{" "}
          <input type="number" placeholder="+91" className="custom-input" />
        </span>
        <span className="flex flex-col">
          Message{" "}
          <input
            type="text"
            placeholder="Enter your message here..."
            className="custom-input"
          />
        </span>
      </div>
    </div>
  );
};

export default ContactUs;
