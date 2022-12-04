import Image from "next/image";
import React from "react";

import Icon from "@components/atoms/Icons";

const DesktopSubDetails = () => {
  return (
    <div className="hidden smallLaptop:block">
      <div className="h-[15.75rem] bigLaptop:h-[18.75rem] relative">
        <Image layout="fill" src="/images/png/banner.png" />
      </div>
      <div className="flex justify-between items-center px-8 mt-6">
        <h3 className="font-medium">6,112 styles found</h3>
        <div className="flex items-center">
          <p className="mr-2 font-medium">
            Sort By: <span className="font-normal">Popularity</span>
          </p>
          <Icon className="cursor-pointer" name="caretDown" />
        </div>
      </div>
    </div>
  );
};

export default DesktopSubDetails;
