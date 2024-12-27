import React from "react";
import tailwind from "../Input.css";

const Home = () => {
  return (
    <div className="bg-white p-4">
      <h2 className="text-2xl mb-4">
        Selamat Datang di Aplikasi Pemesanan Galon Qyara Tirta Jaya
      </h2>
      <p className="mb-4">
        Solusi mudah dan cepat untuk memenuhi kebutuhan air minum Anda.
      </p>
      <p>
        Silakan pilih menu di atas untuk mulai memesan atau melihat riwayat
        pemesanan Anda.
      </p>
    </div>
  );
};

export default Home;
