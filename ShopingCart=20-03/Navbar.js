// src/components/Navbar.js
import { Link } from "react-router-dom";

const Navbar = ({ cart }) => {
  return (
    <nav className="p-4 bg-blue-600 text-white flex justify-between">
      <Link to="/" className="text-xl font-bold">Shop</Link>
      <Link to="/cart" className="relative">
        🛒 Cart ({cart.length})
      </Link>
    </nav>
  );
};

export default Navbar;
