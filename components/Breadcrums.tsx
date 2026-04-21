import { crumsProps } from "@/utils/AppType";
import Image from "next/image";
import React from "react";
import { PiGreaterThanThin } from "react-icons/pi";


export default function Breadcrums({ crums }: crumsProps) {
  return (
    <div className="my-10 text-[12px]">
      <div className="container">
        <ul className="flex items-center gap-3 text-gray-700 font-semibold">

          {
            crums.map((crum, i) => (
              <li key={i} className="flex items-center gap-2">
                {crum} <PiGreaterThanThin />
              </li>
            ))
          }
 
        </ul>
     
      </div>
    </div>
  );
}
