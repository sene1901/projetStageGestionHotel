import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header"
import HotelCard from "../components/HotelCard";

const hotels = [
  {
    nom: "Hôtel Terrou-Bi",
    address: "Boulevard Martin Luther King, Dakar",
    prix: "25.000",
    image: "https://source.unsplash.com/400x300/?hotel,luxury",
  },
  {
    nom: "King Fahd Palace",
    address: "Rte des Almadies, Dakar",
    prix: "20.000",
    image: "https://source.unsplash.com/400x300/?resort",
  },
  {
    nom: "Radisson Blu Hotel",
    address: "Route de la Corniche, Dakar",
    prix: "22.000",
    image: "https://source.unsplash.com/400x300/?hotel,modern",
  },
  {
    nom: "Pullman Dakar Teranga",
    address: "Place de l’Indépendance",
    prix: "30.000",
    image: "https://source.unsplash.com/400x300/?hotel,pool",
  },
];

const HotelList = () => {
  return (
    <div classnom="flex bg-gray-100 min-h-screen">
      
      <Sidebar />

      <div classnom="flex-1">
        <Header />

        <div classnom="p-6">
          
          <div classnom="flex justify-between items-center mb-6">
            <h2 classnom="font-semibold text-gray-700">
              Hôtels <span classnom="text-gray-400">8</span>
            </h2>

            <button classnom="bg-white border px-4 py-2 rounded text-sm hover:bg-gray-50">
              + Créer un nouveau hôtel
            </button>
          </div>

          {/* Grid */}
          <div classnom="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {hotels.map((hotel, index) => (
              <HotelCard key={index} {...hotel} />
            ))}
          </div>

        </div>
      </div>

    </div>
  );
};

export default HotelList;
