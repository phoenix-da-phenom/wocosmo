import Image from "next/image";
import React from "react";
import Pic1 from "../app/assets/img3.png";
import Pic2 from "../app/assets/img2.png";
import Pic3 from "../app/assets/img1.png";
import PicLarge from "../app/assets/img_Large.png";
import Stars from "../app/assets/Frame 11.png";
import OffBadge from "./OffBadge";
import SelectColor from "./SelectColor";
import ChooseSize from "./ChooseSize";
import AddCartController from "./AddCartController";

export default function ClothDetail() {
  return (
    <div>
      <div className="container my-12 flex flex-col lg:flex-row gap-10">
        
        {/* LEFT IMAGE SECTION */}
        <div className="flex gap-5">
          
          {/* THUMBNAILS */}
          <div className="flex flex-col gap-4">
            {[Pic1, Pic2, Pic3].map((pic, i) => (
              <div key={i} className="w-[80px] h-[80px] relative rounded-lg overflow-hidden border">
                <Image
                  src={pic}
                  alt={`thumb-${i}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          {/* MAIN IMAGE */}
          <div className="relative w-[300px] h-[400px] sm:w-[400px] sm:h-[500px] rounded-xl overflow-hidden">
            <Image
              src={PicLarge}
              alt="main product"
              fill
              className="object-cover"
            />
          </div>

        </div>

        {/* RIGHT DETAILS SECTION */}
        <div className="px-2 lg:px-6 max-w-xl">
          <h1 className="text-3xl lg:text-4xl font-extrabold font-integral">
            ONE LIFE GRAPHIC T-SHIRT
          </h1>

          <div className="py-2">
            <Image src={Stars} alt="stars" />
          </div>

          <div className="flex gap-3 items-center flex-wrap">
            <h4 className="text-2xl lg:text-3xl font-semibold">
              &#8358; 2,000
            </h4>
            <h4 className="text-2xl lg:text-3xl font-semibold text-gray-400">
              <del>&#8358; 3000</del>
            </h4>
            <OffBadge text="-40%" color="red" />
          </div>

          <div className="mt-4">
            <p className="text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
              tenetur, soluta dignissimos ex nemo amet assumenda ullam officia...
            </p>
          </div>
          <SelectColor/>
          <ChooseSize/>
          <AddCartController/>
        </div>

      </div>
    </div>
  );
}