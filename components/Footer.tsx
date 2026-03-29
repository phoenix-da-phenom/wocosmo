import Image from "next/image";
import React from "react";
import Logo from "../app/assets/logo.png";

export default function Footer() {
  return (
    <div className=" h-full bg-[var(--secondary-background-color)]">
      <div>
        <div className="pt-20">
          <Image src={Logo} alt="logo" width={250} height={209} />
        </div>
        <div className="flex">
          <div className="container">
            <p className="w-50 py-5">
              We have clothes that suits your style and which you’re proud to
              wear. From women to men.
            </p>
           
          </div>

          <div>
             <h2 className="font-bold">COMPANY</h2>
            <ul>
              <li>About </li>
              <li>Features</li>
              <li>Works</li>
              <li>Career</li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold">HELP</h2>
            <ul>
              <li>Customer Support</li>
              <li>Delivery Details</li>
              <li>  Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold">FAQ</h2>
            <ul>
              <li>Account</li>
              <li>Manage Deliveries</li>
              <li>Orders</li>
              <li>Payments</li>
            </ul>
          </div>
          <div>
            <h2>RESOURCES</h2>
            <ul>
              <li>Free eBooks</li>
              <li>Development Tutorial</li>
              <li>How to Blog</li>
              <li>Youtube Playlist</li>
            </ul>


          </div>



        </div>
      </div>
    </div>
  );
}
