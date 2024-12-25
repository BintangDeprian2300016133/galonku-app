import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/qyara_tirta_jaya_logo.png"; // Import logo

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <img
          src={logo}
          alt="Qyara Tirta Jaya"
          className="h-12" // Mengatur tinggi logo
        />

        {/* Nama Aplikasi */}
        <h1 className="text-2xl font-semibold">Qyara Tirta Jaya</h1>

        {/* Navigasi */}
        <nav>
          <Link to="/" className="mr-4 hover:underline">
            Home
          </Link>
          <Link to="/order" className="mr-4 hover:underline">
            Order
          </Link>
          <Link to="/history" className="hover:underline">
            History
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
