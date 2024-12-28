import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(
      (u) =>
        u.username === formData.username && u.password === formData.password
    );

    if (user) {
      localStorage.setItem("isLoggedIn", true);
      navigate("/home"); // Arahkan ke halaman utama setelah login berhasil
    } else {
      alert("Nama pengguna atau kata sandi salah!");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8"
        onSubmit={handleLogin}
      >
        <h2 className="text-2xl font-bold mb-4">Login</h2>
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
          type="password"
          placeholder="Kata Sandi"
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
          className="mb-4 p-2 w-full border rounded"
        />
        <button
          className="bg-blue-500 text-white p-2 w-full rounded"
          type="submit"
        >
          Masuk
        </button>
        <div className="text-center mt-4">
          <p>
            Belum punya akun?{" "}
            <a href="/register" className="text-green-500">
              Daftar
            </a>
          </p>
          <p>
            <a href="/forgot-password" className="text-red-500">
              Lupa Kata Sandi?
            </a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
