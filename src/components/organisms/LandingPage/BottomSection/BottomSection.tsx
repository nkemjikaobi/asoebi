import Image from "next/image";
import React from "react";

import Icon from "@components/atoms/Icons";

const BottomSection = () => {
  return (
    <div className="flex">
      <div className="w-[25.5rem] mt-[8.563rem] mr-[4.188rem]">
        <h1 className="text-[2rem] leading-9 font-medium">Join AsoEbi merchant community</h1>
        <p className="text-xl font-normal mt-[1.438rem] text-asoebiPurple-200 w-[22.938rem]">
          Are you a merchant selling in large quanities to end users, you can make more money selling on our platform
        </p>
        <div className="flex items-center mt-[1.563rem]">
          <a className="underline text-asoebiPurple-400 text-20">Sell on AsoEbi</a>
          <Icon name="customRight" />
        </div>
      </div>
      <div>
        <Image alt="marchant" height="488" src="/images/png/bottom.png" width="528" />
      </div>
    </div>
  );
};

export default BottomSection;
