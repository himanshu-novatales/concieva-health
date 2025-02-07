import React from "react";
import aboutustopimg from "../assets/images/aboutus.webp";
const AboutSectionOne = () => {
  return (
    <div className="flex justify-center w-full h-full relative mb-32">
      <div className="w-[95%] mt-3 flex justify-center xl:justify-end items-center">
        <img
          src={aboutustopimg}
          className="object-cover w-full h-[400px] md:h-[550px] xl:h-[700px] rounded-3xl"
          alt="abouthead-img"
        />
        <div className="absolute w-[90%]  2xl:w-4/12 2xl:h-4/6 xl:w-5/12 lg:h-5/6 h-[90%] 2xl:mr-32 xl:mr-20 rounded-3xl p-0 2xl:p-5 flex justify-center items-center bg-white">
          <div className="w-[90%] 2xl:w-[80%]  flex flex-col text-left gap-5">
            <p className="px-4 my-3 bg-[#EFF7F7] mx-auto xl:mx-0 mt-3 w-max text-sm text-left text-[#94857B] uppercase  rounded-[30px]">
              About uS
            </p>
            <h1 className=" text-5xl md:text-8xl  font-custom">
              Why We are the Best?
            </h1>
            <p className="text-[1.2wv] md:text-xl text-[#4F4D4D] md:mb-5">
              We are dedicated to empowering women to lead healthier, happier
              lives. Our mission is to provide comprehensive, and personalized
              healthcare tailored to the unique needs of every woman
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSectionOne;
