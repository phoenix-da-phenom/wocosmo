import Image from "next/image";
import React from "react";
import { PiGreaterThanThin } from "react-icons/pi";
import Pic1 from "../app/assets/img3.png";
import Pic2 from "../app/assets/img2.png";
import Pic3 from "../app/assets/img1.png";
import PicLarge from '../app/assets/img_Large.png'

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
        <div className="my-12">
          <div className="flex items-center gap-10">
            <div className="flex flex-col gap-5">
              <Image src={Pic1} alt="" />
              <Image src={Pic2} alt="" />
              <Image src={Pic3} alt="" />
            </div>
            <div>
                <Image src={PicLarge} width={100} className="w-[450px]" alt=""/>

            </div>
          </div>

          <div>
            <h1>ONE LIFE GRAPHIC T-SHIRT</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
