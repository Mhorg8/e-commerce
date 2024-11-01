import React from "react";
import PrimaryButton from "../../PrimaryButton";
import { GrCreditCard } from "react-icons/gr";

interface Props {
  totalPrice: number;
}

const Purchase = ({ totalPrice }: Props) => {
  return (
    <div className="w-full min-h-[200px] rounded-xl px-4 py-2 h-fit bg-black text-white static md:sticky top-0 left-0">
      {/* display purchase box  */}
      <ul className="space-y-3 border-b border-neutral-100 pb-2">
        <li className="flex items-center justify-between gap-x-4 ">
          <span>Products price:</span>
          <span>${totalPrice}</span>
        </li>
        <li className="flex items-center justify-between gap-x-4 ">
          <span>Delivery price:</span>
          <span>$10</span>
        </li>
        <li className="flex items-center justify-between gap-x-4 ">
          <span>Total price:</span>
          <span>${totalPrice + 10}</span>
        </li>
      </ul>
      <div className="mt-4">
        <PrimaryButton
          customStyle="w-full"
          Icon={GrCreditCard}
          IconColor="white"
          IconBg="black"
          IconSize="17"
          text="Purchase"
          bgColor="white"
          textColor="black"
        />
      </div>
    </div>
  );
};

export default Purchase;
