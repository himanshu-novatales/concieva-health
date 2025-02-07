import React from "react";
import imageAbout from "../assets/images/baby-care-15.avif";
import imageAbout1 from "../assets/images/baby-care-5.avif";
const SectionSix = () => {
  return (
    <div>
      <div className="flex flex-col xl:flex-row mt-30 h-auto">
        <div className="bg-[#DDEFEF] w-full xl:w-[50%] h-auto flex justify-center items-center min-h-[700px]">
          <div className="text-left w-[80%] xl:w-[60%] max-h-full">
            <p className="px-4 py-1 mb-5 md:mb-10 bg-[#FEF5F2] w-36 text-sm text-[#94857B] font-bold rounded-[30px]">
              Immune System
            </p>
            <h1 className="2xl:text-[4rem] xl:text-[3rem] text-[2.5rem] 2xl:leading-[4.5rem] xl:leading-[3.5rem] leading-[2.5rem] font-custom">
              Thorough immune testing for individuals and couples
            </h1>
            <p className="md:mt-10 mt-5 mb-5">
              We believe we can offer patients with a history of recurrent IVF
              failure or multiple miscarriages a better chance of success by
              studying the role of their immune system in pregnancy. We provide
              immune therapy tailored to your individual situation.
            </p>
            <p>
              To establish any issues that may be preventing a successful IVF
              treatment, we carry out a comprehensive series of tests which
              check different aspects of your immune system.
            </p>
            <button className="py-3  bg-[#0065B3] hover:bg-[#FFA61A] transition-all hover:duration-200 text-white  hover:text-[#0065B3] mr-10 px-6 md:mt-8 mt-5 lg:px-10 text-white rounded-3xl">
              Find Out More
            </button>
          </div>
        </div>
        <div className="xl:w-[50%]">
          <img
            src={imageAbout}
            className="object-cover  xl:h-[700px] h-[400px] w-full"
            alt="imageAbout"
          />
        </div>
      </div>
      <div className="flex flex-col xl:flex-row-reverse mt-30 h-auto">
        <div className="bg-[#F69179] w-full xl:w-[50%] h-auto flex justify-center items-center min-h-[700px]">
          <div className="text-left w-[80%] xl:w-[60%] max-h-full">
            <p className="px-4 py-1 mb-5 md:mb-10 bg-[#FEF5F2] w-36 text-sm text-[#94857B] font-bold rounded-[30px]">
              Immune System
            </p>
            <h1 className="2xl:text-[4rem] xl:text-[3rem] text-[2.5rem] 2xl:leading-[4.5rem] xl:leading-[3.5rem] text-white leading-[2.5rem] font-custom">
              Thorough immune testing for individuals and couples
            </h1>
            <p className="md:mt-10 mt-5 mb-5 text-white">
              We believe we can offer patients with a history of recurrent IVF
              failure or multiple miscarriages a better chance of success by
              studying the role of their immune system in pregnancy. We provide
              immune therapy tailored to your individual situation.
            </p>

            <button className="py-3   bg-[#0065B3] hover:bg-[#FFA61A] transition-all hover:duration-200 text-white  hover:text-[#0065B3] mr-10 px-6 md:mt-8 mt-5 lg:px-10  rounded-3xl">
              Find Out More
            </button>
          </div>
        </div>
        <div className="xl:w-[50%]">
          <img
            src={imageAbout1}
            className="object-cover  xl:h-[700px] h-[400px] w-full"
            alt="imageAbout"
          />
        </div>
      </div>
    </div>
  );
};

export default SectionSix;
