import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/qyara_tirta_jaya_logo.png"; // Import logo

const Header = () => {
  return (
    <header className="bg-blue-900 text-white p-4 shadow-md">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src={logo}
            alt="Qyara Tirta Jaya"
            className="h-18 w-20 mr-4 transition-transform duration-300 hover:scale-110" // Adjust size and add hover effect
          />
          <h1 className="text-2xl font-semibold">Qyara Tirta Jaya</h1>
        </div>

        {/* Navigasi */}
        <nav className="flex space-x-4 mt-4 sm:mt-0">
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
        </nav>
      </div>

      {/* Tagline */}
      <div className="text-center mt-2 text-sm italic text-teal-100">
        Esensi Murni, Kesegaran Tanpa Henti
      </div>
    </header>
  );
};

export default Header;
