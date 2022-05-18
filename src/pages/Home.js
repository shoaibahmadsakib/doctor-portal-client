import React from "react";
import Booking from "../components/Booking";
import Cards from "../components/Cards";
import DoctorBanner from "../components/DoctorBanner";
import Exceptional from "../components/Exceptional";
import HeroSection from "../components/HeroSection";
import Services from "../components/Services";
import Teatimoniam from "../components/Teatimoniam";
import ThreeCardSection from "../components/ThreeCardSection";

const Home = () => {
  return (
    <>
      <HeroSection />
      <Cards />
      <Services/>
      <Exceptional/>
      {/* <DoctorBanner/> */}
      <Teatimoniam/>
      <Booking/>
    </>
  );
};

export default Home;
