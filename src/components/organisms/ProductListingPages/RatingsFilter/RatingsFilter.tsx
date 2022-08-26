import React from "react";
import StarRatings from "react-star-ratings";

import CustomCheckBox from "@components/atoms/CustomCheckBox/CustomCheckBox";

import ParentFilter from "../ParentFilter/ParentFilter";

const RatingsFilter = () => {
  return (
    <ParentFilter title="rating">
      {RatingsFilterData.map((rating) => (
        <div className="flex items-end mb-2" key={rating.id}>
          <CustomCheckBox />
          <StarRatings numberOfStars={5} rating={rating.numberOfStars} starDimension="14px" starEmptyColor="#DBDBDB" starRatedColor="#FBA100" starSpacing="0" />{" "}
          <span className="font-light text-13 ml-2">& up</span>
        </div>
      ))}
    </ParentFilter>
  );
};

export default RatingsFilter;

const RatingsFilterData = [
  {
    id: 1,
    name: "rating",
    numberOfStars: 4,
  },
  {
    id: 2,
    name: "rating",
    numberOfStars: 3,
  },
  {
    id: 3,
    name: "rating",
    numberOfStars: 2,
  },
  {
    id: 4,
    name: "rating",
    numberOfStars: 1,
  },
];
