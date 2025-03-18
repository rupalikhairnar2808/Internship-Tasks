import React, { useState } from "react";

const OrderItem = ({ order }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="order-card">
      <p><strong>Order Date:</strong> {order.date}</p>
      <p><strong>Status:</strong> {order.status}</p>
      <p><strong>Total:</strong> ${order.total.toFixed(2)}</p>
      <button className="toggle-btn" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "Hide Details" : "View Details"}
      </button>

      {isOpen && (
        <ul className="order-details">
          {order.items.map((item, index) => (
            <li key={index}>{item.name} - ${item.price} x {item.quantity}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default OrderItem;
