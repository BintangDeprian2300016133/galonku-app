import React, { useState } from "react";
import { saveOrder } from "../utils/storage";

const OrderForm = () => {
  const [formData, setFormData] = useState({
    date: "",
    name: "",
    address: "",
    phone: "",
    gallons: 1,
    paymentMethod: "cash",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    saveOrder(formData);
    alert("Pesanan berhasil disimpan!");
    setFormData({
      date: "",
      name: "",
      address: "",
      phone: "",
      gallons: 1,
      paymentMethod: "cash",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow-md">
      <h2 className="text-xl mb-4">Form Pemesanan</h2>
      {/* Input Tanggal */}
      <input
        type="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
        className="border p-2 mb-4 w-full"
        required
      />

      {/* Input Nama */}
      <input
        type="text"
        name="name"
        placeholder="Nama"
        value={formData.name}
        onChange={handleChange}
        className="border p-2 mb-4 w-full"
        required
      />

      {/* Input Alamat */}
      <input
        type="text"
        name="address"
        placeholder="Alamat"
        value={formData.address}
        onChange={handleChange}
        className="border p-2 mb-4 w-full"
        required
      />

      {/* Input Nomor Telepon */}
      <input
        type="text"
        name="phone"
        placeholder="Nomor Telepon"
        value={formData.phone}
        onChange={handleChange}
        className="border p-2 mb-4 w-full"
        required
      />

      {/* Input Jumlah Galon */}
      <input
        type="number"
        name="gallons"
        placeholder="Jumlah Galon"
        value={formData.gallons}
        onChange={handleChange}
        min="1"
        className="border p-2 mb-4 w-full"
        required
      />

      {/* Pilihan Metode Pembayaran */}
      <select
        name="paymentMethod"
        value={formData.paymentMethod}
        onChange={handleChange}
        className="border p-2 mb-4 w-full"
        required
      >
        <option value="cash">Cash</option>
        <option value="cashless">Cashless</option>
      </select>

      {/* Tombol Submit */}
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Pesan
      </button>
    </form>
  );
};

export default OrderForm;
