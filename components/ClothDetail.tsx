import Image from "next/image";
import React from "react";
import Pic1 from "../app/assets/img3.png";
import Pic2 from "../app/assets/img2.png";
import Pic3 from "../app/assets/img1.png";
import PicLarge from "../app/assets/img_Large.png";
export default function ClothDetail() {
  return (
    <div>
      <div className="container my-12 flex">
        <div className="flex items-center gap-10">
          <div className="flex flex-col gap-5">
            <Image src={Pic1} alt="" />
            <Image src={Pic2} alt="" />
            <Image src={Pic3} alt="" />
          </div>
          <div>
            <Image src={PicLarge} width={100} className="w-[450px]" alt="" />
          </div>
        </div>

        <div className="px-10">
          <h1 className="font-bold">ONE LIFE GRAPHIC T-SHIRT</h1>
        </div>
      </div>
    </div>
  );
}
