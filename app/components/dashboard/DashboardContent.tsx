import React from "react";
import { getUsers } from "@/app/actions/getUsers";
const DashboardContent = async () => {
  const { products, users } = await getUsers();

  console.log(products);

  if (!products || !users) {
    return (
      <div className="w-full h-full bg-neutral-300 flex items-center justify-center text-5xl font-extrabold">
        Loading...
      </div>
    );
  }
  return (
    <div className="h-full">
      <div className="flex items-center flex-col gap-10 ">
        <div>Information</div>
      </div>
    </div>
  );
};

export default DashboardContent;
