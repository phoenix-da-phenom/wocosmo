import React from "react";
import { BsDashLg } from "react-icons/bs";
import { TiPlus } from "react-icons/ti";
export default function AddCartController() {
  return (
    <div className="py-5">
      <div className="flex items-center justify-center gap-5 bg-gray-300 px-5 py-3 rounded-full w-30">
        <BsDashLg />
        <div>
          <span>1</span>
        </div>
      <TiPlus />
      </div>
    </div>
  );
}
