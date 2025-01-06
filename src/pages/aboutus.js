import React from "react";

const AboutUs = () => {
  return (
    <section id="about" className="py-16 px-6 text-center">
      <h2 className="text-3xl font-semibold mb-6">Tentang Kami</h2>
      <p className="mb-6 max-w-4xl mx-auto">
        Selamat datang di <strong>Qyara Tirta Jaya</strong> – solusi praktis dan
        terpercaya untuk kebutuhan air minum isi ulang Anda. Kami hadir dengan
        komitmen untuk menyediakan air minum berkualitas tinggi dengan harga
        yang terjangkau, menjaga keberlanjutan lingkungan melalui kemasan yang
        ramah lingkungan, dan memberikan kemudahan dalam setiap pemesanan.
      </p>
      <p className="mb-6 max-w-4xl mx-auto">
        Di <strong>Qyara Tirta Jaya</strong>, kami memahami betapa pentingnya
        kualitas air untuk kesehatan keluarga Anda. Oleh karena itu, kami
        memastikan air yang kami suplai telah melalui berbagai proses
        penyaringan dan pemurnian yang ketat, serta telah teruji di laboratorium
        untuk memastikan kualitas dan keamanan air yang kami tawarkan. Kami
        bekerja sama dengan laboratorium terpercaya untuk menguji kandungan air
        secara berkala, sehingga Anda dapat merasa aman dan nyaman setiap kali
        mengonsumsinya.
      </p>
      <p className="mb-6 max-w-4xl mx-auto">
        Air minum kami tidak hanya bersih dan segar, tetapi juga telah memenuhi
        standar kesehatan yang ketat. Kami berkomitmen untuk hanya menyediakan
        air yang aman, higienis, dan bebas dari kontaminasi yang dapat
        membahayakan kesehatan. Anda dapat mempercayakan kebutuhan air minum
        Anda kepada kami, karena kami memastikan produk yang kami tawarkan halal
        dan sesuai dengan prinsip-prinsip yang dijunjung tinggi oleh masyarakat.
      </p>
      <p className="mb-6 max-w-4xl mx-auto">
        Melalui website ini, kami ingin mempermudah proses pemesanan air minum
        isi ulang, mulai dari pemesanan yang bisa dilakukan secara online,
        formulir pengiriman yang mudah diisi, hingga berbagai pilihan pembayaran
        yang fleksibel. Kami juga memberikan fitur riwayat pemesanan untuk
        memudahkan Anda melacak transaksi sebelumnya.
      </p>
      <p className="mb-6 max-w-4xl mx-auto">
        Terima kasih telah memilih <strong>Qyara Tirta Jaya</strong> sebagai
        mitra terpercaya dalam memenuhi kebutuhan air minum sehat, halal, dan
        berkualitas.
      </p>

      <div className="mb-6 max-w-4xl mx-auto">
        <h3 className="text-2xl font-semibold mb-4">Visi & Misi</h3>
        <ol className="list-decimal pl-6 text-left space-y-2">
          <li>
            <strong>Visi:</strong> Menjadi penyedia air minum isi ulang yang
            terpercaya di setiap rumah tangga dan bisnis, serta berkontribusi
            pada pengurangan sampah plastik dengan menghadirkan solusi
            pengemasan yang lebih ramah lingkungan.
          </li>
          <li>
            <strong>Misi:</strong> Menyediakan layanan pemesanan yang cepat,
            aman, dan praktis, serta menjamin kepuasan pelanggan dengan
            pelayanan yang responsif dan solusi terbaik untuk kebutuhan air
            minum Anda.
          </li>
        </ol>
      </div>

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
