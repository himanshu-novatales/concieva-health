import React from "react";
import bottomImage from "../assets/images/pregnancy-text-1.jpg";

const SectionTen = () => {
  return (
    <div className="flex justify-center items-center w-full mt-10">
      {/* Outer container with a set height, rounded corners, and relative positioning */}
      <div className="relative hidden md:block w-[90%] 2xl:w-[68%]  xl:h-[500px] overflow-hidden rounded-3xl">
        {/* The image is absolutely positioned to fill the container */}
        <img
          src={bottomImage}
          alt="bottomimage"
          className="object-cover w-full h-full absolute inset-0 hidden md:block"
        />

        {/* Semi-transparent gradient overlay on top of the image */}
        <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#1598fdb6] opacity-80 z-10" />  
        
        <div className="relative z-20 flex flex-col justify-center items-start text-white h-full py-4 px-4 md:py-8 md:px-16">
          <h1 className="hidden my-2 md:block md:text-5xl xl:text-6xl font-custom">
            Take Control of your Fertility <br></br> Book an Appointment today
          </h1>
          <h1 className="text-4xl block md:hidden font-custom">
            Take Control of your Fertility - Book an Appointment today
          </h1>
          <p className="text-md my-8 font-paragraph">
            Let’s take the step together and cherish the journey of Parenthood
            with care
            <br />
            personalized fertility solutions. Start the family you have always
            dreamed of
          </p>
          <button className="px-8 py-3 rounded-3xl bg-[#0065B3] hover:bg-[#FFA61A] transition-all hover:duration-200 text-white  hover:text-[#0065B3] border-[#ffebbf] ">
            Schedule A Appointment
          </button>
        </div>
      </div>
      <div className="relative block md:hidden w-[90%] 2xl:w-[68%]  xl:h-[500px] overflow-hidden rounded-3xl">
        {/* The image is absolutely positioned to fill the container */}
        <img
          src={bottomImage}
          alt="bottomimage"
          className="object-cover w-full h-full absolute inset-0 hidden md:block"
        />

        {/* Semi-transparent gradient overlay on top of the image */}
        <div className="absolute inset-0 bg-[#1598fdb6] opacity-80 z-10" />  

        <div className="relative z-20 flex flex-col justify-center items-center text-white h-full py-4 px-4 md:py-8 md:px-16">
          <h1 className="hidden my-2 md:block md:text-5xl xl:text-6xl font-custom">
            Take Control of your Fertility <br></br> Book an Appointment today
          </h1>
          <h1 className="text-4xl block md:hidden font-custom">
            Take Control of your Fertility - Book an Appointment today
          </h1>
          <p className="text-md my-8 font-paragraph">
            Let’s take the step together and cherish the journey of Parenthood
            with care
            <br />
            personalized fertility solutions. Start the family you have always
            dreamed of
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
