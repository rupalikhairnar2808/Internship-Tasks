import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductList from "./components/ProductList";
import NavBar from "./components/Navbar";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div>
      <NavBar setSearchTerm={setSearchTerm} />
      <ProductList searchTerm={searchTerm} />
    </div>
  );
};

export default App;
