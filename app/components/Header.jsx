import React from "react";
import Link from "next/link";
import { UserButton, auth } from "@clerk/nextjs";

const Header = () => {
  const { userId } = auth();

  return (
    <>
      <nav className="bg-purple-700 py-4 px-6 flex items-center justify-between mb-5">
        <div className="flex items-center">
          <Link href="/">
            <div className="text-lg uppercase font-bold text-white">
              Clerk App
            </div>
          </Link>
        </div>
        {!userId ? (
          <div className="text-white flex items-center">
            <Link
              href="sign-in"
              className="text-gray-300 hover:text-white mr-4"
            >
              Sign In
            </Link>
            <Link href="sign-up" className="text-gray-300 hover:text-white">
              Sign Up
            </Link>
          </div>
        ) : (
          <></>
        )}
      </nav>
    </>
  );
};

export default Header;
