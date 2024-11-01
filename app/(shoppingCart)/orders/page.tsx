"use client";
// imports
import { useAppSelector } from "@/app/lib/hooks";
import { useRouter } from "next/navigation";
import React from "react";
// components
import Cartitem from "@/app/components/cart/Cartitem";
import Purchase from "@/app/components/Product/(productOverview)/Purchase";

const OrderPage = () => {
  const cartItems = useAppSelector((state) => state.cart.cartItems);
  const router = useRouter();
  // calc total price with cart items
  const totalPrice = cartItems.reduce((total, item) => {
    return total + item.price * (item.quantity || 1);
  }, 0);

  // precondition
  if (!cartItems || cartItems.length <= 0) {
    return (
      <div className="w-full h-[calc(100dvh-10dvh)] flex items-center justify-center flex-col gap-3">
        <h1 className="text-7xl font-extrabold mb-4">Your Basket is Empty</h1>
        <button onClick={() => router.push("/")} className="return-back-btn">
          Go Back
        </button>
      </div>
    );
  }
  //   JSX
  return (
    <div className="container mt-10">
      <div className="grid grid-cols-12 gap-7">
        <div className="col-span-12 md:col-span-9 bg-neutral-200 px-5 py-2.5 rounded-xl">
          <div className="flex flex-col gap-3">
            {/* displaying cart items */}
            {cartItems.map((item) => (
              <Cartitem key={item.id} item={item} />
            ))}
          </div>
        </div>
        {/* Purchase components */}
        <div className="col-span-12 md:col-span-3 relative">
          <Purchase totalPrice={totalPrice} />
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
