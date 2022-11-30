import React, { ChangeEventHandler, useState } from "react";

import Icon from "../Icons";

interface InputProps {
  className?: string;
  disabled?: boolean;
  icon?: string;
  iconClass?: string;
  name?: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  readOnly?: boolean;
  required?: boolean;
  type: string;
  value: string;
  inputClassName?: string;
  container?: string;
  label?: string;
  labelClass?: string;
  iconposition?: string; // start | end
}

const CustomInput = ({
  className,
  container,
  iconClass,
  disabled,
  icon,
  name,
  inputClassName,
  onChange,
  placeholder,
  readOnly,
  required,
  type,
  value,
  label,
  labelClass,
  iconposition,
  ...otherProps
}: InputProps) => {
  // const inputRef: any = React.useRef(null);

  const handleClick = () => {
    // if (inputRef && inputRef.current) inputRef.current.focus();
  };

  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <label className={`${labelClass}`} htmlFor="label">
        {label}
      </label>
      <div className={`flex items-center h-[3.571rem] w-full ${className}`}>
        <div className={`flex px-5 bg-white text-black  items-center justify-start h-full w-full rounded-[0.313rem] border-asoebiGray-900 ${container}`} onClick={handleClick}>
          <label className="" htmlFor="startDate">
            {icon && iconposition === "start" && <Icon className={iconClass} name={icon} />}
          </label>
          <input
            aria-label={name}
            className={`${inputClassName} border-none focus:ring-0 autofill:shadow-reset-bg autofill:hover:shadow-reset-bg autofill:focus:shadow-reset-bg autofill:active:shadow-reset-bg h-full w-full`}
            disabled={disabled}
            name={name}
            onChange={onChange}
            placeholder={placeholder}
            readOnly={readOnly}
            required={required}
            tabIndex={0}
            type={type === "password" && showPassword ? "text" : type}
            value={value}
            {...otherProps}
          />
          <label className="" htmlFor="startDate">
            {icon && iconposition === "end" && <Icon className={iconClass} name={icon} />}
          </label>

          {type === "password" && showPassword ? (
            <Icon className="cursor-pointer" name="eyeSlash" onClick={handleShowPassword} />
          ) : (
            type === "password" && !showPassword && <Icon className="cursor-pointer" name="eye" onClick={handleShowPassword} />
          )}
        </div>
      </div>
    </div>
  );
};

export default CustomInput;

CustomInput.defaultProps = {
  className: "",
  disabled: false,
  icon: "",
  placeholder: "",
  readOnly: false,
  required: false,
  inputClassName: "",
  name: "",
  iconClass: "",
  container: "",
  label: "",
  labelClass: "",
  iconposition: "start",
};
