import React from "react";
import { FaRegPaperPlane } from "react-icons/fa";

const Newsletter = () => {
  return (
    <div className="col-span-12 md:col-span-3 order-3 md:order-3">
      <h3 className="footer-heading">Join our community</h3>

      <div className="relative w-fit ">
        <input
          type="email"
          placeholder="example@gmail.com"
          className="bg-transparent border border-white py-3 px-4 rounded-full"
        />
        <div className="w-8 h-8 bg-white flex items-center justify-center rounded-full absolute top-1/2 -translate-y-1/2 right-2  text-black hover:bg-neutral-300  ">
          <FaRegPaperPlane size={17} cursor="pointer" />
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
