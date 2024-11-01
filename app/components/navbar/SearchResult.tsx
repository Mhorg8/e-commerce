"use client";

import { Product } from "@/app/types";
import Image from "next/image";
import React, { useEffect, useState } from "react";

interface SearchResultProps {
  search: string;
}

const SearchResult = ({ search }: SearchResultProps) => {
  const [currentProduct, setCurrentProduct] = useState<Product>();

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await fetch(`/api/search/?search=${search}`);

      if (!res) {
        throw new Error("Product not found");
      }
      const data = await res.json();
      console.log(data);

      setCurrentProduct(data.product);
    };

    fetchProduct();
  }, [search]);

  if (!currentProduct) {
    return null;
  }

  return (
    <div
      className="absolute top-[80px] right-0 bg-neutral-400 rounded-xl px-4 py-2.5 shadow-md z-30
      w-[320px] md:w-[350px] flex items-center gap-x-5">
      <div className="w-[50px] h-[50px] relative">
        {currentProduct.image && (
          <Image
            src={currentProduct.image}
            fill
            sizes="fill"
            className="object-contain rounded-lg"
            alt={currentProduct?.productName}
          />
        )}
      </div>
      <h2>{currentProduct?.productName}</h2>
    </div>
  );
};

export default SearchResult;
