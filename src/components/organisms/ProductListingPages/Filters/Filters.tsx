import React from "react";

import BrowseCategoriesFilter from "../BrowseCategoriesFilter/BrowseCategoriesFilter";
import PricingFilter from "../PricingFilter/PricingFilter";
import RatingsFilter from "../RatingsFilter/RatingsFilter";
import SearchBrandsFilter from "../SearchBrandsFilter/SearchBrandsFilter";

const Filters = () => {
  return (
    <div>
      <BrowseCategoriesFilter />
      <PricingFilter />
      <RatingsFilter />
      <SearchBrandsFilter />
    </div>
  );
};

export default Filters;
