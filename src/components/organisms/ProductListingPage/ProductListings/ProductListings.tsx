import React, { FC } from "react";

import ProductListingCard from "@components/organisms/ProductListingPage/ProductListingCard/ProductListingCard";

import { IProduct } from "@dto/IProduct";

interface ProductListingsProps {
  products: Array<IProduct>;
}
const ProductListings: FC<ProductListingsProps> = ({ products }) => {
  return (
    <div className="grid grid-cols-2 normalLaptop:grid-cols-3 gap-[1.5rem]">
      {products.map((product) => (
        <ProductListingCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductListings;
