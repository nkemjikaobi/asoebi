import { useField } from "formik";
import { v4 as uuidv4 } from "uuid";

import CustomLabel from "@components/atoms/CustomLabel/CustomLabel";
import CustomSelectOption from "@components/atoms/CustomSelect/CustomSelectOption";

import ErrorMessage from "../ErrorMessage/ErrorMessage";

export interface OptionType {
  text: string;
  value: string;
  componentHandler?: Function;
}

const FormikCustomSelect = ({ label, error, parentContainer, container, className, value, options, placeholder, defaultValue, componentHandler, ...props }: any) => {
  const [field, meta] = useField<{}>(props);
  let hasOptions = false;
  let selectOptions: any = [];
  if (placeholder) {
    hasOptions = true;
    selectOptions = [<CustomSelectOption disabled={true} key={uuidv4()} text={placeholder} value={""} />];
  }
  if (options && options.length > 0) {
    hasOptions = true;
    selectOptions = [...selectOptions, ...options.map((option: OptionType, index: number) => <CustomSelectOption key={index + 1} text={option.text} value={option.value} />)];
  }

  return (
    <div>
      <div className={`w-full h-full rounded-[0.313rem] border-[0.022rem] border-asoebiGray-900 ${parentContainer} ${meta.error && meta.touched ? "border-red-500" : ""}`}>
        {label && <CustomLabel title={label} />}
        <div className={`h-full ${container ? container : ""}`}>
          {componentHandler ? (
            <select
              className={`ml-2 w-[95%] text-asoebiGray-850 text-14  border-none focus:ring-0 px-4 h-full focus:outline-none ${className}`}
              onChange={(e) => componentHandler(e.target.value)}
              {...props}
            >
              {hasOptions && selectOptions}
            </select>
          ) : (
            <select className={`ml-2 w-[95%] text-asoebiGray-850 text-14  border-none focus:ring-0 px-4 h-full focus:outline-none  ${className} `} {...field} {...props}>
              {hasOptions && selectOptions}
            </select>
          )}
        </div>
      </div>
      {meta.error && meta.touched && <ErrorMessage error={meta.error} />}
    </div>
  );
};

export default FormikCustomSelect;
