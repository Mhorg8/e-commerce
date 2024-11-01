"use client";
import Input from "@/app/components/Input";
import PrimaryButton from "@/app/components/PrimaryButton";

import React, { FormEvent } from "react";
import { LuUserPlus } from "react-icons/lu";

const CreateUserForm = () => {
  const createUser = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const { username, email, password, phone, isAdmin, verify } =
      Object.fromEntries(formData.entries());

    // Convert string "true"/"false" to boolean
    const isAdminBool = isAdmin === "true";
    const isVerifiedBool = verify === "true";

    const response = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        username,
        email,
        password,
        phone,
        isAdmin: isAdminBool,
        verify: isVerifiedBool,
      }),
    });
    console.log(response);
  };

  return (
    <form onSubmit={createUser} className="mt-7 space-y-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-x-5">
        <Input
          customStyle="py-3"
          name="username"
          type="text"
          placeholder="Username"
          label="Username"
        />
        <Input
          customStyle="py-3"
          name="email"
          type="email"
          placeholder="example@gmail.com"
          label="Email"
        />
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between gap-x-5">
        <Input
          customStyle="py-3"
          name="password"
          type="password"
          placeholder="********"
          label="Password"
        />
        <Input
          customStyle="py-3"
          name="phone"
          type="text"
          placeholder="+98 933 405 55 39"
          label="Phone"
        />
      </div>
      <div className="flex items-center justify-between gap-x-5">
        <div className="flex flex-col flex-1">
          <label htmlFor="verify">Is Verified?</label>
          <select
            name="verify"
            defaultValue="false"
            className="flex-1 rounded-xl py-3 cursor-pointer">
            <option value="true">True</option>
            <option value="false">False</option>
          </select>
        </div>
        <div className="flex flex-col flex-1">
          <label htmlFor="isAdmin">Is Admin?</label>
          <select
            name="isAdmin"
            defaultValue="false"
            className="flex-1 rounded-xl py-3 cursor-pointer w-full">
            <option value="true">True</option>
            <option value="false">False</option>
          </select>
        </div>
      </div>

      <PrimaryButton
        text="Create"
        bgColor="black"
        IconColor="black"
        IconBg="white"
        Icon={LuUserPlus}
        IconSize="17"
        customStyle="text-xl mt-5"
        textColor="white"
        type="submit"
      />
    </form>
  );
};

export default CreateUserForm;
