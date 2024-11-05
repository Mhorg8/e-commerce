import { navLink } from "@/app/types";
import Link from "next/link";
import React from "react";
interface props {
  item: navLink;
  customStyle?: string;
}
const NavItem = ({ item, customStyle }: props) => {
  return (
    <div>
      <Link prefetch className={`nav-item ${customStyle}`} href={item.path}>
        {item.name}
      </Link>
    </div>
  );
};

export default NavItem;
