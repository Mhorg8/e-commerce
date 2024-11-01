"use client";
import React from "react";
import { motion } from "framer-motion";
import PrimaryButton from "../PrimaryButton";
import { LuShoppingBag } from "react-icons/lu";
import { Product } from "@/app/types";
import { useAppDispatch } from "@/app/lib/hooks";
import { ADD_PRODUCT } from "@/app/lib/features/cart/cartSlice";
import Link from "next/link";

interface Props {
  product: Product;
}
const ProductDescription = ({ product }: Props) => {
  const dispatch = useAppDispatch();
  const handleAddToCart = (product: Product) => {
    dispatch(ADD_PRODUCT(product));
  };
  const { color } = product;

  return (
    <motion.div
      initial={{ x: 10, opacity: 0 }}
      whileHover={{
        x: 0,
        opacity: 0.7,
        shadow: "0px,0px,15px,rgba(0,0,0,03)",
      }}
      transition={{ duration: 0.3 }}
      className="absolute top-0 left-0 w-full h-full bg-softGreen bg-opacity-75 rounded-xl z-20  px-5 py-7 text-black flex flex-col justify-between">
      <p className="text-sm md:text-base">
        {product.desc.split(" ").slice(0, 20).join(" ")}
      </p>
      <div className="flex items-center gap-x-1">
        {color?.map((item, index) => {
          return (
            <div
              key={index}
              className={`w-6 h-6 rounded-full bg-${item}`}></div>
          );
        })}
      </div>
      <div className="flex flex-col md:flex-row gap-2 items-center">
        <PrimaryButton
          onClick={() => handleAddToCart(product)}
          customStyle="w-[130px]"
          text="Add to Card"
          Icon={LuShoppingBag}
          bgColor="black"
          textColor="white"
          IconBg="white"
        />
        <Link href={`/products/${product.id}`}>
          <PrimaryButton
            customStyle="w-[130px]"
            text="Read More"
            Icon={LuShoppingBag}
            bgColor="black"
            textColor="white"
            IconBg="white"
          />
        </Link>
      </div>
    </motion.div>
  );
};

export default ProductDescription;
