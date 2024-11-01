import React from "react";
import SmallBox from "./SmallBox";
import Image from "next/image";
import PrimaryButton from "../PrimaryButton";
import { FaArrowDown } from "react-icons/fa";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="container mt-5">
      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-12 md:col-span-6 ">
          <div className="flex flex-col justify-between p-7 h-[400px] bg-gray rounded-xl ">
            <h1 className="text-5xl font-extrabold text-neutral-800">
              FOR <br />
              EVERYONE BUT <br />
              NOTANYONE
            </h1>
            <p className="text-neutral-700 leading-tight">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              doloribus harum aliquid, voluptatum
            </p>
          </div>
          {/* small boxes */}
          <div className="flex items-center gap-3 w-full h-[200px] mt-3">
            <SmallBox
              title="#new collection"
              imageUrl="/newCollection.jpg"
              path="/"
            />
            <SmallBox
              title="#GAZZELE"
              imageUrl="/hero-1.jpg"
              titleColor="#0000"
              path="/"
            />
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 h-[600px]">
          <div className="relative h-full w-full">
            <Image
              src="/hero-3.jpg"
              fill
              sizes="fill"
              className="object-cover object-top rounded-xl "
              alt=""
            />

            <button className="circle-button">
              <Link href="/">SHOP NOW</Link>
            </button>

            <div className="absolute bottom-5 right-5 -translate-x-1/2 md:-translate-x-0 flex flex-col md:flex-row  items-center gap-3">
              <PrimaryButton
                type="button"
                text="LEARN MORE"
                Icon={FaArrowDown}
                bgColor="white"
                IconColor="white"
              />
              <PrimaryButton
                type="button"
                text="LEARN MORE"
                Icon={FaArrowDown}
                bgColor="transparent"
                border
                textColor="white"
                IconBg="white"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
