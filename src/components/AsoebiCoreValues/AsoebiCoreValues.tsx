import React from "react";

import Icon from "@components/atoms/Icons";

const AsoebiCoreValues = () => {
  return (
    <div className="mb-16 mt-24">
      <div className="max-w-[90rem] mx-auto grid grid-cols-2 smallLaptop:grid-cols-4 gap-3 px-4 smallLaptop:pl-[7.25rem] smallLaptop:pr-[8.813rem] normalLaptop:pl-[17.25rem] normalLaptop:pr-[18.813rem]">
        {AsoebiCoreValuesData.map((value) => (
          <div className="space-y-4 smallLaptop:w-[12.375rem] px-2" key={value.id}>
            <Icon name={value.icon} />
            <h3 className="font-medium text-asoebiBlack-700">{value.name}</h3>
            <p className="text-asoebiBlack-100 text-14 ">{value.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AsoebiCoreValues;

const AsoebiCoreValuesData = [
  {
    id: 1,
    name: "Great Value",
    body: "We offer competitive prices on our 100 million plus product range.",
    icon: "money",
  },
  {
    id: 2,
    name: "Fast Delivery",
    body: "With our standby logistics we deliver your order without delay.",
    icon: "truck",
  },
  {
    id: 3,
    name: "Secure Payment",
    body: "We have ensured that transactions do not go through public networks.",
    icon: "card",
  },
  {
    id: 4,
    name: "Confidence Shopping",
    body: "Our Buyer Protection covers your purchase from click to delivery.",
    icon: "shield",
  },
];
