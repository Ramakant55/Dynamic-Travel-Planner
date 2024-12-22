import React from "react";
import SubscriptionForm from "./SubscriptionForm";

const AllTours = () => {

  return (
    <div className="font-poppins mt-[-175px] ">

      <div className="py-10 font-poppins bg-white text-gray-800 mt-16 cursor-pointer">
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-8">
          Our Featured <span className="text-orange">Tours</span>
        </h2>

        <div className="container mx-auto grid gap-4 px-4 md:grid-cols-4 grid-cols-2" >
          {/* Row 1 */}
          <div className="relative col-span-2 row-span-2 overflow-hidden group">
            <img
              src="/image/Rectangle 22@3x.png"
              alt="Dubai"
              className="w-full h-full rounded-lg transform transition-transform duration-[1000ms] ease-[cubic-bezier(0.075,0.82,0.165,1)] group-hover:scale-[1.2] group-hover:translate-y-[-5%]"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-blackOverlay rounded-lg">
              <h3 className="text-white text-2xl md:text-3xl font-semibold mb-1">Dubai</h3>
              <p className="text-white text-lg md:text-xl">UAE</p>
            </div>
          </div>

          <div className="relative col-span-2 row-span-2 overflow-hidden group">
            <img
              src="/image/Rectangle 22 (1).png"
              alt="Bali"
              className="w-full h-full rounded-lg transform transition-transform duration-[1000ms] ease-[cubic-bezier(0.075,0.82,0.165,1)] group-hover:scale-[1.2] group-hover:translate-y-[-5%]"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-blackOverlay rounded-lg">
              <h3 className="text-white text-2xl md:text-3xl font-semibold mb-1">Bali</h3>
              <p className="text-white text-lg md:text-xl">INDONESIA</p>
            </div>
          </div>

          {/* Row 2 */}
          <div className="relative col-span-1 row-span-2 overflow-hidden group">
            <img
              src="/image/Rectangle 24 (2).png"
              alt="Australia"
              className="w-full h-full rounded-lg transform transition-transform duration-[1000ms] ease-[cubic-bezier(0.075,0.82,0.165,1)] group-hover:scale-[1.2] group-hover:translate-y-[-5%]"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-blackOverlay rounded-lg">
              <h3 className="text-white text-xl md:text-2xl font-semibold mb-1">Australia</h3>
            </div>
          </div>
          <div className="relative col-span-1 row-span-2 overflow-hidden group">
            <img
              src="/image/Rectangle 24 (3).png"
              alt="Indonesia"
              className="w-full h-full rounded-lg transform transition-transform duration-[1000ms] ease-[cubic-bezier(0.075,0.82,0.165,1)] group-hover:scale-[1.2] group-hover:translate-y-[-5%]"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-blackOverlay rounded-lg">
              <h3 className="text-white text-xl md:text-2xl font-semibold mb-1">Indonesia</h3>
            </div>
          </div>
          <div className="relative row-span-2 overflow-hidden group">
            <img
              src="/image/Rectangle 24 (4).png"
              alt="China"
              className="w-full h-full rounded-lg transform transition-transform duration-[1000ms] ease-[cubic-bezier(0.075,0.82,0.165,1)] group-hover:scale-[1.2] group-hover:translate-y-[-5%]"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-blackOverlay rounded-lg">
              <h3 className="text-white text-xl md:text-2xl font-semibold mb-1">China</h3>
            </div>
          </div>
          <div className="relative col-span-1 row-span-2 overflow-hidden group">
            <img
              src="/image/taj.jpg"
              alt="Maldives"
              className="w-full h-full rounded-lg transform transition-transform duration-[1000ms] ease-[cubic-bezier(0.075,0.82,0.165,1)] group-hover:scale-[1.2] group-hover:translate-y-[-5%]"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-blackOverlay rounded-lg">
              <h3 className="text-white text-xl md:text-2xl font-semibold mb-1">India</h3>
            </div>
          </div>

          {/* Row 3 */}
          <div className="relative col-span-2  row-span-2 overflow-hidden group">
            <img
              src="/image/Rectangle 22 (2).png"
              alt="Big Ben"
              className="w-full h-full rounded-lg transform transition-transform duration-[1000ms] ease-[cubic-bezier(0.075,0.82,0.165,1)] group-hover:scale-[1.2] group-hover:translate-y-[-5%]"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-blackOverlay rounded-lg">
              <h3 className="text-white text-2xl md:text-3xl font-semibold mb-1">Big Ben</h3>
              <p className="text-white text-lg md:text-xl">LONDON</p>
            </div>
          </div>
          <div className="relative col-span-2 row-span-2 overflow-hidden group">
            <img
              src="/image/Rectangle 22 (3).png"
              alt="Paris"
              className="w-full h-full rounded-lg transform transition-transform duration-[1000ms] ease-[cubic-bezier(0.075,0.82,0.165,1)] group-hover:scale-[1.2] group-hover:translate-y-[-5%]"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-blackOverlay rounded-lg">
              <h3 className="text-white text-2xl md:text-3xl font-semibold mb-1">Paris</h3>
              <p className="text-white text-lg md:text-xl">FRANCE</p>
            </div>
          </div>

          {/* Row 4 */}
          <div className="relative col-span-1 row-span-2 overflow-hidden group">
            <img
              src="/image/Rectangle 24 (5).png"
              alt="Maldives"
              className="w-full h-full rounded-lg transform transition-transform duration-[1000ms] ease-[cubic-bezier(0.075,0.82,0.165,1)] group-hover:scale-[1.2] group-hover:translate-y-[-5%]"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-blackOverlay rounded-lg">
              <h3 className="text-white text-xl md:text-2xl font-semibold mb-1">Maldives</h3>
            </div>
          </div>
          <div className="relative col-span-1 row-span-2 overflow-hidden group">
            <img
              src="/image/Rectangle 24@2x.png"
              alt="Thailand"
              className="w-full h-full rounded-lg transform transition-transform duration-[1000ms] ease-[cubic-bezier(0.075,0.82,0.165,1)] group-hover:scale-[1.2] group-hover:translate-y-[-5%]"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-blackOverlay rounded-lg">
              <h3 className="text-white text-xl md:text-2xl font-semibold mb-1">Thailand</h3>
            </div>
          </div>
          <div className="relative col-span-1 row-span-2 overflow-hidden group">
            <img
              src="/image/Rectangle 24.png"
              alt="Philippines"
              className="w-full h-full rounded-lg transform transition-transform duration-[1000ms] ease-[cubic-bezier(0.075,0.82,0.165,1)] group-hover:scale-[1.2] group-hover:translate-y-[-5%]"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-blackOverlay rounded-lg">
              <h3 className="text-white text-xl md:text-2xl font-semibold mb-1">Philippines</h3>
            </div>
          </div>
          <div className="relative col-span-1 row-span-2 overflow-hidden group">
            <img
              src="/image/th.jpg"
              alt="Maldives"
              className="w-full h-full rounded-lg transform transition-transform duration-[1000ms] ease-[cubic-bezier(0.075,0.82,0.165,1)] group-hover:scale-[1.2] group-hover:translate-y-[-5%]"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-blackOverlay rounded-lg">
              <h3 className="text-white text-xl md:text-2xl font-semibold mb-1">Goa</h3>
            </div>
          </div>

        </div>

        <div className="text-center mt-8">
          <button className="bg-gray-800 text-white px-6 py-2 rounded-lg hover:bg-orange-500 transition duration-300 transform hover:rotate-6">
            Load More
          </button>
        </div>


      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 px-6 md:px-32 gap-6 md:gap-14 mt-8 md:mt-16 mb-8 md:mb-16">
        <div>
          <h1 className="text-2xl md:text-3xl font-semibold">
            Who <span className="text-orange-600">We Are?</span>
          </h1>
          <p className="mt-4 text-sm md:text-base leading-relaxed">
            We're all about creating unforgettable experiences for our guests. Our journey began with a simple passion for exploring the beauty of the world.
          </p>
          <h1 className="text-2xl md:text-3xl font-semibold mt-6">
            Our <span className="text-orange-600">Mission</span>
          </h1>
          <p className="mt-4 text-sm md:text-base leading-relaxed">
            We believe that travel is not just about visiting new places, but about immersing yourself in new cultures, connecting with nature, and making memories that last a lifetime.
          </p>
        </div>
        <div className="flex justify-center">
          <img src="/image/Rectangle 24.png" alt="" className="w-[300px] h-[200px] md:w-[400px] md:h-[270px] object-cover" />
        </div>
      </div>
      <SubscriptionForm/>
    </div>
  );
};

export default AllTours;
