import { useState, useEffect } from "react";
import { getContacts, updateContact, deleteContact } from "../api";

export default function About() {
  const [contacts, setContacts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [currentContact, setCurrentContact] = useState(null);

  // Ambil data dari API
  const fetchContacts = async () => {
    try {
      const { data } = await getContacts();
      setContacts(data);
    } catch (error) {
      console.error("Error fetching contacts:", error);
    }
  };

  useEffect(() => {
    fetchContacts(); // Panggil saat komponen dimuat
  }, []);

  // Fungsi hapus data
  const handleDelete = async (id) => {
    try {
      await deleteContact(id);
      setContacts(contacts.filter((contact) => contact.id !== id));
    } catch (error) {
      console.error("Error deleting contact:", error);
    }
  };

  // Fungsi untuk membuka modal edit
  const handleEdit = (contact) => {
    setCurrentContact(contact);
    setShowModal(true);
  };

  // Fungsi untuk menutup modal
  const handleCloseModal = () => {
    setShowModal(false);
    setCurrentContact(null);
  };

  // Fungsi untuk mengubah data kontak
  const handleUpdate = async () => {
    try {
      await updateContact(currentContact.id, currentContact);
      setContacts(contacts.map((contact) => (contact.id === currentContact.id ? currentContact : contact)));
      handleCloseModal();
    } catch (error) {
      console.error("Error updating contact:", error);
    }
  };

  return (
    <div className="bg-gradient-to-b from-third to-lime-400 flex items-center justify-center h-screen">
      <div className="max-w-6xl w-full p-6 bg-gray-100 shadow-md rounded-lg">
        <h1 className="text-2xl font-bold text-center mb-6">Daftar Kontak</h1>
        <table className="w-full border-collapse border border-gray-300 text-sm">
          <thead>
            <tr className="bg-third">
              <th className="border border-gray-300 px-4 py-2 text-left">Nama</th>
              <th className="border border-gray-300 px-4 py-2 text-left">NPM</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Kelas</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Alamat</th>
              <th className="border border-gray-300 px-4 py-2 text-center">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <tr key={contact.id} className="even:bg-gray-50 hover:bg-gray-100">
                <td className="border border-gray-300 px-4 py-2">{contact.name}</td>
                <td className="border border-gray-300 px-4 py-2">{contact.npm}</td>
                <td className="border border-gray-300 px-4 py-2">{contact.kelas}</td>
                <td className="border border-gray-300 px-4 py-2">{contact.alamat}</td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  <button className="px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition" onClick={() => handleEdit(contact)}>
                    Update
                  </button>
                  <button className="ml-2 px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 transition" onClick={() => handleDelete(contact.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Modal Edit */}
        {showModal && currentContact && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg w-96">
              <h2 className="text-xl font-bold mb-4">Edit Kontak</h2>
              <div>
                <label className="block mb-2">Nama:</label>
                <input type="text" value={currentContact.name} onChange={(e) => setCurrentContact({ ...currentContact, name: e.target.value })} className="border w-full px-4 py-2 mb-4 rounded-md" />
                <label className="block mb-2">NPM:</label>
                <input type="text" value={currentContact.npm} onChange={(e) => setCurrentContact({ ...currentContact, npm: e.target.value })} className="border w-full px-4 py-2 mb-4 rounded-md" />
                <label className="block mb-2">Kelas:</label>
                <input type="text" value={currentContact.kelas} onChange={(e) => setCurrentContact({ ...currentContact, kelas: e.target.value })} className="border w-full px-4 py-2 mb-4 rounded-md" />
                <label className="block mb-2">Alamat:</label>
                <input type="text" value={currentContact.alamat} onChange={(e) => setCurrentContact({ ...currentContact, alamat: e.target.value })} className="border w-full px-4 py-2 mb-4 rounded-md" />
              </div>
              <div className="flex justify-between">
                <button onClick={handleCloseModal} className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400">
                  Cancel
                </button>
                <button onClick={handleUpdate} className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                  Update
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
