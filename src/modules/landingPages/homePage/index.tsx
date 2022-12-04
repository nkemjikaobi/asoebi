import React, { FC } from "react";

import Banner from "@components/organisms/LandingPage/Banner/Banner";
import BottomSection from "@components/organisms/LandingPage/BottomSection/BottomSection";
import HeroSection from "@components/organisms/LandingPage/HeroSection/HeroSection";
import TrendingItems from "@components/organisms/LandingPage/TrendingItems/TrendingItems";
import TopProducts from "@components/organisms/TopProducts/TopProducts";

import { IProduct } from "@dto/IProduct";

export const HomePage: FC = () => (
  <>
    <HeroSection />
    <TrendingItems products={ProductListingCardsData} />
    <TopProducts />
    <Banner />
    <BottomSection />
  </>
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
];
