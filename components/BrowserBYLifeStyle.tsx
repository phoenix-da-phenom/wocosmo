import Image from "next/image";
import casual from "../app/assets/casual.png";
import Gym from "../app/assets/gym.png";
import Party from "../app/assets/party.png";
import Formal from "../app/assets/formal.png";

export default function BrowseByLifeStyle() {
  return (
    <div className="pb-20">
      <div className="container mx-auto px-4 bg-[var(--secondary-background-color)] rounded-2xl p-6">

        {/* Title */}
        <h1 className="font-extrabold text-xl sm:text-2xl text-center py-8 sm:py-10">
          BROWSE BY DRESS STYLE
        </h1>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto">

          {/* LEFT COLUMN */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-4">

            {/* Casual */}
            <div className="relative overflow-hidden rounded-xl">
              <p className="text-xl sm:text-2xl font-extrabold absolute top-4 left-4 z-10 text-white">
                Casual
              </p>
              <Image
                src={casual}
                alt="casual"
                className="w-full h-[180px] sm:h-[220px] md:h-[260px] object-cover"
              />
            </div>

            {/* Party */}
            <div className="relative overflow-hidden rounded-xl">
              <p className="text-xl sm:text-2xl font-extrabold absolute top-4 left-4 z-10 text-white">
                Party
              </p>
              <Image
                src={Party}
                alt="party"
                className="w-full h-[180px] sm:h-[220px] md:h-[260px] object-cover"
              />
            </div>

            {/* Formal */}
            <div className="relative overflow-hidden rounded-xl">
              <p className="text-xl sm:text-2xl font-extrabold absolute top-4 left-4 z-10 text-white">
                Formal
              </p>
              <Image
                src={Formal}
                alt="formal"
                className="w-full h-[180px] sm:h-[220px] md:h-[260px] object-cover"
              />
            </div>

          </div>

          {/* RIGHT COLUMN */}
          <div className="relative overflow-hidden rounded-xl">
            <p className="text-xl sm:text-2xl font-extrabold absolute top-4 left-4 z-10 text-white">
              Gym
            </p>

            <Image
              src={Gym}
              alt="gym"
              className="w-full h-[250px] sm:h-[350px] md:h-full object-cover"
            />
          </div>

        </div>

      </div>
    </div>
  );
}