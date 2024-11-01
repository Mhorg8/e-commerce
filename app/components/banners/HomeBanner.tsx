import Image from "next/image";
import React from "react";
import { IoPlanetOutline, IoEarthOutline } from "react-icons/io5";
import { MdArrowOutward } from "react-icons/md";

import PrimaryButton from "../PrimaryButton";
import Link from "next/link";

const HomeBanner = () => {
  return (
    <div className="container mt-28">
      <div className="grid grid-cols-12 gap-x-4 h-full md:h-[430px] gap-y-4">
        <div className="col-span-12 md:col-span-3 h-[300px] md:h-full lg:col-span-4  rounded-xl order-2 md:order-1">
          <div className="w-full h-full relative">
            <Image
              src="/banner-2.png"
              fill
              sizes="fill"
              className="object-cover rounded-xl"
              alt=""
            />

            <div className="absolute bottom-2 left-1/2 -translate-x-1/2">
              <Link href="/">
                <PrimaryButton
                  customStyle="bg-gray hover:bg-softGreen"
                  textColor="black"
                  bgColor="gray"
                  Icon={MdArrowOutward}
                  IconBg="black"
                  IconColor="white"
                  IconSize="17"
                  text="Read More"
                />
              </Link>
            </div>
          </div>
        </div>
        <div
          className="col-span-12 md:col-span-9 lg:col-span-8 bg-softGreen rounded-xl shadow-md px-6 py-4 flex flex-col justify-between gap-7 
        order-1 md:order-2">
          <h2 className="text-5xl md:text-7xl font-extrabold text-black leading-none uppercase">
            We&apos;re changing <br /> the way things <br />
            get mande
          </h2>

          <div className="flex flex-col md:flex-row items-center gap-6 px-5 py-2.5 border border-black rounded-xl">
            <div>
              <div className="flex items-center gap-x-2">
                <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center">
                  <IoPlanetOutline size={20} color="white" />
                </div>
                <h5 className="font-extrabold">SUSTAINABILITY</h5>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum
                ipsa molestias tenetur nulla eveniet ipsam, neque culpa iste!
                Alias, harum.
              </p>
            </div>
            <div>
              <div className="flex items-center gap-x-2">
                <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center">
                  <IoEarthOutline size={20} color="white" />
                </div>
                <h5 className="font-extrabold">MISSION</h5>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum
                ipsa molestias tenetur nulla eveniet ipsam, neque culpa iste!
                Alias, harum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
