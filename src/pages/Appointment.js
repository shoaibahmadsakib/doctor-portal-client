import React, { useState } from "react";
import AppointmentBanner from "../components/AppointmentBanner";
import AvailableAppintment from "../components/AvailableAppintment";


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
