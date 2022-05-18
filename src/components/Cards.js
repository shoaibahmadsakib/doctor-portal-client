import React from "react";
import ThreeCardSection from "./ThreeCardSection";
import clockIcon from "../Assets/icons/clock.svg";
import phoneIcon from "../Assets/icons/phone.svg";
import markerIcon from "../Assets/icons/marker.svg";
const Cards = () => {
  return (
    <div className="grid grid-cols-3 gap-5 px-8">
      <ThreeCardSection
        textContent="opening hours"
        bgColor="bg-cyan-400"
        icons={clockIcon}
      />
      <ThreeCardSection
        textContent="opening hours"
        bgColor="bg-stone-500"
        icons={phoneIcon}
      />
      <ThreeCardSection
        textContent="opening hours"
        bgColor="bg-cyan-400"
        icons={markerIcon}
      />
    </div>
  );
};

export default Cards;
