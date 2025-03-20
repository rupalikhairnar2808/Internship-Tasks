// src/components/Checkout.js
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Checkout = ({ cart, setCart }) => {
  const [formData, setFormData] = useState({ name: "", address: "", phone: "", payment: "COD" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const order = { ...formData, items: cart, total: cart.reduce((acc, item) => acc + item.price * item.quantity, 0) };
    localStorage.setItem("orders", JSON.stringify([order, ...(JSON.parse(localStorage.getItem("orders")) || [])]));
    setCart([]);
    localStorage.removeItem("cart");
    navigate("/thank-you");
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">Checkout</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" onChange={handleChange} required />
        <input name="address" placeholder="Address" onChange={handleChange} required />
        <input name="phone" placeholder="Phone" onChange={handleChange} required />
        <select name="payment" onChange={handleChange}>
          <option value="COD">Cash on Delivery</option>
          <option value="UPI">UPI</option>
          <option value="Card">Card</option>
        </select>
        <button type="submit">Place Order</button>
      </form>
    </div>
  );
};

export default Checkout;
