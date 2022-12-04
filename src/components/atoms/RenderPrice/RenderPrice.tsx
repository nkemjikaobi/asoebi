import React from "react";

import { CURRENCIES } from "@shared/libs/helpers";

interface RenderPriceProps {
  text: string;
  price?: number;
  fallBackText?: string;
  priceClass?: string;
  textClass?: string;
}

const RenderPrice: React.FC<RenderPriceProps> = ({ text, price, fallBackText, priceClass, textClass }) => {
  return (
    <div className="flex items-center justify-between my-2">
      <h5 className={`${textClass} capitalize text-14`}>{text}</h5>
      <h5 className={`${priceClass} text-asoebiGray-190 whitespace-nowrap text-14 normalLaptop:text-base`}>
        {price && price > 0 ? `${CURRENCIES.NAIRA} ${Number(price).toLocaleString()}` : fallBackText}
      </h5>
    </div>
  );
};

export default RenderPrice;

RenderPrice.defaultProps = {
  fallBackText: "",
  priceClass: "",
  textClass: "",
  price: 0,
};
