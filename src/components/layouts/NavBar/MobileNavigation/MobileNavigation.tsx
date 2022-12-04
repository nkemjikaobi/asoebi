import { useRouter } from "next/router";
import React from "react";

import Icon from "@components/atoms/Icons";

const MobileNavigation = () => {
  const router = useRouter();
  return (
    <div className="flex justify-between items-center p-4 bg-white">
      <div className="flex items-center">
        <Icon className="mr-[1.219rem]" name="grid" />
        <Icon name="search2" />
      </div>
      <div className="flex items-center">
        <h4 className="text-asoebiBlack-900 text-18 mr-[2.344rem] cursor-pointer" onClick={() => router.push("/")}>
          LOGO
        </h4>
      </div>
      <div className="flex items-center">
        <Icon className="mr-[1.266rem]" name="shoppingBag" onClick={() => router.push("/cart")} />
        <Icon name="user2" />
      </div>
    </div>
  );
};

export default MobileNavigation;
