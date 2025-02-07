import React, { useEffect } from "react";

import HeadVdo from "../components/headervdo";
import SectionOne from "../components/SectionOne";
import SectionTwo from "../components/sectionTwo";
import SectionThree from "../components/SectionThree";
import SectionFive from "../components/sectionFive";
import SectionFour from "../components/sectionFour";
import SectionSix from "../components/SectionSix";
// import SectionSeven from "../components/sectionSeven";
import SectionEight from "../components/SectionEight";
import SectionNine from "../components/SectionNine";
import SectionTen from "../components/SectionTen";

const HomaPage = () => {
  useEffect(()=>{
    window.scrollTo({ top: 0, behavior: "smooth" });
  },[])
  return (
    <>
      
      <HeadVdo />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
      <SectionEight />
      <SectionNine />
      <SectionTen />
    </>
  );
};

export default HomaPage;
