// Fungsi untuk menyimpan pesanan baru ke localStorage
export const saveOrder = (order) => {
  // Ambil pesanan yang ada dari localStorage
  const existingOrders = JSON.parse(localStorage.getItem("orders")) || [];

  // Tambahkan pesanan baru ke dalam array pesanan
  existingOrders.push(order);

  // Simpan kembali array pesanan yang sudah diperbarui ke localStorage
  localStorage.setItem("orders", JSON.stringify(existingOrders));
};
