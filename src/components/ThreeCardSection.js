import React from "react";
import clockIcon from "../Assets/icons/clock.svg";
import phoneIcon from "../Assets/icons/phone.svg";
import markerIcon from "../Assets/icons/marker.svg";

const ThreeCardSection = ({icons,bgColor,textContent}) => {
  return (
   
      <div class={`card shadow-xl ${bgColor}`}>
        <div class="card-body flex flex-row items-center justify-between">
          <div>
            <h2 className="text-white text-2xl">{textContent}</h2>
            <p className="text-white">We are using cookies for no reason.</p>
          </div>
          <div class="card-actions justify-end">
            <img src={icons} alt="" width="30px" />
          </div>
        </div>
      </div>
  
  );
};

export default ThreeCardSection;
