import React from "react";

const CartItem = ({ item, updateQuantity, removeFromCart }) => {
  return (
    <div className="flex justify-between items-center mb-2">
      <div>
        <p className="font-medium">{item.name}</p>
        <p className="text-sm text-gray-500">Qty: {item.quantity || 0}</p>
      </div>
      <div className="flex items-center">
        <button
          onClick={() => updateQuantity(item.id, item.quantity - 1)}
          className="px-2 py-1 text-sm bg-gray-200 hover:bg-gray-300"
        >
          -
        </button>
        <button
          onClick={() => updateQuantity(item.id, item.quantity + 1)}
          className="px-2 py-1 text-sm bg-gray-200 hover:bg-gray-300"
        >
          +
        </button>
        <button
          onClick={() => removeFromCart(item.id)}
          className="ml-2 text-red-500 hover:text-red-700"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;
