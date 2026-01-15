
import React from "react";
import { NavLink } from "react-router-dom";
import { ComputerDesktopIcon, Squares2X2Icon } from "@heroicons/react/24/outline";
import { useSidebar } from "../context/SidebarContext";
import bgSidebar from "../assets/images/bg.jpg"; 

const Sidebar = () => {
  const { open, setOpen } = useSidebar();

  const linkClass = ({ isActive }) =>
    ` w-full flex items-center gap-3 px-3 py-2 rounded transition
    ${
      isActive
         ? "bg-gray-200 text-gray-700"
      : "text-gray-300 hover:bg-gray-200 hover:text-gray-700"
    }`;
 const iconClass = "w-7 h-7";
  return (
    <>
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
        />
      )}

        <aside
        className={`
          fixed z-50 inset-y-0 left-0 w-70 bg-gray-700 text-white
          transform transition-transform duration-300 
          ${open ? "translate-x-0" : "-translate-x-full"}
          md:static md:translate-x-0
          flex flex-col
          pb-4
          bg-cover bg-center
        `}
        style={{ backgroundImage: `url(${bgSidebar})` }}
      >
        {/* Logo */}
        <div className="px-6 py-5 font-semibold border-b border-gray-600">
          RED PRODUCT
        </div>

        {/* Menu */}
        <nav className="px-4 py-4 space-y-2 text-sm flex flex-col ">
          <NavLink to="/dashboard" className={linkClass} onClick={() => setOpen(false)}>
            <Squares2X2Icon className={iconClass} />
            Dashboard
          </NavLink>

          <NavLink to="/hotels" className={linkClass} onClick={() => setOpen(false)}>
            <ComputerDesktopIcon className={iconClass} />
            Liste des hôtels
          </NavLink>
        </nav>

      
       {/* User */}
        <div className="mt-auto px-4 py-4 border-t border-gray-600 text-xs">
          <div className="font-medium">Sadio Sene</div>
          <div className="text-green-400 flex items-center gap-1">
            <span className="text-lg leading-none">●</span> En ligne
          </div>
        </div>

      </aside>
    </>
  );
};

export default Sidebar;
