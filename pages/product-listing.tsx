import type { NextPage } from "next";

import BasePageLayout from "@components/layouts/BasePageLayout/BasePageLayout";

import { ProductListingPage } from "@modules/productListingPages";

const ProductListing: NextPage = () => {
  const breadCrumb = [{ text: "Home", url: "/" }, { text: "Owanbe", url: "/" }, { text: "Satin Asoebi" }];
  return (
    <BasePageLayout breadcrumbs={breadCrumb} showCoreValues={true} title="Product Listing Page">
      <div className="max-w-[90rem] mx-auto">
        <ProductListingPage />
      </div>
    </BasePageLayout>
  );
};

export default ProductListing;
