const Product = require('../models/product.model');

exports.getAllProducts = (req, res) => {
    Product.getAll((err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
};

exports.getProductById = (req, res) => {
    const {id} = req.params;
    Product.getById(id, (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        if (results.length === 0) return res.status(404).json({ message: 'Product tidak ditemukan' });
        res.json(results[0]);
    });
};

exports.createProduct = (req, res) => {
    const data = req.body;
    Product.create(data, (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).json({ id: result.insertId, ...data });
    });
};

exports.updateProduct = (req, res) => {
    const {id} = req.params;
    const data = req.body;
    Product.update(id, data, (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        if (result.affectedRows === 0) return res.status(404).json({ message: 'Product tidak ditemukan' });
        res.json({ message: 'Product berhasil diupdate' });
    });
};

exports.deleteProduct = (req, res) => {
    const {id} = req.params;
    Product.delete(id, (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        if (result.affectedRows === 0) return res.status(404).json({ message: 'Product tidak ditemukan' });
        res.json({ message: 'Product berhasil dihapus' });
    });
};