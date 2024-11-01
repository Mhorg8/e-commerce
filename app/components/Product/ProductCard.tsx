import React from "react";
import Image from "next/image";
import { Product } from "../../types";
import ProductDescription from "./ProductDescription";

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  return (
    <div className="col-span-6 md:col-span-6 lg:col-span-3 h-[400px] bg-neutral-200/65 rounded-xl p-3  shadow-md cursor-pointer">
      <div className="w-full h-[80%] relative ">
        {/* product description */}
        <ProductDescription product={product} />
        <div className="relative h-full w-full bg-gray/50 rounded-lg">
          {product.image && (
            <Image
              src={product.image}
              fill
              sizes="fill"
              alt=""
              className="object-cover rounded-lg"
            />
          )}
        </div>
      </div>
      <div className="w-full h-[20%] flex items-start justify-between flex-col mt-1.5 overflow-hidden">
        <h2 className="text-lg md:text-2xl font-extrabold truncate">
          {product.productName}
        </h2>
        <h4 className="text-neutral-600 font-semibold text-lg">
          ${product.price}
        </h4>
      </div>
    </div>
  );
};

export default ProductCard;
