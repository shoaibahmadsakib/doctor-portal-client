import React, { useState } from "react";
import chair from "../../Assets/images/chair.png";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";


const AppointmentBanner = ({date,setDate}) => {
  

  
  
  return (
    <div class="flex w-full">
      <div class="grid  flex-grow card bg-base-100  place-items-center w-1/2">
        <DayPicker
          mode="single"
          selected={date}
          onSelect={setDate}
         
        />
        ;
      </div>
     
      <div class="grid flex-grow card bg-base-100 place-items-center w-1/2">
        <img src={chair} alt="" />
      </div>
    </div>
  );
};

export default AppointmentBanner;
