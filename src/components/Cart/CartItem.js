import React from "react";

const CartItem = ({ item, updateQuantity, removeFromCart }) => {
  const handleUpdateQuantity = (delta) => {
    if (updateQuantity && typeof updateQuantity === "function") {
      const newQuantity = Math.max(0, (item.quantity || 0) + delta); // Mencegah kuantitas negatif
      updateQuantity(item.id, newQuantity);
    }
  };

  const handleRemoveFromCart = () => {
    if (removeFromCart && typeof removeFromCart === "function") {
      removeFromCart(item.id);
    }
  };

  return (
    <div className="flex justify-between items-center mb-4 p-4 bg-white shadow rounded">
      {/* Item Details */}
      <div>
        <p className="font-medium text-lg">{item.name}</p>
        <p className="text-sm text-gray-500">Quantity: {item.quantity || 0}</p>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-2">
        {/* Decrease Quantity */}
        <button
          onClick={() => handleUpdateQuantity(-1)}
          className="px-3 py-1 text-sm bg-gray-200 hover:bg-gray-300 rounded"
        >
          -
        </button>

        {/* Display Current Quantity */}
        <span className="px-3 py-1 text-sm font-medium bg-gray-100 border rounded">
          {item.quantity || 0}
        </span>

        {/* Increase Quantity */}
        <button
          onClick={() => handleUpdateQuantity(1)}
          className="px-3 py-1 text-sm bg-gray-200 hover:bg-gray-300 rounded"
        >
          +
        </button>

        {/* Remove Button */}
        <button
          onClick={handleRemoveFromCart}
          className="ml-4 px-3 py-1 text-sm text-red-500 hover:text-red-700"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;
