import React, { useRef } from "react";

const Try = () => {
  const destinationsData = [
    { title: "Paris", description: "The City of Light", image: "https://media.gettyimages.com/id/2159827892/photo/paris-france-a-general-view-of-the-eiffel-tower-at-night-as-the-olympic-rings-are-displayed.jpg?s=612x612&w=0&k=20&c=KdKoLOYqHAjMGZGJ4joPoT4J29K_EIHL7wNDp1Z6_2Y=" },
    { title: "New York", description: "The Big Apple", image: "https://th.bing.com/th/id/OIP.is4XIcvPx2bJp_H4PiBevgHaE8?rs=1&pid=ImgDetMain" },
    { title: "Tokyo", description: "Land of the Rising Sun", image: "https://extraordinary-flan-3a886a.netlify.app/static/media/Tokyo.007e6059470eacded64c.png" },
    { title: "Sydney", description: "Harbor City", image: "https://wallpapercave.com/wp/76YMeDJ.jpg" },
  ];

  // Create refs for each card
  const cardRefs = useRef([]);

  const handleMouseMove = (e, index) => {
    const card = cardRefs.current[index];
    if (!card) return;

    const { left, top, width, height } = card.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;

    const rotateX = ((y / height - 12.5) * 15).toFixed(2); // Tilt effect on X-axis
    const rotateY = ((x / width - 12) * -15).toFixed(2); // Tilt effect on Y-axis

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseLeave = (index) => {
    const card = cardRefs.current[index];
    if (!card) return;

    // Reset transform to its original state
    card.style.transform = "";
  };

  return (
    <div className="md:mt-0 mt-[40rem]">
      {/* Top Destination Section */}
      <section className="tours_section p-5">
        <div className="container mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800">
              Top Destination For Your Next Vacation
            </h1>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {destinationsData.map((destination, index) => (
              <div
                key={index}
                ref={(el) => (cardRefs.current[index] = el)}
                className="p-4 bg-white shadow-black shadow-md rounded transition-transform duration-300 ease-in-out"
                onMouseMove={(e) => handleMouseMove(e, index)}
                onMouseLeave={() => handleMouseLeave(index)}
              >
                <img
                  src={destination.image}
                  alt={destination.title}
                  className="w-full h-40 object-cover rounded"
                />
                <h3 className="text-lg font-bold mt-4">{destination.title}</h3>
                <p className="text-sm text-gray-600">{destination.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="gallery py-10">
        <div className="container mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800">Photo Gallery</h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-5">
            {[
              "https://th.bing.com/th/id/OIP.aVtfigX2nC5O2Q5b63VfTQHaEo?rs=1&pid=ImgDetMain",
              "https://th.bing.com/th/id/OIP.D77CGBp3xQG_UV9uzOC_2AHaE8?w=1000&h=667&rs=1&pid=ImgDetMain",
              "https://images.pexels.com/photos/3968151/pexels-photo-3968151.jpeg?auto=compress&cs=tinysrgb&w=600",
              "https://images.pexels.com/photos/307006/pexels-photo-307006.jpeg?auto=compress&cs=tinysrgb&w=600",
              "https://images.pexels.com/photos/28717306/pexels-photo-28717306/free-photo-of-adventurous-woman-standing-on-rocky-cliff-edge.jpeg?auto=compress&cs=tinysrgb&w=600",
              "https://images.pexels.com/photos/29842537/pexels-photo-29842537/free-photo-of-girl-hugging-samoyed-dog-in-snowy-forest.jpeg?auto=compress&cs=tinysrgb&w=600",
              "https://images.pexels.com/photos/13331777/pexels-photo-13331777.jpeg?auto=compress&cs=tinysrgb&w=600",
              "https://images.pexels.com/photos/287240/pexels-photo-287240.jpeg?auto=compress&cs=tinysrgb&w=600",
            ].map((image, idx) => (
              <div
                key={idx}
                ref={(el) => (cardRefs.current[idx + destinationsData.length] = el)}
                className="relative group rounded overflow-hidden transition-transform duration-300 ease-in-out"
                onMouseMove={(e) => handleMouseMove(e, idx + destinationsData.length)}
                onMouseLeave={() => handleMouseLeave(idx + destinationsData.length)}
              >
                <img
                  className="relative z-10 h-56 w-full object-cover"
                  src={image}
                  alt={`Gallery ${idx}`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Try;