import React, { useEffect, useState } from 'react';
import { fetchProducts, deleteProduct, updateProduct, addProduct } from '../api';
import ProductCard from './ProductCard';
import ProductForm from './ProductForm';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [categoryFilter, setCategoryFilter] = useState('');
    const [priceFilter, setPriceFilter] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    // Load products
    const loadProducts = async () => {
        const data = await fetchProducts();
        setProducts(data);
    };

    useEffect(() => {
        loadProducts();
    }, []);

    // Handle Add Product
    const handleAddProduct = async (newProduct) => {
        await addProduct(newProduct);
        loadProducts(); // Refresh product list after adding
    };

    // Handle Delete
    const handleDelete = async (id) => {
        await deleteProduct(id);
        loadProducts();
    };

    // Handle Edit
    const handleEdit = async (updatedProduct) => {
        await updateProduct(updatedProduct);
        loadProducts();
    };

    // Filter products
    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (categoryFilter === '' || product.category === categoryFilter) &&
        (priceFilter === 0 || product.price <= priceFilter)
    );

    // Pagination logic
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentProducts = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);

    return (
        <div className="product-list-container">
            {/* Add Product Form */}
            <ProductForm onAdd={handleAddProduct} />

            {/* Move the heading below ProductForm */}
            <h1>Our Products</h1>

            {/* Search and Filters */}
            <div className="filters">
                <input
                    type="text"
                    placeholder="Search by name..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <select onChange={(e) => setCategoryFilter(e.target.value)}>
                    <option value="">All Categories</option>
                    <option value="Smartphones">Smartphones</option>
                    <option value="Laptops">Laptops</option>
                    <option value="Accessories">Accessories</option>
                </select>
                <input
                    type="number"
                    placeholder="Max Price (₹)"
                    value={priceFilter}
                    onChange={(e) => setPriceFilter(Number(e.target.value))}
                />
            </div>

            {/* Product Listing */}
            <div className="product-list">
                {currentProducts.length > 0 ? (
                    currentProducts.map((product) => (
                        <ProductCard key={product.id} product={product} onDelete={handleDelete} onEdit={handleEdit} />
                    ))
                ) : (
                    <p>No products found</p>
                )}
            </div>

      {/* Pagination */}
<div className="pagination">
    {Array.from({ length: Math.ceil(filteredProducts.length / itemsPerPage) }).map((_, index) => (
        <button 
            key={index} 
            onClick={() => {
                setCurrentPage(index + 1);
                window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to top on page change
            }} 
            className={currentPage === index + 1 ? "active" : ""}
        >
            {index + 1}
        </button>
    ))}
</div>
        </div>
    );
};

export default ProductList;