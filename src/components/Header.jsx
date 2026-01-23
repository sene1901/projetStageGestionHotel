import React, { useEffect, useState } from "react";
import { Menu, Search, Bell, LogOut } from "lucide-react";
import { useLocation } from "react-router-dom";
import { useSidebar } from "../context/SidebarContext";
import { useAuth } from "../context/AuthContext"; 
import { getNotifications, markNotificationRead, logout as apiLogout } from "../api/api.js"; 

const Header = () => {
  const { setOpen } = useSidebar();
  const { user, logout: logoutContext } = useAuth(); // user et logout
  const location = useLocation();

  const [notifications, setNotifications] = useState([]);

  const titles = {
    "/dashboard": "Dashboard",
    "/hotels": "Liste des hôtels",
  };
const handleProfileClick = () => {
    console.log("Profil utilisateur :", user); 
    
  };
  // Fetch notifications
  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const res = await getNotifications();
        setNotifications(res.data);
      } catch (error) {
        console.error("Erreur notifications:", error);
      }
    };
    fetchNotifications();
  }, []);

  const unreadCount = notifications.filter((n) => !n.read_at).length;

  // Marquer notification comme lue
  const handleMarkRead = async (id) => {
    try {
      await markNotificationRead(id);
      setNotifications((prev) =>
        prev.map((n) => (n.id === id ? { ...n, read_at: new Date() } : n))
      );
    } catch (error) {
      console.error("Erreur lecture notification:", error);
    }
  };

  // Déconnexion
  const handleLogout = async () => {
    try {
      await apiLogout();       
    } catch (error) {
      console.error("Erreur logout:", error);
    } finally {
      logoutContext();          // supprime token et met user à null
    }
  };

  return (
    <header className="flex items-center justify-between px-4 md:px-6 py-4 bg-white border-b border-gray-300">
    
      <div className="flex items-center gap-3">
        <button onClick={() => setOpen(true)} className="md:hidden text-gray-600">
          <Menu size={22} />
        </button>

        <div>
          <h1 className="text-gray-800 font-semibold text-lg">
            {titles[location.pathname] || "Dashboard"}
          </h1>
          <p className="text-sm text-gray-500 hidden sm:block">
            Gestion de votre application
          </p>
        </div>
      </div>

      
      <div className="flex items-center gap-3 md:gap-4">
        <div className="relative hidden md:block">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Recherche"
            className="pl-9 pr-3 py-1.5 border rounded-md text-sm"
          />
        </div>

        {/* Notification */}
        <div className="relative">
          <Bell size={20} className="text-gray-600 cursor-pointer" />
          {unreadCount > 0 && (
            <span className="absolute -top-1 -right-1 text-xs bg-red-500 text-white w-4 h-4 flex items-center justify-center rounded-full">
              {unreadCount}
            </span>
          )}
          {/* Dropdown notifications */}
          <div className="absolute right-0 mt-2 w-64 bg-white border rounded shadow-lg hidden group-hover:block z-50">
            {notifications.length === 0 ? (
              <p className="p-2 text-sm text-gray-500">Aucune notification</p>
            ) : (
              notifications.map((n) => (
                <div
                  key={n.id}
                  className={`p-2 text-sm cursor-pointer ${
                    !n.read_at ? "bg-gray-100 font-medium" : ""
                  }`}
                  onClick={() => handleMarkRead(n.id)}
                >
                  {n.message}
                </div>
              ))
            )}
          </div>
        </div>

        {/* Profil */}
       <img
  src={
    user?.imageprofil
      ? `https://backend-laravel-hotel.up.railway.app/storage/${user.imageprofil}`
      : "/default-profil.jpg"
  }
  alt="user"
  className="w-9 h-9 rounded-full cursor-pointer"
/>


        {/* Déconnexion */}
        <button onClick={handleLogout} title="Déconnexion">
          <LogOut size={18} className="text-gray-500 hover:text-gray-800 cursor-pointer" />
        </button>
      </div>
    </header>
  );
};

export default Header;
