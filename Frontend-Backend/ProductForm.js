import React, { useState, useEffect } from 'react';

const ProductForm = ({ onAdd, product }) => {
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        price: '',
        category: '',
        stock: ''
    });

    // Load product data when editing
    useEffect(() => {
        if (product) {
            setFormData(product);
        }
    }, [product]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onAdd(formData);
        setFormData({ name: '', description: '', price: '', category: '', stock: '' }); // Reset form after submit
    };

    return (
        <div className="product-form-container">
            <h2>{product ? 'Edit Product' : 'Add New Product'}</h2>
            <form onSubmit={handleSubmit} className="product-form">
                <input type="text" name="name" placeholder="Product Name" value={formData.name} onChange={handleChange} required />
                <textarea name="description" placeholder="Product Description" value={formData.description} onChange={handleChange} required />
                <input type="number" name="price" placeholder="Price (₹)" value={formData.price} onChange={handleChange} required />
                <select name="category" value={formData.category} onChange={handleChange} required>
                    <option value="">Select Category</option>
                    <option value="Smartphones">Smartphones</option>
                    <option value="Laptops">Laptops</option>
                    <option value="Accessories">Accessories</option>
                </select>
                <input type="number" name="stock" placeholder="Stock Quantity" value={formData.stock} onChange={handleChange} required />
                <button type="submit">{product ? 'Update Product' : 'Add Product'}</button>
            </form>
        </div>
    );
};

export default ProductForm;