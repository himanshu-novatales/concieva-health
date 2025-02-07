import React from "react";
import aboutustopimg from "../assets/images/aboutus.webp"
const AboutSectionOne = () => {
  return (
    <div className="flex justify-center w-full h-full relative">
      <div className="w-[95%] mt-3 flex justify-center items-center">
        <img src={aboutustopimg} className="object-cover w-full h-full rounded-3xl" alt="abouthead-img" />
        <div className="absolute w-4/12 h-4/6 rounded-3xl bg-white">

        </div>
      </div>
    </div>
  );
};

export default AboutSectionOne;
