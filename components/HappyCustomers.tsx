"use client";

import React from "react";
import Stars from "../app/assets/statrs.png";
import Image from "next/image";
import { IoIosCheckmarkCircle } from "react-icons/io";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const data = [
  {
    customerName: "Sarah M",
    review:
      "I'm blown away by the quality and style of the clothes I ...",
  },
  {
    customerName: "John D",
    review:
      "Amazing experience! The fit and quality are just perfect...",
  },
  {
    customerName: "Emma L",
    review:
      "Highly recommend! Everything feels premium and stylish...",
  },
  {
    customerName: "Mike R",
    review:
      "Customer service and delivery were top-notch!",
  },
];

export default function HappyCustomers() {
  return (
    <div className="mb-20">
      <div className="container">
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {data.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="border border-gray-300 rounded-2xl p-5 h-full">
                <Image src={Stars} alt="stars" />

                <div className="flex gap-2 items-center mt-2">
                  <span className="font-semibold">{item.customerName}</span>
                  <IoIosCheckmarkCircle color="green" size="20" />
                </div>

                <p className="mt-3 text-sm text-gray-600">
                  {item.review}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}