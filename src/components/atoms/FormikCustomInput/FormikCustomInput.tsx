import { useField } from "formik";
import { useState } from "react";

import ErrorMessage from "@components/atoms/ErrorMessage/ErrorMessage";
import Icon from "@components/atoms/Icons";

const FormikCustomInput = ({
  className,
  iconposition,
  container,
  type,
  otherIcon,
  iconClass,
  disabled,
  important,
  label,
  labelClass,
  icon,
  inputClassName,
  component,
  iconHandler,
  iconHandlerParam,
  ...props
}: any) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const [field, meta] = useField<{}>(props);

  return (
    <>
      <div className="mt-4">
        <label className={` ${labelClass}`} htmlFor="label">
          {label} <span className="text-red-500">{important}</span>
        </label>
      </div>
      <div className={` ${className} flex items-center h-[3.571rem] w-full ${meta.touched && meta.error ? "!border !border-[#A0000B]" : "border border-asoebiGray-140"} `}>
        <div className={`flex px-5 bg-white text-black items-center justify-start h-full w-full rounded-[0.313rem]  ${container}`}>
          {icon && iconposition === "start" && <Icon className={iconClass} name={icon} onClick={() => iconHandler && iconHandler(iconHandlerParam && iconHandlerParam)} />}
          <input
            className={`${inputClassName} border-none focus:ring-0 autofill:shadow-reset-bg outline-none autofill:hover:shadow-reset-bg autofill:focus:shadow-reset-bg autofill:active:shadow-reset-bg h-full w-full py-0 `}
            disabled={disabled}
            tabIndex={0}
            type={type === "password" && showPassword ? "text" : type}
            {...field}
            {...props}
          />
          {icon && iconposition === "end" && <Icon className={iconClass} name={icon} onClick={() => iconHandler && iconHandler(iconHandlerParam && iconHandlerParam)} />}
          {component && component}
          {type === "password" && showPassword ? (
            <Icon className="cursor-pointer" name="eyeSlash" onClick={handleShowPassword} />
          ) : (
            type === "password" && !showPassword && <Icon className="cursor-pointer" name="eye" onClick={handleShowPassword} />
          )}
        </div>
      </div>
      {meta.touched && meta.error && <ErrorMessage error={meta.error} />}
    </>
  );
};

export default FormikCustomInput;

FormikCustomInput.defaultProps = {
  className: "",
  disabled: false,
  icon: "",
  inputClassName: "",
  iconClass: "",
  container: "",
  iconposition: "start",
};
