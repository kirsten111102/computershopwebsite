const express = require('express');
const router = express.Router();
const {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
    renderProductsPage,
} = require('../controllers/ProductController');

router.get('/', renderProductsPage);
router.get('/api', getAllProducts);
router.post('/api', createProduct);
router.get('/api/:id', getProductById);
router.put('/api/:id', updateProduct);
router.delete('/api/:id', deleteProduct);

module.exports = router;