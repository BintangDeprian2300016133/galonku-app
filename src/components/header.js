import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/images/qyara_tirta_jaya_logo.png"; // Import logo

const Header = ({ cart, addToCart, removeFromCart, updateQuantity }) => {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true"; // Pastikan nilai boolean
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

        {/* Logout dan Keranjang */}
        <div className="flex items-center space-x-4">
          {/* Tombol Keranjang */}
          {isLoggedIn && (
            <Link
              to="/checkout"
              className="bg-teal-500 text-sm px-3 py-1 rounded hover:bg-teal-600 transition duration-300"
            >
              Cart ({cart?.length || 0}){" "}
              {/* Menampilkan jumlah item di keranjang */}
            </Link>
          )}

          {/* Tombol Logout */}
          {isLoggedIn && (
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white text-sm px-3 py-1 rounded hover:bg-red-600 transition duration-300"
            >
              Logout
            </button>
          )}
        </div>
      </div>

      {/* Navigasi */}
      <nav className="mt-4 flex justify-center space-x-6">
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
