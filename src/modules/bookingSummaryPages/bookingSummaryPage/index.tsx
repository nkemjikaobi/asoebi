import React, { FC } from "react";

import CustomButton from "@components/atoms/CustomButton/CustomButton";
import BookingDetails from "@components/organisms/BookingSummaryPage/BookingDetails/BookingDetails";
import OrderSummary from "@components/organisms/BookingSummaryPage/OrderSummary/OrderSummary";

import { ButtonProperties } from "@shared/libs/helpers";

export const BookingSummaryPage: FC = () => {
  return (
    <div className="">
      <h1 className="mt-[1.25rem] mb-[2.25rem] text-24">Booking Summary</h1>
      <div className="flex flex-col tablet:flex-row">
        <BookingDetails />
        <OrderSummary />
        <div className="block tablet:hidden">
          <CustomButton
            customClass="w-full my-4"
            handleClick={() => {}}
            size={ButtonProperties.SIZES.small}
            title="Confirm Booking"
            type="submit"
            variant={ButtonProperties.VARIANT.primary.name}
          />
        </div>
      </div>
    </div>
  );
};
