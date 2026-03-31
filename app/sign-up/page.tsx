"use client";
import BlackBanner from "@/components/BlackBanner";
import Navbar from "@/components/Navbar";
import { useEffect, useState } from "react";
import Image from "next/image";
import { FcGoogle } from "react-icons/fc";

const images = [
  "/images/signup1.webp",
  "/images/signup2.webp",
  "/images/signup3.webp",
];

export default function page() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <BlackBanner />
      <Navbar />
      <div className="min-h-screen flex flex-col md:flex-row">
        {/* LEFT SIDE (IMAGE SLIDER) */}
        <div className="relative w-full md:w-1/2 h-64 md:h-auto overflow-hidden">
          {images.map((img, index) => (
            <Image
              key={index}
              src={img}
              alt="signup visual"
              fill
              className={`object-cover transition-opacity duration-1000 ${
                index === current ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}

          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <h1 className="text-white text-2xl md:text-4xl font-bold text-center px-4">
              Find What You Love & Buy It Today
            </h1>
          </div>
        </div>

        {/* RIGHT SIDE (FORM) */}
        <div className="w-full md:w-1/2 flex items-center justify-center p-6 md:p-12">
          <div className="w-full max-w-md">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
              Create an Account
            </h2>

            {/* Google Sign In */}
            <button className="w-full flex items-center justify-center gap-3 border border-gray-300 rounded-lg py-3 mb-6 hover:bg-gray-100 transition">
              <FcGoogle size={22} />
              <span className="font-medium">Sign up with Google</span>
            </button>

            <div className="flex items-center gap-2 mb-6">
              <div className="flex-1 h-px bg-gray-300" />
              <span className="text-sm text-gray-500">OR</span>
              <div className="flex-1 h-px bg-gray-300" />
            </div>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
              />

              <input
                type="password"
                placeholder="Password"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
              />

              <button
                type="submit"
                className="w-full bg-black text-white rounded-lg py-3 font-semibold hover:opacity-90 transition"
              >
                Sign Up
              </button>
            </form>

            <p className="text-sm text-center mt-6 text-gray-600">
              Already have an account?{" "}
              <span className="font-medium cursor-pointer">Sign in</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
