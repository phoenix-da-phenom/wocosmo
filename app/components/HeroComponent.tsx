import Image from "next/image";
import CompanyScore from "./CompanyScore";
import Pic from "../assets/Rectangle 2.png";

export default function HeroComponent() {
  return (
    <div className="bg-[var(--secondary-background-color)] py-15">
      <div className="container">
        <div className="flex">
          <div>
            <div>
              <h1 className="font-bold text-5xl">
                FIND CLOTHES <br /> THAT MATCHES <br />
                YOR STYLE
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
          <div>
            <Image src={Pic} width={100} height={45} alt="AD IMAGE" />
          </div>
        </div>
      </div>
    </div>
  );
}
