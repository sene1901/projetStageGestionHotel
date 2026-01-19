import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { getProfile, login as loginApi, logout as logoutApi } from "../api/api";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //  Fetch profil
  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        setLoading(false);
        return;
      }

      try {
        const res = await getProfile();
        setUser(res.data);
      } catch (err) {
        localStorage.removeItem("token");
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  //  Login
  const login = async (data) => {
    const res = await loginApi(data);
    localStorage.setItem("token", res.data.token);
    setUser(res.data.user);
  };

  //deconnecter
  const logout = async () => {
    try {
      await logoutApi();
    } catch (e) {}
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
