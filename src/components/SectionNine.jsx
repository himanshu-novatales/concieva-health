import React from "react";
import imageStory from "../assets/images/baby-care-2.jpg";
import imageStory1 from "../assets/images/baby-care-14.avif";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
const SectionNine = () => {
  return (
    <div className="py-12 px-4 flex justify-center flex-col text-center items-center md:mt-12 mt-4">
      {/* Outer container with max width for centering */}
      <h1 className="text-5xl font-custom font-semibold my-20">
        Recent Success Stories
      </h1>
      <div className="w-full max-w-6xl flex flex-col lg:flex-row-reverse gap-8 text-left rounded-xl   overflow-hidden">
        <div className="lg:w-1/2 flex flex-col  px-5 py-3">
          <p className="px-4 py-3 mb-1  text-sm text-[#94857B] mt-5 cursor-pointer  w-max">
          <span className="text-sm rounded-3xl  py-0.5 px-4 bg-[#0065B3] hover:bg-[#FFA61A] transition-all hover:duration-200 text-white  hover:text-[#0065B3]">
          PREVENTIVE CARE
            </span>{" "}
            <span className="text-[#94857B] text-sm ml-5">Jan 13 , 2024</span>
          </p>
          <h1 className="text-2xl md:text-4xl font-custom font-semibold my-4 hover:text-[#94857B] cursor-pointer transition-all hover:duration-200">
            The Ultimate Guide to Women’s Health Screenings....
          </h1>
          <p className="mb-2 py-2 text-md text-[#4f4d4d]">
            A comprehensive overview of essential health screenings for women,
            tailored by age to help you stay proactive about your well-being.
          </p>
          <a
            href="#ds"
            className="text-sm my-8 text-[#5bc4c4] hover:text-[#636464] transition-all hover:duration-200 font-semibold"
          >
            READ MORE{" "}
            <ArrowForwardIcon className="text-[#4f4d4d] mr-5 text-sm" />
          </a>
        </div>

        {/* Right/Image Side */}
        <div className="lg:w-1/2">
          <img
            src={imageStory}
            alt="image-gift"
            className="object-cover w-full h-auto md:h-[350px] rounded-3xl "
          />
        </div>
      </div>
      <div className="w-full max-w-6xl flex flex-col lg:flex-row-reverse gap-8 mt-8 rounded-xl text-left  overflow-hidden">
        <div className="lg:w-1/2 flex flex-col  px-5 py-3">
          <p className="px-4 py-3 mb-1  text-sm text-[#94857B] mt-5 cursor-pointer  w-max">
            <span className="text-sm rounded-3xl  py-0.5 px-4 bg-[#0065B3] hover:bg-[#FFA61A] transition-all hover:duration-200 text-white  hover:text-[#0065B3]">
              PREVENTIVE CARE
            </span>{" "}
            <span className="text-[#94857B] text-sm ml-5">Jan 13 , 2024</span>
          </p>
          <h1 className="text-2xl md:text-4xl font-custom font-semibold my-4 hover:text-[#94857B] cursor-pointer transition-all hover:duration-200">
            5 Key Benefits of Regular Wellness Check-Ups for...
          </h1>
          <p className="mb-2 py-2 text-md text-[#4f4d4d]">
            A comprehensive overview of essential health screenings for women,
            tailored by age to help you stay proactive about your well-being.
          </p>
          <a
            href="#ds"
            className="text-sm my-8 text-[#5bc4c4] hover:text-[#636464] transition-all hover:duration-200 font-semibold"
          >
            READ MORE{" "}
            <ArrowForwardIcon className="text-[#4f4d4d] mr-5 text-sm" />
          </a>
        </div>

        {/* Right/Image Side */}
        <div className="lg:w-1/2">
          <img
            src={imageStory1}
            alt="image-gift"
            className="object-cover w-full h-auto md:h-[350px] rounded-3xl"
          />
        </div>
      </div>
      <button className="text-center my-10 py-3 px-8 rounded-3xl text-sm bg-[#0065B3] hover:bg-[#FFA61A] transition-all hover:duration-200 text-white  hover:text-[#0065B3]">
        READ MORE STORIES
      </button>
    </div>
  );
};

export default SectionNine;
