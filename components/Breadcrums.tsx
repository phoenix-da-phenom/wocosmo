import Image from "next/image";
import React from "react";
import { PiGreaterThanThin } from "react-icons/pi";


export default function Breadcrums() {
  return (
    <div className="text-[12px]">
      <div className="container">
        <ul className="flex items-center gap-3 text-gray-700 font-semibold">
          <li className="flex items-center gap-2">
            Home <PiGreaterThanThin />
          </li>
          <li className="flex items-center gap-2">
            Shop <PiGreaterThanThin />
          </li>
          <li className="flex items-center gap-2">
            Men <PiGreaterThanThin />{" "}
          </li>
          <li className="text-black">T shirt</li>
        </ul>
     
      </div>
    </div>
  );
}
