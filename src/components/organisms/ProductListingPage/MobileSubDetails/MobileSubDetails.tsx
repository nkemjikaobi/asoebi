import Image from "next/image";
import React from "react";

import Icon from "@components/atoms/Icons";

const MobileSubDetails = () => {
  return (
    <div className="block smallLaptop:hidden">
      <div className="flex justify-between bg-asoebiGray-60 h-[3.125rem] mb-6  ">
        <div className="flex items-center ml-[3.938rem]">
          <span className="mr-[0.875rem]">Sort</span>
          <Icon name="caretDown" />
        </div>
        <div className="flex items-center mr-[63px]">
          <span className="mr-[0.875rem]">Filter</span>
          <Icon name="caretDown" />
        </div>
      </div>
      <h3 className="font-medium text-center mb-6 text-14">6,112 styles found</h3>
      <div className="h-[8.75rem] relative">
        <Image layout="fill" src="/images/png/banner.png" />
      </div>
    </div>
  );
};

export default MobileSubDetails;
