import React from "react";

// IMPORTS

// TYPES

interface Props {
  text: string;
  fontSize?: string;
  color?: string;
  customStyle?: string;
  fontWeight?: string;
}
const HeadingSection = ({
  text,
  fontSize,
  color,
  customStyle,
  fontWeight,
}: Props) => {
  return (
    <div>
      <h2
        className={`${fontSize ? fontSize : "text-2xl md:text-4xl "} ${
          color ? `text-${color}` : "text-neutral-800"
        } ${customStyle} ${fontWeight ? `font-${fontWeight}` : "font-bold"}`}>
        {text}
      </h2>
    </div>
  );
};

export default HeadingSection;
