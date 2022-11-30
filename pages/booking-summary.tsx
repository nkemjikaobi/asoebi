import type { NextPage } from "next";

import BasePageLayout from "@components/layouts/BasePageLayout/BasePageLayout";

import { BookingSummaryPage } from "@modules/bookingSummaryPages";

const BookingSummary: NextPage = () => {
  return (
    <BasePageLayout title="Booking Summary Page">
      <BookingSummaryPage />
    </BasePageLayout>
  );
};

export default BookingSummary;
