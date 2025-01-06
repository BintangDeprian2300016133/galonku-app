import React from "react";

const CartSummary = ({ cart = [] }) => {
  const totalItems = cart.reduce(
    (total, item) => total + (item.quantity || 0),
    0
  );
  const totalPrice = cart.reduce(
    (total, item) => total + (item.quantity || 0) * (item.price || 0),
    0
  );

  return (
    <div className="p-4 border rounded-md">
      <h2 className="text-lg font-bold mb-2">Cart Summary</h2>
      <p>Total Items: {totalItems}</p>
      <p>
        Total Price: Rp {totalPrice.toLocaleString("id-ID")} {/* Menggunakan toLocaleString dengan kode lokal Indonesia */}
      </p>
    </div>
  );
};

export default CartSummary;
