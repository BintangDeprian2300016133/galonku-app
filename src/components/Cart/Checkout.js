import React from "react";

const Checkout = ({ cart = [], updateQuantity, removeFromCart }) => {
  const handleUpdateQuantity = (id, quantity) => {
    if (quantity < 1) return;
    updateQuantity(id, quantity);
  };

  const handleRemoveFromCart = (id) => {
    removeFromCart(id);
  };

  const totalAmount = cart.reduce(
    (total, item) => total + (item.price || 0) * (item.quantity || 0),
    0
  );

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>
      {cart.length > 0 ? (
        <div>
          <ul className="cart-items">
            {cart.map((item) => (
              <li key={item.id} className="cart-item">
                <span className="item-name">{item.name}</span>
                <span className="item-price">${item.price || 0}</span>
                <input
                  type="number"
                  value={item.quantity || 0}
                  min="1"
                  onChange={(e) =>
                    handleUpdateQuantity(item.id, parseInt(e.target.value, 10))
                  }
                  className="quantity-input"
                />
                <button
                  onClick={() => handleRemoveFromCart(item.id)}
                  className="remove-button"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>

          <div className="total-amount">
            <h3>Total: ${totalAmount.toFixed(2)}</h3>
          </div>

          <button className="checkout-button">Proceed to Payment</button>
        </div>
      ) : (
        <p>
          Your cart is empty. Please add items to your cart before checking out.
        </p>
      )}
    </div>
  );
};

export default Checkout;
