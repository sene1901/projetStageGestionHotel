import React from "react";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 px-4">
      
      <div className="w-full max-w-sm sm:max-w-md bg-white rounded-md shadow-xl p-6 sm:p-8 text-center">
        
        {/* Logo */}
        <div className="mb-6">
          <h1 className="text-gray-800 font-semibold tracking-wide text-lg">
            <span className="font-bold">RED</span> PRODUCT
          </h1>
        </div>

        {/* Title */}
        <h2 className="text-gray-800 font-medium mb-3 text-sm sm:text-base">
          Mot de passe oublié?
        </h2>

        {/* Description */}
        <p className="text-gray-500 text-xs sm:text-sm mb-6 leading-relaxed">
          Entrez votre adresse e-mail ci-dessous et nous vous envoyons des
          instructions sur la façon de modifier votre mot de passe.
        </p>

        {/* Form */}
        <form className="space-y-6">
          
          {/* Email */}
          <div className="text-left">
            <label className="block text-xs sm:text-sm text-gray-500 mb-1">
              Votre e-mail
            </label>
            <input
              type="email"
              className="
                w-full
                border-0
                border-b
                border-gray-300
                py-2
                text-sm
                focus:outline-none
                focus:ring-0
                focus:border-gray-700
              "
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-gray-700 text-white py-2 rounded hover:bg-gray-800 transition text-sm sm:text-base"
          >
            Envoyer
          </button>
        </form>

        {/* Back link */}
        <div className="mt-6 text-xs sm:text-sm">
          <Link
            to="/"
            className="text-gray-500 hover:text-yellow-500 transition"
          >
            Revenir à la <span className="text-yellow-500">connexion</span>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default ForgotPassword;
