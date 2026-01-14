import React from "react";

const HotelCard = ({ image, name, address, price }) => {
  return (
    <div className="bg-white rounded-lg shadow hover:shadow-md transition overflow-hidden">
      
      <img
        src={image}
        alt={name}
        className="h-40 w-full object-cover"
      />

      <div className="p-4">
        <p className="text-xs text-gray-400">{address}</p>
        <h3 className="font-semibold text-gray-800 mt-1">{name}</h3>
        <p className="text-sm text-gray-500 mt-2">
          {price} XOF par nuit
        </p>
      </div>

    </div>
  );
};

export default HotelCard;
