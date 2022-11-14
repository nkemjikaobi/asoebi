import React from "react";

import Carousel from "../Carousel/Carousel";

const HeroSection = () => {
  return (
    <div className="-ml-[50vw] left-[50%] relative w-screen overflow-x-hidden">
      <div className="flex bg-asoebiPurple-300 pl-[167px]">
        <div className="w-[408px] mt-[137px] mr-5">
          <h1 className="text-5xl font-medium">We do the work for you @Aso Ebi</h1>
          <p className="text-base font-normal mt-[23px] text-asoebiPurple-200">
            Let Aso Ebi platform take the stress off your shoulder, we distribute your asoebi materials across to all your friends, families and groups for any kind of occassions.
          </p>
          <button
            className="w-[198px] py-2 font-normal text-white rounded-lg bg-asoebiPurple-800 hover:bg-blue-700 focus:outline-none focus:shadow-outline mt-[39px]"
            type="button"
          >
            View Catalogue
          </button>
        </div>
        <div>
          <Carousel />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
