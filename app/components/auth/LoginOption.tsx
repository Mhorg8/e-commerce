import React from "react";
import { IconType } from "react-icons";

import { FaApple, FaGoogle, FaGithub } from "react-icons/fa6";

type LoginOption = {
  name: string;
  Icon: IconType;
};
const LoginOption = () => {
  const loginOptions: LoginOption[] = [
    { name: "Google", Icon: FaGoogle },
    { name: "GitHub", Icon: FaGithub },
    { name: "Apple", Icon: FaApple },
  ];

  return (
    <div className="flex items-center gap-x-4 ">
      {loginOptions.map((option) => (
        <div
          key={option.name}
          className="flex-1 py-3 mt-4 cursor-pointer flex items-center justify-center rounded-xl bg-black hover:bg-neutral-800 text-white">
          {option.Icon && <option.Icon size={24}/>}
        </div>
      ))}
    </div>
  );
};

export default LoginOption;
