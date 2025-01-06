import React, { useState } from "react";
import OrderForm from "../components/orderform";
import OrderSummary from "../components/ordersummary";
import CartDropdown from "../components/Cart/CartDropdown"; // Gunakan CartDropdown
import { saveOrder, getCart, saveCart } from "../utils/storage";

const Order = ({ onOrderSubmit }) => {
  const [order, setOrder] = useState(null);
  const [cart, setCart] = useState(getCart() || []);

  const handleAddToCart = (newOrder) => {
    newOrder.status = "Dalam Keranjang";
    const updatedCart = [...cart, newOrder];
    setCart(updatedCart);
    saveCart(updatedCart);
  };

  const handleOrderSubmit = (newOrder) => {
    newOrder.status = "Menunggu";
    saveOrder(newOrder);
    setOrder(newOrder);
    if (onOrderSubmit) onOrderSubmit(newOrder);
  };

  const handleUpdateQuantity = (id, newQuantity) => {
    const updatedCart = cart.map((item) =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    );
    setCart(updatedCart);
    saveCart(updatedCart);
  };

  const handleRemoveFromCart = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    saveCart(updatedCart);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Halaman Pemesanan</h1>

      <OrderForm
        onAddToCart={handleAddToCart}
        onOrderSubmit={handleOrderSubmit}
      />

      {/* Tambahkan CartDropdown */}
      <div className="mt-4">
        <CartDropdown
          cart={cart}
          updateQuantity={handleUpdateQuantity}
          removeFromCart={handleRemoveFromCart}
        />
      </div>

      {order ? (
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4 text-center">
            Ringkasan Pesanan
          </h2>
          <OrderSummary order={order} />
        </div>
      ) : (
        <p className="mt-8 text-gray-600 text-center">
          Belum ada pesanan. Silakan isi formulir di atas.
        </p>
      )}
    </div>
  );
};

export default Order;
