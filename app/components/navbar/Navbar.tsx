"use client";
// imports
import React, { useState } from "react";
import Link from "next/link";
import { MdMenu } from "react-icons/md";
import { navLinks } from "@/app/constants";
import { useSession } from "next-auth/react";
import { useAppSelector } from "@/app/lib/hooks";
import { useSearchParams } from "next/navigation";

// components
import Logo from "../Logo";
import NavItem from "./NavItem";
import Search from "./Search";
import MobileMenu from "./MobileMenu";
import Dropdown from "./Dropdown";
import UserActions from "./UserActions";
import SearchResult from "./SearchResult";

const Navbar = () => {
  // states
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const { data: session } = useSession();
  const cartItems = useAppSelector((state) => state.cart.cartItems);
  const cartItemsLength = cartItems.length;
  const searchParams = useSearchParams();
  const search = searchParams.get("search");

  // JSX
  return (
    <div className="container">
      <nav className="px-5 mt-5 py-2 flex items-center justify-between border border-gray rounded-xl relative">
        {/* left section with logo */}
        <Logo />
        {/* nav links */}
        <div className="hidden md:block absolute left-1/2 -translate-x-1/2">
          <ul className="flex items-center gap-x-4">
            {navLinks.map((item, index) => (
              <NavItem key={index} item={item} />
            ))}
          </ul>
        </div>
        {/* right section */}
        <div className="hidden md:block w-fit relative">
          <div className="flex items-center gap-x-4">
            <Search />
            {session?.user && session.user ? (
              <UserActions
                cartItemsLength={cartItemsLength}
                toggleDropdown={() => setShowDropdown((prev) => !prev)}
              />
            ) : (
              <Link href="/signUp">Sign Up</Link>
            )}
          </div>

          {/* dropdown */}
          {showDropdown && (
            <div className="w-[170px] min-h-full absolute top-10 right-0 bg-gray rounded-xl z-40">
              <Dropdown />
            </div>
          )}
        </div>
        {/* mobile menu */}
        <div className="block md:hidden">
          <MdMenu
            onClick={() => setShowMenu(true)}
            size={24}
            cursor="pointer"
          />
        </div>
        {showMenu && (
          <MobileMenu items={navLinks} handleClick={() => setShowMenu(false)} />
        )}
        {search && <SearchResult search={search} />}
      </nav>
    </div>
  );
};

export default Navbar;
