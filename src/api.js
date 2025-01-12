import axios from "axios";

// Ganti URL ini dengan URL endpoint API Anda
const API_URL = "http://localhost:5000/contacts";

// Membuat instance Axios
const api = axios.create({
    baseURL: API_URL,
});

// Fungsi CRUD
export const createContact = (data) => api.post("/", data); // Create
export const getContacts = () => api.get("/");             // Read (GET all contacts)
export const updateContact = (id, data) => api.put(`/${id}`, data); // Update
export const deleteContact = (id) => api.delete(`/${id}`); // Delete

export default api;
