import React from 'react';

const FeaturesSection = () => {
  return (
    <div className="md:py-16 py-6 md:px-8">
      <h2 className="md:text-3xl text-xl p-5 font-bold text-center text-gray-800 mb-12">
        Features to replace all your other tools
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
        {/* Feature 1 */}
        <div className="text-center w-60  md:p-0 p-6">
          <img src="https://wanderlog.com/assets/MainFeatureTiles__addPlaces.png" alt="Add places" className="mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Add places from guides with 1 click</h3>
          <p className="text-gray-600">
            We crawled the web so you don’t have to. Easily save mentioned places.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="text-center w-60">
          <img src="https://wanderlog.com/assets/MainFeatureTiles__collaborate.png" alt="Collaborate with friends" className="mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Collaborate with friends in real time</h3>
          <p className="text-gray-600">
            Plan along with your friends with live syncing and collaborative editing.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="text-center w-60">
          <img src="https://wanderlog.com/assets/MainFeatureTiles__import.png" alt="Import flight and hotel reservations" className="mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Import flight and hotel reservations</h3>
          <p className="text-gray-600">
            Connect or forward your emails to get them magically added into your trip plan.
          </p>
        </div>

        {/* Feature 4 */}
        <div className="text-center w-60">
          <img src="https://wanderlog.com/assets/MainFeatureTiles__budget.png" alt="Expense tracking" className="mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Expense tracking and splitting</h3>
          <p className="text-gray-600">
            Keep track of your budget and split the cost between your tripmates.
          </p>
        </div>

        {/* Feature 5 */}
        <div className="text-center w-60">
          <img src="https://wanderlog.com/assets/MainFeatureTiles__checklist.png" alt="Checklists" className="mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Checklists for anything</h3>
          <p className="text-gray-600">
            Stay organized with a packing list, to-do list, shopping list, any kind of list.
          </p>
        </div>

        {/* Feature 6 */}
        <div className="text-center w-60">
          <img src="https://wanderlog.com/assets/MainFeatureTiles__recommendations.png" alt="Personalized suggestions" className="mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Get personalized suggestions</h3>
          <p className="text-gray-600">
            Find the best places to visit with smart recommendations based on your itinerary.
          </p>
        </div>
      </div>


      {/* Plan like a Pro Section */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-5">
          Plan like a Pro
          <p className='text-xl md:w-[50%] w-80 mt-5 p-3 md:ml-96 mx-auto'>Unlock premium features like offline access, unlimited attachments, flight deals, export to Google maps, and <a href='#' className='underline text-blue-500'>much more</a> </p>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
          {/* Pro Feature 1 */}
          <div className="text-center w-60">
            <img src="https://wanderlog.com/assets/LandingPageProFeatureTiles__offline.png" alt="Offline access" className="mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Offline access</h3>
            <p className="text-gray-600">
              No wifi, no problem. Your trip plans are locally downloaded for access anywhere.
            </p>
          </div>

          {/* Pro Feature 2 */}
          <div className="text-center w-60">
            <img src="https://wanderlog.com/assets/LandingPageProFeatureTiles__attachments.png" alt="Unlimited attachments" className="mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Unlimited attachments</h3>
            <p className="text-gray-600">
              Never dig through your emails again — access all your trip files and PDFs in one place.
            </p>
          </div>

          {/* Pro Feature 3 */}
          <div className="text-center w-60">
            <img src="https://wanderlog.com/assets/LandingPageProFeatureTiles__optimize.png" alt="Optimize your route" className="mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Optimize your route</h3>
            <p className="text-gray-600">
              Perfect for road trips and saving $$$ on gas! Get the best route auto-rearranged.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
