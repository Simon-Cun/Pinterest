import React from "react";
import Image from "next/image";
import PinterestLogo from "@/public/pinterest-logo.svg";

const NavBar = () => {
  return (
    <div className="fixed z-40 flex w-full flex-wrap items-center justify-between space-x-2 bg-white p-5">
      <div className="flex space-x-9">
        <Image src={PinterestLogo} alt="Pinterest Logo" />
        <p className="pt-2">Explore</p>
        <p className="pt-2">Shop</p>
      </div>
      <div className="flex space-x-6">
        <div className="flex space-x-9 pt-3">
          <p>About</p>
          <p>Business</p>
          <p>Blog</p>
        </div>
        <div className="flex space-x-3">
          <div className="flex h-10 w-18 items-center justify-center rounded-4xl bg-red-500 text-white">
            Log in
          </div>
          <div className="flex h-10 w-20 items-center justify-center rounded-4xl bg-gray-200">
            Sign up
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
