import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <Link
        href="/"
        className="flex items-center mb-5 font-medium text-gray-900 lg:w-auto lg:items-center lg:justify-center md:mb-0"
      >
        <span className="mx-auto text-xl font-black leading-none text-white select-none">
          AI<span className="text-indigo-600">.</span>
        </span>
      </Link>
    </nav>
  );
};

export default Navbar;
