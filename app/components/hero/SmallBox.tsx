import Image from "next/image";
import Link from "next/link";
import React from "react";
interface SmallBoxProps {
  title: string;
  imageUrl: string;
  path: string;
  titleColor?: string;
}
const SmallBox = ({ title, imageUrl, path, titleColor }: SmallBoxProps) => {
  return (
    <div className="flex-1 rounded-xl bg-gray h-full relative">
      <Image
        fill
        sizes="fill"
        className="object-cover rounded-xl"
        src={imageUrl}
        alt=""
      />
      <Link href={path} className="">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full ">
          <h4
            className={`${
              titleColor ? titleColor : "text-white"
            } text-center md:text-2xl  font-bold`}>
            {title}
          </h4>
        </div>
      </Link>
    </div>
  );
};

export default SmallBox;
