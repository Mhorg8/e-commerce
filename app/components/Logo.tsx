import Link from "next/link";
import React from "react";
interface Props {
  textColor?: string;
  textSize?: string;
  text?: string;
}
const Logo: React.FC<Props> = ({ text, textColor, textSize }) => {
  return (
    <div className="">
      <Link
        className={`logo ${textColor ? `text-${textColor}` : "text-black"} ${
          textSize ? textSize : "text-xl"
        } `}
        href="/">
        {text ? (
          text
        ) : (
          <p>
            PUREM <br />
            ODA
          </p>
        )}
      </Link>
    </div>
  );
};

export default Logo;
