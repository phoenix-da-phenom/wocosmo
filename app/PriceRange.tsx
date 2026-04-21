"use client";
import React, { useState } from "react";

export default function PriceRange() {
  const [min, setMin] = useState(100);
  const [max, setMax] = useState(900);

  const MIN_GAP = 10;

  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.min(Number(e.target.value), max - MIN_GAP);
    setMin(value);
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(Number(e.target.value), min + MIN_GAP);
    setMax(value);
  };

  return (
    <div className="w-full lg:max-w-md">
      <h1 className="font-bold text-2xl mb-4">Price</h1>

      {/* Values */}
      <div className="flex justify-between mb-2 text-sm">
        <span>${min}</span>
        <span>${max}</span>
      </div>

      <div className="relative h-6">
        {/* Track */}
        <div className="absolute top-2 w-full h-2 bg-gray-300 rounded-full" />

        {/* Active Range */}
        <div
          className="absolute top-2 h-2 bg-black rounded-full"
          style={{
            left: `${(min / 1000) * 100}%`,
            right: `${100 - (max / 1000) * 100}%`,
          }}
        />

        {/* Min Slider */}
        <input
          type="range"
          min="0"
          max="1000"
          value={min}
          onChange={handleMinChange}
          className="absolute w-full h-6 bg-transparent appearance-none z-20"
        />

        {/* Max Slider */}
        <input
          type="range"
          min="0"
          max="1000"
          value={max}
          onChange={handleMaxChange}
          className="absolute w-full h-6 bg-transparent appearance-none z-30"
        />
      </div>
    
    </div>
  );
}