import React, { useState } from "react";
import { ArrowLeftIcon, PhotoIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { createHotel, updateHotel } from "../api/api";

const AjoutHotelModal = ({ onClose, hotel = null, onSuccess }) => {
  
  const [form, setForm] = useState({
    nom: hotel?.nom || "",
    adresse: hotel?.adresse || "",
    email: hotel?.email || "",
    telephone: hotel?.telephone || "",
    prix: hotel?.prix || "",
    devise: hotel?.devise || "XOF",
  });

  const [errors, setErrors] = useState({});
  const [imageFile, setImageFile] = useState(null);
  const [preview, setPreview] = useState(hotel?.image || null);

  // Validation
  const validate = () => {
    const e = {};

    if (!form.nom.trim()) e.nom = "Nom obligatoire";
    if (!form.adresse.trim()) e.adresse = "Adresse obligatoire";
    if (!form.email) {
      e.email = "Email obligatoire";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      e.email = "Email invalide";
    }
    if (!form.telephone.trim()) e.telephone = "Téléphone obligatoire";
    if (!form.prix || isNaN(form.prix)) e.prix = "Prix invalide";

    setErrors(e);
    return Object.keys(e).length === 0;
  };

  //  image
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setImageFile(file);
    setPreview(URL.createObjectURL(file));
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      const formDataToSend = new FormData();
      for (const key in form) {
        formDataToSend.append(key, form[key]);
      }

      if (imageFile) {
        formDataToSend.append("image", imageFile);
      }

      if (hotel) {
        // Modifier hôtel
        await updateHotel(hotel.id, formDataToSend);
      } else {
        // Ajouter hôtel
        await createHotel(formDataToSend);
      }

      if (onSuccess) onSuccess(); // rafraîchir la liste
      onClose();
    } catch (error) {
      console.error("Erreur hôtel:", error.response?.data);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />

      <div className="relative bg-white w-full max-w-3xl rounded-lg shadow-lg p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-2">
            <button onClick={onClose}>
              <ArrowLeftIcon className="w-5 h-5 text-gray-600" />
            </button>
            <h2 className="text-sm font-semibold text-gray-700 uppercase">
              {hotel ? "Modifier l'hôtel" : "Créer un nouveau hôtel"}
            </h2>
          </div>

          <button onClick={onClose}>
            <XMarkIcon className="w-5 h-5 text-gray-500 hover:text-gray-800" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Nom */}
            <div>
              <label className="text-sm text-gray-600">Nom de l’hôtel</label>
              <input
                type="text"
                className={`w-full mt-1 px-3 py-2 border rounded-md ${
                  errors.nom && "border-red-500"
                }`}
                value={form.nom}
                onChange={(e) => setForm({ ...form, nom: e.target.value })}
              />
              {errors.nom && <p className="text-xs text-red-500">{errors.nom}</p>}
            </div>

            {/* Adresse */}
            <div>
              <label className="text-sm text-gray-600">Adresse</label>
              <input
                type="text"
                className={`w-full mt-1 px-3 py-2 border rounded-md ${
                  errors.adresse && "border-red-500"
                }`}
                value={form.adresse}
                onChange={(e) => setForm({ ...form, adresse: e.target.value })}
              />
              {errors.adresse && <p className="text-xs text-red-500">{errors.adresse}</p>}
            </div>

            {/* Email */}
            <div>
              <label className="text-sm text-gray-600">E-mail</label>
              <input
                type="email"
                className={`w-full mt-1 px-3 py-2 border rounded-md ${
                  errors.email && "border-red-500"
                }`}
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
              {errors.email && <p className="text-xs text-red-500">{errors.email}</p>}
            </div>

            {/* Téléphone */}
            <div>
              <label className="text-sm text-gray-600">Numéro de téléphone</label>
              <input
                type="text"
                className={`w-full mt-1 px-3 py-2 border rounded-md ${
                  errors.telephone && "border-red-500"
                }`}
                value={form.telephone}
                onChange={(e) => setForm({ ...form, telephone: e.target.value })}
              />
              {errors.telephone && <p className="text-xs text-red-500">{errors.telephone}</p>}
            </div>

            {/* Prix */}
            <div>
              <label className="text-sm text-gray-600">Prix par nuit</label>
              <input
                type="text"
                className={`w-full mt-1 px-3 py-2 border rounded-md ${
                  errors.prix && "border-red-500"
                }`}
                value={form.prix}
                onChange={(e) => setForm({ ...form, prix: e.target.value })}
              />
              {errors.prix && <p className="text-xs text-red-500">{errors.prix}</p>}
            </div>

            {/* Devise */}
            <div>
              <label className="text-sm text-gray-600">Devise</label>
              <select
                className="w-full mt-1 border rounded-md px-3 py-2"
                value={form.devise}
                onChange={(e) => setForm({ ...form, devise: e.target.value })}
              >
                <option value="XOF">F XOF</option>
                <option value="EUR">EUR</option>
                <option value="USD">USD</option>
              </select>
            </div>
          </div>

          {/* Image */}
          <div>
            <label className="text-sm text-gray-600 block mb-2">Ajouter une photo</label>
            <div
              className="border-2 border-dashed rounded-lg h-32 flex flex-col items-center justify-center text-gray-400 cursor-pointer relative"
              onClick={() => document.getElementById("hotelImage").click()}
            >
              {preview ? (
                <img src={preview} alt="Preview" className="w-full h-full object-cover rounded-md" />
              ) : (
                <>
                  <PhotoIcon className="w-8 h-8" />
                  <span className="text-sm">Ajouter une photo</span>
                </>
              )}
              <input
                type="file"
                id="hotelImage"
                className="hidden"
                accept="image/*"
                onChange={handleImageChange}
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex justify-end gap-3 mt-6">
            <button type="button" onClick={onClose} className="px-4 py-2 border rounded-md">
              Fermer
            </button>

            <button type="submit" className="bg-gray-700 text-white px-6 py-2 rounded-md">
              Enregistrer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AjoutHotelModal;
