// src/pages/ThankYou.js
import { Link } from "react-router-dom";

const ThankYou = () => {
  return (
    <div className="p-6 text-center">
      <h2 className="text-2xl font-bold">Thank You for Your Order!</h2>
      <p>Your order has been placed successfully.</p>
      <Link to="/">Continue Shopping</Link>
    </div>
  );
};

export default ThankYou;