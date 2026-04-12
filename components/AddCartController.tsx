import React from "react";
import { BsDashLg } from "react-icons/bs";
import { TiPlus } from "react-icons/ti";
export default function AddCartController() {
  return (
    <div className="py-5 flex items-center justify-between gap-5">
      <div className="flex items-center justify-center gap-5 bg-gray-300 px-5 py-3 rounded-full w-30 ">
        <div className="cursor-pointer">

        <BsDashLg style={{ strokeWidth: 3 }} />
        </div>
        <div>
          <span className="font-extrabold">1</span>
        </div>
        <div className="cursor-pointer">

        <TiPlus />
        </div>
       
      </div>
       <div className="w-full ">
          <button className="w-full bg-black text-white py-2 px-4 rounded-3xl">Add to Chart</button>
        </div>
    </div>
  );
}
