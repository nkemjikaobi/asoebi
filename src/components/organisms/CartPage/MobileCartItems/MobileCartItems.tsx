import React, { useState } from "react";

import CustomModal from "@components/atoms/CustomModal/CustomModal";
import AddTags from "@components/modals/AddTags/AddTags";
import SetProductPrice from "@components/modals/SetProductPrice/SetProductPrice";

import MobileCartItem from "../MobileCartItem/MobileCartItem";

interface MobileCartItemsProps {
  cartItemsData: Array<any>;
}

const MobileCartItems: React.FC<MobileCartItemsProps> = ({ cartItemsData }) => {
  const [showSetPrice, setShowSetPrice] = useState<boolean>(false);
  const [showTags, setShowTags] = useState<boolean>(false);

  return (
    <>
      <div>
        {cartItemsData.map((cartData) => (
          <MobileCartItem cartData={cartData} key={cartData.id} setShowSetPrice={setShowSetPrice} setShowTags={setShowTags} />
        ))}
      </div>
      <CustomModal toggleVisibility={setShowSetPrice} visibility={showSetPrice}>
        <SetProductPrice setShowSetPrice={setShowSetPrice} />
      </CustomModal>
      <CustomModal toggleVisibility={setShowTags} visibility={showTags}>
        <AddTags setShowTags={setShowTags} />
      </CustomModal>
    </>
  );
};

export default MobileCartItems;
