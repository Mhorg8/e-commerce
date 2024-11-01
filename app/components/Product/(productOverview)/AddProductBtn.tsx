"use client";
import React, { useEffect, useState } from "react";
import PrimaryButton from "../../PrimaryButton";
import { LuShoppingCart } from "react-icons/lu";
import { useAppDispatch, useAppSelector } from "@/app/lib/hooks";
import { ADD_PRODUCT } from "@/app/lib/features/cart/cartSlice";
import { Product } from "@/app/types";
import { IoLogInOutline } from "react-icons/io5";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

interface Props {
  product: Product;
}

const AddProductBtn = ({ product }: Props) => {
  const { data: session } = useSession();
  const [displayQuantity, setDisplayQuantity] = useState<boolean>(false);
  const cartItems = useAppSelector((state) => state.cart.cartItems);
  const dispatch = useAppDispatch();
  const router = useRouter();

  useEffect(() => {
    // Check if the product exists in the cart
    const isExist = cartItems.some((pro) => pro.id === product.id);
    setDisplayQuantity(isExist);
  }, [cartItems, product.id]);

  const handleClick = (product: Product) => {
    if (session) {
      dispatch(ADD_PRODUCT(product));
    } else {
      router.push("/signIn");
    }
  };

  return (
    <div className="mt-4 md:mt-10">
      {session ? (
        <PrimaryButton
          disable={displayQuantity}
          onClick={() => handleClick(product)}
          text={displayQuantity ? "Added" : "Purchase"}
          textColor="white"
          bgColor="black"
          customStyle="w-full py-6"
          type="button"
          Icon={LuShoppingCart}
          IconBg="white"
          IconSize="20"
        />
      ) : (
        <div className="space-y-3">
          <p className="text-sm text-red-400 ml-3">
            First login to your account
          </p>
          <PrimaryButton
            text="Login"
            bgColor="neutral-300"
            textColor="black"
            IconBg="black"
            IconColor="white"
            Icon={IoLogInOutline}
            IconSize="20"
            type="button"
            customStyle="w-full py-6"
            onClick={() => handleClick(product)}
          />
        </div>
      )}
    </div>
  );
};

export default AddProductBtn;
