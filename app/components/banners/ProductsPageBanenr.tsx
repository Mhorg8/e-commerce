"use client";
// imports
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
// components

// types
interface SlideImage {
  id: number;
  img: string;
  name: string;
}

const ProductsBanner = () => {
  const slideImages: SlideImage[] = [
    { id: 1, img: "/hero-1.jpg", name: "samba" },
    { id: 2, img: "/hero-2.jpg", name: "Gazelle" },
    { id: 3, img: "/hero-3.jpg", name: "Fall" },
    { id: 4, img: "/hero-4.png", name: "Hoodies" },
  ];
  return (
    <div>
      <div className="grid grid-cols-12 gap-4 h-[50dvh] grid-rows-2">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="col-span-12 md:col-span-6 row-span-2 h-full ">
          <div className="w-full h-full relative shadow-md ">
            <Image
              src="/AS+M+NK+CLUB+FT+OVERSIZED+PO+H.png"
              alt=""
              fill
              sizes="fill"
              className="object-cover object-top rounded-xl"
            />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="col-span-6 row-span-1 bg-gray rounded-xl h-[20dvh] md:h-full p-2">
          <Swiper
            breakpoints={{
              // When the viewport width is >= 0px (small screens)
              0: {
                slidesPerView: 1,
              },
              // When the viewport width is >= 768px (medium screens)
              768: {
                slidesPerView: 3,
              },
            }}
            loop={true}
            spaceBetween={10}
            className="h-full"
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}>
            {slideImages.map((item) => {
              return (
                <SwiperSlide key={item.id}>
                  <div className="w-full h-full  relative cursor-pointer shadow-md">
                    <Image
                      src={item.img}
                      className="object-cover rounded-xl"
                      alt={item.name}
                      fill
                      sizes="fill"
                    />
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2">
                      <p className="text-xl font-bold capitalize  ">
                        #{item.name}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.3 }}
          className="col-span-6 row-span-1 h-[20dvh] md:h-full bg-softGreen rounded-xl p-2">
          <h1 className="text-2xl leading-none  md:text-5xl font-extrabold text-neutral-800 tracking-tight">
            Shine this fall with <br /> stylish and trendy outfits <br /> from
            our store!
          </h1>
        </motion.div>
      </div>
    </div>
  );
};

export default ProductsBanner;
