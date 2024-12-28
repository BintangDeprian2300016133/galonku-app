import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    address: "",
    password: "",
    phone: "",
  });
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const isUserExists = users.some((user) => user.username === formData.username);

    if (isUserExists) {
      alert("Nama pengguna sudah terdaftar. Silakan gunakan nama lain.");
    } else {
      users.push(formData);
      localStorage.setItem("users", JSON.stringify(users));
      alert("Pendaftaran berhasil! Silakan login.");
      navigate("/login");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8"
        onSubmit={handleRegister}
      >
        <h2 className="text-2xl font-bold mb-4">Daftar</h2>
        <input
          type="text"
          placeholder="Nama Pengguna"
          value={formData.username}
          onChange={(e) =>
            setFormData({ ...formData, username: e.target.value })
          }
          className="mb-4 p-2 w-full border rounded"
        />
        <input
          type="text"
          placeholder="Alamat"
          value={formData.address}
          onChange={(e) =>
            setFormData({ ...formData, address: e.target.value })
          }
          className="mb-4 p-2 w-full border rounded"
        />
        <input
          type="password"
          placeholder="Kata Sandi"
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
          className="mb-4 p-2 w-full border rounded"
        />
        <input
          type="tel"
          placeholder="Nomor Telepon"
          value={formData.phone}
          onChange={(e) =>
            setFormData({ ...formData, phone: e.target.value })
          }
          className="mb-4 p-2 w-full border rounded"
        />
        <button className="bg-green-500 text-white p-2 w-full rounded" type="submit">
          Daftar
        </button>
      </form>
    </div>
  );
};

export default Register;
