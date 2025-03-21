import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Filters from "./Filters";
import productsData from "../data/products";
import "../styles/styles.css";

const ProductList = ({ searchTerm }) => {
  const [products, setProducts] = useState(productsData);
  const [filteredProducts, setFilteredProducts] = useState(productsData);

  useEffect(() => {
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [searchTerm, products]);

  return (
    <Container>
      <Row>
        <Col md={3}>
          <Filters setProducts={setFilteredProducts} products={products} />
        </Col>
        <Col md={9}>
          <Row>
            {filteredProducts.map((product) => (
              <Col key={product.id} md={4} className="mb-4">
                <Card className="product-card">
                  <Card.Img variant="top" src={product.image} className="product-img" />
                  <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>Price: ${product.price}</Card.Text>
                    <Card.Text>Rating: ⭐ {product.rating}</Card.Text>
                    <Button variant="primary">Add to Cart</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductList;
