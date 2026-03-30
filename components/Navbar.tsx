"use client"
import Image from "next/image";
import Logo from "../app/assets/logo.png";
import { FiSearch } from "react-icons/fi";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { LuCircleUserRound } from "react-icons/lu";
 import { useRouter } from "next/navigation";


export default function Navbar() {
  const router = useRouter();
  const goHome = ()=>{
    router.push('/');
  }


  return (
      <div className="sticky top-6 left-0 w-full z-50 bg-white shadow-sm">
    <div className="container mx-auto flex items-center gap-10 py-4 border-b border-b-gray-300">

      {/* LEFT: Logo */}
      <div onClick={goHome}>
        <Image src={Logo} height={40} width={120} alt="logo" />
      </div>

      {/* MIDDLE: Nav + Search */}
      <div className="hidden md:flex items-center gap-6">
        
        {/* Navigation */}
        <ul className="flex items-center gap-8 text-[var(--text-large)]">
          <li className="cursor-pointer hover:text-gray-500">Shop</li>
          <li className="cursor-pointer hover:text-gray-500">On Sale</li>
          <li className="cursor-pointer hover:text-gray-500">New Arrivals</li>
          <li className="cursor-pointer hover:text-gray-500">Brands</li>
        </ul>

        {/* Search */}
        <div className="relative w-[300px]">
          <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />

          <input
            type="text"
            name="searchBox"
            placeholder="Search Product"
            className="bg-[var(--secondary-background-color)] pl-10 pr-4 py-2 w-full rounded-3xl outline-none"
          />
        </div>

      </div>

      {/* RIGHT: Icons */}
      <div className="flex items-center gap-4 text-xl ml-auto">
        <HiOutlineShoppingCart className="cursor-pointer" />
        <LuCircleUserRound className="cursor-pointer" />
      </div>

    </div>
    </div>
  );
}