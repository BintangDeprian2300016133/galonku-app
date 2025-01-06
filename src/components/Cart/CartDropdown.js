// src/components/Cart/CartDropdown.js
import React from "react";
import { Link } from "react-router-dom";

const CartDropdown = ({ cart = [], updateQuantity, removeFromCart }) => {
  return (
    <div className="relative">
      <button className="btn btn-secondary">Cart ({cart?.length || 0})</button>
      <div className="absolute right-0 bg-white shadow-md p-4 w-64">
        {cart?.length === 0 ? (
          <p className="text-center text-gray-500">Cart is empty</p>
        ) : (
          <div>
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center mb-2"
              >
                <div>
                  <p className="font-medium">{item.name}</p>
                  <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
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
            ))}
            <Link to="/checkout" className="btn btn-primary w-full mt-2">
              Checkout
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartDropdown;
