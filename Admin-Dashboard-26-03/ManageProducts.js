// ManageProducts.js
import React, { useState, useEffect } from 'react';

const ManageProducts = () => {
    const [products, setProducts] = useState([]);
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [image, setImage] = useState('');
    const [rating, setRating] = useState('');
    const [editingProductId, setEditingProductId] = useState(null);

    useEffect(() => {
        const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
        setProducts(storedProducts);
    }, []);

    const saveProducts = (updatedProducts) => {
        localStorage.setItem('products', JSON.stringify(updatedProducts));
        setProducts(updatedProducts);
    };

    const handleAddProduct = (e) => {
        e.preventDefault();
        const newProduct = {
            id: products.length + 1,
            name,
            price: parseFloat(price),
            category,
            image,
            rating: parseFloat(rating),
        };
        const updatedProducts = [...products, newProduct];
        saveProducts(updatedProducts);
        setName('');
        setPrice('');
        setCategory('');
        setImage('');
        setRating('');
    };

    const handleEditProduct = (product) => {
        setName(product.name);
        setPrice(product.price);
        setCategory(product.category);
        setImage(product.image);
        setRating(product.rating);
        setEditingProductId(product.id);
    };

    const handleUpdateProduct = (e) => {
        e.preventDefault();
        const updatedProducts = products.map((product) =>
            product.id === editingProductId
                ? { ...product, name, price: parseFloat(price), category, image, rating: parseFloat(rating) }
                : product
        );
        saveProducts(updatedProducts);
        setName('');
        setPrice('');
        setCategory('');
        setImage('');
        setRating('');
        setEditingProductId(null);
    };

    const handleDeleteProduct = (id) => {
        const updatedProducts = products.filter((product) => product.id !== id);
        saveProducts(updatedProducts);
    };

    return (
        <div className="container">
            <h2>Manage Products</h2>
            <form onSubmit={editingProductId ? handleUpdateProduct : handleAddProduct}>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Price</label>
                    <input
                        type="number"
                        className="form-control"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Category</label>
                    <input
                        type="text"
                        className="form-control"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Image URL</label>
                    <input
                        type="text"
                        className="form-control"
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Rating</label>
                    <input
                        type="number"
                        className="form-control"
                        value={rating}
                        onChange={(e) => setRating(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    {editingProductId ? 'Update Product' : 'Add Product'}
                </button>
            </form>
            <h3 className="mt-4">Product List</h3>
            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Category</th>
                        <th>Image</th>
                        <th>Rating</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <tr key={product.id}>
                            <td>{product.name}</td>
                            <td>₹{product.price}</td>
                            <td>{product.category}</td>
                            <td>
                                <img src={product.image} alt={product.name} width="50" />
                            </td>
                            <td>{product.rating} ⭐</td>
                            <td>
                                <button
                                    className="btn btn-warning btn-sm me-2"
                                    onClick={() => handleEditProduct(product)}
                                >
                                    Edit
                                </button>
                                <button
                                    className="btn btn-danger btn-sm"
                                    onClick={() => handleDeleteProduct(product.id)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ManageProducts;