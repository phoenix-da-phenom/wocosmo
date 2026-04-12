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
  let textColor = "";
  if (color === "black") {
    textColor = "text-white";
  } else {
    textColor = "text-black";
  }
  return (
    <div
      className={`flex items-center justify-center py-2 px-4 ${textColor} ${colorMap[color]} w-25 rounded-full`}
    >
      {text}
    </div>
  );
}
