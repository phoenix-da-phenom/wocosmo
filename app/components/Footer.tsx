import Image from "next/image";
import React from "react";
import Logo from "../assets/logo.png"

export default function Footer() {
  return (
    <div className="h-[60vh] bg-[var(--secondary-background-color)]">
      <div className="py-20">
        <Image src={Logo } alt="logo" width={250} height={209}/>

      </div>
    </div>
  );
}
