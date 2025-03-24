import React, { useState, useEffect } from 'react';
import { TextField, Button, Grid, Card, CardContent, Typography } from '@mui/material';

const ManageProducts = () => {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [editingProduct, setEditingProduct] = useState(null);

  // Load products from localStorage on component mount
  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
    setProducts(storedProducts);
  }, []);

  // Save products to localStorage
  const saveProductsToLocalStorage = (updatedProducts) => {
    localStorage.setItem('products', JSON.stringify(updatedProducts));
    setProducts(updatedProducts);
  };

  // Handle adding a new product
  const handleAddProduct = () => {
    if (name && price) {
      const newProduct = {
        id: Date.now(),
        name,
        price: parseFloat(price),
      };
      const updatedProducts = [...products, newProduct];
      saveProductsToLocalStorage(updatedProducts);
      setName('');
      setPrice('');
    }
  };

  // Handle editing a product
  const handleEditProduct = (product) => {
    setEditingProduct(product);
    setName(product.name);
    setPrice(product.price.toString());
  };

  // Handle updating an edited product
  const handleUpdateProduct = () => {
    if (name && price && editingProduct) {
      const updatedProduct = { ...editingProduct, name, price: parseFloat(price) };
      const updatedProducts = products.map((product) =>
        product.id === editingProduct.id ? updatedProduct : product
      );
      saveProductsToLocalStorage(updatedProducts);
      setEditingProduct(null);
      setName('');
      setPrice('');
    }
  };

  // Handle deleting a product
  const handleDeleteProduct = (id) => {
    const updatedProducts = products.filter((product) => product.id !== id);
    saveProductsToLocalStorage(updatedProducts);
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Manage Products
      </Typography>

      {/* Product Form for Add/Edit */}
      <Grid container spacing={2} style={{ marginBottom: '20px' }}>
        <Grid item xs={4}>
          <TextField
            label="Product Name"
            variant="outlined"
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            label="Price"
            variant="outlined"
            type="number"
            fullWidth
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </Grid>
        <Grid item xs={4}>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={editingProduct ? handleUpdateProduct : handleAddProduct}
          >
            {editingProduct ? 'Update Product' : 'Add Product'}
          </Button>
        </Grid>
      </Grid>

      {/* Display Products */}
      <Grid container spacing={2}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <Card>
              <CardContent>
                <Typography variant="h6">{product.name}</Typography>
                <Typography variant="body2">${product.price}</Typography>
                <Button
                  variant="outlined"
                  color="primary"
                  style={{ marginTop: '10px' }}
                  onClick={() => handleEditProduct(product)}
                >
                  Edit
                </Button>
                <Button
                  variant="outlined"
                  color="secondary"
                  style={{ marginTop: '10px', marginLeft: '10px' }}
                  onClick={() => handleDeleteProduct(product.id)}
                >
                  Delete
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ManageProducts;
