import { getUsers } from "@/app/actions/getUsers";
import PrimaryButton from "@/app/components/PrimaryButton";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsBox } from "react-icons/bs";
const ProductsPage = async () => {
  const { products } = await getUsers();

  if (!products) {
    return <div>Loading....</div>;
  }
  return (
    <div className="h-full min-h-[calc(100dvh-5dvh)]">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl text-neutral-800 font-bold ">
          Total Products ({products.length})
        </h2>
        <Link href="/dashboard/products/create">
          <PrimaryButton
            type="button"
            textColor="white"
            bgColor="black"
            text="Create product"
            Icon={BsBox}
            IconBg="white"
            IconSize="17"
          />
        </Link>
      </div>
      <div className="grid grid-cols-12 gap-3 h-full">
        {products.map((product) => {
          return (
            <div
              key={product.id}
              className="col-span-12 md:col-span-6 lg:col-span-3 w-full h-[300px] bg-neutral-200 rounded-xl p-3 shadow-lg">
              <div className="relative h-2/3 w-full">
                <div className="bg-gray/50 w-full h-full rounded-lg ">
                  {product.image && (
                    <Image
                      sizes="fill"
                      className="object-contain rounded-xl object-center"
                      src={product.image}
                      alt=""
                      fill
                    />
                  )}
                </div>
              </div>
              <div className="h-1/3 w-full mt-2">
                <h3 className="text-lg font-medium capitalize leading-none">
                  {product.productName}
                </h3>
                <h4 className="text-sm text-text-neutral-700 uppercase">
                  {product.category}
                </h4>
                <div className="flex items-center justify-between">
                  <div className="flex gap-x-1 capitalize font-medium">
                    <span className="">price:</span>
                    <p>${product.price}</p>
                  </div>
                  <div className="flex gap-x-1 capitalize font-medium">
                    <span>stock:</span>
                    <p>{product.stock}</p>
                  </div>
                </div>
                <p className="truncate text-sm"> {product.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductsPage;
