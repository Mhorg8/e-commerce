import { getUsers } from "@/app/actions/getUsers";
import PrimaryButton from "@/app/components/PrimaryButton";
import Link from "next/link";
import React from "react";
import { LuUserPlus } from "react-icons/lu";

const UsersPage = async () => {
  const { users } = await getUsers();

  if (!users) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <h2 className="text-5xl font-extrabold">Users are not exist</h2>
      </div>
    );
  }
  return (
    <div className="w-full ">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl text-neutral-800 font-bold ">
          Total Users ({users.length})
        </h2>
        <Link href="/dashboard/users/create">
          <PrimaryButton
            IconBg="white"
            IconSize="17"
            type="button"
            bgColor="black"
            textColor="white"
            text="add"
            Icon={LuUserPlus}></PrimaryButton>
        </Link>
      </div>
      {users.length <= 0 && (
        <div className="w-full h-full bg-neutral-300 flex items-center justify-center">
          <h2 className="text-3xl font-bold">You don&apos;t have users</h2>
        </div>
      )}
      <div className="overflow-x-auto">
        <table className="min-w-full text-left text-sm ">
          <thead className="bg-neutral-300 text-neural-800 uppercase">
            <tr>
              <th className="px-6 py-2">Name</th>
              <th className="px-6 py-2">Email</th>
              <th className="px-6 py-2">Created At</th>
              <th className="px-6 py-2">Admin</th>
              <th className="px-6 py-2">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200 ">
            {users.map((user) => (
              <tr key={user.id} className="">
                <td className="px-6 py-3 font-medium text-gray-900">
                  {user.username}
                </td>
                <td className="px-6 py-3 text-gray-600">{user.email}</td>
                <td className="px-6 py-3 text-gray-600">
                  {user.createdAt.toLocaleDateString()}
                </td>
                <td className="px-6 py-3 text-gray-600">
                  {user.isAdmin ? "Yes" : "No"}
                </td>
                <td className="px-6 py-2 flex items-center gap-x-3">
                  <button className="bg-softGreen hover:bg-softGreen/70 transition duration-200 px-3 py-1 text-white rounded-xl">
                    View
                  </button>
                  <button className="bg-red-500 hover:bg-red-300 transition duration-200 px-3 py-1 text-white rounded-xl">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UsersPage;
