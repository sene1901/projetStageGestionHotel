import React from "react";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-gray-700 text-white min-h-screen flex flex-col">
      
      {/* Logo */}
      <div className="px-6 py-5 font-semibold tracking-wide border-b border-gray-600">
        RED PRODUCT
      </div>

      {/* Menu */}
      <nav className="flex-1 px-4 py-4 space-y-2 text-sm">
        <div className="text-gray-300 uppercase text-xs mb-2">Principal</div>

        <button className="w-full flex items-center px-3 py-2 rounded hover:bg-gray-600">
          Dashboard
        </button>

        <button className="w-full flex items-center px-3 py-2 rounded bg-gray-800">
          Liste des hôtels
        </button>
      </nav>

      {/* User */}
      <div className="px-4 py-4 border-t border-gray-600 text-xs">
        <div className="font-medium">Sadio Sene</div>
        <div className="text-green-400">● En ligne</div>
      </div>

    </aside>
  );
};

export default Sidebar;
