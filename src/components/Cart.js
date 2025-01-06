import React, { useState } from "react";
import galonKosongImg from "../assets/galon-kosong.png"; // Pastikan file gambar berada di folder assets
import galonIsiUlangImg from "../assets/galon-isi-ulang.png";
import galonAquaImg from "../assets/galon-aqua.png";

const Home = ({ addToCart }) => {
  const [selectedProduct, setSelectedProduct] = useState(null); // Produk yang dipilih
  const [quantity, setQuantity] = useState(1); // Jumlah default

  const products = [
    {
      id: 1,
      name: "Galon Kosong",
      price: 30000,
      image: galonKosongImg,
    },
    {
      id: 2,
      name: "Galon Isi Ulang",
      price: 5000,
      image: galonIsiUlangImg,
    },
    {
      id: 3,
      name: "Galon Aqua",
      price: 50000,
      image: galonAquaImg,
    },
  ];

  const handleAddToCart = (product) => {
    setSelectedProduct(product); // Atur produk yang dipilih
  };

  const confirmAddToCart = () => {
    if (quantity > 0) {
      addToCart({ ...selectedProduct, quantity }); // Tambahkan produk dengan jumlah
      alert(
        `${selectedProduct.name} sebanyak ${quantity} berhasil ditambahkan ke keranjang!`
      );
      setSelectedProduct(null); // Reset produk yang dipilih
      setQuantity(1); // Reset jumlah
    } else {
      alert("Jumlah harus lebih dari 0!");
    }
  };

  return (
    <div className="bg-white p-4">
      <h2 className="text-2xl font-bold mb-4 text-center">
        Selamat Datang di Aplikasi Pemesanan Galon Qyara Tirta Jaya
      </h2>
      <p className="text-center text-gray-600">
        Solusi mudah dan cepat untuk memenuhi kebutuhan air minum Anda.
      </p>
      <p className="text-center text-gray-600 mb-8">
        Silakan pilih menu di atas untuk mulai memesan atau melihat riwayat
        pemesanan Anda.
      </p>

      {/* Product List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg p-4 shadow hover:shadow-lg transition"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-32 object-contain mb-4"
            />
            <h3 className="text-lg font-bold">{product.name}</h3>
            <p className="text-gray-600 mb-2">
              Harga: Rp {product.price.toLocaleString()}
            </p>
            <button
              onClick={() => handleAddToCart(product)}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition w-full"
            >
              Tambah ke Keranjang
            </button>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded shadow-lg w-80">
            <h3 className="text-lg font-bold mb-4">
              Tambahkan {selectedProduct.name} ke Keranjang
            </h3>
            <p className="mb-2">
              Harga: Rp {selectedProduct.price.toLocaleString()}
            </p>
            <div className="flex items-center mb-4">
              <label htmlFor="quantity" className="mr-2 font-semibold">
                Jumlah:
              </label>
              <input
                type="number"
                id="quantity"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                className="border rounded px-2 py-1 w-20"
              />
            </div>
            <div className="flex justify-end space-x-2">
              <button
                onClick={() => setSelectedProduct(null)}
                className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
              >
                Batal
              </button>
              <button
                onClick={confirmAddToCart}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Tambahkan
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
