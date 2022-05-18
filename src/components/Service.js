import React from "react";

const Service = ({ data, setTreatment }) => {
  const { name, slots } = data;
  return (
    <div class="card w-96 bg-base-100 shadow-xl">
      <div class="card-body">
        <h2 class="card-title">Card title!</h2>
        <p>
          {slots.length > 0 ? (
            <span>{slots[0]}</span>
          ) : (
            <span className="text-red-400">no slot availavle</span>
          )}
        </p>
        <p>
          {slots.length} {slots.length > 0 ? "spaces" : "spaces"} availavel
        </p>
        <div class="card-actions justify-end">
          <label
            for="my-modal"
            onClick={() => setTreatment(data)}
            disabled={slots.length === 0}
            class="btn modal-button"
          >
            Book appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default Service;
