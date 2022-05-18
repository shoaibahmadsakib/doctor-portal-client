import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import Service from "./Service";
import BookingModal from "./BookingModal";

const AvailableAppintment = ({ date }) => {
  const [services, setServices] = useState([]);
  const [treatment, setTreatment] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/service")
      .then((res) => res.json())
      .then((data) => setServices(data));
  });
  return (
    <div>
      <p>You picked {format(date, "PP")}.</p>
      <div className="grid grid-cols-1 lg:grid-cols-3 mx-auto  lg:w-auto w-1/2">
        {services.map((data) => (
          <Service key={data._id} data={data} setTreatment={setTreatment} />
        ))}
      </div>
      {treatment && (
        <BookingModal
          date={date}
          treatment={treatment}
          setTreatment={setTreatment}
        ></BookingModal>
      )}
    </div>
  );
};

export default AvailableAppintment;
