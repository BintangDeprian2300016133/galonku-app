import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  const handleResetPassword = (e) => {
    e.preventDefault();

    // Cek apakah username dan nomor telepon cocok dengan data yang ada di localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(
      (u) => u.username === username && u.phone === phone
    );

    if (user) {
      // Jika data cocok, arahkan pengguna untuk mereset kata sandi
      alert("Silakan buat kata sandi baru.");
      navigate("/login");
    } else {
      alert("Username atau nomor telepon tidak cocok.");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 w-full max-w-sm"
        onSubmit={handleResetPassword}
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Lupa Kata Sandi</h2>

        <input
          type="text"
          placeholder="Nama Pengguna"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="mb-4 p-2 w-full border rounded"
        />
        <input
          type="tel"
          placeholder="Nomor Telepon"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="mb-4 p-2 w-full border rounded"
        />

        <button
          className="glowing-btn glowing-btn-login w-full rounded"
          type="submit"
        >
          Reset Kata Sandi
        </button>
      </form>
    </div>
  );
};

export default ForgotPassword;
