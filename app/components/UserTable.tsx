import { teamUsers } from "../constants";
import React from "react";

const UserTable = () => {
  return (
    <table className="table-auto w-full border-separate border-spacing-0 ">
      <thead className="">
        <tr className="bg-neutral-100">
          <td className="py-2 px-4 font-semibold rounded-tl-lg capitalize">
            Name
          </td>
          <td className="py-2 px-4 font-semibold capitalize">Position</td>
          <td className="py-2 px-4 font-semibold capitalize">Education</td>
          <td className="py-2 px-4 font-semibold rounded-tr-lg capitalize">
            Projects
          </td>
        </tr>
      </thead>
      <tbody className="">
        {teamUsers.map((user, rowIndex) => (
          <tr
            key={user.name}
            className={`hover:bg-neutral-200 ${
              rowIndex === teamUsers.length - 1
                ? "rounded-b-lg"
                : "rounded-none"
            }`}>
            <td className="py-2 px-4 text-neutral-800 capitalize align-middle rounded-bl-lg">
              {user.name}
            </td>
            <td className="py-2 px-4 text-neutral-800 align-middle">
              {user.position}
            </td>
            <td className="py-2 px-4 text-neutral-800 align-middle">
              {user.education}
            </td>
            <td className="py-2 px-4 text-neutral-800 align-middle rounded-br-lg">
              <div className="flex items-center gap-x-1 md:gap-x-2">
                {user.projects.map((pro, index) => (
                  <p
                    key={index}
                    className="bg-gray-200 rounded px-1 md:px-2 py-1 text-sm">
                    {pro}
                  </p>
                ))}
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
