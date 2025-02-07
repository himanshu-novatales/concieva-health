import { useEffect, useState } from "react";
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
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
      if (isOpen) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "";
      }
      // Cleanup on unmount
      return () => {
        document.body.style.overflow = "";
      };
    }, [isOpen]);
   
    const navigate = useNavigate()
  return (
    <nav className="bg-[#EFF7F7] p-2  px-3 w-full z-20 lg:top-10   shadow-md">
      <div className="flex justify-between items-center max-w-screen-2xl mx-auto">
        {/* Logo */}
        <div>
          <img className="w-36" onClick={() => navigate("/")} src={logo} alt="logo" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex md:justify-between flex-row gap-4 xl:gap-6 font-medium text-md text-gray-700">
          <Link to="/" className="text-[#0065B3]  hover:text-[#FFA61A] transition-all hover:duration-200">
            Home
          </Link>
          <Link to="#" className="text-[#0065B3]  hover:text-[#FFA61A] transition-all hover:duration-200">
            Our Doctors <KeyboardArrowDownIcon />
          </Link>
          <Link to="#" className="text-[#0065B3]  hover:text-[#FFA61A] transition-all hover:duration-200">
            Our Services <KeyboardArrowDownIcon />
          </Link>
          <Link to="/aboutus" className="text-[#0065B3]  hover:text-[#FFA61A] transition-all hover:duration-200">
           About Us
          </Link>
          <Link to="#" className="text-[#0065B3]  hover:text-[#FFA61A] transition-all hover:duration-200">
            Contacts <KeyboardArrowDownIcon />
          </Link>
        </div>

        {/* Right Icons & Button */}
        <div className="hidden lg:flex justify-center items-center gap-3">
          <SearchIcon
            className="hidden lg:block"
            sx={{ fontSize: "25px", color: "#2D322C" }}
          />
          <button className="py-2.5 bg-[#0065B3] hover:bg-[#FFA61A] transition-all hover:duration-200 text-white  hover:text-[#0065B3] mr-10 px-6 lg:px-10  rounded-3xl">
            Book A Visit
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex flex-row lg:hidden">
          <button className="py-3 hidden md:block bg-[#0065B3] hover:bg-[#FFA61A] transition-all hover:duration-200 text-white  hover:text-[#0065B3] mr-10 px-6 lg:px-10 rounded-3xl">
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
        className="fixed top-[100px] right-0 w-full sm:w-3/4 z-[999] h-screen bg-[#EFF7F7] shadow-md lg:hidden"
      >
        <ul className="flex flex-col items-start gap-4 py-4 px-4 font-medium text-md text-gray-700">
          <li className="border-b-2 border-gray-400 w-full" onClick={()=> setIsOpen(false)}>
            <Link to="/" className="block py-2 px-4 text-[#0065B3]  hover:text-[#FFA61A] transition-all hover:duration-200">
              Home
            </Link>
          </li>
          <li className="border-b-2 border-gray-400 w-full" onClick={()=> setIsOpen(false)}>
            <Link to="#" className="block py-2 px-4 text-[#0065B3]  hover:text-[#FFA61A] transition-all hover:duration-200">
              Our Doctors
            </Link>
          </li>
          <li className="border-b-2 border-gray-400 w-full" onClick={()=> setIsOpen(false)}>
            <Link to="#" className="block py-2 px-4 text-[#0065B3]  hover:text-[#FFA61A] transition-all hover:duration-200">
              Our Services
            </Link>
          </li>
          <li className="border-b-2 border-gray-400 w-full" onClick={()=> setIsOpen(false)}>
            <Link to="/aboutus" className="block py-2 px-4 text-[#0065B3]  hover:text-[#FFA61A] transition-all hover:duration-200">
              About Us
            </Link>
          </li>
          <li className="border-b-2 border-gray-400 w-full" onClick={()=> setIsOpen(false)}>
            <Link to="#" className="block py-2 px-4 text-[#0065B3]  hover:text-[#FFA61A] transition-all hover:duration-200">
              Contacts
            </Link>
          </li>
          <li className="flex gap-3 justify-center items-center w-full" onClick={()=> setIsOpen(false)}>
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
            <p>Kondapur Hyderabad</p>
            <p className="py-2">Mon-Sat 10 to 8 PM</p>
            <p>Sunday Closed</p>
            <button className="px-10 py-4 text-3xl text-gray mt-5 font-serif">
              <PhoneInTalkOutlined
                sx={{ color: "gray", fontSize: "40px", paddingRight: "10px" }}
              />{" "}
              <a href="tel:18002001234">1800 255 1234</a>{" "}
            </button>
            <button className="py-2 bg-[#0065B3] hover:bg-[#FFA61A] transition-all hover:duration-200 text-white  hover:text-[#0065B3] px-6  rounded-3xl">
              Book A Visit
            </button>
          </div>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
