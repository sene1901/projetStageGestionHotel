import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import HotelList from "./pages/HotelList";
import Register from "./pages/Register";
import MotDePasseOublie from "./pages/MotDePasseOublie";
import Layout from "./components/Layout"; 
import PrivateRoute from "./components/PrivateRoute";
import { AuthProvider } from "./context/AuthContext";
import ResetPassword from "./pages/ResetPassword";



function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          {/* Pages publiques */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<MotDePasseOublie />} />
          <Route path="/reset-password/:token" element={<ResetPassword />} />
         

          {/* Pages privées avec Layout */}
          <Route
            element={
              <PrivateRoute>
                <Layout />
              </PrivateRoute>
            }
          >
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/hotels" element={<HotelList />} />
          </Route>

          {/* Redirection par défaut */}
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
