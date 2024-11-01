// imports
import React from "react";
import FilterOption from "./FilterOption";
// types
interface filterOption {
  id: number;
  title: string;
}

const Filters = () => {
  const filterOptions: filterOption[] = [
    { id: 1, title: "men" },
    { id: 2, title: "women" },
    { id: 3, title: "shoes" },
    { id: 4, title: "top" },
    { id: 5, title: "fall" },
    { id: 6, title: "All" },
  ];
  return (
    <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
      {filterOptions.map((option) => (
        <FilterOption key={option.id} option={option} />
      ))}
    </div>
  );
};

export default Filters;
