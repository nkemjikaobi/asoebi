import Image from "next/image";
import React from "react";

import { CURRENCIES } from "@shared/libs/helpers";

interface BookingCartItemProps {
  cart: any;
}

const BookingCartItem: React.FC<BookingCartItemProps> = ({ cart }) => {
  return (
    <div className="flex items-center border border-asoebiGray-170 pl-4 pt-[0.813rem] mb-2 smallLaptop:mb-0 w-[21.375rem] h-[8rem] smallLaptop:w-full smallLaptop:h-full">
      <Image alt="product image" height={60} src={cart.url} width={82} />
      <div className="ml-[0.938rem]">
        <h4 className="font-mdium text-14 normalLaptop:text-base mb-2">{cart.name}</h4>
        <h4 className="text-14 normalLaptop:text-base font-normal">
          {CURRENCIES.NAIRA}
          {Number(cart.price).toLocaleString()}
        </h4>
        <p className="bg-asoebiYellow-200 px-2 py-1 w-fit rounded-[0.875rem] mb-[0.313rem] capitalize text-14 normalLaptop:text-base text-asoebiYellow-400 mt-2">{cart.category}</p>
      </div>
    </div>
  );
};

export default BookingCartItem;
