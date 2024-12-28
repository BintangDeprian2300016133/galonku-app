// Fungsi untuk mendapatkan pesanan dari localStorage
export const getOrders = () => {
  return JSON.parse(localStorage.getItem("orders")) || [];
};

// Fungsi untuk menyimpan pesanan ke localStorage
export const saveOrder = (order) => {
  const existingOrders = getOrders();
  existingOrders.push(order);
  localStorage.setItem("orders", JSON.stringify(existingOrders));
};

// Fungsi untuk memperbarui status pesanan
export const updateOrderStatus = (orderId, newStatus) => {
  const orders = getOrders();
  const updatedOrders = orders.map((order) => {
    if (order.id === orderId) {
      return { ...order, status: newStatus }; // Mengubah status pesanan
    }
    return order;
  });
  localStorage.setItem("orders", JSON.stringify(updatedOrders)); // Simpan perubahan kembali ke localStorage
};

// Fungsi untuk menghapus semua pesanan
export const clearOrders = () => {
  localStorage.removeItem("orders");
};
