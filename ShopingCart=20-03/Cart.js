// src/components/Cart.js
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Cart = ({ cart, setCart }) => {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const newTotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setTotal(newTotal);
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const updateQuantity = (id, change) => {
    const updatedCart = cart.map((item) =>
      item.id === id ? { ...item, quantity: Math.max(1, item.quantity + change) } : item
    );
    setCart(updatedCart);
  };

  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} className="flex justify-between p-4 border-b">
              <div>
                <img src={item.image} alt={item.name} className="w-16 h-16" />
                <h3>{item.name}</h3>
              </div>
              <p>${item.price}</p>
              <div>
                <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, 1)}>+</button>
              </div>
              <button onClick={() => removeItem(item.id)}>Remove</button>
            </div>
          ))}
          <h3 className="text-xl">Total: ${total.toFixed(2)}</h3>
          <Link to="/checkout" className="btn">Proceed to Checkout</Link>
        </>
      )}
    </div>
  );
};

export default Cart;
