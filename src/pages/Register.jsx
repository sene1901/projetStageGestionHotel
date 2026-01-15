import React from "react";
import { Link } from "react-router-dom";
import AuthLayout from "../components/AuthLayout";

const Register = () => {
  return (
    <AuthLayout>
      {/* Logo */}
      <div className="mb-5 text-center ">
        <h1 className="text-white font-bold tracking-wide text-lg">
          RED PRODUCT
        </h1>
      </div>

      {/* Form container */}
      <div className="w-full bg-white rounded-md shadow-xl p-6 sm:p-8 text-center">
        {/* Title */}
        <h2 className="text-[#494C4F] mb-5 text-sm sm:text-base">
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
              className="w-full border-0 border-b border-gray-300 py-2 text-sm focus:outline-none focus:border-gray-700"
            />
          </div>

          {/* Email */}
          <div className="text-left">
            <label className="block text-xs sm:text-sm text-gray-400 mb-1">
              E-mail
            </label>
            <input
              type="email"
              className="w-full border-0 border-b border-gray-300 py-2 text-sm focus:outline-none focus:border-gray-700"
            />
          </div>

          {/* Password */}
          <div className="text-left">
            <label className="block text-xs sm:text-sm text-gray-400 mb-1">
              Mot de passe
            </label>
            <input
              type="password"
              className="w-full border-0 border-b border-gray-300 py-2 text-sm focus:outline-none focus:border-gray-700"
            />
          </div>

          {/* Terms */}
          <div className="flex items-center text-xs sm:text-sm text-gray-600">
            <input type="checkbox" className="mr-2 accent-gray-800" />
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

       
      </div>
       {/* Footer link */}
        <div className="mt-6 text-xs sm:text-sm text-white text-center">
          Vous avez déjà un compte ?{" "}
          <Link to="/" className="text-yellow-500 hover:underline">
            Se connecter
          </Link>
        </div>
    </AuthLayout>
  );
};

export default Register;
