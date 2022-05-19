import React from "react";
import chair from "../../Assets/images/chair.png"
const HeroSection = () => {
  return (
    <div className="hero min-h-screen bg-white px-10">
      <div className="hero-content flex-col lg:flex-row-reverse px-0">
        <img
          src={chair}
          className="max-w-lg rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
          <p className="py-6">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
