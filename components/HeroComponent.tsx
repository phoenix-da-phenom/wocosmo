import Image from "next/image";
import CompanyScore from "./CompanyScore";
import Pic from "../app/assets/Rectangle 2.png"; 



export default function HeroComponent() {
  return (
    <div className="bg-[var(--secondary-background-color)] pt-15 ">
      <div className="container min-h-[300px] relative">
        <div className="flex h-full items-center">
          {" "}
          {/* Better flex alignment */}
          <div className="flex-1 z-10">
            {" "}
         
            <div>
              <h1 className="font-bold text-5xl">
                FIND CLOTHES <br /> THAT MATCHES <br />
                YOUR STYLE
              </h1>
            </div>
            <div className="py-5">
              <p className="text-[var(--text-small)] w-90 text-justify">
                Browse through our diverse range of meticulously crafted
                garments, designed to bring out your individuality and cater to
                your sense of style.
              </p>
            </div>
            <div>
              <button className="pl-6 pr-8 py-2 bg-black text-white rounded-3xl">
                Shop Now
              </button>
            </div>
            <CompanyScore />
          </div>
          {/* Right side image - consider increasing size or using fill */}
          <div className="flex-1 relative h-[500px] ">
            {" "}
            {/* Adjust height as needed */}
            <Image
              src={Pic}
              alt="Hero fashion image"
              fill
              className="object-cover border-7 "
              priority // Good for hero images
            />
          </div>
        </div>
      </div>
    </div>
  );
}
