import { useRouter } from "next/router";
import React, { FC } from "react";

import Icon from "@components/atoms/Icons";
import CartItems from "@components/organisms/CartPage/CartItems/CartItems";
import MobileCartItems from "@components/organisms/CartPage/MobileCartItems/MobileCartItems";

export const CartPage: FC = () => {
  const router = useRouter();
  return (
    <div className="mb-12">
      <div className="flex items-center mb-[1.719rem] mt-[3.049rem] smallLaptop:hidden">
        <Icon className="cursor-pointer mr-[1.081rem]" name="chevronLeft" />
        <span className="text-14" onClick={() => router.back()}>
          Continue Shopping
        </span>
      </div>
      <h3 className="text-18 smallLaptop:text-24 mt-[2.25rem] mb-[1.438rem]">Inside My Cart</h3>
      <div className="flex items-center py-2 smallLaptop:py-[0.719rem] pl-[2.125rem] bg-asoebiYellow-100 h-[3.125rem] smallLaptop:h-[2.5rem] mb-4 mt-[1.438rem] w-full">
        <Icon name="warn" />
        <span className="ml-[0.813rem] text-14 text-asoebiYellow-400">Please set your preferred price and ownership type</span>
      </div>
      <div className="hidden smallLaptop:block">
        <CartItems cartItemsData={cartItemsData} />
      </div>
      <div className="block smallLaptop:hidden">
        <MobileCartItems cartItemsData={cartItemsData} />
      </div>
    </div>
  );
};

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
