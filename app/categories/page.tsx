import BlackBanner from "@/components/BlackBanner";
import BrandBanner from "@/components/BrandBanner";
import Breadcrums from "@/components/Breadcrums";
import HeroComponent from "@/components/HeroComponent";
import Navbar from "@/components/Navbar";
import React from "react";
import { TbMathGreater } from "react-icons/tb";
import { GiSettingsKnobs } from "react-icons/gi";
import PriceRange from "../PriceRange";

export default function Page() {
  const data = ["T-shirts", "Shorts", "Pants", "Suits", "Shoes", "Accessories"];
  return (
    <div>
      <BlackBanner />
      <Navbar />
      <Breadcrums crums={["Home", "Categories"]} />
      <div className="container flex gap-5 ">
        <div className="bg-white shadow-[6px_6px_15px_rgba(0,0,0,0.15)] w-[295px] rounded-xl p-4 h-full">
          <div className="flex items-center justify-between border-b border-gray-200 pb-3">
            <h1 className="font-bold">Filters</h1>
            <div>
              <GiSettingsKnobs />
            </div>
          </div>
          <div className="py-4">
            <div className=" border-b border-b-gray-200 pb-6">
              {/* {} */}

              {data.map((data, i) => (
                <div key={i}  className="flex justify-between items-center ">
                  <p className="text-gray-600 py-1">{data}</p>
                  <TbMathGreater />
                </div>
              ))}
            </div>
            <div className="py-3">
            <PriceRange/>

            </div>
          </div>
        </div>
        <div className=" flex-1 py-4 px-2">clothes</div>
      </div>
    </div>
  );
}
