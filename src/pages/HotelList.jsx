import React, { useEffect, useState } from "react";
import HotelCard from "../components/HotelCard";
import AjoutHotelModal from "../components/AjoutModalHotel";
import { getHotels, deleteHotel } from "../api/api";

const HotelList = () => {
  const [hotels, setHotels] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  
  const fetchHotels = async () => {
    try {
      const response = await getHotels();
      setHotels(response.data);
    } catch (error) {
      console.error("Erreur chargement hôtels:", error);
    }
  };

  useEffect(() => {
    fetchHotels();
  }, []);

  const handleDelete = async (id) => {
    if (!confirm("Supprimer cet hôtel ?")) return;

    try {
      await deleteHotel(id);
      fetchHotels(); // recharge la liste après suppression
    } catch (error) {
      console.error("Erreur suppression:", error);
    }
  };

  return (
    <div className="flex min-h-screen">
      <div className="flex-1">
        {/* Content */}
        <div className="mt-0">
          <div className="flex justify-between items-center mb-4 bg-white px-6 py-6">
            <h2 className="font-semibold text-gray-700">
              Hôtels <span className="text-gray-400">{hotels.length}</span>
            </h2>

            <button
              onClick={() => setOpenModal(true)}
              className="bg-white text-gray-800 px-4 py-2 rounded-md border"
            >
              Créer un nouveau Hotel
            </button>

            {openModal && (
              <AjoutHotelModal
                onClose={() => setOpenModal(false)}
                onSuccess={fetchHotels} // recharge après ajout
              />
            )}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-5 justify-items-center">
            {hotels.map((hotel, index) => (
              <HotelCard
                key={index}
                image={hotel.image}
                adresse={hotel.adresse}
                nom={hotel.nom}
                prix={hotel.prix}
                onDelete={() => handleDelete(hotel.id)} 
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelList;
