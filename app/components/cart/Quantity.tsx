"use client";
import {
  DECREASE_QUANTITY,
  DELETE_PRODUCT,
  INCREASE_QUANTITY,
} from "@/app/lib/features/cart/cartSlice";
import { useAppDispatch } from "@/app/lib/hooks";
import { Product } from "@/app/types";
import React from "react";
import { FaTrash } from "react-icons/fa";
// types

interface Props {
  product: Product;
}

const Quantity = ({ product }: Props) => {
  const dispatch = useAppDispatch();
  return (
    <div className="col-span-2 flex items-center gap-3">
      <div className=" flex items-center gap-5 bg-black text-white rounded-full justify-between p-1">
        <button
          onClick={() => dispatch(INCREASE_QUANTITY(product.id))}
          className="w-8 h-8 bg-neutral-100 text-neutral-800 rounded-full text-lg font-bold ">
          +
        </button>
        <p>{product.quantity}</p>
        <button
          onClick={() => dispatch(DECREASE_QUANTITY(product.id))}
          className="w-8 h-8 bg-neutral-100 text-neutral-800 rounded-full">
          -
        </button>
      </div>

      <button
        onClick={() => dispatch(DELETE_PRODUCT(product.id))}
        className="cursor-pointer">
        <FaTrash />
      </button>
    </div>
  );
};

export default Quantity;
