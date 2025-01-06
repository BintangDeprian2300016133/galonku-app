import React, { useState, useEffect } from "react";
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
import ForgotPassword from "./pages/forgot-password";
import Checkout from "./components/Cart/Checkout"; // Import halaman Checkout
import { saveOrder, getCart } from "./utils/storage"; // Perbaiki impor

const App = () => {
  // Check if the user is logged in
  const isLoggedIn = JSON.parse(localStorage.getItem("isLoggedIn")) || false;

  const [cart, setCart] = useState([]);

  // Fetch cart data from localStorage when the app first loads
  useEffect(() => {
    const storedCart = getCart();
    if (storedCart) setCart(storedCart);
  }, []);

  // Update the cart state and localStorage
  const updateCart = (updatedCart) => {
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart)); // Save to localStorage
  };

  // Add item to cart
  const addToCart = (item) => {
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      const updatedCart = cart.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
      updateCart(updatedCart);
    } else {
      updateCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  // Remove item from cart
  const removeFromCart = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    updateCart(updatedCart);
  };

  // Update quantity of an item in the cart
  const updateQuantity = (id, quantity) => {
    const updatedCart = cart.map((item) =>
      item.id === id ? { ...item, quantity } : item
    );
    updateCart(updatedCart);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Router>
        {/* Only show Header if the user is logged in */}
        {isLoggedIn && (
          <Header
            cart={cart}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
            updateQuantity={updateQuantity}
          />
        )}
        <main className="flex-grow container mx-auto p-4">
          <Routes>
            <Route
              path="/"
              element={
                isLoggedIn ? (
                  <Home addToCart={addToCart} />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
            <Route
              path="/order"
              element={
                isLoggedIn ? (
                  <Order onOrderSubmit={(order) => saveOrder(order)} />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
            <Route
              path="/history"
              element={isLoggedIn ? <History /> : <Navigate to="/login" />}
            />
            <Route
              path="/checkout"
              element={
                isLoggedIn ? (
                  <Checkout
                    cart={cart}
                    updateQuantity={updateQuantity}
                    removeFromCart={removeFromCart}
                  />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/feature" element={<Feature />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
          </Routes>
        </main>
        {/* Only show Footer if the user is logged in */}
        {isLoggedIn && <Footer />}
      </Router>
    </div>
  );
};

export default App;
