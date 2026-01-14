import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import HotelList from "./pages/HotelList";
import Register from "./pages/Register";
import MotDePasseOublie from "./pages/MotDePasseOublie";
import Layout from "./components/Layout"; 

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Routes publiques (sans Sidebar/Header) */}
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<MotDePasseOublie />} />
        <Route path="/register" element={<Register />} />

        {/* Toutes les autres utilisent le Layout */}
        <Route element={<Layout />}>

          {/* Routes qui garderont Header + Sidebar */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/hotels" element={<HotelList />} />

        </Route>

        {/* Redirection par défaut */}
        <Route path="*" element={<Navigate to="/login" />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
