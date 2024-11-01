import Link from "next/link";
import React from "react";

import { LuFileEdit, LuUserCircle2, LuLogOut, LuHeart } from "react-icons/lu";
import { useSession, signOut } from "next-auth/react";

const Dropdown = () => {
  const { data: session } = useSession();

  return (
    <ul className="flex flex-col">
      <Link href="/profile/wishlist">
        <a className="dropdown-item">
          <span>Wishlist</span>
          <LuHeart size={20} />
        </a>
      </Link>
      <Link href="/profile">
        <a className="dropdown-item rounded-none">
          <span>Profile</span>
          <LuUserCircle2 size={20} />
        </a>
      </Link>
      <Link href="/dashboard">
        <a className="dropdown-item rounded-none">
          <span>Dashboard</span>
          <LuFileEdit size={20} />
        </a>
      </Link>

      {session?.user && session.user && (
        <button
          onClick={() => signOut()}
          className="dropdown-item rounded-b-xl rounded-t-none">
          <span>LogOut</span>
          <LuLogOut size={20} />
        </button>
      )}
    </ul>
  );
};

export default Dropdown;
