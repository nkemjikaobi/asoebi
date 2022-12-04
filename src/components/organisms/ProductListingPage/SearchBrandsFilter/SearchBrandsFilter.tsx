import React from "react";

import CustomCheckBox from "@components/atoms/CustomCheckBox/CustomCheckBox";

import ParentFilter from "../ParentFilter/ParentFilter";

const SearchBrandsFilter = () => {
  return (
    <ParentFilter title="search brands">
      <input className="mb-4 bg-asoebiGray-200 rounded-[0.25rem] focus:ring-0 border border-asoebiGray-50 border-none" type="text" />
      {SearchBrandsFilterData.map((brand) => (
        <div className="flex items-end mb-4" key={brand.id}>
          <CustomCheckBox />
          <p className="text-13 font-normal">{brand.name}</p>
          <span className="font-light text-13 ml-2 absolute right-5">{brand.count}</span>
        </div>
      ))}
    </ParentFilter>
  );
};

export default SearchBrandsFilter;

const SearchBrandsFilterData = [
  {
    id: 1,
    name: "Abercrombie & Fitch",
    count: 53,
  },
  {
    id: 2,
    name: "Atmosphere",
    count: 53,
  },
  {
    id: 3,
    name: "AWW",
    count: 21,
  },
  {
    id: 4,
    name: "Boohoo",
    count: 12,
  },
  {
    id: 5,
    name: "Canill",
    count: 1,
  },
  {
    id: 6,
    name: "Atmosphere",
    count: 53,
  },
  {
    id: 7,
    name: "AWW",
    count: 21,
  },
  {
    id: 8,
    name: "Boohoo",
    count: 12,
  },
  {
    id: 9,
    name: "Boohoo",
    count: 12,
  },
  {
    id: 10,
    name: "Canill",
    count: 1,
  },
  {
    id: 11,
    name: "Atmosphere",
    count: 53,
  },
  {
    id: 12,
    name: "AWW",
    count: 21,
  },
  {
    id: 13,
    name: "Boohoo",
    count: 12,
  },
];
