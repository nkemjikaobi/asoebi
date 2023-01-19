import React, { FC } from "react";

import Icon from "@components/atoms/Icons";

import { IProduct } from "@dto/IProduct";

import TrendingItemsCard from "../TrendingItemsCard/TrendingItemsCard";

interface ProductListingsProps {
  products: Array<IProduct>;
}
const TrendingItems: FC<ProductListingsProps> = ({ products }) => {
  return (
    <div className="flex flex-col normalLaptop:w-[63.5rem] mt-[4.75rem]">
      <div className="flex justify-between mb-[3.313rem]">
        <h2 className="text-base smallLaptop:text-2xl font-semibold">Trending Items</h2>
        <div className="flex items-center ">
          <p className="mr-[0.936rem] text-asoebiPurple-800 text-14 smallLaptop:text-base uppercase cursor-pointer hover:text-asoebiPurple-400">see all</p>
          <Icon className="cursor-pointer hover:text-asoebiPurple-400" name="right" />
        </div>
      </div>
      <div className="grid grid-cols-2  tablet:grid-cols-3 normalLaptop:flex normalLaptop:justify-between">
        {products.map((product) => (
          <TrendingItemsCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default TrendingItems;
