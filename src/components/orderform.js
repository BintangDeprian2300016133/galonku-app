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
    selectedBank: "",
    selectedEWallet: "",
  });
  const [showBankOptions, setShowBankOptions] = useState(false);
  const [showEWalletOptions, setShowEWalletOptions] = useState(false);
  const [virtualAccount, setVirtualAccount] = useState("");
  const [barcode, setBarcode] = useState("");

  const bankList = [
    "BCA",
    "BRI",
    "Mandiri",
    "BNI",
    "Bank Syariah Indonesia (BSI)",
    "Bank Danamon",
    "Bank CIMB Niaga",
    "Bank Permata",
  ];

  const eWalletList = [
    "OVO",
    "DANA",
    "GoPay",
    "LinkAja",
    "ShopeePay",
    "PayPal",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "paymentMethod") {
      setShowBankOptions(value === "bank");
      setShowEWalletOptions(value === "ewallet");
      setVirtualAccount("");
      setBarcode("");
    }

    if (name === "selectedBank") {
      setVirtualAccount(
        `VA-${value}-${Math.floor(1000000000 + Math.random() * 9000000000)}`
      );
    }

    if (name === "selectedEWallet") {
      setBarcode(`/path/to/barcode/${value.toLowerCase()}.jpeg`);
    }

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    saveOrder(formData);

    if (formData.paymentMethod === "cash") {
      alert(
        "Pembayaran cash! Pesanan berhasil disimpan. Menuju ke riwayat pesanan."
      );
      window.location.href = "/history";
    } else if (formData.paymentMethod === "bank") {
      alert(`Transfer ke Virtual Account: ${virtualAccount}`);
    } else if (formData.paymentMethod === "ewallet") {
      alert("Scan barcode eWallet untuk menyelesaikan pembayaran.");
    }

    setFormData({
      date: "",
      name: "",
      address: "",
      phone: "",
      gallons: 1,
      paymentMethod: "cash",
      selectedBank: "",
      selectedEWallet: "",
    });
    setShowBankOptions(false);
    setShowEWalletOptions(false);
    setVirtualAccount("");
    setBarcode("");
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
        <option value="bank">Transfer ATM/Bank</option>
        <option value="ewallet">eWallet</option>
      </select>

      {/* Pilihan Bank */}
      {showBankOptions && (
        <div className="mb-4">
          <select
            name="selectedBank"
            value={formData.selectedBank}
            onChange={handleChange}
            className="border p-2 mb-2 w-full"
            required
          >
            <option value="">Pilih Bank</option>
            {bankList.map((bank, index) => (
              <option key={index} value={bank}>
                {bank}
              </option>
            ))}
          </select>
          {virtualAccount && (
            <p className="text-gray-600 text-sm">
              Virtual Account Anda:{" "}
              <span className="font-bold">{virtualAccount}</span>
            </p>
          )}
        </div>
      )}

      {/* Pilihan eWallet */}
      {showEWalletOptions && (
        <div className="mb-4">
          <select
            name="selectedEWallet"
            value={formData.selectedEWallet}
            onChange={handleChange}
            className="border p-2 mb-2 w-full"
            required
          >
            <option value="">Pilih eWallet</option>
            {eWalletList.map((ewallet, index) => (
              <option key={index} value={ewallet}>
                {ewallet}
              </option>
            ))}
          </select>
          {barcode && (
            <div className="text-center">
              <p className="text-gray-600 text-sm mb-2">
                Scan barcode untuk pembayaran:
              </p>
              <img
                src={barcode}
                alt={`Barcode ${formData.selectedEWallet}`}
                className="h-32 mx-auto"
              />
            </div>
          )}
        </div>
      )}

      {/* Tombol Submit */}
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded w-full"
      >
        Pesan
      </button>
    </form>
  );
};

export default OrderForm;
