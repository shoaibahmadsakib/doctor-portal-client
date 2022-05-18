import React from "react";
import { format } from "date-fns";

const BookingModal = ({ treatment, date ,setTreatment}) => {
  const { name, slots,_id } = treatment;

  const handleSubmit =(e)=>{
   e.preventDefault()
   const slot =e.target.time.value

   
   const booking = {
    treatmentId: _id,
    treatment: name,
   
    slot,
   
    phone: e.target.phone.value
}
   console.log(booking);
   setTreatment(null)
  }
  return (
    <div>
      <input type="checkbox" id="my-modal" class="modal-toggle" />
      <div class="modal">
        <div class="modal-box relative">
          <label
            for="my-modal"
            class="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 class="text-lg font-bold"></h3>
          <p class="py-4">{name}</p>
          <form onSubmit={handleSubmit} className="grid grid-flow-row gap-3 justify-items-center">
            <input
              type="text"
              disabled
              name="time"
              value={format(date, "PP")}
              placeholder="Type here"
              class="input input-bordered input-accent w-full max-w-xs"
            />
            <select class="select select-bordered w-full max-w-xs">

                {
                    slots.map(slot=>
                    <option value={slot}>{slot}</option>)
                }
             
            </select>
            <input
              type="text"
              placeholder="Type here"
              class="input input-bordered input-accent w-full max-w-xs"
            />
            <input
              type="number"
              name="phone"
              placeholder="Type here"
              class="input input-bordered input-accent w-full max-w-xs"
            />
            <input
              type="submit"
              value="submit"
              class="btn btn-secondary w-full max-w-xs"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
