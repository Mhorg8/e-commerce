"use client";
import { FormEvent } from "react";
import Input from "../Input";
import PrimaryButton from "../PrimaryButton";
import { BsBox } from "react-icons/bs";
import { useRouter } from "next/navigation";

const CreateProductForm = () => {
  const router = useRouter();

  const createProduct = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget); // Create FormData from form

    const response = await fetch("/api/newProduct", {
      method: "POST",
      body: formData, // Send FormData directly
    });

    if (response.status === 200) {
      router.push("/dashboard/products");
    } else {
      const data = await response.json();
      console.error(data.message);
      alert(data.message);
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-start justify-between gap-x-5 mt-5 h-full">
      <div className="w-full md:w-1/3 h-full">
        <div className="relative w-full h-[350px] bg-neutral-400 rounded-xl">
          {/* Preview image here if needed */}
        </div>
      </div>
      <form
        onSubmit={createProduct}
        className="w-2/3 h-full flex flex-col justify-start gap-4 ">
        <div className="flex flex-col md:flex-row items-center gap-x-4">
          <Input
            customStyle="flex-1"
            name="productName"
            label="Name"
            type="text"
            placeholder="Adidas"
          />
          <Input
            customStyle="flex-1"
            name="category"
            label="Category"
            type="text"
            placeholder="Shoes"
          />
        </div>
        <div className="flex flex-col md:flex-row items-center gap-x-4">
          <Input
            customStyle="flex-1"
            name="price"
            label="Price"
            type="number"
            min={0}
            placeholder="200"
          />
          <Input
            min={0}
            customStyle="flex-1"
            name="stock"
            label="Stock"
            type="number"
            placeholder="10"
          />
        </div>
        <div className="flex flex-col md:flex-row items-center gap-x-4">
          <Input
            customStyle="flex-1"
            name="color"
            label="Color"
            type="text"
            placeholder="Black"
          />
          <Input
            customStyle="flex-1"
            name="rate"
            label="Rate"
            type="text"
            placeholder="Rate"
          />
        </div>
        <div className="flex flex-col md:flex-row items-center gap-x-4">
          <textarea
            name="desc"
            rows={4}
            className="p-2 rounded-xl flex-1"
            placeholder="It's a new collection from Adidas"></textarea>

          <input type="file" name="image" />
        </div>

        <PrimaryButton
          type="submit"
          text="Create"
          bgColor="black"
          textColor="white"
          IconBg="white"
          IconSize="17"
          Icon={BsBox}
        />
      </form>
    </div>
  );
};

export default CreateProductForm;
