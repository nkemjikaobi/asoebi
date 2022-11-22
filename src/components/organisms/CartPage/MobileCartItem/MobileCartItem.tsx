import Image from "next/image";
import React from "react";

import Icon from "@components/atoms/Icons";

import { CURRENCIES } from "@shared/libs/helpers";

interface MobileCartItemProps {
  cartData: any;
  setShowSetPrice: Function;
  setShowTags: Function;
}

const MobileCartItem: React.FC<MobileCartItemProps> = ({ cartData, setShowSetPrice, setShowTags }) => {
  return (
    <div className="border border-asoebiGray-170 pl-2 pr-8 pt-4 pb-[2.625rem] mb-2" key={cartData.id}>
      <div className="flex items-center">
        <div className="w-[5.125rem] h-[3.75rem] relative">
          <Image className="object-cover" height={60} loading="eager" src={cartData?.imageUrl} width={82} />
        </div>
        <div className="ml-[0.75rem]">
          <h4 className="font-medium mb-2">{cartData?.productName}</h4>
          <div className="flex items-center w-[14.25rem] justify-between">
            <div className="flex text-12 items-center hover:cursor-pointer hover:text-asoebiPurple-800">
              <Icon className="mr-2" name="heart" />
              <span>Save for later</span>
            </div>
            <div className="flex text-12 items-center hover:cursor-pointer hover:text-asoebiPurple-800">
              <Icon className="mr-2" name="bin" />
              <span>Remove</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between mt-[1.25rem]">
        <div>
          <h5 className="text-12 text-asoebiGray-180 font-medium mb-2">Cost Price</h5>
          <h5 className="text-12 font-medium">
            {CURRENCIES.NAIRA}
            {cartData?.price}
          </h5>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-asoebiPurple-800 mb-4 text-right cursor-pointer  text-12 font-bold" onClick={() => setShowSetPrice(true)}>
            + Add Your Price
          </span>
          <span className="text-asoebiPurple-800 text-right cursor-pointer text-12 font-bold" onClick={() => setShowTags(true)}>
            + Add Tag
          </span>
        </div>
      </div>
    </div>
  );
};

export default MobileCartItem;
