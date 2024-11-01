// imports
import React from "react";
import { getUsers } from "../actions/getUsers";
// components
import ProductsBanner from "../components/banners/ProductsPageBanenr";
import HeadingSection from "../components/HeadingSection";
import Slider from "../components/slider/Slider";
import Filters from "../components/Filters";
import Pagination from "../components/pagination/Pagination";
import Featuers from "../components/featuers/Featuers";

// interface
interface ProductPageProps {
  searchParams: {
    filter: string;
  };
}

const ProductsPage = async ({ searchParams }: ProductPageProps) => {
  const { products } = await getUsers(searchParams["filter"]);
  return (
    <div className="h-full overflow-hidden">
      <div className="container mt-10">
        <ProductsBanner />

        <div className="mt-10">
          <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
            <HeadingSection text="Fall Season Collection" />
            <Filters />
          </div>
          <Slider customStyle="mt-5" products={products} />
        </div>

        <Pagination searchParams={searchParams} />
        <Featuers />
      </div>
    </div>
  );
};

export default ProductsPage;
