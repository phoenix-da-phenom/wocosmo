export default function NewsLetter() {
  return (
    <div className="px-4 sm:px-6 lg:px-0 py-10">
      
      <div className="container mx-auto">
        
        {/* Card */}
        <div className="bg-black text-white rounded-3xl p-6 sm:p-10">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">

            {/* LEFT TEXT */}
            <div>
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold">
                STAY UP TO DATE ABOUT OUR LATEST OFFERS
              </h1>
            </div>

            {/* RIGHT INPUT + BUTTON */}
            <div className="flex flex-col gap-3">

              <input
                type="email"
                placeholder="Enter your email"
                name="newsletter"
                className="w-full px-4 py-3 rounded-2xl text-gray-700 bg-white focus:outline-none"
              />

              <button className="w-full px-4 py-3 rounded-2xl bg-white text-black font-semibold hover:bg-gray-200 transition">
                Subscribe to Newsletter
              </button>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}