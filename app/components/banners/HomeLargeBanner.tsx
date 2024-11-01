import Image from "next/image";
import React from "react";
import PrimaryButton from "../PrimaryButton";
import { FaArrowRight } from "react-icons/fa6";

const HomeLargeBanner = () => {
  return (
    <div className="container  mt-20">
      <div className="">
        <h2 className="tracking-tight text-4xl font-extrabold text-neutral-800">
          WANT TO DESIGN YOUR OWN? <br />
          CALM,WE CAN DO IT
        </h2>

        <div className="w-full h-[330px] md:h-[450px] mt-10 flex items-center gap-x-3">
          <div className=" relative w-1/2 h-full ">
            <Image
              src="/nike-banner.png"
              alt=""
              fill
              sizes="fill"
              className="w-full h-full object-cover aspect-video rounded-xl object-top  "
            />

            <div className="absolute bottom-5 left-1/2 -translate-x-1/2">
              <PrimaryButton
                text="Show More"
                textColor="black"
                bgColor="white"
                Icon={FaArrowRight}
                IconBg="black"
                IconSize="17"
                IconColor="white"
              />
            </div>
          </div>
          <div className=" relative w-1/2 h-full ">
            <Image
              src="/nike-banner-2.png"
              alt=""
              fill
              sizes="fill"
              className="w-full h-full object-cover aspect-video rounded-xl object-top  "
            />{" "}
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2">
              <PrimaryButton
                text="Show More"
                textColor="black"
                bgColor="white"
                Icon={FaArrowRight}
                IconBg="black"
                IconSize="17"
                IconColor="white"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeLargeBanner;
