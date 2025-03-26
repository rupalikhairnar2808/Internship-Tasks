// AdminDashboard.js
import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import ManageProducts from './ManageProducts';
import ManageOrders from './ManageOrders';

// Initialize sample data if it doesn't already exist
if (!localStorage.getItem('products')) {
    localStorage.setItem('products', JSON.stringify([
        { id: 1, name: "Smartphone", price: 1000, rating: 4.5, image: "C:/Users/New folder/Desktop/java and html code (project)/HTML code/task26-03/images/p1.png", category: "Electronics" },
        { id: 2, name: "T-Shirt", price: 20, rating: 4.2, image: "C:/Users/New folder/Desktop/java and html code (project)/HTML code/task26-03/images/c2.png", category: "Clothing" },
        { id: 3, name: "Sneakers", price: 80, rating: 4.7, image: "C:/Users/New folder/Desktop/java and html code (project)/HTML code/task26-03/images/s1.png", category: "Footwear" },
        { id: 4, name: "Smartwatch", price: 150, rating: 4.3, image: "C:/Users/New folder/Desktop/java and html code (project)/HTML code/task26-03/images/p4.png", category: "Electronics" },
        { id: 5, name: "Jeans", price: 40, rating: 4.1, image: "C:/Users/New folder/Desktop/java and html code (project)/HTML code/task26-03/images/c2.png", category: "Clothing" },
        { id: 6, name: "Running Shoes", price: 90, rating: 4.6, image: "C:/Users/New folder/Desktop/java and html code (project)/HTML code/task26-03/images/s3.png", category: "Footwear" },
        { id: 7, name: "Laptop", price: 1200, rating: 4.8, image: "C:/Users/New folder/Desktop/java and html code (project)/HTML code/task26-03/images/p1.png", category: "Electronics" },
        { id: 8, name: "Hoodie", price: 50, rating: 4.0, image: "C:/Users/New folder/Desktop/java and html code (project)/HTML code/task26-03/images/c2.png", category: "Clothing" },
        { id: 9, name: "Casual Shoes", price: 70, rating: 4.4, image: "/images/s1.png", category: "Footwear" },
        { id: 10, name: "Tablet", price: 300, rating: 4.2, image: "/images/p4.png", category: "Electronics" },
        { id: 11, name: "Shirt", price: 30, rating: 4.3, image: "/images/c2.png", category: "Clothing" },
        { id: 12, name: "Formal Shoes", price: 100, rating: 4.5, image: "/images/s2.png", category: "Footwear" },
        { id: 13, name: "Headphones", price: 150, rating: 4.6, image: "/images/p4.png", category: "Electronics" },
        { id: 14, name: "Jacket", price: 80, rating: 4.1, image: "/images/c2.png", category: "Clothing" },
        { id: 15, name: "Sandals", price: 40, rating: 4.0, image: "/images/s1.png", category: "Footwear" },
        { id: 16, name: "Camera", price: 500, rating: 4.7, image: "/images/p1.png", category: "Electronics" },
        { id: 17, name: "Sweater", price: 60, rating: 4.2, image: "/images/c2.png", category: "Clothing" },
        { id: 18, name: "Boots", price: 120, rating: 4.4, image: "/images/s2.png", category: "Footwear" },
        { id: 19, name: "Speaker", price: 200, rating: 4.3, image: "/images/p4.png", category: "Electronics" },
        { id: 20, name: "Shorts", price: 25, rating: 4.0, image: "/images/c2.png", category: "Clothing" },
        { id: 21, name: "Slippers", price: 20, rating: 3.9, image: "/images/s1.png", category: "Footwear" },
        { id: 22, name: "Drone", price: 800, rating: 4.8, image: "/images/p1.png", category: "Electronics" },
        { id: 23, name: "Trousers", price: 45, rating: 4.1, image: "/images/c2.png", category: "Clothing" },
        { id: 24, name: "Sneakers", price: 85, rating: 4.5, image: "/images/s3.png", category: "Footwear" },
        { id: 25, name: "Smart TV", price: 700, rating: 4.6, image: "/images/p4.png", category: "Electronics" },
        { id: 26, name: "Blazer", price: 120, rating: 4.3, image: "/images/c2.png", category: "Clothing" },
        { id: 27, name: "Loafers", price: 60, rating: 4.2, image: "/images/s1.png", category: "Footwear" },
        { id: 28, name: "Gaming Console", price: 400, rating: 4.7, image: "/images/p1.png", category: "Electronics" },
        { id: 29, name: "Tank Top", price: 15, rating: 3.8, image: "/images/c2.png", category: "Clothing" },
        { id: 30, name: "Hiking Boots", price: 130, rating: 4.5, image: "/images/s2.png", category: "Footwear" }
    ]));
}

if (!localStorage.getItem('orders')) {
    localStorage.setItem('orders', JSON.stringify([
        { date: "2023-10-01", status: "Processing", total: 1020, address: "123 Main St" },
    ]));
}

const AdminDashboard = () => {
    return (
        <Router>
            <div className="dashboard-container d-flex">
                <div className="sidebar">
                    <h3 className="mb-4">Admin Dashboard</h3>
                    <Link to="/manage-products" className="btn btn-primary w-100 mb-2">Manage Products</Link>
                    <Link to="/manage-orders" className="btn btn-primary w-100">Manage Orders</Link>
                </div>
                <div className="content">
                    <Routes>
                        <Route path="/manage-products" element={<ManageProducts />} />
                        <Route path="/manage-orders" element={<ManageOrders />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
};

export default AdminDashboard;