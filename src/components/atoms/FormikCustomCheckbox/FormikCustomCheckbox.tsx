import { useField } from "formik";
import React from "react";

import CustomLabel from "@components/atoms/CustomLabel/CustomLabel";

import { CheckBoxProperties } from "@shared/libs/helpers";

import ErrorMessage from "../ErrorMessage/ErrorMessage";

const FormikCustomCheckbox = ({ label, shape, isDisabled, size, labelPosition, className, labelClassName, ...props }: any) => {
  const [field, meta] = useField<{}>(props);

  return (
    <div className="w-full">
      <div className="block">
        <div className={`flex items-center ${className}`}>
          {label && labelPosition === CheckBoxProperties.LABEL_POSITION.start && <CustomLabel className={`inline-flex items-center text-14 ${labelClassName}`} title={label} />}
          {isDisabled ? (
            <input
              className={`${size === CheckBoxProperties.SIZES.small ? "w-[0.875rem] h-[0.875rem]" : "w-[0.875rem] h-[0.875rem]"}
            ${
              shape === CheckBoxProperties.SHAPE.rounded
                ? "rounded-full"
                : `${shape === CheckBoxProperties.SHAPE.square && shape === CheckBoxProperties.SIZES.small ? "rounded-[0.063rem]" : "rounded-[0.063rem]"}`
            } 
            mx-2 pointer-events-none border-asoebiGray-900 bg-asoebiGray-140 drop-shadow-sm border text-[#EBEFF1] border-none focus:ring-0`}
              disabled={true}
              type="checkbox"
              {...field}
              {...props}
            />
          ) : (
            <input
              className={`${size === CheckBoxProperties.SIZES.small ? "w-[0.875rem] h-[0.875rem]" : "w-[0.875rem] h-[0.875rem]"}
            ${
              shape === CheckBoxProperties.SHAPE.rounded
                ? "rounded-full"
                : `${shape === CheckBoxProperties.SHAPE.square && shape === CheckBoxProperties.SIZES.small ? "rounded-[0.063rem]" : "rounded-[0.063rem]"}`
            } 
            mx-2  cursor-pointer drop-shadow-sm bg-white border  hover:bg-asoebiPurple-800
            text-asoebiPurple-800 border-asoebiPurple-800 focus:ring-0`}
              type="checkbox"
              {...props}
            />
          )}
          {label && labelPosition === CheckBoxProperties.LABEL_POSITION.end && <CustomLabel className={`inline-flex items-center text-14 ${labelClassName}`} title={label} />}
        </div>
      </div>
      {meta.touched && meta.error && <ErrorMessage error={meta.error} />}
    </div>
  );
};

export default FormikCustomCheckbox;

FormikCustomCheckbox.defaultProps = {
  label: "",
  labelPosition: "",
  className: "",
  labelClassName: "",
  shape: CheckBoxProperties.SHAPE.square,
  size: CheckBoxProperties.SIZES.small,
  isDisabled: false,
};
