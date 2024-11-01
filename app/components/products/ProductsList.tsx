
import Filters from "../Filters";
import ProductCard from "../Product/ProductCard";
import { Product } from "@/app/types";

const ProductsList = ({ products }: { products: Product[] }) => {
 
  if (!products.length) {
    return <div>Loading.....</div>;
  }

  return (
    <div className="container">
      <div className="flex flex-col md:flex-row gap-5 items-center justify-between w-full mt-10">
        <div className="w-full md:w-fit">
          <h3 className="leading-none text-4xl font-bold">
            SHOP BY <br />
            ESSENTIALS
          </h3>
        </div>
        <Filters />
      </div>

      <div className="grid grid-cols-12 gap-3 mt-10">
        {products.length > 0 ? (
          products
            .slice(0, 8)
            .map((product) => (
              <ProductCard product={product} key={product.id} />
            ))
        ) : (
          <div>No products found for </div>
        )}
      </div>
    </div>
  );
};

export default ProductsList;
