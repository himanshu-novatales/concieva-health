import React from "react";
import imageStory from "../assets/images/new-image-9.jpg";
import imageStory1 from "../assets/images/new-image-8.jpg";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { motion, useScroll, useTransform } from "framer-motion";
const SectionNine = () => {
  const { scrollYProgress } = useScroll(); // Get scroll progress (0 to 1)
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 1440]);
  return (
    <div className="py-12 px-2 flex justify-center flex-col relative text-center items-center md:mt-12 mt-4">
      <motion.div className="absolute xl:left-0 hidden md:block md:left-[-60px] md:top-2 xl:top-20 text-[#ddffff] -z-30"       style={{ rotate }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="400"
          height="300"
          viewBox="0 0 129 131"
          fill="none"
          color="#8cbfe665"
        >
          <path
            d="M55.7011 60.65C55.1011 59.65 54.2011 59.05 53.3011 58.35C44.6011 51.45 36.8011 43.75 30.1011 34.95C28.8011 33.25 27.8011 31.25 27.2011 29.25C26.3011 26.15 27.4011 22.85 30.0011 20.95C31.2011 20.05 32.4011 19.85 33.8011 20.15C35.3011 20.55 36.6011 21.35 37.7011 22.45C44.7011 29.05 50.3011 36.65 55.0011 44.95C57.1011 48.75 58.7011 52.85 60.9011 56.75C60.9011 55.65 61.0011 54.55 60.9011 53.55C60.2011 46.75 58.9011 39.95 57.9011 33.25C56.8011 26.45 56.4011 19.55 58.2011 12.75C59.3011 8.44999 61.3011 4.55 64.5011 1.35C66.4011 -0.45 67.3011 -0.45 69.1011 1.35C71.3011 3.45 72.1011 6.25 72.5011 9.05C73.2011 13.45 73.1011 17.85 72.9011 22.25C72.5011 31.55 72.6011 40.75 72.5011 50.05C72.5011 51.85 71.7011 53.45 72.2011 55.45C73.0011 55.15 73.4011 54.45 73.9011 53.85C79.3011 47.05 86.1011 41.85 93.9011 38.15C100.901 34.85 108.301 32.85 116.001 32.35C118.201 32.25 120.401 31.95 122.701 31.95C123.801 31.95 124.901 32.15 126.001 32.45C128.301 33.05 129.001 34.75 127.801 36.85C126.801 38.65 125.401 39.95 123.701 41.15C120.401 43.45 116.801 45.15 113.101 46.75C105.701 50.05 98.0011 52.75 90.7011 56.55C86.4011 58.75 82.6011 61.65 78.8011 64.65C77.6011 65.55 76.4011 66.45 75.1011 67.55C75.7011 68.25 76.3011 68.25 77.0011 68.35C80.5011 68.85 84.0011 68.95 87.5011 68.85C93.1011 68.65 98.7011 69.05 104.301 69.45C111.101 69.85 117.501 71.75 122.901 76.15C124.701 77.55 126.101 79.25 127.201 81.25C128.401 83.35 128.201 84.35 126.301 85.75C124.501 87.05 122.401 87.55 120.201 87.65C116.001 87.95 112.001 86.85 107.901 86.05C99.2011 84.35 90.5011 82.65 81.8011 80.95C80.0011 80.55 78.2011 80.05 76.5011 79.55C75.9011 79.35 75.4011 78.85 74.6011 79.35C76.8011 81.95 78.9011 84.45 81.0011 87.05C85.5011 92.55 89.4011 98.45 92.9011 104.65C93.8011 106.15 94.3011 107.85 94.6011 109.65C95.2011 112.85 94.1011 115.45 91.6011 117.45C89.5011 119.05 86.5011 118.75 84.2011 116.55C82.5011 114.95 81.2011 112.95 79.9011 111.05C74.9011 103.75 71.0011 95.95 68.1011 87.55C67.8011 86.85 67.7011 86.05 67.0011 85.05C67.0011 86.25 66.9011 87.15 67.0011 88.05C67.8011 94.45 68.2011 100.75 67.8011 107.15C67.5011 113.85 65.7011 120.25 61.5011 125.65C60.4011 127.15 59.1011 128.45 57.5011 129.45C55.9011 130.45 54.9011 130.25 53.8011 128.75C52.2011 126.75 51.3011 124.45 51.1011 121.95C50.8011 117.25 51.2011 112.55 51.9011 107.85C52.4011 104.35 52.7011 100.85 53.0011 97.35C53.4011 92.95 53.9011 88.65 54.3011 84.15C53.6011 83.95 53.1011 84.55 52.7011 84.85C45.0011 90.75 36.3011 94.35 26.7011 95.95C19.5011 97.15 12.2011 97.15 5.0011 95.75C3.6011 95.45 2.20111 95.15 1.80111 93.65C1.30111 92.05 2.30111 90.95 3.30111 89.85C5.80111 87.15 9.2011 85.85 12.6011 84.55C19.3011 81.95 26.4011 80.45 33.3011 78.35C39.1011 76.65 44.9011 74.65 50.1011 71.45C50.3011 71.35 50.4011 71.15 50.7011 70.95C48.7011 70.05 46.6011 69.95 44.6011 69.85C40.8011 69.65 37.0011 69.15 33.1011 69.25C28.2011 69.35 23.4011 68.85 18.6011 67.85C12.8011 66.55 7.50112 64.15 3.40112 59.75C2.20112 58.55 1.3011 57.15 0.501096 55.65C-0.398904 54.05 -0.0989037 52.75 1.5011 51.75C2.9011 50.85 4.50111 50.15 6.20111 50.15C9.20111 50.05 12.1011 50.05 15.0011 50.75C25.8011 53.25 36.6011 55.85 47.4011 58.35C49.3011 58.75 51.1011 59.55 52.9011 60.15C53.9011 60.45 54.7011 60.85 55.7011 60.65C55.7011 60.95 55.8011 60.95 55.9011 60.75C55.9011 60.75 55.8011 60.75 55.7011 60.65Z"
            fill="currentColor"
          ></path>
        </svg>{" "}
      </motion.div>
      {/* Outer container with max width for centering */}
      <h1 className="xl:text-7xl text-5xl font-custom font-semibold my-20">
        Recent Success Stories
      </h1>
      <div className="w-full max-w-7xl flex flex-col lg:flex-row-reverse gap-16 text-left rounded-xl   overflow-hidden">
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
            className="text-sm my-8 text-[#0065B3]  hover:text-[#FFA61A] transition-all hover:duration-200 font-semibold"
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
      <div className="w-full max-w-7xl flex flex-col lg:flex-row-reverse gap-16 mt-8 rounded-xl text-left  overflow-hidden">
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
            className="text-sm my-8 text-[#0065B3]  hover:text-[#FFA61A] transition-all hover:duration-200 font-semibold"
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
