import React from "react";

import CustomRadioButton from "@components/atoms/CustomRadioButton/CustomRadioButton";

import ParentFilter from "../ParentFilter/ParentFilter";

const BrowseCategoriesFilter = () => {
  return (
    <ParentFilter title="browse categories">
      <h5 className="text-[0.813rem] font-light mb-2">Oganzan Sartin Fashion</h5>
      <p className="text-[0.813rem] mb-4">D12 Oganza Satin</p>
      <div>
        <CustomRadioButton labelClassName="font-light text-[0.813rem]" options={BrowseCategoriesFilterData} parentClassName="space-y-4" />
      </div>
    </ParentFilter>
  );
};

export default BrowseCategoriesFilter;

const BrowseCategoriesFilterData = [
  {
    name: "category",
    label: "Define Filter Parameter",
    value: "define1",
  },
  {
    name: "category",
    label: "Define Filter",
    value: "define2",
  },
  {
    name: "category",
    label: "Define Parameter",
    value: "define3",
  },
];
