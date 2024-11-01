// imports
import OverviewText from "@/app/components/Product/(productOverview)/OverviewText";
import UndoBtn from "@/app/components/UndoBtn";
import client from "@/app/lib/prisma";
import Image from "next/image";
import React from "react";
// types
interface SingleProductPageProps {
  params: {
    id: string;
  };
}

const SingleProductPage = async ({ params }: SingleProductPageProps) => {
  const { id: ProductId } = params;
  // get current product id
  const product = await client.product.findUnique({
    where: {
      id: ProductId,
    },
  });
  // if the product not found return this JSX
  if (!product) {
    return (
      <div className="w-full h-[calc(100dvh-15dvh)] flex items-center justify-center">
        <h2 className="text-2xl md:text-4xl font-extrabold">
          {" "}
          Product not found
        </h2>
      </div>
    );
  }

  return (
    <div className="container w-full mt-10">
      <div className="grid grid-cols-12 gap-7 relative">
        <div className="absolute top-0 right-0">
          <UndoBtn />
        </div>
        {/* product image overview */}
        <div className="col-span-12 md:col-span-6 h-[70dvh] md:h-[80dvh]">
          <div className="flex flex-col gap-3 h-full">
            <div className="flex-1 h-2/3 bg-neutral-300 rounded-xl overflow-hidden relative hover:shadow-md transition duration-200 cursor-pointer">
              <Image
                src={product.image}
                alt={product.productName}
                fill
                className="object-contain"
              />
            </div>
            <div className="h-1/3 flex items-center gap-3">
              <div className="relative h-full w-full bg-neutral-300 rounded-xl hover:shadow-md transition duration-200 cursor-pointer">
                <Image
                  src={product.image}
                  alt={product.productName}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="relative h-full w-full bg-neutral-300 rounded-xl hover:shadow-md transition duration-200 cursor-pointer">
                <Image
                  src={product.image}
                  alt={product.productName}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="relative h-full w-full bg-neutral-300 rounded-xl hover:shadow-md transition duration-200 cursor-pointer">
                <Image
                  src={product.image}
                  alt={product.productName}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
        {/* product text overview */}
        <OverviewText product={product} />
      </div>
    </div>
  );
};

export default SingleProductPage;
