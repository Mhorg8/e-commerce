"use client";

import { usePathname, useRouter } from "next/navigation";
import React, { FormEvent, useRef } from "react";
import { MdSearch } from "react-icons/md";

const Search = () => {
  const searchValueRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const pathname = usePathname();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const searchValue = searchValueRef.current?.value || ""; // Access current value safely
    if (searchValue.length > 3 && searchValue.trim()) {
      router.push(
        `${pathname}?${new URLSearchParams({
          search: searchValue,
        })}`
      );
    } else {
      router.push(`${pathname}`);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-neutral-200 rounded-full py-1 flex items-center md:py-2 relative">
      <input
        ref={searchValueRef}
        type="text"
        placeholder="Search"
        className="bg-transparent w-full px-2 flex-1 outline-none"
      />
      <button
        type="submit"
        className="absolute top-1/2 -translate-y-1/2 right-2">
        <MdSearch size={20} />
      </button>
    </form>
  );
};

export default Search;
