import React, { useState } from "react";
import OrderForm from "../components/orderform";
import OrderSummary from "../components/ordersummary";
import { saveOrder } from "../utils/storage";

const Order = () => {
  const [order, setOrder] = useState(null);

  const handleOrderSubmit = (newOrder) => {
    // Menambahkan status "Menunggu" saat pesanan dibuat
    newOrder.status = "Menunggu";
    saveOrder(newOrder); // Simpan pesanan ke localStorage
    setOrder(newOrder); // Set order untuk ditampilkan di ringkasan
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Halaman Pemesanan</h1>
      <OrderForm onOrderSubmit={handleOrderSubmit} />
      {order ? (
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Ringkasan Pesanan</h2>
          <OrderSummary order={order} />
        </div>
      ) : (
        <p className="mt-8 text-gray-600">
          Belum ada pesanan. Silakan isi formulir di atas.
        </p>
      )}
    </div>
  );
};

export default Order;
