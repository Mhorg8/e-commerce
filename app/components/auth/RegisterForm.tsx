"use client";
import Input from "@/app/components/Input";
import PrimaryButton from "@/app/components/PrimaryButton";
import { FormEvent, useState } from "react";
import Alert from "../Alert";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import LoginOption from "./LoginOption";
import Link from "next/link";
import { GoRocket } from "react-icons/go";

const RegisterForm = () => {
  const [message, setMessage] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const user = Object.fromEntries(formData.entries());

    const response = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    if (!response.ok) {
      console.log("Failed to connect to server");
    }
    const data = await response.json();
    if (response.status === 200) {
      setMessage(data.message);
    } else if (response.status === 500 || response.status === 409) {
      setError(data.message);
    }
  };

  return (
    <form action="" onSubmit={handleSubmit} className="relative ">
      {error && (
        <Alert message={error} Icon={FaTimesCircle} textColor="cream" />
      )}
      {message && (
        <Alert message={message} Icon={FaCheckCircle} textColor="softGreen" />
      )}
      <Input
        type="text"
        label="Username"
        placeholder="Mhorg81"
        name="username"
      />
      <Input
        type="email"
        label="Email"
        placeholder="example@gmail.com"
        name="email"
      />
      <Input
        type="password"
        label="Password"
        placeholder="**********"
        name="password"
      />
      <LoginOption />

      <PrimaryButton
        bgColor="black"
        text="Register"
        textColor="white"
        IconBg="white"
        customStyle="w-full mt-4"
        Icon={GoRocket}
        IconSize="17"
      />
      <p className="text-sm mt-3">
        Already have an account ?{" "}
        <Link className="cursor-pointer underline font-bold" href="/signIn">
          Login
        </Link>
      </p>
    </form>
  );
};

export default RegisterForm;
