import React from "react";
import Logo from "../Logo";
import { footerLinks } from "@/app/constants";
import Link from "next/link";
import Newsletter from "./Newsletter";

const Footer = () => {
  return (
    <div className=" bg-black mt-10 py-5 px-10 text-white h-full ">
      <div className="grid grid-cols-12 gap-5  gap-x-5 justify-between h-full">
        <div className="col-span-6 md:col-span-3 order-2 md:order-1 flex flex-col justify-center">
          <Logo textColor="white" textSize="text-4xl" />

          <p className="text-sm font-light mt-4">FOR EVERYONE BUT NOTANYONE</p>
        </div>

        <div className="col-span-12 md:col-span-6 order-1 md:order-2  flex items-start justify-between gap-4 h-full">
          {footerLinks.map((item) => (
            <div key={item.heading}>
              <h4 className="footer-heading">{item.heading}</h4>
              <ul className="flex flex-col justify-start items-start">
                {item.links.map((link) => (
                  <Link
                    className="footer-link"
                    key={link.name}
                    href={link.path}>
                    {link.name}
                  </Link>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Newsletter />
      </div>
    </div>
  );
};

export default Footer;
