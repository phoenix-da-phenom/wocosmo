import React from "react";
import { sizeBadgeProps } from "@/utils/AppType";

const colorMap: Record<string, string> = {
  blue: "bg-blue-400",
  yellow: "bg-yellow-400",
  green: "bg-green-400",
  red: "bg-red-400",
  gray: "bg-gray-400",
  black: "bg-black",
};

export default function SizeBadge({ text, color }: sizeBadgeProps) {
  const textColor = color === "black" ? "text-white" : "text-black";

  return (
    <div
      className={`
        flex items-center justify-center rounded-full
        ${textColor} ${colorMap[color]}
        
        /* Mobile (default) */
        text-xs py-1 px-3 min-w-[50px]
        
        /* Small screens and up */
        sm:text-sm sm:py-2 sm:px-4 sm:min-w-[70px]
        
        /* Larger screens */
        md:text-base md:px-5 md:min-w-[90px]
      `}
    >
      {text}
    </div>
  );
}