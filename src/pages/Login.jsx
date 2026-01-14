import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  // États pour les inputs
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    // Email requis + format
    if (!email) {
      newErrors.email = "L'email est requis.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Format d'email invalide.";
    }

    // Password requis
    if (!password) {
      newErrors.password = "Le mot de passe est requis.";
    } else if (password.length < 6) {
      newErrors.password = "Le mot de passe doit contenir au moins 6 caractères.";
    }

    setErrors(newErrors);
    
    // Retourne true si aucun erreur
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    // TODO: appel API réel ici

    // Si tout est bon → navigation
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 px-4">
      <div className="w-full max-w-sm sm:max-w-md bg-white rounded-lg shadow-xl p-6 sm:p-8">
        
        <div className="text-center mb-5">
          <h1 className="text-gray-800 font-semibold tracking-wide text-lg">
            <span className="font-bold">RED</span> PRODUCT
          </h1>
        </div>

        <h2 className="text-center text-gray-700 mb-6 text-sm sm:text-base">
          Connectez-vous en tant que <span className="font-semibold">Admin</span>
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          
          {/* Email */}
          <div>
            <label className="block text-xs sm:text-sm text-gray-600 mb-1">
              E-mail
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full border-0 border-b px-3 py-2 text-sm focus:outline-none focus:ring-2 ${
                errors.email ? "focus:ring-red-500 border-red-500" : "focus:ring-gray-600 border-gray-300"
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block text-xs sm:text-sm text-gray-600 mb-1">
              Mot de passe
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`w-full border-0 border-b px-3 py-2 text-sm focus:outline-none focus:ring-2 ${
                errors.password ? "focus:ring-red-500 border-red-500" : "focus:ring-gray-600 border-gray-300"
              }`}
            />
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">{errors.password}</p>
            )}
          </div>

          {/* Remember */}
          <div className="flex items-center text-xs sm:text-sm text-gray-600">
            <input type="checkbox" className="mr-2 accent-gray-800" />
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

        <div className="text-center mt-6 text-xs sm:text-sm">
          <Link
            to="/forgot-password"
            className="text-yellow-500 hover:underline block"
          >
            Mot de passe oublié ?
          </Link>

          <p className="text-gray-600 mt-2">
            Vous n'avez pas de compte ?{" "}
            <Link to="/register" className="text-yellow-500 hover:underline">
              S'inscrire
            </Link>
          </p>
        </div>

      </div>
    </div>
  );
};

export default Login;
