const {Router} = require('express');
const { ProductAdd, ProductGet, ProductUpdate, ProductDelete } = require('../controllers/product.controllers');

const ProductRouter = Router()

ProductRouter.post('/create',ProductAdd)
ProductRouter.get('/show',ProductGet)

ProductRouter.patch('/update/:id',ProductUpdate)
ProductRouter.delete('/delete/:id',ProductDelete)
module.exports = ProductRouter