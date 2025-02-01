import React from "react";
import logo from "../assets/images/logo.svg";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
const Navabr = () => {
  return (
    <div className="bg-[#EFF7F7] p-2 flex px-10 py-3 justify-between items-center">
      <div className="">
        <img
          className="w-36"
          src={logo}
          alt="logo
            "
        />
      </div>
      <div className="flex flex-row gap-8 font-medium text-md text-gray-700">
        <Link>Home <KeyboardArrowDownIcon/> </Link>
        <Link>Our Doctors <KeyboardArrowDownIcon/> </Link>
        <Link>Our Services <KeyboardArrowDownIcon/> </Link>
        <Link>Pages <KeyboardArrowDownIcon/> </Link>
        <Link>Contacts <KeyboardArrowDownIcon/> </Link>
      </div>
      <div className="flex justify-center me-3 gap-3 items-center">
        <SearchIcon
          sx={{
            fontSize: "25px",
            color: "#2D322C",
          }}
        />
        <button className="py-3 bg-[#F69179] px-10 text-white rounded-3xl">
          Book A Visit
        </button>
      </div>
    </div>
  );
};

export default Navabr;
