"use client"
import Image from "next/image";
import React from "react";
import Stars from "../app/assets/statrs.png";
import { typeContainer } from "../utils/AppType";

export default function ItemContainer({
  srcImage, description, price, hndClick,
}: typeContainer) {
  return (
    <div className="cursor-pointer" onClick={hndClick} >
      <div className="relative  w-[150px] h-[200px]">
        <Image src={srcImage} alt="clothes" fill className="object-cover" />
      </div>
      <div>
        <h5>{description}</h5>
      </div>
      <Image src={Stars} alt={srcImage} />
      <div>
        <h4 className="font-bold"> &#8358;{price}</h4>
      </div>
    </div>
  );
}
