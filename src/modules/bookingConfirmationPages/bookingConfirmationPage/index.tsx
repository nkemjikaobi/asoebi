import React, { FC } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { toast } from "react-hot-toast";

import CustomButton from "@components/atoms/CustomButton/CustomButton";
import Icon from "@components/atoms/Icons";

import { ButtonProperties } from "@shared/libs/helpers";

export const BookingConfirmationPage: FC = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-18 smallLaptop:text-24 mt-[4.688rem] mb-[9.5rem] smallLaptop:mb-[12.063rem]">Booking Confirmation</h1>
      <p className="text-16 smallLaptop:text-20 font-medium text-asoebiBlack-200">Thank you for using AsoEbi</p>
      <h2 className="text-20 smallLaptop:text-[1.75rem]  font-medium mt-6 mb-6 smallLaptop:mt-4 smallLaptop:mb-8">Booking Number: 4024645339</h2>
      <p className="text-14 text-center">An order confirmation with link to your AsoEbi event details has been sent to your email.</p>
      <CopyToClipboard
        onCopy={() => {
          toast.success("Link Copied");
        }}
        text="https://myasoebi.com/event/confirmed?4024645339"
      >
        <div className="flex justify-center flex-col smallLaptop:flex-row items-center cursor-pointer text-12 smallLaptop:text-14 mt-[1.938rem] mb-[1.563rem]">
          <span className="text-13 mb-4">https://myasoebi.com/event/confirmed?4024645339</span>
          <Icon className="ml-[1.75rem]" name="copy" />
        </div>
      </CopyToClipboard>
      <CustomButton
        customClass="mb-[16.063rem] "
        handleClick={() => {}}
        size={ButtonProperties.SIZES.small}
        title="Return to Home Page"
        type="submit"
        variant={ButtonProperties.VARIANT.primary.name}
      />
    </div>
  );
};
