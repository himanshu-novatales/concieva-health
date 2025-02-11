import React from "react";
import aboutus2 from "../assets/images/new-image-13.jpg";
const AboutSectionTwo = () => {
  return (
    <div className="px-4 flex justify-center items-center my-5 xl:my-24">
      {/* Outer container with max width for centering */}
      <div className="w-full max-w-[84rem] flex flex-col xl:flex-row  rounded-xl overflow-hidden">
        {/* Left/Text Side */}
        <div className="xl:w-1/2 flex flex-col justify-center text-left p-8">
          <h1 className=" text-6xl md:text-8xl font-custom">About Us</h1>
          <p className="text-justify text-lg xl:pe-20 my-3 text-[#4F4D4D] font-paragraph">
            Our team of experienced medical professionals brings together a
            wealth of knowledge and expertise to deliver exceptional care. From
            routine wellness checkups to specialized treatments, we strive to
            create a welcoming and supportive environment for all our patients.
          </p>
        </div>
        {/* Right/Image Side */}
        <div className="xl:w-1/2">
          <img
            src={aboutus2}
            alt="aboutus"
            className="object-cover w-full h-auto rounded-3xl md:h-[500px] lg:h-[550px]"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutSectionTwo;
