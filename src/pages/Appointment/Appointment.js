import React, { useState } from "react";
import AppointmentBanner from "./AppointmentBanner";
import AvailableAppintment from "./AvailableAppintment";


const Appointment = () => {
  const [date, setDate] = useState(new Date());
  return (
    <div>
     <AppointmentBanner
      date={date} 
      setDate={setDate}/>
     <AvailableAppintment date={date}/>
    </div>
  );
};

export default Appointment;
