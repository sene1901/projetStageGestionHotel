import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
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
        <h2 className="text-gray-700 mb-6 text-sm sm:text-base">
          Inscrivez-vous en tant que <span className="font-semibold">Admin</span>
        </h2>

        {/* Form */}
        <form className="space-y-6">
          
          {/* Nom */}
          <div className="text-left">
            <label className="block text-xs sm:text-sm text-gray-400 mb-1">
              Nom
            </label>
            <input
              type="text"
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

          {/* Email */}
          <div className="text-left">
            <label className="block text-xs sm:text-sm text-gray-400 mb-1">
              E-mail
            </label>
            <input
              type="email"
              className=" w-full border-0 border-b border-gray-300 py-2 text-sm focus:outline focus:rin focus:border-gray-700 "
            />
          </div>

          {/* Password */}
          <div className="text-left">
            <label className="block text-xs sm:text-sm text-gray-400 mb-1">
              Mot de passe
            </label>
            <input
              type="password"
              className="  w-full  border-0 border-b border-gray-300
                py-2
                text-sm
                focus:outline-none
                focus:ring-0
                focus:border-gray-700
              "
                
            />
          </div>

          {/* Terms */}
          <div className="flex items-center text-xs sm:text-sm text-gray-600">
            <input
              type="checkbox"
              className="mr-2 accent-gray-800"
            />
            Accepter les termes et la politique
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-gray-700 text-white py-2 rounded hover:bg-gray-800 transition text-sm sm:text-base"
          >
            S inscrire
          </button>
        </form>
        {/* Footer link */}
        <div className="mt-6 text-xs sm:text-sm text-gray-600">
          Vous avez déjà un compte ?{" "}
          <Link to="/" className="text-yellow-500 hover:underline">
            Se connecter
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Register;
