import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Search as SearchIcon,
  KeyboardArrowDown as KeyboardArrowDownIcon,
  Menu as MenuIcon,
  Close as CloseIcon,
  PhoneInTalkOutlined,
} from "@mui/icons-material";
import { motion } from "framer-motion";
import logo from "../assets/images/logo.png";
// import { AppContext } from "../context/DataContext";
import serviceImage from "../assets/images/service-3-1.webp";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesHovered, setIsServicesHovered] = useState(false);
  const navigate = useNavigate();
  // const { data } = useContext(AppContext);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <nav className="bg-[#F4F6FF] py-4 w-full z-50  shadow-md relative">
      <div className="flex justify-between items-center w-[99vw] px-10 mx-auto">
        {/* Logo */}
        <div>
          <img
            className="w-36 cursor-pointer"
            onClick={() => navigate("/")}
            src={logo}
            alt="logo"
          />
        </div>
        {/* Desktop Navigation */}
        <div className="hidden lg:flex md:justify-center flex-row gap-4 xl:gap-5 font-medium text-md text-gray-700 relative">
          <Link
            to="/"
            className="text-[#0066B3] hover:text-[#FFA61A] transition-all hover:duration-200"
          >
            Home
          </Link>
          <Link
            to="#"
            className="text-[#0066B3] hover:text-[#FFA61A] transition-all hover:duration-200"
          >
            Our Doctors <KeyboardArrowDownIcon />
          </Link>        
          <div
            className="relative flex flex-col justify-center items-center"
            onMouseEnter={() => setIsServicesHovered(true)}
          >
            <Link
              to="#"
              className="text-[#0066B3] hover:text-[#FFA61A] transition-all hover:duration-200 flex items-center"
            >
              Our Services <KeyboardArrowDownIcon />
            </Link>
            {/* {isServicesHovered && (
              <div
                onMouseLeave={() => setIsServicesHovered(false)}
                className="absolute top-full flex flex-row mt-5 w-[650px] h-[450px] bg-[#EFF7F7] shadow-lg border border-gray-300 rounded-3xl z-[500]"
              >
                <div className="w-1/2">
                  <img
                    className="w-full h-full object-cover rounded-tl-3xl rounded-bl-3xl"
                    src={serviceImage}
                    alt="service"
                  />
                </div>
                <div className="w-1/2">
                  <ul className="text-gray-700 space-y-2 overflow-hidden">
                    {data.slice(0, 6).map((item, index) => (
                      <li key={index} className="py-2 px-4 m-2 border-b-[1px] border-gray-400 w-3/4">
                        <Link       className="block  text-[#0065B3] hover:text-[#FFA61A] transition-all hover:duration-200">{item.maintitle}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )} */}
          </div>
          <Link
            to="/aboutus"
            className="text-[#0066B3] hover:text-[#FFA61A] transition-all hover:duration-200"
          >
            About Us
          </Link>
          <Link
            to="#"
            className="text-[#0066B3] hover:text-[#FFA61A] transition-all hover:duration-200"
          >
            Contact Us
          </Link>
        </div>

        {/* Right Section */}
        <div className="hidden lg:flex justify-center px-5 items-center gap-3">
          <SearchIcon
            className="hidden lg:block"
            sx={{ fontSize: "25px", color: "#2D322C" }}
          />
          <button className="py-3 bg-[#0066B3] hover:bg-[#FFA61A] transition-all hover:duration-200 text-white hover:text-[#0065B3] px-6 lg:px-10 rounded-3xl">
            Book A Visit
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex flex-row lg:hidden">
          <button className="py-3 hidden md:block bg-[#0066B3] hover:bg-[#FFA61A] transition-all hover:duration-200 text-white hover:text-[#0065B3] mr-10 px-6 lg:px-10 rounded-3xl">
            Book A Visit
          </button>
          <button
            className="block rounded-full bg-red text-gray-700 z-50"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <CloseIcon fontSize="large" />
            ) : (
              <MenuIcon fontSize="large" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu with Framer Motion Animation */}
      <motion.div
        initial={{ x: "100%" }} // Start from right (off-screen)
        animate={{ x: isOpen ? "0%" : "100%" }} // Slide in when open
        transition={{ type: "tween", duration: 0.4, ease: "easeInOut" }} // Smooth animation
        className="fixed top-[120px] right-0 w-full sm:w-3/4 z-[999] h-screen bg-[#EFF7F7] shadow-md lg:hidden"
      >
        <ul className="flex flex-col items-start gap-4 py-4 px-4 font-medium text-md text-gray-700">
          <li className="border-b-2 border-gray-400 w-full" onClick={()=> setIsOpen(false)}>
            <Link to="/" className="block py-2 px-4 text-[#0066B3]  hover:text-[#FFA61A] transition-all hover:duration-200">
              Home
            </Link>
          </li>
          <li className="border-b-2 border-gray-400 w-full" onClick={()=> setIsOpen(false)}>
            <Link to="/" className="block py-2 px-4 text-[#0066B3]  hover:text-[#FFA61A] transition-all hover:duration-200">
              Our Doctors
            </Link>
          </li>
          <li className="border-b-2 border-gray-400 w-full" onClick={()=> setIsOpen(false)}>
            <Link to="/" className="block py-2 px-4 text-[#0066B3]  hover:text-[#FFA61A] transition-all hover:duration-200">
              Our Services
            </Link>
          </li>
          <li className="border-b-2 border-gray-400 w-full" onClick={()=> setIsOpen(false)}>
            <Link to="/" className="block py-2 px-4 text-[#0066B3]  hover:text-[#FFA61A] transition-all hover:duration-200">
              About Us
            </Link>
          </li>
          <li className="border-b-2 border-gray-400 w-full" onClick={()=> setIsOpen(false)}>
            <Link to="/" className="block py-2 px-4 text-[#0066B3]  hover:text-[#FFA61A] transition-all hover:duration-200">
              Contact Us
            </Link>
          </li>
          <li className="flex gap-3 justify-center items-center w-full">
            <input
              className="bg-transparent py-3 px-5 rounded-3xl border-[1px] w-9/12"
              type="text"
              placeholder="Search"
            />
            <SearchIcon sx={{ fontSize: "25px", color: "#2D322C" }} />
          </li>
        </ul>
        <div className="flex justify-center items-center">
          <div className="text-center">
            <p>Hitect City , Hyderabad</p>
            <p className="py-2">Mon-Sat 10 to 8 PM</p>
            <p>Sunday Closed</p>
            <button className="px-10 py-4 text-3xl text-gray mt-5 font-serif">
              <PhoneInTalkOutlined
                sx={{ color: "gray", fontSize: "40px", paddingRight: "10px" }}
              />{" "}
              <a href="tel:18002001234">1800 255 1234</a>{" "}
            </button>
            <button className="py-2 bg-[#0066B3] hover:bg-[#FFA61A] transition-all hover:duration-200 text-white  hover:text-[#0065B3] px-6  rounded-3xl">
              Book A Visit
            </button>
          </div>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
