import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const Filters = ({ setProducts, products }) => {
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [rating, setRating] = useState("");

  const applyFilters = () => {
    let filtered = [...products];

    if (category) {
      filtered = filtered.filter((p) => p.category === category);
    }
    if (price) {
      const [min, max] = price.split("-").map(Number);
      filtered = filtered.filter((p) => p.price >= min && p.price <= max);
    }
    if (rating) {
      filtered = filtered.filter((p) => p.rating >= rating);
    }

    setProducts(filtered);
  };

  return (
    <div className="filters">
      <h5>Filters</h5>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Category</Form.Label>
          <Form.Select onChange={(e) => setCategory(e.target.value)}>
            <option value="">All</option>
            <option value="Electronics">Electronics</option>
            <option value="Fashion">Fashion</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Price Range</Form.Label>
          <Form.Select onChange={(e) => setPrice(e.target.value)}>
            <option value="">All</option>
            <option value="0-50">Under $50</option>
            <option value="50-100">$50 - $100</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Rating</Form.Label>
          <Form.Select onChange={(e) => setRating(e.target.value)}>
            <option value="">All</option>
            <option value="4">4★ & above</option>
            <option value="3">3★ & above</option>
          </Form.Select>
        </Form.Group>

        <Button variant="primary" onClick={applyFilters}>
          Apply Filters
        </Button>
      </Form>
    </div>
  );
};

export default Filters;
