import BlackBanner from "@/components/BlackBanner";
import Breadcrums from "@/components/Breadcrums";
import ClothDetail from "@/components/ClothDetail";

import Navbar from "@/components/Navbar";
import React from "react";
import ProductTabs from "@/components/ProductTab";
import ThingsYouMayLike from "@/components/ThingsYouMayLike";
import NewsLetter from "@/components/NewsLetter";
import Footer from "@/components/Footer";

export default function Page({ params }: { params: { id: string } }) {
  return (
    <>
      
      <BlackBanner />
      <Navbar />
      <Breadcrums crums={["Home", "Clothes"]} />

      <div>
        <ClothDetail />
        <ProductTabs />
      </div>
      <div className="container">
        <h1 className="text-2xl md:text-4xl break-words my-5 pb-5 font-bold text-center">
          You might also like
        </h1>
        <ThingsYouMayLike />
        <NewsLetter />
      </div>
      <Footer />
    </>
  );
}
