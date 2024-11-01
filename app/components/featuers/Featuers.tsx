// imports
import React from "react";
import { MdOutlineContactSupport } from "react-icons/md";
import { LuGift, LuTruck, LuLock } from "react-icons/lu";
import { IconType } from "react-icons";
import { TbBrandSafari } from "react-icons/tb";

// types
interface Featuers {
  title: string;
  text: string;
  Icon: IconType;
}
const Featuers = () => {
  const featuers = [
    {
      title: "SECURE",
      text: "Secure payment and delivery",
      Icon: LuLock,
    },
    {
      title: "24/7",
      text: "You have 24 hours support",
      Icon: MdOutlineContactSupport,
    },
    { title: "GIFT'S", text: "You can send gift", Icon: LuGift },
    { title: "DELIVERY", text: "Fastest delivery in world", Icon: LuTruck },

    {
      title: "ALL BRANDS",
      text: "You have access to all trend brands",
      Icon: TbBrandSafari,
    },
  ];

  return (
    <div className="my-10 py-5 px-2 bg-softGreen rounded-xl">
      <div className="flex items-center justify-between flex-wrap gap-4 ">
        {featuers.map((feature) => (
          <div className="featuersBox mx-auto" key={feature.title}>
            {feature.Icon && <feature.Icon size={28} className="mb-4" />}
            <h2 className="text-2xl md:text-3xl font-extrabold">
              #{feature.title}
            </h2>
            <p>{feature.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featuers;
