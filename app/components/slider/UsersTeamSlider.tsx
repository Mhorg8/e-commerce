"use client";
// imports
import React from "react";
import { teamUsers } from "@/app/constants";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Image from "next/image";
import { motion } from "framer-motion";
// types

const UsersTeamSlider = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.2, delay: 0.1 }}>
      {" "}
      <Swiper
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        spaceBetween={50}
        slidesPerView={3}
        breakpoints={{
          0: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 4,
          },
        }}>
        {teamUsers.map((user) => (
          <SwiperSlide key={user.name} className="p-4">
            <div className="rounded-lg bg-neutral-300 select-none shadow-md">
              <div className="relative w-[150px] h-[150px]">
                <Image
                  fill
                  sizes="fill"
                  src={user.img}
                  alt={user.name}
                  className="object-contain rounded-lg"
                />
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                  {" "}
                  <p className="text-base font-bold text-white">
                    #{user.position}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  );
};

export default UsersTeamSlider;
