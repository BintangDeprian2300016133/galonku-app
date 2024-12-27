import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 text-center w-full mt-auto">
      <p>© 2024 Qyara Tirta Jaya. Semua hak dilindungi.</p>
      <div className="mt-4 flex justify-center space-x-6">
        <a
          href="https://wa.me/your-phone-number"
          className="text-white hover:underline"
        >
          WhatsApp
        </a>
        <a
          href="https://instagram.com/your-instagram"
          className="text-white hover:underline"
        >
          Instagram
        </a>
        <a
          href="https://tiktok.com/@your-tiktok"
          className="text-white hover:underline"
        >
          TikTok
        </a>
      </div>
    </footer>
  );
};

export default Footer;
