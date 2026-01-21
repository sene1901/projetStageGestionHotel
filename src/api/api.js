import axios from "axios";


const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});


//  Intercepteur pour ajouter le token JWT
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");

  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }

  return req;
});



// ================= AUTH =================
export const login = (data) => API.post("/login", data);
export const register = (data) => API.post("/register", data);
export const logout = () => API.post("/logout");
export const getProfile = () => API.get("/user");
export const forgotPassword = (data) => API.post("/forgot-password", data);
export const resetPassword = (data) => API.post("/reset-password", data);

// Notifications
export const getNotifications = () => API.get("/notifications");
export const markNotificationRead = (id) => API.post(`/notifications/mark-read/${id}`);


// ================= HOTELS =================
export const getHotels = () => API.get("/hotels");
export const getHotel = (id) => API.get(`/hotels/${id}`);
export const createHotel = (data) =>
  API.post("/hotels", data, {
    headers: { "Content-Type": "multipart/form-data" },
  });

export const updateHotel = (id, data) =>
  API.post(`/hotels/${id}`, data, {
    headers: { "Content-Type": "multipart/form-data" },
  })
export const deleteHotel = (id) =>
  API.delete(`/hotels/${id}`);

export default API;
