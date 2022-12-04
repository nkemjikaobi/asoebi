import Image from "next/image";
import React, { FC } from "react";

import Icon from "@components/atoms/Icons";

import { IProduct } from "@dto/IProduct";

interface ProductListingCardProps {
  product: IProduct;
}
const ProductListingCard: FC<ProductListingCardProps> = ({ product }) => {
  return (
    <div className="w-full mb-4 cursor-pointer">
      <div className="w-[10.5rem] tablet:w-full h-[12.5rem] tablet:h-[21.75rem] bigLaptop:h-[23.75rem] relative rounded-[0.25rem]">
        <Image layout="fill" src={product.productImage} />
      </div>
      <div className="space-y-2 mt-2">
        <div className="flex justify-between items-center">
          <p className="font-bold text-asoebiPurple-800">{product.price}</p>
          <Icon className="cursor-pointer mr-4" name="heart2" />
        </div>
        <hr />
        <p className="font-semibold text-14 text-asoebiBlack-700">{product.productName}</p>
        <p className="text-12 font-normal text-asoebiBlack-300">{product.productDescription}</p>
      </div>
    </div>
  );
};

export default ProductListingCard;
