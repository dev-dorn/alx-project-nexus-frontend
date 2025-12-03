import React, { useContext, useState } from "react";
import Link from "next/link";
import { assets } from "@/assets/assets";
import { ShopContext } from "@/context/ShopContext";

const Navbar: React.FC = () => {
  const [visible, setVisible] = useState(false);

  const ctx = useContext(ShopContext)!;
  const { setShowSearch, getCartCount } = ctx;
  return (
    <div className="flex items-center justify-between py-5 font-medium ">
      <Link href="/">
        <img src={assets.logo} className="w-36" alt="logo" />
      </Link>
      {/* navigation bar */}
      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        <Link href="/" className="flex flex-col items-center gap-1">
          <p>HOME</p>
        </Link>
        <Link href="/collection" className="flex flex-col items-center gap-1">
          <p>COLLECTION</p>
        </Link>
        <Link href="/about" className="flex flex-col items-center gap-1">
          <p>ABOUT</p>
        </Link>
        <Link href="/contact" className="flex flex-col items-center gap-1">
          <p>CONTACT</p>
        </Link>
      </ul>
      <div className="flex items-center gap-6">
        {/*adds a search icon*/}
        <img onClick={() => setShowSearch(true)} src={assets.search_icon} className="w-5 cursor-pointer" alt="" />
        <div className="group relative">
          <Link href="/login">
            <img src={assets.profile_icon} className="w-5 cursor-pointer" alt="" />
          </Link>
          <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4 ">
            <div className="flex flex-col gap-2 w-36 px-5 bg-slate-100 text-gray-500 rounded">
              <p className="cursor-pointer hover:text-black ">My Profile</p>
              <p className="cursor-pointer hover:text-black ">Orders</p>
              <p className="cursor-pointer hover:text-black ">Logout</p>
            </div>
          </div>
        </div>
        {/*adds a cart icon*/}
        <Link href="/cart" className="relative">
          <img src={assets.cart_icon} className="w-5 min-w-5" alt="" />
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text -[8px] ">
            {getCartCount()}
          </p>
        </Link>
        {/*adds a menu icon*/}
        <img onClick={() => setVisible(true)} src={assets.menu_icon} className="w-5 cursor-pointer sm:hidden " alt="" />
      </div>
      {/*sidebar menu for a smaller screen*/}
      <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${
        visible ? "w-full" : "w-0"
      }`}>
        <div className="flex flex-col text-gray-600">
          <div onClick={() => setVisible(false)} className="flex items-center gap-4 p-3 cursor pointer">
            <img className="h-4 rotate-180" src={assets.dropdown_icon} alt="" />
            <p>Back</p>
          </div>
          <Link onClick={() => setVisible(false)} className="py-2 pl-6 border" href="/">
            Home
          </Link>
          <Link onClick={() => setVisible(false)} className="py-2 pl-6 border" href="/collection">
            Collection
          </Link>
          <Link onClick={() => setVisible(false)} className="py-2 pl-6 border" href="/about">
            About
          </Link>
          <Link onClick={() => setVisible(false)} className="py-2 pl-6 border" href="/contact">
            Contacts
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
