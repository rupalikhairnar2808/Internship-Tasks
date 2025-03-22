const db = require("../db");

exports.getProducts = (req, res) => {
    db.query("SELECT * FROM products", (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
};

exports.addProduct = (req, res) => {
    const { name, description, price, category, stock } = req.body;
    db.query("INSERT INTO products (name, description, price, category, stock) VALUES (?, ?, ?, ?, ?)", 
    [name, description, price, category, stock], 
    (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: "Product added successfully!" });
    });
};

exports.updateProduct = (req, res) => {
    const { name, description, price, category, stock } = req.body;
    const { id } = req.params;
    db.query("UPDATE products SET name=?, description=?, price=?, category=?, stock=? WHERE id=?", 
    [name, description, price, category, stock, id], 
    (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: "Product updated successfully!" });
    });
};

exports.deleteProduct = (req, res) => {
    const { id } = req.params;
    db.query("DELETE FROM products WHERE id=?", [id], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: "Product deleted successfully!" });
    });
};