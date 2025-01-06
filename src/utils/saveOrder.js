// Fungsi untuk menyimpan pesanan baru ke localStorage
export const saveOrder = (order) => {
  try {
    // Validasi input pesanan
    if (!order || typeof order !== "object" || !order.id) {
      throw new Error(
        "Pesanan tidak valid. Pastikan format data pesanan benar."
      );
    }

    // Ambil pesanan yang ada dari localStorage
    const existingOrders = JSON.parse(localStorage.getItem("orders")) || [];

    // Tambahkan pesanan baru ke dalam array pesanan
    existingOrders.push(order);

    // Simpan kembali array pesanan yang sudah diperbarui ke localStorage
    localStorage.setItem("orders", JSON.stringify(existingOrders));

    console.log("Pesanan berhasil disimpan:", order);
  } catch (error) {
    console.error("Gagal menyimpan pesanan:", error.message);
  }
};
