import Image from "next/image";
import React from "react";

import Icon from "@components/atoms/Icons";

interface TopProducts {
  title?: string;
}

const TopProducts = ({ title }: TopProducts) => {
  return (
    <div className="mt-[4.625rem]">
      <div className="mb-6">
        <h2 className="font-semibold text-base smallLaptop:text-24 text-center">{title}</h2>
      </div>
      <div className="flex flex-col smallLaptop:flex-row">
        <div className="smallLaptop:mr-[1.5rem] relative">
          <Image className="duration-500 ease-in hover:scale-125" height="472px" src="/images/png/top1.png" width="496px" />
          <div className="h-[7.5rem] w-full absolute bottom-0 bg-asoebiWhite-100/50 flex pt-4 pl-5">
            <h2 className="text-2xl font-semibold w-[16.063rem] h-0">High Quality Ankara fabric materials</h2>
            <Icon className="ml-[5.25rem]" name="customRight" />
          </div>
        </div>
        <div className="relative">
          <Image className="duration-500 ease-in hover:scale-125" height="472px" src="/images/png/top2.png" width="496px" />
          <div className="h-[7.5rem] w-full absolute bottom-0 bg-asoebiWhite-100/50 flex pt-4 pl-5">
            <h2 className="text-2xl font-semibold w-[16.063rem] h-0">Owambe style Guinea Brocade material</h2>
            <Icon className="ml-[5.25rem]" name="customRight" />
          </div>
        </div>
      </div>

      <div className="flex flex-col smallLaptop:flex-row mt-5">
        <div className="smallLaptop:mr-[1.5rem] relative">
          <Image className="duration-500 ease-in hover:scale-125" height="472px" src="/images/png/top3.png" width="584px" />
          <div className="h-[7.5rem] w-full absolute bottom-0 bg-asoebiWhite-100/50 flex">
            <h2 className="text-2xl font-semibold w-[22.875rem] mt-4 ml-5">Damask high quality material for everyone</h2>
            <Icon className="ml-[3rem] mt-5" name="customRight" />
          </div>
        </div>
        <div className="relative">
          <Image className="duration-500 ease-in hover:scale-125" height="472px" src="/images/png/top4.png" width="408px" />
          <div className="h-[7.5rem] w-full absolute bottom-0 bg-asoebiWhite-100/50 flex">
            <h2 className="text-2xl font-semibold w-[12.25rem] mt-4 ml-5">Coated satin material</h2>
            <Icon className="ml-[6.813rem] mt-5" name="customRight" />
          </div>
        </div>
      </div>
    </div>
  );
};

TopProducts.defaultProps = {
  title: "Our Top Products",
};

export default TopProducts;
