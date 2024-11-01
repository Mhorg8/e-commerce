import React from "react";
import Link from "next/link";
import { LuShoppingCart, LuUserCircle2 } from "react-icons/lu";

interface Props {
  cartItemsLength: number;
  toggleDropdown: () => void;
}

const UserActions = ({ toggleDropdown, cartItemsLength }: Props) => {
  return (
    <div className="flex items-center gap-x-2 ">
      <Link href="/orders" className="relative">
        {cartItemsLength > 0 && (
          <div className="absolute -bottom-3 right-2 w-5 h-5 rounded-full bg-softGreen  flex items-center justify-center">
            <p
              className="text-white
                      text-sm">
              {" "}
              {cartItemsLength}
            </p>
          </div>
        )}

        <LuShoppingCart size={22} />
      </Link>
      <button onClick={toggleDropdown}>
        <LuUserCircle2 size={22} />
      </button>
    </div>
  );
};

export default UserActions;
