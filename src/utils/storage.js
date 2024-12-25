// src/utils/storage.js

// Fungsi untuk menyimpan pesanan ke localStorage
export const saveOrder = (order) => {
  const existingOrders = JSON.parse(localStorage.getItem("orders")) || [];
  existingOrders.push(order);
  localStorage.setItem("orders", JSON.stringify(existingOrders));
};

// Fungsi untuk mengambil semua pesanan dari localStorage
export const getOrders = () => {
  return JSON.parse(localStorage.getItem("orders")) || [];
};

// Fungsi untuk menghapus semua pesanan dari localStorage
export const clearOrders = () => {
  localStorage.removeItem("orders");
};
