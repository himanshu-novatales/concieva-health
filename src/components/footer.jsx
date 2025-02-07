import React from "react";
import logo from "../assets/images/logo.png";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
const Footer = () => {
  return ( 
    <div className="mt-20 2xl:mt-40 bg-[#FBF9F6]">
      {" "}
      <div className="flex flex-col justify-center items-center xl:flex-row xl:gap-8 mx-2 pb-16  ">
        <div className=" flex flex-col justify-center items-center xl:items-start mt-10 w-full xl:w-1/4">
          <div className="my-5">
            <img src={logo} className="w-44" alt="Logo" />
          </div>
          <div className=" text-center xl:text-left  mt-5  text-[#4F4D4D] text-[17px]">
            <p>Kondapur , Hyderabad Telangana </p>
            <p> India</p>
          </div>
          <div className=" text-center  xl:text-left  mb-5 mt-3 text-[#4F4D4D] text-[17px]">
            <p>Mon – Fri: 8:30 am – 5:00 pm,</p>
            <p>Sat – Sun: Closed</p>
          </div>
          <div className="text-center xl:text-left  md:text-left my-2 md:my-5">
            <button className=" text-xl md:text-4xl mt-5 font-serif">
              <PhoneInTalkIcon
                sx={{ fontSize: "40px", paddingRight: "10px" }}
              />{" "}
              <a href="tel:18002001234">1800 255 1234</a>{" "}
            </button>
            <p className="px-0 md:px-10 mt-2">
              <a href="mailto:example@femina-health.com">
                example@conceiva-fertility.com
              </a>
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between w-[80%] xl:w-[40%] mt-2 xl:mt-16 ">
          <div className="w-full md:w-1/2 text-center xl:text-left">
            <h4 className="text-[#94857B] font-semibold uppercase py-5">
              Pages
            </h4>
            <ul className="font-medium">
              <li className="my-3">
                <a href="#about text-[15px] font-medium">About Us</a>
              </li>
              <li className="my-3">
                <a href="#about text-[15px] font-medium">Our Services</a>
              </li>
              <li className="my-3">
                <a href="#about text-[15px] font-medium">Blog</a>
              </li>
              <li className="my-3">
                <a href="#about text-[15px] font-medium">Contacts</a>
              </li>
              <li className="my-3">
                <a href="#about text-[15px] font-medium">Shop</a>
              </li>
              <li className="my-3">
                <a href="#about text-[15px] font-medium">Images Gallery</a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 text-center xl:text-left">
            <h4 className="text-[#94857B] font-semibold uppercase py-5">
              Our Services
            </h4>
            <ul className="font-medium">
              <li className="my-3">
                <a href="#about text-[15px] font-medium">
                  Contraception Consultation
                </a>
              </li>
              <li className="my-3">
                <a href="#about text-[15px] font-medium">Endometriosis</a>
              </li>
              <li className="my-3">
                <a href="#about text-[15px] font-medium">
                  Gynecological Examination
                </a>
              </li>
              <li className="my-3">
                <a href="#about text-[15px] font-medium">
                  Gynecological Ultrasound
                </a>
              </li>
              <li className="my-3">
                <a href="#about text-[15px] font-medium">Menopausal Symptoms</a>
              </li>
              <li className="my-3">
                <a href="#about text-[15px] font-medium">
                  Menstrual Irregularities
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full flex flex-col gap-5 xl:gap-0 md:w-1/2 mb-8 xl:mb-0 xl:w-1/4 mt-8  xl:mt-16 text-center xl:text-left">
          <h1 className="text-4xl font-custom">Reach out to us</h1>
          <h3 className="text-2xl">any queries? Just give us a call</h3>
          <div className="my-3 xl:my-8 flex flex-row flex-wrap md:flex-nowrap  md:gap-0 justify-center xl:justify-start items-center">
            <input
              type="email"
              placeholder="Enter your email address"
              className=" rounded-3xl py-3 px-8 border-[1px]"
            />
            <button className="py-3 md:my-0 my-3 bg-[#0065B3] hover:bg-[#FFA61A] transition-all hover:duration-200 text-white  hover:text-[#0065B3] mr-0 xl:mr-3  ml-1 px-6  lg:px-8 rounded-3xl">
              Subscribe
            </button>
          </div>
          <div className=" flex flex-row justify-center xl:justify-start gap-6 mt-4 xl:mt-1 text-center xl:text-left">
            <FacebookIcon
              sx={{
                fontSize: "24px",

                color: "#94857B",
              }}
              className="text-left"
            />
            <InstagramIcon
              sx={{
                fontSize: "24px",
                color: "#94857B",
              }}
            />
            <XIcon
              sx={{
                fontSize: "24px",
                color: "#94857B",
              }}
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center py-8 border-t-[1px] mx-10 text-center  border-[#94857B] items-center">
        <h1 className="text-md my-3 text-[#94857B]">
        Developed By  <a className="no-underline font-semibold hover:underline" href="https://novatales.com">NovaTales</a> © 2025 - All Rights Reserved
        </h1>
      </div>
    </div>
  );
};

export default Footer;
