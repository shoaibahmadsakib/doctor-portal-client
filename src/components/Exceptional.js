import React from "react";
import treatement from "../Assets/images/treatment.png"

const Exceptional = () => {
  return (
    <div class="flex flex-col w-full lg:flex-row px-10 gap-10 my-10">
      <div class="grid flex-grow  card  rounded-box place-items-center w-1/2">
        <img src={treatement} alt="" width="70%"/>
      </div>
     
      <div class="grid flex-grow card  rounded-box place-items-center w-1/2 px-6">
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

export default Exceptional;
