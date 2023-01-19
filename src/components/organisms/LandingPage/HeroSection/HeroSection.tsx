import React from "react";

import Carousel from "../Carousel/Carousel";
import MobileHeroSection from "../MobileHeroSection/MobileHeroSection";

const HeroSection = () => {
  return (
    <>
      <div className="hidden smallLaptop:block -ml-[50vw] left-[50%] relative w-screen overflow-x-hidden">
        <div className="flex bg-asoebiPurple-300 pl-[10.438rem]">
          <div className="w-[25.5rem] mt-[8.563rem] mr-5">
            <h1 className="text-5xl font-medium">We do the work for you @Aso Ebi</h1>
            <p className="text-base font-normal mt-[1.438rem] text-asoebiGray-202">
              Let Aso Ebi platform take the stress off your shoulder, we distribute your asoebi materials across to all your friends, families and groups for any kind of
              occassions.
            </p>
            <button
              className="w-[12.375rem] py-2 font-normal text-white rounded-lg bg-asoebiPurple-800 hover:bg-blue-700 focus:outline-none focus:shadow-outline mt-[2.438rem]"
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
      <MobileHeroSection />
    </>
  );
};

export default HeroSection;
