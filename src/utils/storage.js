// Fungsi untuk mendapatkan pesanan dari localStorage
export const getOrders = () => {
  const orders = localStorage.getItem("orders");
  return orders ? JSON.parse(orders) : []; // Mengembalikan array kosong jika tidak ada pesanan
};

// Fungsi untuk menyimpan pesanan ke localStorage
export const saveOrder = (order) => {
  const existingOrders = getOrders();
  existingOrders.push(order);
  localStorage.setItem("orders", JSON.stringify(existingOrders)); // Simpan pesanan baru
};

// Fungsi untuk memperbarui status pesanan berdasarkan ID pesanan
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

// Fungsi untuk menghapus pesanan berdasarkan ID pesanan
export const removeOrder = (orderId) => {
  const orders = getOrders();
  const updatedOrders = orders.filter((order) => order.id !== orderId); // Menghapus pesanan berdasarkan ID
  localStorage.setItem("orders", JSON.stringify(updatedOrders)); // Simpan perubahan ke localStorage
};

// Fungsi untuk menghapus semua pesanan
export const clearOrders = () => {
  localStorage.removeItem("orders"); // Menghapus semua pesanan di localStorage
};

// Fungsi untuk mendapatkan keranjang belanja dari localStorage
export const getCart = () => {
  const cart = localStorage.getItem("cart");
  return cart ? JSON.parse(cart) : []; // Mengembalikan array kosong jika tidak ada data keranjang
};

// Fungsi untuk menambahkan item ke dalam keranjang
export const addToCart = (item) => {
  const existingCart = getCart();
  existingCart.push(item);
  localStorage.setItem("cart", JSON.stringify(existingCart)); // Simpan keranjang yang diperbarui
};

// Fungsi untuk menyimpan seluruh keranjang ke localStorage
export const saveCart = (cart) => {
  localStorage.setItem("cart", JSON.stringify(cart)); // Simpan seluruh cart ke localStorage
};

// Fungsi untuk mengupdate item dalam keranjang (misalnya jumlah item)
export const updateCartItem = (itemId, newItemData) => {
  const cart = getCart();
  const updatedCart = cart.map((item) => {
    if (item.id === itemId) {
      return { ...item, ...newItemData }; // Memperbarui data item
    }
    return item;
  });
  localStorage.setItem("cart", JSON.stringify(updatedCart)); // Simpan perubahan keranjang
};

// Fungsi untuk menghapus item dari keranjang berdasarkan ID
export const removeFromCart = (itemId) => {
  const cart = getCart();
  const updatedCart = cart.filter((item) => item.id !== itemId); // Menghapus item berdasarkan ID
  localStorage.setItem("cart", JSON.stringify(updatedCart)); // Simpan perubahan keranjang
};

// Fungsi untuk menghapus semua item dari keranjang
export const clearCart = () => {
  localStorage.removeItem("cart"); // Menghapus keranjang di localStorage
};