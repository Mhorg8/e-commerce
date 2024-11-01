"use client";
// imports
import { useState } from "react";
import React from "react";
import { motion } from "framer-motion";
import { useAppDispatch } from "@/app/lib/hooks";
import { UPDATE_PRODUCT_COLOR } from "@/app/lib/features/cart/cartSlice";
import { Product } from "@/app/types";

// types
interface Props {
  product: Product;
}

const SelectColor = ({ product }: Props) => {
  const { color } = product;
  // states
  const [selectedColor, setSelectedColor] = useState<string>("");
  const colors: string[] = product?.color?.[0]?.split(",") || [];
  const dispatch = useAppDispatch();

  // function
  const handleColor = async (color: string) => {
    await dispatch(UPDATE_PRODUCT_COLOR(color));
    setSelectedColor(color);
  };

  // pre condition
  if (!color) {
    return <div>Loading....</div>;
  }

  return (
    <div className="flex items-center gap-x-2">
      {colors?.map((color, index) => {
        return (
          <motion.div
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            onClick={() => handleColor(color)}
            transition={{ duration: 0.3 }}
            key={index}
            className={`${
              selectedColor === color
                ? "border-2 border-red-500 transform scale-150"
                : "border border-black"
            } w-6 h-6 rounded-full cursor-pointer`}
            style={{ backgroundColor: color }}></motion.div>
        );
      })}
    </div>
  );
};

export default SelectColor;
