import type { NextPage } from "next";

import BasePageLayout from "@components/layouts/BasePageLayout/BasePageLayout";

import { CartPage } from "@modules/cartPages";

const Cart: NextPage = () => {
  return (
    <BasePageLayout title="Cart Page">
      <div className="max-w-[90rem] mx-auto">
        <CartPage />
      </div>
    </BasePageLayout>
  );
};

export default Cart;
