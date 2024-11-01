import LoginForm from "@/app/components/auth/LoginForm";
import React from "react";

const LoginPage = () => {
  return (
    <div className="container flex items-center justify-center w-full h-full mt-10 py-10">
      <div className="w-[600px] h-[450px] bg-neutral-200 rounded-2xl flex items-start px-4 py-3">
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-bold text-neutral-800">SignIn</h2>
          <p className="mt-1">Welcome back, Enjoy form your time</p>

          <LoginForm />
        </div>
        <div className="hidden md:block md:w-1/2">1</div>
      </div>
    </div>
  );
};

export default LoginPage;
