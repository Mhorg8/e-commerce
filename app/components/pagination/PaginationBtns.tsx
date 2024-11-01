"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

interface PaginationBtnProps {
  hasNextPage: boolean;
  hasPrevPage: boolean;
  productLength: number;
}

const PaginationBtns: React.FC<PaginationBtnProps> = ({
  hasNextPage,
  hasPrevPage,
  productLength,
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const page = searchParams.get("page") ?? "1";
  const per_page = searchParams.get("per_page") ?? "4";

  function generatePageNumber() {
    const totalPages = Math.ceil(productLength / Number(per_page));
    const pageNumbers = [];

    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }

    return pageNumbers.map((pageNumber) => (
      <button
        key={pageNumber}
        onClick={() =>
          router.push(`/products?page=${pageNumber}&per_page=${per_page}`)
        }
        className={`pagination-number  ${
          pageNumber === Number(page) ? "bg-black text-white" : ""
        }`}>
        {pageNumber}
      </button>
    ));
  }

  return (
    <>
      <button
        disabled={!hasPrevPage}
        onClick={() => {
          router.push(
            `/products?page=${Number(page) - 1}&per_page=${per_page}`
          );
        }}
        className="pagination-btn">
        prev
      </button>

      <div className="flex items-center gap-x-2">{generatePageNumber()}</div>
      <button
        disabled={!hasNextPage}
        onClick={() => {
          router.push(
            `/products?page=${Number(page) + 1}&per_page=${per_page}`
          );
        }}
        className="pagination-btn">
        Next
      </button>
    </>
  );
};

export default PaginationBtns;
