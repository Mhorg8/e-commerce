import generateStar from "@/app/hooks/displayStar";
import { Product } from "@/app/types";
import React from "react";
import AddProductBtn from "./AddProductBtn";
import SelectColor from "./SelectColor";

// types
interface OverTextProps {
  product: Product;
}

const OverviewText = ({ product }: OverTextProps) => {
  // Access the first color and split by comma

  return (
    <div className="col-span-12 md:col-span-6 mt-5 h-full">
      <div className="flex flex-col gap-y-3 md:sticky top-0 right-0">
        {/* title and category */}
        <div>
          <span className="uppercase text-neutral-600 text-sm">
            {product.category?.[0]?.split(",").slice(0, 1)}
          </span>
          <h1 className="text-4xl font-bold tracking-tight capitalize">
            {product.productName}
          </h1>
        </div>
        {/* rate */}
        <div className="flex items-center justify-between ">
          <div className="flex items-center gap-1">
            {generateStar(product.rate)}
          </div>
          <p className="text-base">{product.rate}</p>
        </div>
        {/* description */}
        <p className="text-neutral-700 text-lg">{product.desc}</p>
        {/* color circles */}
        <SelectColor product={product} />

        <AddProductBtn product={product} />
      </div>
    </div>
  );
};

export default OverviewText;
