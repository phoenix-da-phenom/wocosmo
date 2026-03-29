import Image from "next/image";
import React from "react";
import Logo from "../app/assets/logo.png";

export default function Footer() {
  return (
    <footer className="bg-[var(--secondary-background-color)] py-16">
      <div className="container mx-auto px-4">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Logo + Description */}
          <div className="lg:col-span-2">
            <Image src={Logo} alt="logo" width={180} height={150} />
            <p className="mt-5 text-sm text-gray-600 max-w-sm">
              We have clothes that suits your style and which you’re proud to
              wear. From women to men.
            </p>
          </div>

          {/* COMPANY */}
          <div>
            <h2 className="font-bold mb-4">COMPANY</h2>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>About</li>
              <li>Features</li>
              <li>Works</li>
              <li>Career</li>
            </ul>
          </div>

          {/* HELP */}
          <div>
            <h2 className="font-bold mb-4">HELP</h2>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Customer Support</li>
              <li>Delivery Details</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          {/* FAQ */}
          <div>
            <h2 className="font-bold mb-4">FAQ</h2>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Account</li>
              <li>Manage Deliveries</li>
              <li>Orders</li>
              <li>Payments</li>
            </ul>
          </div>

          {/* RESOURCES */}
          <div>
            <h2 className="font-bold mb-4">RESOURCES</h2>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Free eBooks</li>
              <li>Development Tutorial</li>
              <li>How to Blog</li>
              <li>YouTube Playlist</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t mt-12 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Wocosmo — All rights reserved.
        </div>

      </div>
    </footer>
  );
}