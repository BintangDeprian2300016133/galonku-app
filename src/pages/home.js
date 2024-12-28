import React from "react";

const Home = () => {
  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    window.location.reload();
  };

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
      <button
        onClick={handleLogout}
        className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
      >
        Keluar
      </button>
    </div>
  );
};

export default Home;
