import React from "react";
import { IconType } from "react-icons";
import { BsBoxes, BsGear } from "react-icons/bs";
import { LuUsers, LuHome } from "react-icons/lu";
import { TbUserEdit } from "react-icons/tb";
import { GoSidebarCollapse } from "react-icons/go";
import Link from "next/link";

interface SidebarOption {
  id: number;
  name: string;
  Icon: IconType;
  path: string;
}

const Sidebar = () => {
  const sidebarOptions: SidebarOption[] = [
    { id: 1, name: "Home", Icon: LuHome, path: "/dashboard" },
    { id: 2, name: "Products", Icon: BsBoxes, path: "/dashboard/products" },
    { id: 3, name: "Users", Icon: LuUsers, path: "/dashboard/users" },
    { id: 4, name: "Profile", Icon: TbUserEdit, path: "/dashboard/profile" },
    { id: 5, name: "Setting", Icon: BsGear, path: "/dashboard/setting" },
  ];

  return (
    <div className="col-span-2 md:col-span-2 border bg-neutral-300 border-gray rounded-2xl h-full w-full">
      <div className="flex items-center flex-col h-full py-4">
        {/* Sidebar Collapse Button */}
        <div className="flex items-center gap-x-2 px-4 mb-8">
          <button>
            <GoSidebarCollapse size={24} />
          </button>
          <p className="hidden md:block">Close</p>
        </div>

        {/* Sidebar Options */}
        <div className="flex flex-col flex-1 fixed md:static top-1/2 items-center md:justify-center px-4 gap-6 ">
          {sidebarOptions.map((option) => (
            <Link
              href={option.path}
              key={option.id}
              className="flex items-center gap-x-4 w-full hover:text-softGreen hover:scale-105 transition-all cursor-pointer">
              {/* Icon */}
              {option.Icon && <option.Icon size={24} />}
              {/* Text */}
              <p className="text-lg hidden md:block">{option.name}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
