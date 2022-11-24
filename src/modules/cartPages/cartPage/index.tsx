import React, { FC } from "react";

import Icon from "@components/atoms/Icons";
import CartItems from "@components/organisms/CartPage/CartItems/CartItems";
import MobileCartItems from "@components/organisms/CartPage/MobileCartItems/MobileCartItems";

export const CartPage: FC = () => (
  <div className="mb-[665px]">
    <h3 className="text-18 smallLaptop:text-24 mt-[36px] mb-[23px]">Inside My Cart</h3>
    <div className="flex items-center py-2 smallLaptop:py-[11.5px] pl-[34px] bg-asoebiYellow-100 h-[50px] smallLaptop:h-[40px] mb-[16px] mt-[23px] w-full">
      <Icon name="warn" />
      <span className="ml-[13px] text-14 text-asoebiYellow-400">Please set your preferred price and ownership type</span>
    </div>
    <div className="hidden smallLaptop:block">
      <CartItems cartItemsData={cartItemsData} />
    </div>
    <div className="block smallLaptop:hidden">
      <MobileCartItems cartItemsData={cartItemsData} />
    </div>
  </div>
);

const cartItemsData = [
  {
    id: 1,
    imageUrl: "/images/png/cart/cart1.png",
    productName: "Mega Eleganza Organza Satin ",
    price: "26000",
  },
  {
    id: 2,
    imageUrl: "/images/png/cart/cart2.png",
    productName: "Pink Lace Organza Satin  ",
    price: "35000",
  },
  {
    id: 3,
    imageUrl: "/images/png/cart/cart1.png",
    productName: "Mega Eleganza Organza Satin ",
    price: "31000",
  },
  {
    id: 4,
    imageUrl: "/images/png/cart/cart2.png",
    productName: "Pink Lace Organza Satin  ",
    price: "27000",
  },
  {
    id: 5,
    imageUrl: "/images/png/cart/cart1.png",
    productName: "Mega Eleganza Organza Satin ",
    price: "26000",
  },
];
