import type { NextPage } from "next";

import BasePageLayout from "@components/layouts/BasePageLayout/BasePageLayout";

import { ProductListingPage } from "@modules/productListingPages";

const ProductListing: NextPage = () => {
  const breadCrumb = [{ text: "Home", url: "/" }, { text: "Owanbe", url: "/" }, { text: "Satin Asoebi" }];
  return (
    <BasePageLayout breadcrumbs={breadCrumb} title="Product Listing Page">
      <ProductListingPage />
    </BasePageLayout>
  );
};

export default ProductListing;