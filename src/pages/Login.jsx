import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 px-4">
      
      {/* Card */}
      <div className="w-full max-w-sm sm:max-w-md bg-white rounded-lg shadow-xl p-6 sm:p-8">
        
        {/* Logo */}
        <div className="text-center mb-5">
          <h1 className="text-gray-800 font-semibold tracking-wide text-lg">
            <span className="font-bold">RED</span> PRODUCT
          </h1>
        </div>

        {/* Title */}
        <h2 className="text-center text-gray-700 mb-6 text-sm sm:text-base">
          Connectez-vous en tant que <span className="font-semibold">Admin</span>
        </h2>

        {/* Form */}
        <form className="space-y-4">
          
          {/* Email */}
          <div>
            <label className="block text-xs sm:text-sm text-gray-600 mb-1">
              E-mail
            </label>
            <input
              type="email"

              className="w-full border-0 border-b border-gray-300  px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-600"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-xs sm:text-sm text-gray-600 mb-1">
              Mot de passe
            </label>
            <input
              type="password"
            
              className="w-full border-0 border-b border-gray-300  px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-600"
            />
          </div>

          {/* Remember */}
          <div className="flex items-center text-xs sm:text-sm text-gray-600">
            <input
              type="checkbox"
              className="mr-2 accent-gray-800"
            />
            Gardez-moi connecté
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-gray-800 text-white py-2 rounded-md hover:bg-gray-900 transition text-sm sm:text-base"
          >
            Se connecter
          </button>
        </form>

        {/* Links */}
        <div className="text-center mt-6 text-xs sm:text-sm">
          <Link
            to="/forgot-password"
            className="text-yellow-500 hover:underline block"
          >
            Mot de passe oublié ?
          </Link>

          <p className="text-gray-600 mt-2">
            Vous n'avez pas de compte ?{" "}
            <Link
              to="/register"
              className="text-yellow-500 hover:underline"
            >
              S'inscrire
            </Link>
          </p>
        </div>

      </div>
    </div>
  );
};

export default Login;
