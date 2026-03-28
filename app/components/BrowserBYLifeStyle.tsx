import Image from "next/image";
import casual from "../assets/casual.png";
import Gym from "../assets/gym.png";
import Party from "../assets/party.png";
import Formal from "../assets/formal.png";

export default function BrowseByLifeStyle() {
  return (
    <div>
      <div className="container bg-[var(--secondary-background-color)] rounded-2xl p-6">
        <h1 className="font-bold text-2xl text-center py-10">
          BROWSE BY DRESS STYLE
        </h1>

        <div className="grid grid-cols-2 gap-4 max-w-[780px] mx-auto">
          {/* Left Column - 3 images (taller column) */}
          <div className="flex flex-col gap-4">
            <Image
              src={casual}
              alt="casual"
              className="w-full h-[260px] object-cover rounded-xl"
            />
            <Image
              src={Party}
              alt="party"
              className="w-full h-[260px] object-cover rounded-xl"
            />
            <Image
              src={Formal}
              alt="formal"
              className="w-full h-[260px] object-cover rounded-xl"
            />
          </div>

          {/* Right Column - 1 taller image */}
          <div>
            <Image
              src={Gym}
              alt="gym"
              className="w-full h-[800px] object-cover rounded-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
