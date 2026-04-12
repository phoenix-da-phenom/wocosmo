"use client";

import { useState } from "react";
import TestimonialRating from "./TestimonialRating";
import CustomButton from "./CustomButton";

type TabId = "details" | "reviews" | "faqs";

interface Tab {
  id: TabId;
  label: string;
}

const tabs: Tab[] = [
  { id: "details", label: "Product Details" },
  { id: "reviews", label: "Ratings & Reviews" },
  { id: "faqs", label: "FAQs" },
];

export default function ProductTabs() {
  const [activeTab, setActiveTab] = useState<TabId>("details");

  const renderContent = () => {
    switch (activeTab) {
      case "details":
        return (
          <div className="p-4 text-gray-600">
            <h2 className="text-lg font-semibold mb-2">Product Details</h2>
            <p>
              This is a premium product made with high-quality materials. It is
              designed for durability, comfort, and modern style.
            </p>
          </div>
        );

      case "reviews":
        return (
          <div className="p-4 text-gray-600">
            <h2 className="text-lg font-semibold mb-2">
              All Reviews <span className="text-sm">(451)</span>
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 p-4 gap-5">
              <TestimonialRating />
              <TestimonialRating />
              <TestimonialRating />
              <TestimonialRating />
            </div>
          </div>
        );

      case "faqs":
        return (
          <div className="p-4 text-gray-600">
            <h2 className="text-lg font-semibold mb-2">FAQs</h2>
            <p>Q: Is this product durable?</p>
            <p>A: Yes, it is built for long-term use.</p>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="w-full  rounded-lg">
      {/* Tabs Header */}
      <div className="flex border-b border-b-gray-200 justify-center">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-3 text-sm font-medium transition-all
              ${
                activeTab === tab.id
                  ? "border-b-2 border-black text-black"
                  : "text-gray-500 hover:text-black"
              }
            `}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tabs Content */}
      <div className="container">{renderContent()}</div>
      <div className="my-5 flex justify-center">
        <CustomButton text="Load More Reviews"/>
       
      </div>
    </div>
  );
}
