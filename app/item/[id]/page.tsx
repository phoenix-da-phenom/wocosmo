import BlackBanner from "@/components/BlackBanner";
import Breadcrums from "@/components/Breadcrums";
import ClothDetail from "@/components/ClothDetail";
import Navbar from "@/components/Navbar";
import React from "react";

export default function page({ params }: { params: { id: string } }) {
  return (
    <>
    <div>{params.id}</div>
      <BlackBanner />
      <Navbar />
      <Breadcrums/>

      <div>
        <ClothDetail/>

      </div>

    </>
  );
}
