import Image from "next/image";
import React from "react";

import Icon from "@components/atoms/Icons";

const BottomSection = () => {
  return (
    <div className="flex flex-col smallLaptop:flex-row">
      <div className="block mt-8 smallLaptop:hidden">
        <Image alt="marchant" height="488" src="/images/png/bottom.png" width="528" />
      </div>
      <div className="w-full smallLaptop:w-[25.5rem] mt-4 smallLaptop:mt-[8.563rem] mr-[4.188rem]">
        <h1 className="text-18 text-center smallLaptop:text-[2rem] leading-9 font-medium">Join AsoEbi merchant community</h1>
        <p className="text-14 text-center w-[90%] smallLaptop:text-xl font-normal mt-[1.438rem] text-asoebiGray-202 smallLaptop:w-[22.938rem]">
          Are you a merchant selling in large quanities to end users, you can make more money selling on our platform
        </p>
        <div className="flex justify-center smallLaptop:justify-start items-center mt-[1.563rem]">
          <a className="underline mr-4 text-asoebiPurple-400 text-base smallLaptop:text-20">Sell on AsoEbi</a>
          <div className="hidden smallLaptop:block">
            <Icon name="customRight" />
          </div>
          <div className="block smallLaptop:hidden">
            <Icon name="customRightMobile" />
          </div>
        </div>
      </div>
      <div className="hidden smallLaptop:block">
        <Image alt="marchant" height="488" src="/images/png/bottom.png" width="528" />
      </div>
    </div>
  );
};

export default BottomSection;
