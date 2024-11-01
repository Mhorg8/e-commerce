"use client";
import { Product } from "@/app/types";
import Image from "next/image";
import React from "react";
// components
import Quantity from "./Quantity";

// types
interface CartItemProps {
  item: Product;
}

const Cartitem = ({ item }: CartItemProps) => {
  return (
    <div className="grid grid-cols-12 gap-8">
      {/* produvt image */}
      <div className="col-span-2 w-[120px] h-[70px] rounded-full relative">
        {item.image ? (
          <Image
            src={item.image}
            alt={item.productName}
            fill
            className="object-cover rounded-lg"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-300">
            No Image
          </div>
        )}
      </div>
      {/* product name */}
      <div className="col-span-3 flex flex-col items-start gap-2 ">
        <p className="cart-item-title">Product Name:</p>
        <h3 className="cart-item-detail">{item.productName}</h3>
      </div>
      {/* product price */}
      <div className="col-span-3 flex flex-col items-start gap-2 ">
        <p className="cart-item-title">Product Price:</p>
        <h3 className="cart-item-detail">${item.price}</h3>
      </div>
      {/* change order color */}
      <div className="col-span-2 flex flex-col  gap-2 ">
        <p className="cart-item-title">Product Colors:</p>
        {item.selectedColor !== "" ||
          (item.selectedColor && (
            <div
              style={{ backgroundColor: item.selectedColor }}
              className={`h-6 w-6 rounded-full`}></div>
          ))}
      </div>
      {/* quantity  */}
      <Quantity product={item} />
    </div>
  );
};

export default Cartitem;
