import React from "react";

import Icon from "@components/atoms/Icons";

const DesktopNavigation = () => {
  return (
    <div className="flex items-center justify-between px-16 shadow-lg h-[70px] bg-white">
      <div className="flex items-center">
        <h4 className="text-[#111827] font-bold text-18">LOGO</h4>
        <div className="flex items-center space-x-2 ml-8">
          <Icon name="browse" />
          <span className="text-14 font-normal">Browse Category</span>
          <Icon className="cursor-pointer" name="caretDown" />
        </div>
      </div>
      <div className="flex items-center">
        <div className="flex items-center justify-between pr-2 pl-4 w-[509px] h-[44px] rounded-[8px] border border-[#BCBCBC]">
          <div className="flex items-center w-full">
            <Icon name="search" />
            <input className="placeholder:text-14 w-full placeholder:text-[#7A7A7A] border-none focus:ring-0" placeholder="Search products, brands and categories" type="text" />
          </div>
          <button className="capitalize w-[110px] h-[33px] rounded-[4px] flex items-center justify-center bg-black text-white cursor-pointer hover:bg-[#131924]">search</button>
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
