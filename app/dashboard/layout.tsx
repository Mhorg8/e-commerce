import React, { ReactNode } from "react";
import Sidebar from "../components/dashboard/Sidebar";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="grid grid-cols-12 container mt-5 h-full">
      <Sidebar />
      <div className="col-span-10 ml-4 border border-gray bg-neutral-200 rounded-xl p-6">
        {children}
      </div>
    </div>
  );
};

export default layout;
