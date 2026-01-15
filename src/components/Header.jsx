import React from "react";
import { Menu } from "lucide-react";
import { useLocation } from "react-router-dom";
import { Search, Bell, User, LogOut } from "lucide-react";
import { useSidebar } from "../context/SidebarContext";

const Header = () => {
  const { setOpen } = useSidebar();
  const location = useLocation();

  const titles = {
    "/dashboard": "Dashboard",
    "/hotels": "Liste des hôtels",
  };

  return (
    <header className="flex items-center justify-between px-4 md:px-6 py-4 bg-white border-b border-gray-300">
      
      {/* Left */}
      <div className="flex items-center gap-3">
        
        {/* Menu button mobile */}
        <button
          onClick={() => setOpen(true)}
          className="md:hidden text-gray-600"
        >
          <Menu size={22} />
        </button>

        <div>
          <h1 className="text-gray-800 font-semibold text-lg">
            {titles[location.pathname]}
          </h1>
          <p className="text-sm text-gray-500 hidden sm:block">
            Gestion de votre application
          </p>
        </div>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-3 md:gap-4">
        
        {/* Search hidden on mobile */}
        <div className="relative hidden md:block">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Recherche"
            className="pl-9 pr-3 py-1.5 border rounded-md text-sm"
          />
        </div>

        <Bell size={20} className="text-gray-600" />
        <User size={18} className="text-gray-600" />
        <LogOut size={18} className="text-gray-500" />
      </div>
    </header>
  );
};

export default Header;
