import React from "react";

import CustomRadioButton from "@components/atoms/CustomRadioButton/CustomRadioButton";

import ParentFilter from "../ParentFilter/ParentFilter";

const PricingFilter = () => {
  return (
    <ParentFilter title="price">
      <div>
        <CustomRadioButton labelClassName="font-light text-[0.813rem]" options={PricingFilterData} parentClassName="space-y-4" />
      </div>
    </ParentFilter>
  );
};

export default PricingFilter;

const PricingFilterData = [
  {
    name: "price",
    label: "Under ₦ 2000",
    value: "Under ₦ 2000",
  },
  {
    name: "price",
    label: "₦ 2000 - ₦ 5000",
    value: "₦ 2000 - ₦ 5000",
  },
  {
    name: "price",
    label: "₦ 5000 - ₦ 10000",
    value: "₦ 5000 - ₦ 10000",
  },
  {
    name: "price",
    label: "₦ 10000 - ₦ 20000",
    value: "₦ 10000 - ₦ 20000",
  },
  {
    name: "price",
    label: "₦ 20000 - ₦ 40000",
    value: "₦ 20000 - ₦ 40000",
  },
  {
    name: "price",
    label: "Above ₦ 40000",
    value: "Above ₦ 40000",
  },
];
