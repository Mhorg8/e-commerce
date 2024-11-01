"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Product } from "@/app/types";
import ProductCard from "../Product/ProductCard";
import { motion } from "framer-motion";

interface SliderProps {
  products?: Product[];
  customStyle?: string;
}

const Slider = ({ products, customStyle }: SliderProps) => {
  if (!products) {
    return <div>Loading...</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.3, delay: 0.4 }}>
      <Swiper
        spaceBetween={30}
        breakpoints={{
          // When the viewport width is >= 0px (small screens)
          0: {
            slidesPerView: 2,
          },
          // When the viewport width is >= 768px (medium screens)
          768: {
            slidesPerView: 4,
          },
        }}
        loop={true}
        className={`w-full ${customStyle}`}>
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <ProductCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  );
};

export default Slider;
