import React, { FC, ReactNode, useState } from "react";

import Icon from "@components/atoms/Icons";

interface ParentFilterProps {
  title: string;
  children: ReactNode;
}
const ParentFilter: FC<ParentFilterProps> = ({ title, children }) => {
  const [isVisible, setIsVisible] = useState<boolean>(true);
  return (
    <div className="py-8 px-4 relative">
      <div className="flex justify-between items-center mb-4">
        <h4 className="capitalize font-bold text-[0.938rem]">{title}</h4>
        <Icon className="cursor-pointer absolute right-5" name="dash" onClick={() => setIsVisible(!isVisible)} />
      </div>
      {isVisible && <div>{children}</div>}
    </div>
  );
};

export default ParentFilter;
