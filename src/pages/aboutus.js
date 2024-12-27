import React from "react";

const AboutUs = () => {
  return (
    <section id="about" className="py-16 px-6 text-center">
      <h2 className="text-3xl font-semibold mb-6">Tentang Kami</h2>
      <p className="mb-6">
        Qyara Tirta Jaya menyediakan layanan pemesanan air galon berkualitas
        dengan pengiriman cepat dan harga terjangkau.
      </p>
      <div className="flex justify-center gap-12">
        <div className="text-center">
          <i className="fas fa-tint text-4xl text-blue-500 mb-4"></i>
          <h3 className="font-semibold">Bersih</h3>
          <p>Air berkualitas tinggi, bebas kontaminasi.</p>
        </div>
        <div className="text-center">
          <i className="fas fa-truck text-4xl text-blue-500 mb-4"></i>
          <h3 className="font-semibold">Mudah</h3>
          <p>Proses pemesanan yang cepat dan mudah.</p>
        </div>
        <div className="text-center">
          <i className="fas fa-cogs text-4xl text-blue-500 mb-4"></i>
          <h3 className="font-semibold">Efisien</h3>
          <p>Pengiriman tepat waktu dan sesuai kebutuhan.</p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
