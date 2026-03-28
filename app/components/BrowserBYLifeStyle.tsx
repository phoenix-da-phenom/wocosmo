import Image from "next/image";
import casual from "../assets/casual.png";
import Gym from "../assets/gym.png";
import Party from "../assets/party.png";
import Formal from "../assets/formal.png";

export default function BrowserBYLifeStyle() {
  return (
    <div>
      <div className="container bg-[var(--secondary-background-color)] rounded-2xl p-6">
        <h1 className="font-bold text-2xl text-center py-10">
          BROWSE BY DRESS STYLE
        </h1>

        <div className="grid grid-cols-2 gap-4">
          {/* Casual (normal) */}
          <div>
            <Image src={casual} alt="casual" className="w-full h-auto rounded-xl" />
          </div>

          {/* Gym (span 2 columns = wider) */}
          <div className="col-span-1">
            <Image src={Gym} alt="gym" className="w-full h-auto rounded-xl" />
          </div>

          {/* Party (span 2 columns) */}
          <div className="col-span-1">
            <Image src={Party} alt="party" className="w-full h-auto rounded-xl" />
          </div>

          {/* Formal (normal) */}
          <div>
            <Image src={Formal} alt="formal" className="w-full h-auto rounded-xl" />
          </div>
        </div>
      </div>
    </div>
  );
}