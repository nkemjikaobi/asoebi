import Image from "next/image";
import React, { FC } from "react";

import { IProduct } from "@dto/IProduct";

interface ProductListingCardProps {
  product: IProduct;
}
const ProductListingCard: FC<ProductListingCardProps> = ({ product }) => {
  return (
    <div className="w-full mb-4 cursor-pointer">
      <div className="w-full h-[21.75rem] bigLaptop:h-[23.75rem] relative rounded-[0.25rem]">
        <Image layout="fill" src={product.productImage} />
      </div>
      <div className="space-y-2">
        <p className="font-bold text-asoebiPurple-800 mt-2">{product.price}</p>
        <hr />
        <p className="font-semibold text-14 text-asoebiBlack-700">{product.productName}</p>
        <p className="text-12 font-normal text-asoebiBlack-300">{product.productDescription}</p>
      </div>
    </div>
  );
};

export default ProductListingCard;
