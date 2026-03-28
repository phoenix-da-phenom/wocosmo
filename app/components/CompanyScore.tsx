"use client"
import CountUp from "react-countup";
export default function CompanyScore() {
  return (
    <div className="py-5 mt-3">
      <div className="container flex ">
        <div className="pr-5">
          <h1 className="font-bold text-2xl">
            <CountUp end={200} duration={2} separator="," suffix="+" />
          </h1>
          <p className="text-gray-600">International Brands</p>
        </div>
        <div className="border-l  border-r border-gray-500 px-10">
          <h1 className="font-bold text-2xl">
            <CountUp end={3500} duration={2} separator="," suffix="+" />
          </h1>

          <p className="text-gray-600">International Brands</p>
        </div>
        <div className="px-5">
          <h1 className="font-bold text-2xl">
            <CountUp end={200} duration={2} separator="," suffix="+" />
          </h1>
          <p className="text-gray-600">International Brands</p>
        </div>
      </div>
    </div>
  );
}
