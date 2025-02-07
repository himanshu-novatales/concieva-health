import React, { useEffect } from "react";
import AboutSectionOne from "../components/aboutSectionOne";
import AboutSectionTwo from "../components/AboutSectionTwo";
import SectionFive from "../components/sectionFive";
import SectionFour from "../components/sectionFour";
import ContactForm from "../components/ContactForm";

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <div>
      <AboutSectionOne />
      <AboutSectionTwo />
      <SectionFour />
      <SectionFive />
      <ContactForm />
    </div>
  );
};

export default AboutUs;
