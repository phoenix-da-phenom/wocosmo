import React from "react";
import Stars from "../app/assets/statrs.png";
import Image from "next/image";
import { IoIosCheckmarkCircle } from "react-icons/io";

const data = [
  {
    customerName: "Sarah M",
    review:
      "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
  },
  {
    customerName: "Sarah M",
    review:
      "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
  },
  {
    customerName: "Sarah M",
    review:
      "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
  },
  {
    customerName: "Sarah M",
    review:
      "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
  },
];
export default function HappyCustomers() {
  return (
    <div className="mb-20 ">
      <div className="container flex gap-3 ">
        {
          data.map((item, index)=>(
            <div key={index} className="flex border border-gray-300 rounded-2xl p-5">
            <div> 
              <div>
                <Image src={Stars} alt="" />
              </div>
              <div className="flex gap-3 items-center">
                {item.customerName}
                <IoIosCheckmarkCircle color="green" size="34" />
              </div>

              <div>
                <p className="w-100 text-justify">
                  {item.review}
                </p>
              </div>
            </div>
          </div>
          ))



        }




      </div>
      


        
      </div>
  
  );
}
