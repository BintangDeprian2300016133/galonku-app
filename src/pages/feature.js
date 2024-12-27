import React from "react";

const Features = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-8">Fitur Utama</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <i className="fas fa-shopping-cart text-4xl text-blue-500 mb-4"></i>
            <h3 className="font-semibold mb-2">Pemesanan Mudah</h3>
            <p>Pesan galon hanya dalam beberapa klik melalui website.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <i className="fas fa-credit-card text-4xl text-blue-500 mb-4"></i>
            <h3 className="font-semibold mb-2">Beragam Metode Pembayaran</h3>
            <p>Pilih metode pembayaran yang paling nyaman untuk Anda.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <i className="fas fa-history text-4xl text-blue-500 mb-4"></i>
            <h3 className="font-semibold mb-2">Riwayat Pesanan</h3>
            <p>Akses riwayat pesanan Anda kapan saja dengan mudah.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
