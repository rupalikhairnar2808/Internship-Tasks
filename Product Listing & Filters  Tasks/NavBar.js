import React from "react";
import { Navbar, Container, Form, FormControl } from "react-bootstrap";

const NavBar = ({ setSearchTerm }) => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">Shop</Navbar.Brand>
        <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Search products..."
            className="me-2"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </Form>
      </Container>
    </Navbar>
  );
};

export default NavBar;
