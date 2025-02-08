import React from "react";
import imageGift from "../assets/images/baby-care-17.webp";

const SectionEight = () => {
  return (
    <div className="pt-12 px-4 flex justify-center items-center xl:h-[100vh] ">
      {/* Outer container with max width for centering */}
      <div className="w-full max-w-6xl flex flex-col xl:flex-row bg-[#EFF7F7] rounded-xl border-[1px] border-[#FBE9DF] overflow-hidden">
        {/* Left/Text Side */}
        <div className="xl:w-1/2 flex flex-col xl:gap-4 justify-center p-8">
          <p className="px-4 py-1 mb-6 bg-white text-sm text-[#94857B] font-bold rounded-[30px] w-max">
            EGG DONATION
          </p>
          <h1 className="text-3xl md:text-7xl font-custom mb-4">
            Give the gift of life
          </h1>
          <p className="mb-4 font-paragraph">
            By becoming an Egg Donor with CRGH you can provide a truly
            life-changing gift. Egg donors are remarkable women; helping our
            patients achieve their dream of a family of their own when they
            otherwise may not have been able to.
          </p>
          <p className="mb-4 font-paragraph">
            Become an Egg Donor and do something incredible.
          </p>
          <button className="py-3  px-6 md:mt-8 mt-5 xl:px-10 bg-[#0065B3] hover:bg-[#FFA61A] transition-all hover:duration-200 text-white  hover:text-[#0065B3] rounded-3xl w-max">
            Learn More
          </button>
        </div>

        {/* Right/Image Side */}
        <div className="xl:w-1/2">
          <img
            src={imageGift}
            alt="image-gift"
            className="object-cover w-full h-auto md:h-[500px] lg:h-[600px]"
          />
        </div>
      </div>
    </div>
  );
};

export default SectionEight;
