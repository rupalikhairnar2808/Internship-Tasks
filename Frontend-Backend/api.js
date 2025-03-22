import axios from 'axios';

const API_URL = 'http://localhost:5012/products'; // Change if your backend runs on a different port

// Fetch products
export const fetchProducts = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

// Add product
export const addProduct = async (product) => {
    const response = await axios.post(API_URL, product);
    return response.data;
};

// Update product
export const updateProduct = async (id, product) => {
    try {
        const response = await axios.put(`${API_URL}/${id}`, product);
        return response.data;
    } catch (error) {
        console.error('Update Product Error:', error.response?.data || error.message);
        throw error;
    }
};

// Delete product
export const deleteProduct = async (id) => {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
};