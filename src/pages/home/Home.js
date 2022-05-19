import React from "react";
import Booking from "../../components/Booking";
import Cards from "../../components/Cards/Cards";
import Exceptional from "../home/Exceptional";
import HeroSection from "../home/HeroSection";
import Services from "../home/Services";


const Home = () => {
  return (
    <>
      <HeroSection />
      <Cards />
      <Services/>
      <Exceptional/>
      {/* <DoctorBanner/> */}
  
      <Booking/>
    </>
  );
};

export default Home;
