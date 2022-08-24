import Image from "next/image";
import React, { FC } from "react";

import Icon from "@components/atoms/Icons";
import Filters from "@components/organisms/ProductListingPages/Filters/Filters";
import ProductListings from "@components/organisms/ProductListingPages/ProductListings/ProductListings";

import { IProduct } from "@dto/IProduct";

import Asoebi1 from "@images/png/asoebi1.png";
import Asoebi2 from "@images/png/asoebi2.png";
import Asoebi3 from "@images/png/asoebi3.png";
import Banner from "@images/png/banner.png";

export const ProductListingPage: FC = () => (
  <div className="pt-16">
    <div className="h-[15.75rem] bigLaptop:h-[18.75rem] relative">
      <Image layout="fill" src={Banner} />
    </div>
    <div className="flex justify-between items-center px-8 mt-6">
      <h3 className="font-medium">6,112 styles found</h3>
      <div className="flex items-center">
        <p className="mr-2 font-medium">
          Sort By: <span className="font-normal">Popularity</span>
        </p>
        <Icon className="cursor-pointer" name="caretDown" />
      </div>
    </div>
    <div className="flex mt-8">
      <div className="w-[14.75rem] bg-gray-300 rounded-[0.25rem] mr-6 shrink-0 grow-0 basis-auto">
        <Filters />
      </div>
      <div className="">
        <ProductListings products={ProductListingCardsData} />
      </div>
    </div>
  </div>
);

const ProductListingCardsData: IProduct[] = [
  {
    id: 1,
    productImage: Asoebi1,
    price: "N20,000.00",
    productName: "Akara Satin",
    productDescription: "Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin...",
  },
  {
    id: 2,
    productImage: Asoebi2,
    price: "N20,000.00",
    productName: "Aso Ebi Atiku",
    productDescription: "Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin...",
  },
  {
    id: 3,
    productImage: Asoebi3,
    price: "N20,000.00",
    productName: "Akara Satin",
    productDescription: "Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin...",
  },
  {
    id: 4,
    productImage: Asoebi1,
    price: "N20,000.00",
    productName: "Akara Satin",
    productDescription: "Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin...",
  },
  {
    id: 5,
    productImage: Asoebi2,
    price: "N20,000.00",
    productName: "Aso Ebi Atiku",
    productDescription: "Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin...",
  },
  {
    id: 6,
    productImage: Asoebi3,
    price: "N20,000.00",
    productName: "Akara Satin",
    productDescription: "Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin...",
  },
  {
    id: 7,
    productImage: Asoebi1,
    price: "N20,000.00",
    productName: "Aso Ebi Atiku",
    productDescription: "Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin...",
  },
  {
    id: 8,
    productImage: Asoebi2,
    price: "N20,000.00",
    productName: "Akara Satin",
    productDescription: "Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin...",
  },
  {
    id: 9,
    productImage: Asoebi3,
    price: "N20,000.00",
    productName: "Akara Satin",
    productDescription: "Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin...",
  },
  {
    id: 10,
    productImage: Asoebi1,
    price: "N20,000.00",
    productName: "Aso Ebi Atiku",
    productDescription: "Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin...",
  },
  {
    id: 11,
    productImage: Asoebi2,
    price: "N20,000.00",
    productName: "Akara Satin",
    productDescription: "Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin...",
  },
  {
    id: 12,
    productImage: Asoebi3,
    price: "N20,000.00",
    productName: "Akara Satin",
    productDescription: "Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin...",
  },
];
