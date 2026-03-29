import Image from "next/image";
import React from "react";
import Stars from "../app/assets/statrs.png";
import { typeContainer } from "../utils/AppType";

export default function ItemContainer({
  srcImage,
  description,
  price
}: typeContainer) {
  return (
    <div>
      <div className="relative  w-[150px] h-[200px]">
        <Image src={srcImage} alt="clothes" fill className="object-cover" />
      </div>
      <div>
        <h5>{description}</h5>
      </div>
      <Image src={Stars} alt="" />
      <div>
        <h4 className="font-bold">${price}</h4>
      </div>
    </div>
  );
}
