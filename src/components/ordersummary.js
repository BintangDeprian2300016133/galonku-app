import React from "react";
import { getOrders } from "../utils/storage";

const OrderHistory = () => {
  const orders = getOrders();

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
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default OrderHistory;
