import React from "react";
import bottomImage from "../assets/images/baby-care-18.webp";

const SectionTen = () => {
  return (
    <div className="flex justify-center items-center w-full mt-10">
      {/* Outer container with a set height, rounded corners, and relative positioning */}
      <div className="relative w-[90%] 2xl:w-[80%]  xl:h-[400px] overflow-hidden rounded-3xl">
        {/* The image is absolutely positioned to fill the container */}
        <img
          src={bottomImage}
          alt="bottomimage"
          className="object-cover w-full h-full absolute inset-0 hidden md:block"
        />

        {/* Semi-transparent gradient overlay on top of the image */}
        <div className="absolute inset-0 bg-[#8FB4BA] md:bg-gradient-to-r md:from-[#6498a1] md:to-transparent opacity-80 z-10" />


        {/* Content goes above both the image and the gradient overlay */}
        <div className="relative z-20 flex flex-col justify-center items-start text-white h-full py-4 px-4 md:py-8 md:px-16">
          <h1 className="hidden md:block md:text-5xl font-custom">
          Take Control of your Fertility <br></br> Book an Appointment today
          </h1>
          <h1 className="text-4xl block md:hidden font-custom">
          Take Control of your Fertility - Book an Appointment today
          </h1>
          <p className="text-md my-8">
          Let’s take the step together and cherish the journey of Parenthood with care 
            <br />
            personalized fertility solutions. Start the family you have always dreamed of
          </p>
          <button className="px-8 py-3 rounded-3xl bg-[#0065B3] hover:bg-[#FFA61A] transition-all hover:duration-200 text-white  hover:text-[#0065B3] border-[#ffebbf] ">
            Schedule A Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default SectionTen;
