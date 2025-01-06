import React, { useState, useEffect } from "react";
import OrderHistory from "../components/orderhistory";

const History = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Memuat pesanan dari localStorage
    const storedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(storedOrders);
  }, []);

  const handleConfirmOrder = (orderId) => {
    const updatedOrders = orders.map((order) =>
      order.id === orderId
        ? { ...order, status: "Pesanan Akan Segera Dikirim" }
        : order
    );
    localStorage.setItem("orders", JSON.stringify(updatedOrders));
    setOrders(updatedOrders);
  };

  const handleCancelOrder = (orderId) => {
    const updatedOrders = orders.map((order) =>
      order.id === orderId ? { ...order, status: "Dibatalkan" } : order
    );
    localStorage.setItem("orders", JSON.stringify(updatedOrders));
    setOrders(updatedOrders);
  };

  const formatToIDR = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(number);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Riwayat Pesanan</h1>
      <OrderHistory
        orders={orders}
        onConfirmOrder={handleConfirmOrder}
        onCancelOrder={handleCancelOrder}
        formatToIDR={formatToIDR} // Kirim fungsi formatToIDR ke komponen OrderHistory
      />
    </div>
  );
};

export default History;
