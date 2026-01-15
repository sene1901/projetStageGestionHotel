import React from "react";

const HotelCard = ({ image, nom, addresse, prix }) => {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition overflow-hidden w-[240px]">
      
      {/* Image */}
      <img
        src={image}
        alt={nom}
        className="h-48 w-full object-cover"
      />

      {/* Contenu */}
      <div className="p-4">
        <p className="text-sm text-[#8D4B38]">
          {addresse}
        </p>

        <h3 className="text-lg font-bold text-gray-800 mt-1">
          {nom}
        </h3>

        <p className="text-base font-medium text-gray-700 mt-2">
          {prix} XOF par nuit
        </p>
      </div>

    </div>
  );
};

export default HotelCard;
