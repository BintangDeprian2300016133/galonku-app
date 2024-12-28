import React, { useState, useEffect } from "react";
import { getOrders, updateOrderStatus } from "../utils/storage";

const OrderHistory = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Memuat pesanan dari localStorage saat pertama kali render
    const fetchedOrders = getOrders();
    setOrders(fetchedOrders);
  }, []);

  const handleConfirmOrder = (orderId) => {
    const updatedOrders = orders.map((order) =>
      order.id === orderId
        ? { ...order, status: "Pesanan Akan Segera Dikirim" }
        : order
    );
    updateOrderStatus(updatedOrders);
    setOrders(updatedOrders);
  };

  const handleCancelOrder = (orderId) => {
    const updatedOrders = orders.map((order) =>
      order.id === orderId ? { ...order, status: "Dibatalkan" } : order
    );
    updateOrderStatus(updatedOrders);
    setOrders(updatedOrders);
  };

  return (
    <div className="bg-white p-4 rounded shadow-md">
      <h2 className="text-xl mb-4">Riwayat Pemesanan</h2>
      {orders.length === 0 ? (
        <p>Tidak ada riwayat pemesanan.</p>
      ) : (
        <ul>
          {orders.map((order, index) => (
            <li key={index} className="border-b py-2">
              <p>
                <strong>Tanggal:</strong> {order.date}
              </p>
              <p>
                <strong>Nama:</strong> {order.name}
              </p>
              <p>
                <strong>Alamat:</strong> {order.address}
              </p>
              <p>
                <strong>Nomor Telepon:</strong> {order.phone}
              </p>
              <p>
                <strong>Jumlah Galon:</strong> {order.gallons}
              </p>
              <p>
                <strong>Metode Pembayaran:</strong> {order.paymentMethod}
              </p>
              <p>
                <strong>Status:</strong> {order.status}
              </p>
              {order.status === "Menunggu" && (
                <div>
                  <button
                    onClick={() => handleConfirmOrder(order.id)}
                    className="bg-blue-500 text-white p-2 rounded mr-2"
                  >
                    Konfirmasi Pesanan
                  </button>
                  <button
                    onClick={() => handleCancelOrder(order.id)}
                    className="bg-red-500 text-white p-2 rounded"
                  >
                    Batalkan Pesanan
                  </button>
                </div>
              )}
              {order.status === "Pesanan Akan Segera Dikirim" && (
                <p className="text-green-500 mt-2">
                  Pesanan sedang diproses untuk dikirim
                </p>
              )}
              {order.status === "Dibatalkan" && (
                <p className="text-red-500 mt-2">
                  Pesanan dibatalkan oleh pengguna
                </p>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default OrderHistory;
