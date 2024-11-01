"use client";
// imports
import React from "react";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "../lib/hooks";
import { handleUpdateUrl } from "../hooks/index";
import { SET_PRODUCT_FILTER } from "../lib/features/filter/filterSlice";
// types

interface FilterOptionsProps {
  option: { id: number; title: string };
}

const FilterOption = ({ option }: FilterOptionsProps) => {
  // variables need to handleClickFunction to set filter to store and url
  const dispatch = useAppDispatch();
  const router = useRouter();

  // handle click fn
  const handleOnClick = async (title: string) => {
    const newUrl = await handleUpdateUrl("filter", title);
    dispatch(SET_PRODUCT_FILTER(title));
    router.push(newUrl);
  };
  // JSX that return a filter option
  return (
    <button
      onClick={() => handleOnClick(option.title)}
      className="filter-option">
      <span className="uppercase">{option.title}</span>{" "}
      <span className="text-sm font-semibold ">12</span>
    </button>
  );
};

export default FilterOption;
