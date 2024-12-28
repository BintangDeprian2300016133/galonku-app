import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/images/qyara_tirta_jaya_logo.png"; // Import logo

const Header = () => {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const navigate = useNavigate();

  // Fungsi untuk logout
  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login"); // Arahkan ke halaman login setelah logout
  };

  return (
    <header className="bg-blue-900 text-white p-4 shadow-md relative">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo dan Judul */}
        <div className="flex items-center">
          <img
            src={logo}
            alt="Qyara Tirta Jaya"
            className="h-18 w-20 mr-4 transition-transform duration-300 hover:scale-110"
          />
          <h1 className="text-2xl font-semibold">Qyara Tirta Jaya</h1>
        </div>

        {/* Tombol Logout di Pojok Kanan Atas */}
        {isLoggedIn && (
          <button
            onClick={handleLogout}
            className="absolute top-4 right-4 bg-red-500 text-white text-sm px-3 py-1 rounded hover:bg-red-600 transition duration-300"
          >
            Logout
          </button>
        )}
      </div>

      {/* Navigasi di Bagian Bawah Kanan */}
      <nav className="absolute bottom-0 right-0 mr-6 mb-2 flex space-x-4">
        <Link
          to="/"
          className="text-white hover:text-teal-200 hover:underline transition duration-300"
        >
          Home
        </Link>
        <Link
          to="/order"
          className="text-white hover:text-teal-200 hover:underline transition duration-300"
        >
          Order
        </Link>
        <Link
          to="/history"
          className="text-white hover:text-teal-200 hover:underline transition duration-300"
        >
          History
        </Link>
        <Link
          to="/aboutus"
          className="text-white hover:text-teal-200 hover:underline transition duration-300"
        >
          About Us
        </Link>
        <Link
          to="/feature"
          className="text-white hover:text-teal-200 hover:underline transition duration-300"
        >
          Feature
        </Link>
      </nav>

      {/* Tagline */}
      <div className="text-center mt-2 text-sm italic text-teal-100">
        Esensi Murni, Kesegaran Tanpa Henti
      </div>
    </header>
  );
};

export default Header;
