import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Header from "./components/header";
import Footer from "./components/footer";
import AboutUs from "./pages/aboutus";
import Feature from "./pages/feature";
import Home from "./pages/home";
import Order from "./pages/order";
import History from "./pages/history";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/forgot-password"; // Import halaman forgot-password

// Utility untuk menyimpan pesanan
import { saveOrder } from "./utils/storage"; // Pastikan file storage.js berada di folder utils

const App = () => {
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  // Fungsi untuk menangani pesanan
  const handleOrderSubmit = (newOrder) => {
    saveOrder(newOrder); // Simpan pesanan ke localStorage
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Router>
        {isLoggedIn && <Header />}
        <main className="flex-grow container mx-auto p-4">
          <Routes>
            <Route
              path="/"
              element={isLoggedIn ? <Home /> : <Navigate to="/login" />}
            />
            <Route
              path="/order"
              element={
                isLoggedIn ? (
                  <Order onOrderSubmit={handleOrderSubmit} />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
            <Route
              path="/history"
              element={isLoggedIn ? <History /> : <Navigate to="/login" />}
            />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/feature" element={<Feature />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
          </Routes>
        </main>
        {isLoggedIn && <Footer />}
      </Router>
    </div>
  );
};

export default App;
