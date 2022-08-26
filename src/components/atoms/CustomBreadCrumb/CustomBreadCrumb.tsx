import React, { FC } from "react";
import { v4 as uuidv4 } from "uuid";

import { IBreadCrumb } from "@dto/IBreadCrumb";

import { getSanitizedHtml } from "@shared/libs/helpers";

import CustomLink from "../CustomLink/CustomLink";
import Icon from "../Icons";

interface CustomBreadCrumbProps {
  breadCrumbs?: Array<IBreadCrumb>;
}
const CustomBreadCrumb: FC<CustomBreadCrumbProps> = ({ breadCrumbs }) => {
  return (
    <div className="flex items-center text-12 max-w-[90rem] mx-auto pl-[7.375rem] normalLaptop:pl-[12.375rem]">
      {breadCrumbs &&
        Object.entries(breadCrumbs).map(([index, breadCrumb]) => {
          if (parseInt(index) === Object.entries(breadCrumbs).length - 1) {
            return <div className="text-asoebiGray-300" dangerouslySetInnerHTML={getSanitizedHtml(breadCrumb.text ? breadCrumb.text : "")} key={uuidv4()} />;
          }
          return (
            <div className="mr-2 flex items-center" key={uuidv4()}>
              <div className="mr-2">
                <CustomLink destination={breadCrumb.url ? breadCrumb.url : "#"}>{breadCrumb.text ? breadCrumb.text : ""}</CustomLink>
              </div>
              <Icon name="caretRight" />
            </div>
          );
        })}
    </div>
  );
};

export default CustomBreadCrumb;

CustomBreadCrumb.defaultProps = {
  breadCrumbs: [],
};
