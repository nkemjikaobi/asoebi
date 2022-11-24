import Image from "next/image";
import React, { useMemo, useState } from "react";

import CustomButton from "@components/atoms/CustomButton/CustomButton";
import CustomModal from "@components/atoms/CustomModal/CustomModal";
import CustomTable from "@components/atoms/CustomTable/CustomTable";
import Icon from "@components/atoms/Icons";
import AddTags from "@components/modals/AddTags/AddTags";
import SetProductPrice from "@components/modals/SetProductPrice/SetProductPrice";

import { ButtonProperties, CURRENCIES } from "@shared/libs/helpers";

interface CartItemsProps {
  cartItemsData: Array<any>;
}

const CartItems: React.FC<CartItemsProps> = ({ cartItemsData }) => {
  const [showSetPrice, setShowSetPrice] = useState<boolean>(false);
  const [showTags, setShowTags] = useState<boolean>(false);

  const columns = useMemo(
    () => [
      {
        Header: " ",
        columns: [
          {
            id: "product image",
            Header: "",
            Cell: (props: any) => {
              return (
                <div className="w-[5.125rem] h-[3.75rem] relative">
                  <Image className="object-cover" height={60} loading="eager" src={props?.row?.original?.imageUrl} width={82} />
                </div>
              );
            },
          },
          {
            Header: "Product Name",
            accessor: "productName",
            Cell: (props: any) => {
              return (
                <div className="flex flex-col">
                  <h4 className="font-medium mb-2">{props?.value}</h4>
                  <div className="flex items-center w-[14.25rem] justify-between">
                    <div className="flex text-12 items-center hover:cursor-pointer hover:text-asoebiPurple-800">
                      <Icon className="mr-2" name="heart" />
                      <span>Save for later</span>
                    </div>
                    <div className="flex text-12 items-center hover:cursor-pointer hover:text-asoebiPurple-800">
                      <Icon className="mr-2" name="bin" />
                      <span>Remove</span>
                    </div>
                  </div>
                </div>
              );
            },
          },
          {
            Header: `Cost Price (${CURRENCIES.NAIRA})`,
            accessor: "price",
            Cell: (props: any) => {
              return (
                <span className="text-12 font-medium">
                  {CURRENCIES.NAIRA}
                  {Number(props?.value).toLocaleString()}
                </span>
              );
            },
          },
          {
            Header: `Set your price (${CURRENCIES.NAIRA})`,
            Cell: () => {
              return (
                <span className="text-asoebiPurple-800 cursor-pointer  text-12 font-bold" onClick={() => setShowSetPrice(true)}>
                  + Add Your Price
                </span>
              );
            },
          },
          {
            Header: "Ownership Type",
            accessor: "ownershipType",
            Cell: (props: any) => {
              return (
                <span className="text-asoebiPurple-800 cursor-pointer text-12 font-bold" onClick={() => setShowTags(true)}>
                  + Add Tag
                </span>
              );
            },
          },
        ],
      },
    ],
    [showSetPrice, showTags]
  );

  const finalCartData: any = useMemo(() => cartItemsData, [cartItemsData]);

  return (
    <>
      <div>
        <div>
          <CustomTable columns={columns} data={finalCartData} tableClass="border-spacing-y-2 border-separate !mt-4" tdClass="!py-4 !p-1" thClass="!py-4 !p-1" />
          <div className="flex items-center justify-end">
            <CustomButton
              customClass="mt-12 !text-[0.813rem] mr-8"
              handleClick={() => {}}
              isTransparent={true}
              size={ButtonProperties.SIZES.small}
              title="Continue Shopping"
              type="submit"
              variant={ButtonProperties.VARIANT.primary.name}
            />
            <CustomButton
              customClass="mt-12 !text-[0.813rem]"
              handleClick={() => {}}
              size={ButtonProperties.SIZES.small}
              title="Proceed to Booking"
              type="submit"
              variant={ButtonProperties.VARIANT.primary.name}
            />
          </div>
        </div>
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

export default CartItems;
