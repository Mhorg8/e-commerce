"use client";
import React, { FormEvent, useState } from "react";
import Input from "../Input";
import PrimaryButton from "../PrimaryButton";
import { GoRocket } from "react-icons/go";
import LoginOption from "./LoginOption";
import Link from "next/link";
import { signIn } from "next-auth/react";

const LoginForm = () => {
  const [error, setError] = useState<string | null>(null);

  const handleSignIn = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const { email, password } = Object.fromEntries(formData.entries()) as {
      email: string;
      password: string;
    };

    const result = await signIn("credentials", {
      email,
      password,
      redirectTo: "/",
    });

    if (result?.error) {
      setError("Invalid email or password. Please try again.");
    } else {
      setError(null);
      // Redirect or handle success here if needed
    }
  };

  return (
    <form onSubmit={handleSignIn} className="space-y-4">
      <Input
        type="email"
        placeholder="example@gmail.com"
        label="Email"
        name="email"
      />
      <Input
        type="password"
        placeholder="*******"
        label="Password"
        name="password"
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
      <LoginOption />
      <PrimaryButton
        text="Login"
        type="submit"
        customStyle="w-full"
        bgColor="black"
        Icon={GoRocket}
        IconBg="white"
        textColor="white"
        IconSize="17"
      />
      <p className="text-sm">
        Don&apos;t have an account?{" "}
        <Link className="font-bold underline cursor-pointer" href="/signUp">
          Register
        </Link>
      </p>
    </form>
  );
};

export default LoginForm;
