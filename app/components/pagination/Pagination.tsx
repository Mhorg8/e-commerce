// imports
import HeadingSection from "../HeadingSection";
import ProductCard from "../Product/ProductCard";
import PaginationBtns from "./PaginationBtns";
import { getUsers } from "@/app/actions/getUsers";

// types
interface PaginationProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

const Pagination = async ({ searchParams }: PaginationProps) => {
  const { products } = await getUsers();
  const page = Number(searchParams["page"] ?? "1");
  const perPage = Number(searchParams["per_page"] ?? "4");

  // Calculate start and end indices for pagination
  const start = (page - 1) * perPage;
  const end = start + perPage;

  if (!products) {
    return <div>Loading...</div>;
  }

  const entries = products.slice(start, end);

  return (
    <div className="mt-10">
      <div className="flex items-center justify-between">
        <HeadingSection text="New Trends" />

        <div className="flex items-center gap-x-4 mt-5  justify-center">
          <PaginationBtns
            hasNextPage={end < products.length}
            hasPrevPage={start > 0}
            productLength={products.length}
          />
        </div>
      </div>

      <div className="grid grid-cols-12 gap-5 relative mt-10">
        {entries.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Pagination;
