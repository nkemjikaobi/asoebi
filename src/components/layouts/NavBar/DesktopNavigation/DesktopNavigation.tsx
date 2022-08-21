import React from "react";

import Icon from "@components/atoms/Icons";

const DesktopNavigation = () => {
  return (
    <div className="flex items-center justify-between px-16 shadow-lg h-[4.375rem] bg-white">
      <div className="flex items-center">
        <h4 className="text-asoebiBlack-900 font-bold text-18">LOGO</h4>
        <div className="flex items-center space-x-2 ml-8">
          <Icon name="browse" />
          <span className="text-14 font-normal">Browse Category</span>
          <Icon className="cursor-pointer" name="caretDown" />
        </div>
      </div>
      <div className="flex items-center">
        <div className="flex items-center justify-between pr-2 pl-4 w-[31.813rem] h-[2.75rem] rounded-[0.5rem] border border-asoebiGray-900">
          <div className="flex items-center w-full">
            <Icon name="search" />
            <input
              className="placeholder:text-14 w-full placeholder:text-asoebiGray-800 border-none focus:ring-0"
              placeholder="Search products, brands and categories"
              type="text"
            />
          </div>
          <button className="capitalize w-[6.875rem] h-[2.063rem] rounded-[0.25rem] flex items-center justify-center bg-black text-white cursor-pointer hover:bg-asoebiBlack-800">
            search
          </button>
        </div>
      </div>
      <div className="flex items-center">
        <Icon name="shoppingBag" />
        <div className="flex items-center space-x-2 ml-8">
          <Icon name="user" />
          <span className="text-14 font-normal">Account</span>
          <Icon name="caretDown" />
        </div>
      </div>
    </div>
  );
};

export default DesktopNavigation;
