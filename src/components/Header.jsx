import React from "react";
import { Search, Bell, User, LogOut } from "lucide-react";

const Header = () => {
  return (
    <div className="flex items-center justify-between px-6 py-4 bg-white border-b">
      
      {/* Title */}
      <div>
      <h1 className="text-gray-800 font-semibold text-lg">
        Bienvenue sur RED Product
      </h1>
      <p>Lorem ipsum dolor sit amet consectetur</p>
    </div>
      {/* Right side */}
      <div className="flex items-center gap-4">
        
        {/* Search */}
        <div className="relative">
          <Search
            size={16}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />
          <input
            type="text"
            placeholder="Recherche"
            className="
              pl-9 pr-3 py-1.5
              border rounded-md
              text-sm
              focus:outline-none
              focus:ring-1
              focus:ring-gray-400
            "
          />
        </div>

        {/* Notification */}
        <button className="relative text-gray-600 hover:text-gray-800">
          <Bell size={20} />
          <span className="absolute -top-1 -right-1 bg-yellow-500 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
            3
          </span>
        </button>

        {/* Profile */}
        <button className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-600">
          <User size={18} />
        </button>

        {/* Logout */}
        <button className="text-gray-500 hover:text-gray-800">
          <LogOut size={18} />
        </button>

      </div>
    </div>
  );
};

export default Header;
