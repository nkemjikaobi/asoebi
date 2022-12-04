import type { NextPage } from "next";

import BasePageLayout from "@components/layouts/BasePageLayout/BasePageLayout";

import { BookingConfirmationPage } from "@modules/bookingConfirmationPages";

const BookingConfirmation: NextPage = () => {
  return (
    <BasePageLayout title="Booking Confirmation Page">
      <BookingConfirmationPage />
    </BasePageLayout>
  );
};

export default BookingConfirmation;
