import React from "react";
import HotelCard from "../components/HotelCard";
import terroubi from "../assets/images/téléchargement.jfif";
import kingfahd from "../assets/images/téléchargement.jfif";
import radisson from "../assets/images/téléchargement.jfif";
import pullman from "../assets/images/téléchargement.jfif";
import lacrose from "../assets/images/téléchargement.jfif";
import saly from "../assets/images/téléchargement.jfif";
import palmbeach from "../assets/images/téléchargement.jfif";
import place from "../assets/images/téléchargement.jfif";
const hotels = [
  {
   
    address: "Boulevard Martin Luther King, Dakar",
     nom: "Hôtel Terrou-Bi",
    prix: "25.000",
    image: terroubi,
  },
  {
   
    address: "Rte des Almadies, Dakar",
     nom: "King Fahd Palace",
    prix: "20.000",
    image: kingfahd,
  },
  {
    
    address: "Route de la Corniche, Dakar",
    nom: "Radisson Blu Hotel",
    prix: "22.000",
    image: radisson,
  },
  {
   
    address: "Place de l’Indépendance",
     nom: "Pullman Dakar Teranga",
    prix: "30.000",
    image: pullman,
  },
  {
    nom: "Hôtel Lac Rose",
    address: "Lac Rose, Dakar",
    prix: "25.000",
    image: lacrose,
  },
  {
   
    address: "Mbour, Sénégal",
     nom: "Hôtel Saly",
    prix: "20.000",
    image: saly,
  },
  {
    
    address: "BP64, Saly 23000",
    nom: "Palm Beach Resort & Spa",
    prix: "22.000",
    image: palmbeach,
  },
  {
  
    address: "Place de l’Indépendance, Dakar",
    nom: "Pullman Dakar Teranga",
    prix: "30.000",
    image: place,
  },
];

const HotelList = () => {
  return (
    <div className="flex  min-h-screen">
      
    

      <div className="flex-1">
        

        {/* Content */}
        <div className="mt-0">
          <div className="flex justify-between items-center mb-4  bg-white px-6 py-6 ">
            <h2 className="font-semibold text-gray-700">
              Hôtels <span className="text-gray-400">{hotels.length}</span>
            </h2>

            <button className="bg-white border px-4 py-2 rounded text-sm hover:bg-gray-50">
              + Créer un nouveau hôtel
            </button>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6  px-5 justify-items-center">
            {hotels.map((hotel, index) => (
              <HotelCard
                key={index}
                image={hotel.image}
                address={hotel.address}
                nom={hotel.nom}
                prix={hotel.prix}
              />
            ))}
          </div>
        </div>
      </div>

    </div>
  );
};

export default HotelList;
