import React from "react";

import Icon from "@components/atoms/Icons";

const AsoebiCoreValues = () => {
  return (
    <div className="grid grid-cols-4 gap-3 px-72 my-8">
      {AsoebiCoreValuesData.map((value) => (
        <div className="space-y-4" key={value.id}>
          <Icon name={value.icon} />
          <h3 className="font-medium text-asoebiBlack-700">{value.name}</h3>
          <p className="text-asoebiBlack-100 text-14 w-3/4">{value.body}</p>
        </div>
      ))}
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
