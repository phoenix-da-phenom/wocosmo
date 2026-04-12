import Image from "next/image";
import React from "react";
import star from "../app/assets/stars.png";
import goodMark from "../app/assets/mark_good.png";

export default function TestimonialRating() {
  return (
    <div className="border border-gray-300 rounded-xl">
      <div className="p-4">
        <div>
          <Image src={star} alt="pic" width={120} height={120} />
        </div>
        <div className="flex items-center gap-2 py-2">
          <h2 className="font-bold">Samantha D. </h2>
          <Image src={goodMark} alt="pic" width={20} height={20} />
        </div>
        <div>
          <p>
            "I absolutely love this t-shirt! The design is unique and the fabric
            feels so comfortable. As a fellow designer, I appreciate the
            attention to detail. It's become my favorite go-to shirt."
          </p>
        </div>

        <div>
          <div className="my-5">Posted on August 18, 2023</div>
        </div>
      </div>
    </div>
  );
}
