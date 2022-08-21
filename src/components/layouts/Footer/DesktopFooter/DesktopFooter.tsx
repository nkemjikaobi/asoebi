import React from "react";

import Icon from "@components/atoms/Icons";
import FooterOptions from "@components/FooterOptions.tsx/FooterOptions";

import { About } from "@componentData/Footer/About";
import { Buying } from "@componentData/Footer/Buying";
import { Selling } from "@componentData/Footer/Selling";

const DesktopFooter = () => {
  return (
    <>
      <div className="bg-black px-64 py-8 text-white grid grid-cols-4 gap-4">
        <FooterOptions options={About} title="about myasoebi" />
        <FooterOptions options={Buying} title="buying on myasoebi" />
        <FooterOptions options={Selling} title="sell on myasoebi" />
        <div className="flex items-center rounded-[0.25rem] border border-white w-[14.75rem] h-[4.25rem] mt-12 p-3">
          <Icon className="mr-2" name="call" />
          <div>
            <p className="text-14">Got Questions? Call us</p>
            <p className="text-[1.375rem]">090123456789</p>
          </div>
        </div>
      </div>
      <div className="bg-asoebiPurple-100 pl-64 pr-80 py-4 text-14 text-asoebiGray-700 flex justify-between items-center">
        <p>&#169; {new Date().getFullYear()} ASOS</p>
        <p>Privacy & Cookies | Ts&Cs | Accessibility</p>
      </div>
    </>
  );
};

export default DesktopFooter;
