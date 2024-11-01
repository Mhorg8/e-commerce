import React, { forwardRef, LegacyRef } from "react";

interface Props {
  type: string;
  label: string;
  name: string;
  placeholder: string;
  customStyle?: string;
  min?: number;
}

const Input: React.FC<Props> = forwardRef<HTMLInputElement, Props>(
  ({ type, label, placeholder, customStyle, name, min }, ref) => {
    return (
      <div className="w-full flex flex-col ">
        <label className="capitalize" htmlFor={name}>
          {label}:
        </label>
        <input
          min={min}
          ref={ref as LegacyRef<HTMLInputElement>} // Cast the ref type
          type={type}
          className={`${customStyle} input`}
          name={name}
          placeholder={placeholder}
        />
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
