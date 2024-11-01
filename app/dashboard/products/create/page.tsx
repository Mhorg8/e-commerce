import CreateProductForm from "@/app/components/dashboard/CreateProductForm";
import React from "react";

const CreateProductPage = () => {
  return (
    <div>
      <h1 className="text-2xl text-neutral-800 font-bold ">Create User</h1>
      <div className="w-full h-full">
        <CreateProductForm />
      </div>
    </div>
  );
};

export default CreateProductPage;
