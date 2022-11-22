import Image from "next/image";
import React, { FC } from "react";

import Icon from "@components/atoms/Icons";
import Filters from "@components/organisms/ProductListingPage/Filters/Filters";
import ProductListings from "@components/organisms/ProductListingPage/ProductListings/ProductListings";

import { IProduct } from "@dto/IProduct";

export const ProductListingPage: FC = () => (
  <div className="pt-16 bg-asoebiGray-100">
    <div className="h-[15.75rem] bigLaptop:h-[18.75rem] relative">
      <Image layout="fill" src="/images/png/banner.png" />
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
      <div className="w-[14.75rem] bg-white rounded-[0.25rem] mr-6 shrink-0 grow-0 basis-auto">
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
    productImage: "/images/png/asoebi1.png",
    price: "N20,000.00",
    productName: "Akara Satin",
    productDescription: "Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin...",
  },
  {
    id: 2,
    productImage: "/images/png/asoebi2.png",
    price: "N20,000.00",
    productName: "Aso Ebi Atiku",
    productDescription: "Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin...",
  },
  {
    id: 3,
    productImage: "/images/png/asoebi3.png",
    price: "N20,000.00",
    productName: "Akara Satin",
    productDescription: "Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin...",
  },
  {
    id: 4,
    productImage: "/images/png/asoebi1.png",
    price: "N20,000.00",
    productName: "Akara Satin",
    productDescription: "Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin...",
  },
  {
    id: 5,
    productImage: "/images/png/asoebi2.png",
    price: "N20,000.00",
    productName: "Aso Ebi Atiku",
    productDescription: "Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin...",
  },
  {
    id: 6,
    productImage: "/images/png/asoebi3.png",
    price: "N20,000.00",
    productName: "Akara Satin",
    productDescription: "Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin...",
  },
  {
    id: 7,
    productImage: "/images/png/asoebi1.png",
    price: "N20,000.00",
    productName: "Aso Ebi Atiku",
    productDescription: "Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin...",
  },
  {
    id: 8,
    productImage: "/images/png/asoebi2.png",
    price: "N20,000.00",
    productName: "Akara Satin",
    productDescription: "Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin...",
  },
  {
    id: 9,
    productImage: "/images/png/asoebi3.png",
    price: "N20,000.00",
    productName: "Akara Satin",
    productDescription: "Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin...",
  },
  {
    id: 10,
    productImage: "/images/png/asoebi1.png",
    price: "N20,000.00",
    productName: "Aso Ebi Atiku",
    productDescription: "Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin...",
  },
  {
    id: 11,
    productImage: "/images/png/asoebi2.png",
    price: "N20,000.00",
    productName: "Akara Satin",
    productDescription: "Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin...",
  },
  {
    id: 12,
    productImage: "/images/png/asoebi3.png",
    price: "N20,000.00",
    productName: "Akara Satin",
    productDescription: "Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin...",
  },
];
