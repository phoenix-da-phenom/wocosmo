"use client";
import CountUp from "react-countup";

export default function CompanyScore() {
  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        
        {/* Grid Layout */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-center">
          
          {/* Item 1 */}
          <div>
            <h1 className="font-bold text-2xl">
              <CountUp end={200} duration={2.5} separator="," suffix="+" enableScrollSpy />
            </h1>
            <p className="text-gray-600">International Brands</p>
          </div>

          {/* Item 2 */}
          <div className="md:border-l md:border-r border-gray-300">
            <h1 className="font-bold text-2xl">
              <CountUp end={3500} duration={2.5} separator="," suffix="+" enableScrollSpy />
            </h1>
            <p className="text-gray-600">Happy Customers</p>
          </div>

          {/* Item 3 */}
          <div className="col-span-2 md:col-span-1">
            <h1 className="font-bold text-2xl">
              <CountUp end={200} duration={2.5} separator="," suffix="+" enableScrollSpy />
            </h1>
            <p className="text-gray-600">Worldwide Stores</p>
          </div>

        </div>

      </div>
    </div>
  );
}