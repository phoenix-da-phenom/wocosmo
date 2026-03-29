import Image from "next/image";
import CompanyScore from "./CompanyScore";
import Pic from "../app/assets/Rectangle 2.png";

export default function HeroComponent() {
  return (
    <div className="bg-[var(--secondary-background-color)] pt-10">
      <div className="container mx-auto px-4">

        {/* Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10">

          {/* LEFT SIDE */}
          <div className="z-10">

            <h1 className="font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight">
              FIND CLOTHES <br />
              THAT MATCHES <br />
              YOUR STYLE
            </h1>

            <p className="text-[var(--text-small)] mt-5 text-sm sm:text-base max-w-md">
              Browse through our diverse range of meticulously crafted garments,
              designed to bring out your individuality and cater to your sense of style.
            </p>

            <button className="mt-6 px-6 py-3 bg-black text-white rounded-3xl hover:opacity-90 transition">
              Shop Now
            </button>

            {/* Stats */}
            <div className="mt-8">
              <CompanyScore />
            </div>

          </div>

          {/* RIGHT SIDE IMAGE */}
          <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px]">
            <Image
              src={Pic}
              alt="Hero fashion image"
              fill
              priority
              className="object-cover rounded-xl"
            />
          </div>

        </div>

      </div>
    </div>
  );
}