import React, { FC } from "react";

import CustomButton from "@components/atoms/CustomButton/CustomButton";
import DesktopSubDetails from "@components/organisms/ProductListingPage/DesktopSubDetails/DesktopSubDetails";
import Filters from "@components/organisms/ProductListingPage/Filters/Filters";
import MobileSubDetails from "@components/organisms/ProductListingPage/MobileSubDetails/MobileSubDetails";
import ProductListings from "@components/organisms/ProductListingPage/ProductListings/ProductListings";

import { IProduct } from "@dto/IProduct";

import { ButtonProperties } from "@shared/libs/helpers";

export const ProductListingPage: FC = () => (
  <div className="pt-16 bg-asoebiGray-100">
    <DesktopSubDetails />
    <MobileSubDetails />
    <div className="flex mt-8">
      <div className="hidden smallLaptop:block w-[14.75rem] bg-white rounded-[0.25rem] mr-6 shrink-0 grow-0 basis-auto">
        <Filters />
      </div>
      <div className="">
        <ProductListings products={ProductListingCardsData} />
      </div>
    </div>
    <div className="mb-6 smallLaptop:hidden flex items-center justify-center">
      <p className="text-14 mb-4 mt-6 text-center">You’ve viewed 72 of 200 products</p>
      <progress className="ml-2 text-center" max="100" value="40">
        40%
      </progress>
    </div>
    <div className="smallLaptop:hidden flex items-center justify-center">
      <CustomButton
        customClass="w-[90%] tablet:w-[75%] !text-asoebiPurple-800 uppercase"
        handleClick={() => {}}
        isTransparent={true}
        size={ButtonProperties.SIZES.small}
        title="load more"
        type="submit"
        variant={ButtonProperties.VARIANT.primary.name}
      />
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
