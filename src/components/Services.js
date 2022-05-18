import React from "react";
import cavity from "../Assets/images/cavity.png";
import fluoride from "../Assets/images/fluoride.png";
import whitening from "../Assets/images/whitening.png";
const Services = () => {
  return (
    <>
      <h1>Our Service</h1>

      <div className="grid lg:grid-cols-3 grid-cols-1 text-center m-auto w-fit">
        <div class="card w-96 bg-base-100 shadow-xl">
          <figure className="p-6">
            <img src={cavity} alt="Shoes" />
          </figure>
          <div class="card-body items-center">
            <h2 class="card-title text-center">Fluoride Treatment</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
           
          </div>
        </div>
        <div class="card w-96 bg-base-100 shadow-xl">
          <figure className="p-6">
            <img src={whitening} alt="Shoes" />
          </figure>
          <div class="card-body items-center">
            <h2 class="card-title text-center">Fluoride Treatment</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
           
          </div>
        </div>
        <div class="card w-96 bg-base-100 shadow-xl">
          <figure className="p-6">
            <img src={fluoride} alt="Shoes" />
          </figure>
          <div class="card-body items-center">
            <h2 class="card-title text-center">Fluoride Treatment</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
           
          </div>
        </div>
       
      </div>
    </>
  );
};

export default Services;
