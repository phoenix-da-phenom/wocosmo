export default function NewsLetter() {
  return (
    <div className="relative">


    <div className="absolute -top-15 right-35">
      <div className="flex justify-center">
        <div className="bg-black flex flex-col gap-2 text-white py-10 w-[1200px] rounded-3xl">
          <div className=" container flex justify-around">
            <h1 className="text-2xl font-bold">STAY UP TO DATE ABOUT </h1>
            <input
              type="text"
              placeholder="Enter your email"
              name="newsletter"
              className="-ml-10 text-gray-700 bg-[var(--secondary-background-color)]  w-full)] px-3 py-1 rounded-2xl"
            />
          </div>

          <div className="container flex justify-around gap-3">
            <h1 className="text-2xl font-bold">OUR LATEST OFFERS</h1>
            <button className="text-gray-700 bg-[var(--secondary-background-color)] w-[full])] px-3 py-1 rounded-2xl cursor-pointer">Subscribe to Newsletter</button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
