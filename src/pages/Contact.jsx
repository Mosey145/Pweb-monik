import { useState } from "react";
import { createContact } from "../api";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    npm: "",
    kelas: "",
    alamat: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createContact(formData);
      alert("Data berhasil ditambahkan!");
      setFormData({ name: "", npm: "", kelas: "", alamat: "" });
    } catch (error) {
      console.error("Error menambahkan data:", error);
      alert("Gagal menambahkan data.");
    }
  };

  return (
    <div className="bg-gradient-to-b from-third to-lime-400 flex items-center justify-center h-screen">
      <div className="w-full max-w-lg bg-white p-8 rounded-lg shadow-md py-10">
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-6">Form Kontak</h1>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name" className="block text-gray-700 font-medium">
              Nama
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Masukkan nama Anda"
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
            />
          </div>
          <div className="form-group">
            <label htmlFor="npm" className="block text-gray-700 font-medium">
              NPM
            </label>
            <input
              type="text"
              id="npm"
              name="npm"
              value={formData.npm}
              onChange={handleChange}
              placeholder="Masukkan NPM Anda"
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
            />
          </div>
          <div className="form-group">
            <label htmlFor="kelas" className="block text-gray-700 font-medium">
              Kelas
            </label>
            <input
              type="text"
              id="kelas"
              name="kelas"
              value={formData.kelas}
              onChange={handleChange}
              placeholder="Masukkan kelas Anda"
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
            />
          </div>
          <div className="form-group">
            <label htmlFor="alamat" className="block text-gray-700 font-medium">
              Alamat
            </label>
            <textarea
              id="alamat"
              name="alamat"
              value={formData.alamat}
              onChange={handleChange}
              placeholder="Masukkan alamat Anda"
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
            ></textarea>
          </div>
          <button type="submit" className="w-full bg-red-600 text-white py-3 rounded-lg font-medium hover:bg-gray-600 transition">
            Kirim
          </button>
        </form>
      </div>
    </div>
  );
}
