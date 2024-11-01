"use client";
import { navLink } from "@/app/types";
import Link from "next/link";
import React from "react";
import { FaTimes } from "react-icons/fa";
import Search from "./Search";
import { useSession } from "next-auth/react";

interface props {
  items: navLink[];
  handleClick: () => void;
}
const MobileMenu = ({ handleClick, items }: props) => {
  const { data: session } = useSession();
  return (
    <div className="w-[80%] h-[100dvh] absolute top-0 right-0 z-50">
      <div onClick={handleClick} className="relative bg-gray h-full ">
        <ul className="flex flex-col items-center justify-center h-full gap-y-3">
          {items.map((item) => (
            <Link
              key={item.id}
              className="nav-item"
              href={item.path}
              id={item.id.toString()}>
              {item.name}
            </Link>
          ))}
          {session ? (
            <Link href="/profile" className="nav-item">
              Profile
            </Link>
          ) : (
            <Link href="/signUp" className="nav-item">
              Sign Up
            </Link>
          )}

          <Search />
        </ul>
        <div className="absolute top-6 right-5">
          <FaTimes onClick={handleClick} cursor="pointer" size={20} />
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
