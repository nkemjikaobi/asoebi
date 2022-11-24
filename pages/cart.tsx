import type { NextPage } from "next";

import BasePageLayout from "@components/layouts/BasePageLayout/BasePageLayout";

import { CartPage } from "@modules/cartPages";

const Cart: NextPage = () => {
  return (
    <BasePageLayout title="Cart Page">
      <CartPage />
    </BasePageLayout>
  );
};

export default Cart;
