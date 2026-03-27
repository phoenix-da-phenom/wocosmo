import Image from "next/image";
import React from "react";
import Stars from "../assets/statrs.png";
import { typeContainer } from "../utils/AppType";

export default function ItemContainer({
  srcImage,
  description,
}: typeContainer) {
  return (
    <div>
      <div>
        <Image src={srcImage} alt="clothes" />
      </div>
      <div>
        <h5>{description}</h5>
      </div>
      <Image src={Stars} alt="" />
      <div>
        <h4>$120</h4>
      </div>
    </div>
  );
}
