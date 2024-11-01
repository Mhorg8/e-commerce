import React, { MouseEventHandler } from "react";
import { IconType } from "react-icons";

interface Props {
  customStyle?: string;
  bgColor: string;
  textColor?: string;
  Icon?: IconType;
  border?: boolean;
  text?: string;
  type?: "submit" | "button";
  IconColor?: string;
  IconSize?: string;
  IconBg?: string;
  onClick?: () => void | MouseEventHandler;
  disable?: boolean | undefined;
}
const PrimaryButton: React.FC<Props> = ({
  customStyle,
  bgColor,
  textColor,
  Icon,
  border,
  type,
  text,
  IconBg,
  IconSize,
  IconColor,
  disable,
  onClick,
}) => {
  return (
    <button
      disabled={disable}
      onClick={onClick}
      type={type}
      className={`${bgColor ? `bg-${bgColor}` : "bg-white"} ${
        border ? "border border-white" : ""
      } ${customStyle} primary-button ${
        disable ? "bg-neutral-600" : `bg-${bgColor} cursor-pointer`
      }`}>
      <span
        className={`font-medium text-sm ${
          textColor ? `text-${textColor}` : "text-black"
        } ml-2`}>
        {text}
      </span>
      {Icon && (
        <div
          className={`${
            IconBg ? `bg-${IconBg}` : "bg-black"
          } rounded-full p-2`}>
          <Icon size={IconSize} color={IconColor} />
        </div>
      )}
    </button>
  );
};

export default PrimaryButton;
