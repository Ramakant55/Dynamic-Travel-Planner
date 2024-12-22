import React from "react";

const PromoSection = () => {
  return (
    <section className="bg-blue-50 py-10 md:mt-40">
      <div className="container mx-auto px-6 lg:px-20 flex flex-col-reverse lg:flex-row items-center">
        <div className="lg:w-1/2 w-full text-center lg:text-left mt-10 lg:mt-0">
          <h2 className="text-3xl font-bold text-gray-800">
            Plan on the go with our new <span className="text-blue-600">free
               Travel app</span>
          </h2>
          <div className="flex justify-center lg:justify-start space-x-4 my-6">
            <img
              src="https://wanderlog.com/assets/AppBadge__ios.png"
              alt="Download on the App Store"
              className="h-8 cursor-pointer"
            />
            <img
              src="https://wanderlog.com/assets/AppBadge__android.png"
              alt="Get it on Google Play"
              className="h-8 cursor-pointer"
            />
          </div>
          <div className="flex justify-center lg:justify-start mt-2 text-gray-900">
            {Array(5)
              .fill()
              .map((_, i) => (
                <span key={i} className="text-xl">★</span>
              ))}
          </div>
          <p className="text-gray-600 text-sm">4.9 on App Store, 4.7 on Google Play</p>
        </div>

        <div className="hidden md:block w-full">
          <div className="relative -mt-[257px] md:ml-72">
            <img
              src="https://wanderlog.com/assets/LandingPageGetAppPromo__app.png"
              alt="Mobile App Screen 1"
              className="absolute left-0 h-[400px]"
            />
          
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoSection;
