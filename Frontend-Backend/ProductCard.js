import React from 'react';

const ProductCard = ({ product, onDelete, onEdit }) => {
    return (
        <div className="product-card">
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p><strong>Price:</strong> ₹{product.price}</p>
            <p><strong>Category:</strong> {product.category}</p>
            <p><strong>Stock:</strong> {product.stock}</p>
            <div className="product-card-buttons">
                <button className="edit-btn" onClick={() => onEdit(product)}>Edit</button>
                <button className="delete-btn" onClick={() => onDelete(product.id)}>Delete</button>
            </div>
        </div>
    );
};

export default ProductCard;