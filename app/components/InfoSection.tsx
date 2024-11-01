import Image from "next/image";
import React from "react";

const InfoSection = () => {
  return (
    <div className="container my-20">
      <div className="flex items-center justify-center text-center h-full md:h-[50dvh] ">
        <div className="relative">
          <div className="absolute w-12 h-12 top-0 left-1/3 -translate-x-1/3">
            <div className="relative h-full w-full">
              <Image
                src="/adidas.jpg"
                fill
                sizes="fill"
                className="object-contain rounded-full"
                alt=""
              />
            </div>
          </div>
          <div className="absolute w-12 h-12 bottom-0 right-1/4 -translate-x-1/4">
            <div className="relative h-full w-full">
              <Image
                src="/hero-1.jpg"
                fill
                sizes="fill"
                className="object-contain rounded-full"
                alt=""
              />
            </div>
          </div>
          <h3 className="text-xl font-semibold md:text-4xl leading-loose select-none ">
            Puremood During for Elevated Everyday <br />
            Life.Styles change{" "}
            <span className=" px-1.5 mx-1.5 border border-black rounded-full">
              with seasons
            </span>
            united <br />
            by the liberating essence of travel-inspired <br />
            lightheartedness
          </h3>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
