import Image from "next/image";
import React, { FC } from "react";

import { IProduct } from "@dto/IProduct";

interface ProductListingCardProps {
  product: IProduct;
}
const TrendingItemsCard: FC<ProductListingCardProps> = ({ product }) => {
  return (
    <div className="w-[14.75rem] mb-4 cursor-pointer">
      <div className="w-[14.75rem] h-[20.625rem] bigLaptop:h-[23.75rem] relative rounded-[0.25rem]">
        <Image layout="fill" src={product.productImage} />
      </div>
      <div className="space-y-2">
        <p className="mt-2 font-bold text-asoebiPurple-800">{product.price}</p>
        <hr />
        <p className="font-semibold text-14 text-asoebiBlack-700">{product.productName}</p>
        <p className="font-normal text-12 text-asoebiBlack-300">{product.productDescription}</p>
      </div>
    </div>
  );
};

export default TrendingItemsCard;
