import Image from "next/image";
import React from "react";

import CustomButton from "@components/atoms/CustomButton/CustomButton";

import { ButtonProperties } from "@shared/libs/helpers";

import AsoebiLand from "@images/png/asoebi-land.png";

const MobileHeroSection = () => {
  return (
    <div className="relative smallLaptop:hidden">
      <Image height={636} src={AsoebiLand} width={375} />
      <div className="absolute bottom-0 w-[23.438rem] h-[16.125rem] bg-asoebiWhite-200 pt-[1.875rem] px-[1.063rem] pb-[1.313rem]">
        <h3 className="text-24 font-medium text-asoebiBlack-900">We do the work for you @Aso Ebi</h3>
        <p className="text-14 mt-2 mb-4 text-asoebiGray-202">
          Let Aso Ebi platform take the stress off your shoulder, we distribute your asoebi materials across to all your friends, families and groups for any kind of occassions.
        </p>
        <div className="flex justify-center items-center">
          <CustomButton
            customClass="w-[95%]"
            handleClick={() => {}}
            size={ButtonProperties.SIZES.small}
            title="View Catalogue"
            type="submit"
            variant={ButtonProperties.VARIANT.primary.name}
          />
        </div>
      </div>
    </div>
  );
};

export default MobileHeroSection;
