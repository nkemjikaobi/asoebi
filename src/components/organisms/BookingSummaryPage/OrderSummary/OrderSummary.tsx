import React from "react";

import CustomButton from "@components/atoms/CustomButton/CustomButton";
import CustomInput from "@components/atoms/CustomInput/CustomInput";
import Icon from "@components/atoms/Icons";
import RenderPrice from "@components/atoms/RenderPrice/RenderPrice";

import { ButtonProperties } from "@shared/libs/helpers";

const OrderSummary = () => {
  return (
    <div className="w-full tablet:w-[50%] normalLaptop:w-[40%] h-[21.875rem] tablet:h-[28.125rem] normalLaptop:h-[25rem] bg-white rounded-[0.5rem] shadow-orderSummary p-4 mt-12">
      <h2 className="text-20 mb-4 text-asoebiBlack-500">Order Summary</h2>
      <RenderPrice price={65000} text="subtotal" />
      <RenderPrice fallBackText="No shipping fee." text="shipping fee" />
      <RenderPrice fallBackText="Apply Coupon." priceClass="!text-asoebiPurple-800" text="coupon discount" />
      <RenderPrice price={65000} priceClass="!text-black" text="estimated total" />
      <hr />
      <div className="hidden tablet:block">
        <CustomButton
          customClass="w-full my-4"
          handleClick={() => {}}
          size={ButtonProperties.SIZES.small}
          title="Confirm Booking"
          type="submit"
          variant={ButtonProperties.VARIANT.primary.name}
        />
      </div>
      <div className="flex items-center mb-2 text-asoebiBlack-500 mt-8 tablet:mt-0">
        <h5 className="mr-[0.813rem]">Add Discount Code</h5>
        <Icon name="info" />
      </div>
      <h5 className="text-asoebiBlack-500 mb-4 tablet:mb-2">Give discount to your potential customer.</h5>
      <form className="flex items-center border border-asoebiGray-900 py-[0.313rem] pr-[0.313rem] h-12">
        <CustomInput
          className="!border-none rounded-[0.125rem] h-16 mr-4 mt-2 mb-4"
          container="!bg-transparent !px-0"
          iconClass="hover:cursor-pointer"
          inputClassName="placeholder:text-xs !h-[0%] placeholder:text-asoebiGray-201"
          name="arrivalTime"
          onChange={() => {}}
          placeholder="Enter amount"
          required
          type="text"
          value=""
        />
        <CustomButton
          customClass="my-4 h-[2.313rem]"
          handleClick={() => {}}
          size={ButtonProperties.SIZES.small}
          title="Generate Coupon"
          type="submit"
          variant={ButtonProperties.VARIANT.primary.name}
        />
      </form>
    </div>
  );
};

export default OrderSummary;
